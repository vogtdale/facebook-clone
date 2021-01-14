import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

const Login = () => {
  const signin = () => {};

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
          alt="facebook logo"
        />
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" alt="fcebook text logo" />
      </div>
      <Button type="submit" onClick={signin}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
