import React from 'react';

interface Props {
  loginUser: (un: string, pw: string) => void;
}

const LoginBox: React.FC<IProps> = (props) => {
  return (
    <div className="loginContainer">
      <input type="text" placeholder="username..." id="loginBoxUserName" className="loginBox" />
      <input type="password" placeholder="password..." id="loginBoxPassword" className="loginBox" />
      <button onClick={(e:any) => {
        let userNameText = document.getElementById('loginBoxUserName') as HTMLInputElement;
        let passwordText = document.getElementById('loginBoxPassword') as HTMLInputElement;
        props.loginUser(
          userNameText.value,
          passwordText.value
        )
    }} className="loginButton">Login</button>
    </div>
  )
}

export default LoginBox;
