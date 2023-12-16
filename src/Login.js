import React from "react";
import "./Login.css";

const LoginForm = () => {
  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="Password" placeholder="password" />
    </div>
  );
};

export default LoginForm;
