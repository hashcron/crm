import React, { useState } from "react";
import LoginForm from "../components/forms/loginForm";

const LoginPage: React.FC = () => {
  const handleLogin = (loginRequest: LoginRequest) => {
    // Here you would add your logic to authenticate the user
    console.log(
      "Logging in with",
      loginRequest.username,
      loginRequest.password
    );
  };

  return <LoginForm onSubmit={handleLogin} mode="login"></LoginForm>;
};

export default LoginPage;
