import React, { Component } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text
        }
    }
    componentDidMount(){
        var stopper = this.props.text + '...';
        this.interval = setInterval(() => {
            if ( this.state.text == stopper ){
                this.setState({
                    text : this.props.text
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }, this.props.speed);
    }
    componentWillUnmount() {
            clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p> {this.state.text} </p>
            </div>
        )
    }
}

Loading.defaultProps = {
    text : 'Loading',
    speed: 300
}

Loading.propTypes = {
    text : React.PropTypes.string,
    speed: React.PropTypes.number
}

export default Loading