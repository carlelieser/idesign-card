import {Component} from 'react';

import InputMask from 'react-input-mask';
import request from 'request'

class Input extends Component{
    constructor(props){
        super(props);

        this.autoCompleteTimer = false;

        this.state = {
            key: '7rAv6CzYBRMOE4QY0ouB',
        }
    }

    getAutoCompleteData = (query) => {
        request.get()
    }

    handleChange = (e) => {
        let value = e.value;

        if(this.props.type="address"){
            clearTimeout(this.autoCompleteTimer);
            this.autoCompleteTimer = setTimeout(() => {
                this.getAutoCompletData(value).then((results) => {
                    
                });
            }, 250);
        }
    }

    render(){
        return (
            <div className="data-container">
                <label>{this.props.title}</label>
                {
                    this.props.textarea ? <textarea placeholder={this.props.placeholder} onChange={this.handleChange}></textarea>
                    : this.props.type === 'tel' ? <InputMask mask="(999)-999-9999" maskChar={null} placeholder={this.props.placeholder}/> : <input type={this.props.type ? this.props.type : 'text'} placeholder={this.props.placeholder} onChange={this.handleChange}/>
                }
            </div>
        )
    }
}

export default Input;