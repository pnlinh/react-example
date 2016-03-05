var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var history = ReactRouter.browserHistory;

var Main = require('../components/main');
var Home = require('../components/home');
var Content = require('../components/content');

var routes = (
    <Router history={history}>
        <Route path="/" component={Main}>
            <Route path="content" component={Content} />
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

module.exports = routes