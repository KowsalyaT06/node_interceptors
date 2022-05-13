import React, { useState } from "react";
import axios from "axios";
import TokenService from "../services/tokenService";
import { TextField, Button, Link } from "@mui/material";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
let navigate = useNavigate()
  const handleSubmit =async() => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, inputData)
    .then((res) => {
      console.log("response", res);
      TokenService.setToken(res.data.accessToken)
      TokenService.setRefreshToken(res.data.refreshToken)
    })
    .catch((error)=>{
      console.log("Error",error);
    })
    navigate('/pages')
  };

  return (
    <>
      <div className="login">
        <h1>LOGIN FORM</h1>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={inputData.email}
          name="email"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={inputData.password}
          name="password"
          onChange={handleChange}
        />
        <br></br>
        <br></br>

        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{ marginRight: "20px" }}
        >
          LOGIN
        </Button>
        <Link href="/Sign">Sign up</Link>
      </div>
    </>
  );
};
export default Login;
