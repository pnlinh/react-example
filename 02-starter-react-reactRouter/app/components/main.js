var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var Main = React.createClass({
    render: function(){
        return (
            <div>
                <ul>
                    <li><Link to="content">Content</Link></li>
                    <li><Link to="">Home</Link></li>
                </ul>
                <h1> Main layout </h1>
                {this.props.children}
            </div>
        )
    }
});
module.exports = Main;
