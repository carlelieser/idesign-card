import {Component} from 'react'
import ReactDOM from 'react-dom';

import ScrollSink from './components/scroll-sink'
import Input from './components/input';
import Fade from 'react-reveal/Fade';
import {Motion, spring} from 'react-motion';
import getHTMLTemplate from './get-template';

class App extends Component {
    constructor(props) {
        super(props);

        this.appRef = React.createRef();
        this.copyTimeout = false;

        this.state = {
            scrollTop: 0,
            showApp: false,
            showCopied: false,
            inputs: [
                {
                    title: "Full name",
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
                }
            ]
        }
    }

    setScroll = (scrollTop) => {
        this.setState({scrollTop});
    }

    changeScrollTop = (scrollTop) => {
        if (this.appRef.current) {
            this.appRef.current.scrollTop = scrollTop;
        }
    }

    setInput = (title, input) => {
        let clone = this
            .state
            .inputs
            .slice(0);
        let found = clone.find((item) => {
            return item.title == title;
        });

        found.text = input;
        this.setState({inputs: clone});
    }

    renderScrollSink = (currentStyles) => {
        return (<ScrollSink
            changeScrollTop={this.changeScrollTop}
            scrollTop={currentStyles.scrollTop}/>)
    }

    getInputText = (title, text) => {
        if (text) {
            return text;
        } else {
            return `${title} not provided.`
        }
    }

    sendEmail = () => {
        const {clipboard, shell} = require('electron');

        let input = this.state.inputs;
        let data = {
            name: this.getInputText(input[0].title, input[0].text),
            email: this.getInputText(input[1].title, input[1].text),
            phone: this.getInputText(input[2].title, input[2].text),
            address: this.getInputText(input[3].title, input[3].text),
            referral: this.getInputText(input[4].title, input[4].text),
            desc: this.getInputText(input[5].title, input[5].text)
        }

        let template = getHTMLTemplate(data);

        clipboard.writeHTML(template);
        shell.openExternal(`mailto:max@idesignmiami.com,christy@idesignmiami.com?subject=CALL - IN (${data.name.toUpperCase()})`);

        this.setState({
            showCopied: true
        }, () => {
            clearTimeout(this.copyTimeout);
            this.copyTimeout = setTimeout(() => {
                this.setState({showCopied: false});
            }, 2000);
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.scrollTop === this.state.scrollTop && nextState.inputs === this.state.inputs && nextState.showCopied === this.state.showCopied && nextState.showApp === this.state.showApp) {
            return false;
        } else {
            return true;
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({showApp: true});
        }, 1000);
    }

    render() {
        let contactData = this
            .state
            .inputs
            .map((item, i) => {
                return (<Input
                    key={i}
                    setInput={this.setInput}
                    setScroll={this.setScroll}
                    showCopied={this.state.showCopied}
                    {...item}/>);
            });

        return (
            <div className="app-container" ref={this.appRef}>
                <Fade when={this.state.showCopied} distance="10%" duration={400} left>
                    <div className="snack-bar">Copied!</div>
                </Fade>
                <Fade when={this.state.showApp} distance="10%" bottom>
                    <div className="logo"></div>
                    <div className="form">{contactData}</div>
                    <div className="footer">Made with ❤️ by Carlos Santos.</div>
                    <div className="button-container">
                        <div className="send" onClick={this.sendEmail}></div>
                        <div className="bg"></div>
                    </div>
                    <Motion
                        style={{
                        scrollTop: spring(this.state.scrollTop)
                    }}
                        onRest={this.setSynthetic}>
                        {this.renderScrollSink}
                    </Motion>
                </Fade>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'))