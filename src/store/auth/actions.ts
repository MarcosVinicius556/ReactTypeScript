import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_FAILURE,
    SIGNUP_SUCCESS
} from './actionsTypes';

import {
    LoginPayload,
    SignUpPayload,
    LoginRequest,
    LoginSuccess,
    LoginSuccessPayload,
    LoginFailure,
    LoginFailurePayload,
    SignUpRequest,
    SignUpSuccess,
    SignupSuccessPayload,
    SignUpFailure,
    SignupFailurePayload
} from './types';

//Login
export const loginRequest = (payload: LoginPayload): LoginRequest => ({
    type: LOGIN_REQUEST,
    payload
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
    type: LOGIN_SUCCESS,
    payload
});

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
    type: LOGIN_FAILURE,
    payload
});

//Signup
export const signupRequest = (payload: SignUpPayload): SignUpRequest => ({
    type: SIGNUP_REQUEST,
    payload
});

export const signupSuccess = (payload: SignupSuccessPayload): SignUpSuccess => ({
    type: SIGNUP_SUCCESS,
    payload
});

export const signupFailure = (payload: SignupFailurePayload): SignUpFailure => ({
    type: SIGNUP_FAILURE,
    payload
});