import { AUTHENTICATION_ACTION } from '../actions/types'
export default function(currentState = {logged: false}, action) {
  switch (action.type) {
    case AUTHENTICATION_ACTION:
      return action.payload
  }
  return currentState
}
