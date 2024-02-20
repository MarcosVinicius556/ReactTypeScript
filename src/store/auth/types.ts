import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from './actionsTypes';

export interface IAuth {
    token: string
}

export interface AuthState {
    pending: boolean;
    token: string;
    error: string | null;
}

export interface LoginPayload {
    values: { email: string, password: string };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: any;
}

export interface LoginSuccessPayload {
    token: string
}

export interface LoginFailurePayload {
    error: string
}

export interface SignupSuccessPayload {
    token: string;
}

export interface SignupFailurePayload {
    error: string;
}

export interface LoginRequest {
    type: typeof LOGIN_REQUEST
    payload: LoginPayload
}

export type LoginSuccess = {
    type: typeof LOGIN_SUCCESS;
    payload: LoginSuccessPayload;
}

export type LoginFailure = {
    type: typeof LOGIN_FAILURE;
    payload: LoginFailurePayload;
}

export interface SignUpPayload {
    values: { email: string, password: string };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback: any
}

export interface SignUpRequest {
    type: typeof SIGNUP_REQUEST;
    payload: SignUpPayload;
}

export type SignUpSuccess = {
    type: typeof SIGNUP_SUCCESS;
    payload: SignupSuccessPayload
}

export type SignUpFailure = {
    type: typeof SIGNUP_FAILURE;
    payload: SignupFailurePayload
}

export type AuthActions =
     | LoginRequest
     | LoginSuccess
     | LoginFailure
     | SignUpRequest
     | SignUpSuccess
     | SignUpFailure;