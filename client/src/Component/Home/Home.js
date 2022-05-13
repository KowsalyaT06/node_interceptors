import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import auth from "../services/auth";
import InputUnstyled from "@mui/base/InputUnstyled";
import "./Home.css";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";


<ButtonUnstyled>Button</ButtonUnstyled>;

const Home = () => {
  const [state, setState] = useState([]);

  let statees = state.data?.user;
  console.log("state", statees);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/pages`, { headers: auth() })
      .then((response) => {
        console.log("res", response.data);
        setState(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="common">
        <InputUnstyled
          style={{
            border: "1px solid black",
            padding: "20px",
            marginRight: "70%",
            marginTop: "20px",
            marginLeft:'20px'
          }}
          type="file"
        />
</div>
        <button className="btn"> UPLOAD
        </button>
      

      <TableContainer>
        <Table>
          <TableHead>
        
             <TableRow>
               <TableCell  style={{fontWeight:'bold',fontSize:'20px'}}>ID</TableCell>
               <TableCell style={{fontWeight:'bold',fontSize:'20px'}}>NAME</TableCell>
              <TableCell style={{fontWeight:'bold',fontSize:'20px'}}>TITLE</TableCell>
              <TableCell style={{fontWeight:'bold',fontSize:'20px'}}>DESCRIPTION</TableCell>
              
             </TableRow>
           
          </TableHead>
          <TableBody>
            {statees?.map((item) => {
              console.log("item", item);
              return (
                <>
                  <TableRow>
                    <TableCell> {item.id} </TableCell>
                    <TableCell>{item.names}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
