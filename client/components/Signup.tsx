import React from 'react';

interface Props {
  signupUser: (un: string, pw: string) => void;
}

const SignupBox: React.FC<IProps> = props => (
  <div className="loginContainer">
    <input type="text" placeholder="username..." id="signupBoxUserName" className="loginBox" />
    <input type="password" placeholder="password..." id="signupBoxPassword" className="loginBox" />
    <button
      type="submit"
      onClick={() => {
        const userNameText = document.getElementById(
          'signupBoxUserName'
        ) as HTMLInputElement;
        const passwordText = document.getElementById(
          'signupBoxPassword'
        ) as HTMLInputElement;
        props.signupUser(userNameText.value, passwordText.value);
      }}
    className="loginButton">
      Signup
    </button>
  </div>
);

export default SignupBox;
