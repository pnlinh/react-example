import React, { Component } from 'react';
import { Link } from 'react-router'
import { authenActionCreator } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class Header extends Component {
  renderAuthButton(){
    console.log(this.props.authenticated);

    if (this.props.authenticated.logged) {
      return (
        <button onClick={ () => this.props.authenActionCreator(false)}>Sign Out</button>
      )
    }

    return (
      <button onClick={ () => this.props.authenActionCreator(true)}>Sign In</button>
    )
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/"> Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/resource"> Resource </Link>
            </li>
            <li className="nav-item">
              {this.renderAuthButton()}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect((state) => ({
  authenticated: state.authenticated
}) ,{ authenActionCreator: authenActionCreator })
(Header)


// function mapStateToProps(state){
//     return {
//       authenticated: state.authenticated
//     }
// }
//
// function mapDispathToProps(dispath){
//   return {
//     authenActionCreator: bindActionCreators(authenActionCreator, dispath)
//   }
// }
// export default connect(mapStateToProps, mapDispathToProps)(Header)
