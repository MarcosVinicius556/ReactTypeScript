import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
 } from './actionsTypes';

 import { AuthAction, AuthState } from './types';

 const initialState: AuthState = {
    pending: false,
    token: '',
    error: null
 }

 const reducers = (state = initialState, action: AuthAction) => {
    switch(action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                pending: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                pending: false,
                token: action.payload.token
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                pending: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                pending: false,
                token: action.payload.token
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload.error
            }
        default:
            return{
                ...state,
            }
    }
 }

 export default reducers;