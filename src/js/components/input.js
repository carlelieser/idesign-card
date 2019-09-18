import {Component} from 'react';

import Prediction from './prediction'
import InputMask from 'react-input-mask';
import request from 'request';

class Input extends Component {
    constructor(props) {
        super(props);

        this.autoCompleteTimer = false;
        this
            .handleChange
            .bind(this);
        this
            .handleFocus
            .bind(this);

        this.state = {
            key: 'AIzaSyDlfWgldaDmQ918RrxXYOp0btvfyZeJ4QM',
            showPredictions: false,
            predictions: [],
            value: ''
        }
    }

    handleFocus = (e) => {
        let scrollTop = e.target.offsetTop - 150;
        this
            .props
            .setScroll(scrollTop);
    }

    fillInput = (desc) => {
        this
            .props
            .setInput(this.props.title, desc);
        this.setState({value: desc});
    }

    hidePredictions = () => {
        this.setState({showPredictions: false});
    }

    getAutoCompleteData = (query) => {
        let sanitizedQuery = typeof query === 'string'
            ? encodeURI(query)
            : false;
        let url = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${this.state.key}&input=${sanitizedQuery}`

        return new Promise((resolve, reject) => {
            if (sanitizedQuery) {
                request(url, (err, response, body) => {
                    if (err) {
                        reject('Error: getting address predictions failed.');
                    } else {
                        let predictions = JSON.parse(body);
                        resolve(predictions.predictions);
                    }
                });
            } else {
                reject('Error: not a valid query');
            }
        });
    }

    handleClose = () => {
        this.setState({showPredictions: false});
    }

    handleChange = (e) => {
        let value = e.target.value;
        this
            .props
            .setInput(this.props.title, value);
        this.setState({value});
        if (this.props.type === "address") {
            clearTimeout(this.autoCompleteTimer);
            this.autoCompleteTimer = setTimeout(() => {
                this
                    .getAutoCompleteData(value)
                    .then((results) => {
                        if (results.length) {
                            this.setState({predictions: results, showPredictions: true});
                        } else {
                            this.setState({showPredictions: false});
                        }
                    })
                    .catch(err => {
                        this.setState({showPredictions: false});
                    });
            }, 250);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.value === this.state.value && nextState.predictions === this.state.predictions && nextState.showPredictions === this.state.showPredictions && nextProps.showCopied === this.props.showCopied) {
            return false;
        } else {
            return true;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.showCopied !== this.props.showCopied) {
            if (this.props.showCopied) {
                this.fillInput('');
            }
        }
    }

    render() {
        let predictions = this.state.showPredictions
            ? this
                .state
                .predictions
                .map((item) => (<Prediction
                    key={item.description}
                    fillInput={this.fillInput}
                    hidePredictions={this.hidePredictions}
                    desc={item.description}
                    mainText={item.structured_formatting.main_text}
                    secondaryText={item.structured_formatting.secondary_text}/>))
            : '';

        return (
            <div className="data-container">
                <label>{this.props.title}</label>
                {this.props.textarea
                    ? <textarea
                            placeholder={this.props.placeholder}
                            onChange={this.handleChange}
                            value={this.state.value}></textarea>
                    : this.props.type === 'tel'
                        ? <InputMask
                                mask="(999)-999-9999"
                                maskChar={null}
                                placeholder={this.props.placeholder}
                                onFocus={this.handleFocus}
                                onChange={this.handleChange}
                                value={this.state.value}/>
                        : <input
                            type={this.props.type
                            ? this.props.type
                            : 'text'}
                            placeholder={this.props.placeholder}
                            onClick={this.hidePredictions}
                            onFocus={this.handleFocus}
                            onChange={this.handleChange}
                            value={this.state.value}/>
}
                {this.state.showPredictions
                    ? <div className="predictions">
                            <span className="close-predictions" onClick={this.handleClose}></span>
                            {predictions}
                        </div>
                    : ''
}
            </div>
        )
    }
}

export default Input;