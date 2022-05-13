import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./Sign.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Sign = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
let navigate = useNavigate()
  const handleSubmit = async () => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/sign`, input)
    .then((response) => {
      console.log("response", response);
    })
    .catch((err)=>{
      console.log("Error", err);
    })
    navigate('/login')
  };
 
  return (
    <>
      <div className="sign">
        <h1>SIGN UP FORM</h1>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          value={input.username}
          name="username"
          onChange={handleChange}
        />
        <br></br>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          value={input.email}
          name="email"
          onChange={handleChange}
        />
        <br></br>
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          value={input.password}
          name="password"
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleSubmit}>
          SIGN UP
        </Button>
      </div>
    </>
  );
};
export default Sign;
