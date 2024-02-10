import React, { useState } from "react";
import LoginForm from "../components/forms/loginForm";

const RegisterPage: React.FC = () => {
  const handleLogin = (loginRequest: LoginRequest) => {
    // Here you would add your logic to authenticate the user
    console.log(
      "Registering new user with",
      loginRequest.username,
      loginRequest.password
    );
  };

  return <LoginForm onSubmit={handleLogin} mode="register"></LoginForm>;
};

export default RegisterPage;
