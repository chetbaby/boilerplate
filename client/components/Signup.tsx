import React, { Component } from 'react';

interface IProps {
  signupUser: (un: string, pw: string) => void;
}

const SignupBox: React.FC<IProps> = props => (
  <div className="loginContainer">
    <input type="text" placeholder="username..." id="signupBoxUserName" className="loginBox" />
    <input type="password" placeholder="password..." id="signupBoxPassword" className="loginBox" />
    <button
      onClick={(e: any) => {
        const userNameText = document.getElementById(
          'signupBoxUserName'
        ) as HTMLInputElement;
        const passwordText = document.getElementById(
          'signupBoxPassword'
        ) as HTMLInputElement;
        props.signupUser(userNameText.value, passwordText.value);
      }}
    >
      Signup
    </button>
  </div>
);

export default SignupBox;
