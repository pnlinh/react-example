import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createLogger from 'redux-logger';

import App from './components/app';
import Resource from './components/resources';
import RequireAuth from './components/require_auth'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(createLogger())(createStore);
const store = createStoreWithMiddleware(reducers)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="resource" component={RequireAuth(Resource)}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
