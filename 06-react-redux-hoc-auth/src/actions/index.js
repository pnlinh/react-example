import { AUTHENTICATION_ACTION } from './types'
export function authenActionCreator(logged ){
  return {
    type: AUTHENTICATION_ACTION,
    payload: {
      logged: logged
    }
  }
}
