/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { loginRequest } from "./store/auth/actions";
import { connect } from "react-redux";
import './App.css';

const App: React.FC = (props:any) => {

  const emailRef: any = useRef();
  const passwordRef: any = useRef();

  const callback = (data: any) => {
    console.log('inside callback after login');
  }

  const login = () => {
    const data: any = {
      values:{
        email: emailRef.current.value,
        password: emailRef.current.value
      },
      callback
    }
    props.login(data);
  }

  return (
    <section className="main">
      <div className="card">
        <h1>This is a login page....</h1>
        <h6>Projeto para estudo de redux/redux-saga com typescript</h6>
        <form>
          <span>
            <label>E-mail</label>
            <input type="text" ref={emailRef}/>
          </span>
          <span>
            <label>Password</label>
            <input type="text" ref={passwordRef}/>
          </span>
        </form>
        <span>
          <button onClick={() => {
            login();
          }}>
            Login
          </button>
        </span>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  login: (parans: any) => dispatch(loginRequest(parans))
});

export default connect (null, mapDispatchToProps)(App);
