var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = React.createClass({
    render: function(){
        return (
            <div>
                Hello World! {this.props.name}
            </div>
        )
    }
});
ReactDOM.render(<HelloWorld name="Vi Nguyen" />, document.getElementById('app'));

