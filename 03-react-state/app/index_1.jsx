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
            inputClass: this.getInputClass(ev.target.value)
        });
    },
    getInputClass: function(email){
        if (email.length == 0)
            return 'form-group';
        if (/\S+@\S+\.\S+/.test(email)){
            return 'form-group has-success';
        }
        return 'form-group has-error';
    },
    render: function(){
        return (
            <div>
                <h2> Home Page </h2>
                <div className="col-md-3">
                    <div className={this.state.inputClass}>
                        <label className="control-label" for="inputError1">Enter your email: </label>
                        <input className="form-control" value={this.state.email} onChange={this.onEmailChange}/>
                    </div>
                </div>
            </div>
        )
    }
});
ReactDOM.render(<Home />, document.getElementById('app'));