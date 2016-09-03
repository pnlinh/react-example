import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentWillMount(){
        console.log(this.props);
        if (!this.props.authenticated.logged){
          this.context.router.push('/');
        }
    }
    componentWillUpdate(nextProps){
      if (!nextProps.authenticated.logged){
        this.context.router.push('/');
      }
    }
    render (){
      return <ComposedComponent {... this.props} />
    }
  }

  function mapStateToProps(state){
    return {
      authenticated: state.authenticated
    }
  }
  return connect(mapStateToProps)(Authentication);
}
