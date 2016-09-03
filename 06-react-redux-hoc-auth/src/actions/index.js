import AUTHENTICATION_ACTION from './types'
export function authentication(logged ){
  return {
    action: AUTHENTICATION_ACTION,
    payload: logged
  }
}
