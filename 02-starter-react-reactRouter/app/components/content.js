var React = require('react')
var Content = React.createClass({
    render: function(){
        return (
            <div>
                <h2>Content Page </h2>
                {this.props.children}
            </div>
        )
    }
});
module.exports = Content