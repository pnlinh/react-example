import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Main from '../component/main.jsx'
import Home from '../component/home.jsx'
import Detail from '../component/detail.jsx'
var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="/user/:username" component={Detail} />
        </Route>
    </Router>
)

export default routes