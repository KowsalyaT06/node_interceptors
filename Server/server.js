const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
const port = 3017;
const { datas,pages } = require("./datas");

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const auth = (req, res, next) => {
  console.log("request auth",req)
  const { TokenExpiredError } = jwt;
  const catchError = (err, res) => {
    console.log("errr",err)
    if (err instanceof TokenExpiredError) {
      return res
        .status(401)
        .send({ message: "Access Token was expired!" });
    }
    return res.sendStatus(401).send({ message: "Unauthorized!" });
  };
  
  const token = req.headers["x-access-token"];
  console.log("tokens", token);
  if (!token) {
    res.status(400).json({
      errors: [{ msg: "No Token Found" }],
    });
  }
  jwt.verify(token, "mysecretkey", (err, decoded) => {
    if (err) {
      console.log("new sign",err)
      return catchError(err, res);
    }
    next();
  });
};


app.get("/pages",auth,(req, res) => {
  res.status(200).json({
    status:"Success",
    data:{
      user:pages
    }
  });
});

//Signup
app.get("/posts", (req, res) => {
  res.send("welcome");
});

app.post("/sign", (req, res) => {
  console.log("req", req);
  const { password, email, username } = req.body;
  console.log("users", datas);
  let data = datas.find((show) => show.username === username);
  if (data) {
    res.status(401).json({
      status: "error",
      message: "already exist",
    });
  }
  datas.push({
    email,
    password,
    username,
  });
  //Generate token
  const accessToken = jwt.sign({ username }, "mysecretkey");
  console.log(datas);
  res.status(200).json({
    status: "Successfully registered",
    accessToken,
  });
});

//Login
app.post("/login", (req, res) => {
  console.log("req", req);
  const { password, email } = req.body;
  console.log("users", datas);
  let dataLogin = datas.find((showLogin) => showLogin.email === email);
  if (!dataLogin) {
    res.status(401).json({
      status: "error",
      message: "Invalid Email",
    });
  }

  //Generate token
  const accessToken = jwt.sign({ email }, "mysecretkey", {
    expiresIn: "1m",
  });
  const refreshToken = jwt.sign({ email }, "mysecretkey", {
    expiresIn: "1h",
  });
  console.log(datas);
  res.status(200).json({
    status: "Successfully Login",
    accessToken,
    refreshToken,
  });
});

//refresh token
app.post("/refresh", (req, res) => {
  let refreshToken = req.body["x-access-token"];
  console.log("hai new refresh",refreshToken)
  let decode = jwt.decode(refreshToken);
  let currentEmail = decode.email;
  console.log(currentEmail);
  if (currentEmail) {
    const token = jwt.sign({ currentEmail }, "mysecretkey", {
      expiresIn: "1m",
    });
    return res.status(200).json({
      status: "success",
      data: {
        token,
        refreshToken,
      },
    });
  }
});
app.listen(port, () => {
  console.log("Port");
});
