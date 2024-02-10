import React, { useState } from "react";
interface LoginFormProps {
  onSubmit: (LoginRequest: LoginRequest) => void;
  mode: "login" | "register";
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    username: "",
    password: "",
  });

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    props.onSubmit(loginRequest);
  };

  return (
    <div>
      <h2>{props.mode === "login" ? "Login Page" : "Register Page"}</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={loginRequest.username}
            onChange={(e) =>
              setLoginRequest({ ...loginRequest, username: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={loginRequest.password}
            onChange={(e) =>
              setLoginRequest({ ...loginRequest, password: e.target.value })
            }
          />
        </div>
        <button type="submit">
          {props.mode === "login" ? "Log In" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
