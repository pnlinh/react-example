var React = require('react')
var ReactDOM = require('react-dom')

var Home = React.createClass({
    getInitialState: function(){
        return {
            email: '',
            isValid: true
        }
    },
    onEmailChange: function(ev){
        ev.preventDefault();
        this.setState({
            email: ev.target.value,
            isValid: this.validateEmail(ev.target.value)
        });
    },
    validateEmail: function(email){
        if (email.length == 0)
            return true;
        return /\S+@\S+\.\S+/.test(email);
    },
    render: function(){
        var message = 'Email is not valid'
        if (this.state.isValid){
            message = 'Email is valid'
        }
        return (
            <div>
                <h2>Home Page </h2>
                <input value={this.state.email} onChange={this.onEmailChange}/>
                <p>{ message }</p>
            </div>
        )
    }
});
ReactDOM.render(<Home />, document.getElementById('app'));