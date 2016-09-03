import { combineReducers } from 'redux'
import authenticated from './authentication'

const rootReducer = combineReducers({
  authenticated: authenticated
});

export default rootReducer;
