import {Component} from 'react'

class ScrollSink extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.scrollTop !== this.props.scrollTop) {
            this
                .props
                .changeScrollTop(this.props.scrollTop);
        }
    }

    render() {
        return null;
    }
}

export default ScrollSink;