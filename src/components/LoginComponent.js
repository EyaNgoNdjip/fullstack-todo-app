import React, { useState } from "react";

const LoginComponent = () => {
  const [username, setUsername] = useState("Eya");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    event.preventDefault();
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  const handleClick = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <div className="login">
      <div className="success-msg">Authenticated Successfully</div>
      <div className="error-msg">
        Authenticated Failed, please check your credential
      </div>
      <div className="login-form">
        <div className="username-block">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="password-block">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>{handleClick}</div>
        <button className="login-btn" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
