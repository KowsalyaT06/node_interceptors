import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import axios from "axios";
  import React, {  useEffect, useState } from "react";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import auth from "../services/auth";
  
  const Home = () => {
    const [state, setState] = useState([]);
    
    let statees = state.data?.user
    console.log('state',statees)
  
  
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_SERVER_URL}/pages`,{headers:auth()})
    .then((response)=>{
      console.log('res',response.data)
        setState(response.data)
    })
    .catch((err)=>{
      console.log("Error", err);
    })
  },[])
  return (
      <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>TITLE</TableCell>
                <TableCell>DESCRIPTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
  
              {statees?.map((item,index) => {
                console.log('item',item)
                return( 
                  <>
                  <TableRow key={index}>
                   <TableCell> {item.id} </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  </TableRow>
               </>
                )
               
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  };
  
  export default Home;
  
  
  
  