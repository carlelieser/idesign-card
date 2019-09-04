import {Component} from 'react'
import ReactDOM from 'react-dom';

import Input from './components/input'

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            inputs: [{
                title: "Full Name",
                placeholder: "John Appleseed"
            }, {
                title: "Email",
                type: "email",
                placeholder: "johnappleseed@email.com"
            }, {
                title: "Phone",
                type: "tel",
                placeholder: "(305)-665-9110"
            }, {
                title: "Address",
                type: "address",
                placeholder: "250 NE 17th Terrace, Miami FL, 33132"
            }, {
                title: "Referral",
                placeholder: "Google"
            }, {
                title: "Reason for call/walk-in",
                placeholder: "Client would like to install shades.",
                textarea: true
            }]
        }
    }
    render(){
        let contactData = this.state.inputs.map((item, i) => {
            return (<Input key={i} {...item}/>);
        });
        return (
            <div className="app-container">
                <div className="drag"></div>
                <div className="title">iDesign Card</div>
                <div className="form">
                    {
                        contactData
                    }
                </div>
                <div className="button-container">
                    <div className="send"></div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))