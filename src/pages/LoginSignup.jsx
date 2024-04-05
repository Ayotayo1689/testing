import React, { useState } from "react";
import "./login.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [openSignUp, setOpenSignUp] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const url = "https://code-ville.vercel.app/users";

  const handleRegister = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNumber,
      password: password,
      department: department,
    };

    try {
      const response = await axios.post(url, data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const changeState = () => {
    setOpenSignUp(!openSignUp);
  };
  const handleSubmit = async () => {
    const loginUrl = "https://code-ville.vercel.app/login";

    const data = {
      email: username,
      password: password,
    };
    try {
      const response = await axios.post(loginUrl, data);
      console.log(response.data.data);
localStorage.setItem("user", response.data.data.id)
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="LoginSignup">
      <div className="left"></div>
      <div className="right">
        {openSignUp && (
          <div className="box">
            <h1 className="heading">Welcome Back </h1>
            <TextField
              value={username}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              value={password}
              id="outlined-basic"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            <button onClick={() => handleSubmit()} className="loginBtn">
              Login
            </button>
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
            <div>
              <TextField
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="First Name"
              />{" "}
              <br />
              <TextField
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />{" "}
              <br />
              <TextField
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />{" "}
              <br />
              <TextField
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone No"
              />{" "}
              <br />
              <TextField
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Dept"
              />{" "}
              <br />
              <TextField
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />{" "}
              <br />
              <button className="loginBtn" onClick={() => handleRegister()}>
                Register
              </button>
            </div>
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
