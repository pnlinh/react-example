import { combineReducers } from 'redux'
import authenticateReducer from './authReducers'
import { routerReducer } from 'react-router-redux'
const rootReducer = combineReducers({
  authenticated: authenticateReducer,
  routing: routerReducer
});
export default rootReducer;
