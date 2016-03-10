import React, { Component } from 'react'
import {Link} from 'react-router'
import Header from './header.jsx'
import Loading from './loading.jsx'
class Main extends Component {
    render(){
        return (
            <div>
                <Loading />
                <Header title="Real example with ReactJS" />
                {this.props.children}
            </div>
        )
    }
};


export default Main