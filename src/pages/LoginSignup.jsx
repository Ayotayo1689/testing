import React, { useState } from "react";
import "./login.css";
import { Button, TextField } from "@mui/material";

const LoginSignup = () => {
  const [openSignUp, setOpenSignUp] = useState(true);

  const changeState = () => {
    setOpenSignUp(!openSignUp);
  };

  return (
    <div className="LoginSignup">
      <div className="left"></div>
      <div className="right">
        {openSignUp && (
          <div className="box">
            <h1 className="heading">Welcome Back </h1>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <button className="loginBtn">Login</button>
            <small>
              Don't have an account?{" "}
              <span className="link" onClick={changeState}>
                Register
              </span>
            </small>
          </div>
        )}

        {!openSignUp && (
          <div className="box">
            <h1 className="heading">Welcome to anything</h1>
            <TextField
              id="outlined-basic"
              label="Full name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
            />
            <button className="loginBtn">Submit</button>
            <small>
              Already have an account?{" "}
              <span className="link" onClick={changeState}>
                Login
              </span>
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
