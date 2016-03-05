var React = require('react')
var ReactDOM = require('react-dom')
var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Home Page </h2>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Home