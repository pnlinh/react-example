var React = require('react')
var ReactDOM = require('react-dom')
var Loading = require('./loading.jsx')

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Home page</h1>
                <Loading />
                <Loading text="Wait" speed={500} />
            </div>
        )
    }
});


ReactDOM.render(<Home />, document.getElementById('app'));