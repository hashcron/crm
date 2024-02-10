import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegistrationPage";

const App: React.FC = () => {
  return (
    <>
      <LoginPage></LoginPage>
      <hr></hr>
      <RegisterPage></RegisterPage>
    </>
  );
};

export default App;
