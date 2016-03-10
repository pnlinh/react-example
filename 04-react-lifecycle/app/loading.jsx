var React = require('react')

var Loading = React.createClass({
    propTypes : {
        text: React.PropTypes.string,
        speed: React.PropTypes.number
    },
    getDefaultProps: function() {
        return {
            text: 'Loading',
            speed: 300
        }
    },
    getInitialState: function(){
        return {
            text: this.props.text
        }
    },
    componentDidMount: function(){
        var stopper = this.props.text + '...';
        this.interval = setInterval(function(){
            if ( this.state.text == stopper ){
                this.setState({
                    text : this.props.text
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }.bind(this), this.props.speed);
    },
    componentWillUnmount: function(){
            clearInterval(this.interval);
    },
    render: function() {
        return (
            <div>
                <p> Current: {this.state.text} </p>
                <p> Speed: {this.props.speed }</p>
            </div>
        )
    }
})

module.exports = Loading;