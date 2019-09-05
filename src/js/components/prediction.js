import {Component} from 'react';
import Fade from 'react-reveal/Fade';

class Prediction extends Component{
    constructor(props){
        super(props);
    }

    handleClick = () => {
        this.props.fillInput(this.props.desc);
        this.props.hidePredictions();
    }

    render(){
        return (
            <Fade distance="10%" bottom>
                <div className="prediction" onClick={this.handleClick}>
                    <div className="main-text">{this.props.mainText}</div>
                    <div className="secondary-text">{this.props.secondaryText}</div>
                </div>
            </Fade>
        )
    }
}

export default Prediction;