var React = require('react')
var ReactDOM = require('react-dom')


var EmailInput = React.createClass({
    validatingEmail: function(email){
        if (email.length == 0)
            return 0
        if (/\S+@\S+\.\S+/.test(email)) {
            return 1
        }
        return -1
    },
    render: function () {
        var formGroupName = 'form-group';
        var iconSpan = '';
        switch (this.validatingEmail(this.props.email)){
            case 1:
                formGroupName = 'form-group has-success has-feedback'
                iconSpan = (<span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>)
                break;
            case -1:
                formGroupName = 'form-group has-error has-feedback'
                iconSpan = (<span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>)
                break;
            default:
                break;
        }
        return (
            <div className="col-md-3">
                <div className={formGroupName}>
                    <label className="control-label"
                           htmlFor="inputError1">Enter your email:
                    </label>
                    <input className="form-control"
                           value={this.props.email}
                           onChange={this.props.onEmailChange}/>
                    {iconSpan}
                </div>
            </div>
        )
    }
})

var Home = React.createClass({
    getInitialState: function () {
        return {
            email: ''
        }
    },
    handlerEmailChange: function (ev) {
        ev.preventDefault();
        this.setState({
            email: ev.target.value
        });
    },
    render: function () {
        return (
            <div className="col-md-12">
                <h2> Home Page </h2>
                <EmailInput email={this.state.email}
                            onEmailChange={this.handlerEmailChange} />
            </div>
        )
    }
});


ReactDOM.render(<Home />, document.getElementById('app'));