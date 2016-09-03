import { AUTHENTICATION_ACTION } from '../actions/types'
export default function authenticationReducer(currentState = false, action) {
  switch (action.type) {
    case AUTHENTICATION_ACTION:
      return action.payload
      break;
    default:
      return currentState
  }
}
