import React, {Component} from 'react'
import {Link} from 'react-router'
var imageStyle = {
    minHeight: '265px',
    padding: '20px'
}


class ImageUser extends Component {
    render(){
        var path = "/user/" + this.props.user.login;
        return (
            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                <Link className="thumnail" to={path} >
                    <img className="img-responsive" style={imageStyle} src={this.props.user.avatar_url} alt=""/>
                </Link>
            </div>
        )
    }
}

export default ImageUser