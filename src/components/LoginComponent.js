import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("Eya");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSucces] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleClick = () => {
    if (username === "Eya" && password === "dummy") {
      setShowSucces(true);
      setShowError(false);
      navigate("/");
    } else {
      setShowError(true);
      setShowSucces(false);
    }
  };

  return (
    <div className="login">
      {showSuccess && (
        <div className="success-msg"> Authentication successfully !</div>
      )}

      {showError && (
        <div className="error-msg">
          Authentication failed, please check your credentials !
        </div>
      )}

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
