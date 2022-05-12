import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import TokenService from './Component/services/tokenService';

axios.create({
  baseURL:`${process.env.REACT_APP_SERVER_URL}`,
  headers:{
    'Content-Type':'application/JSON'
  },
})
axios.interceptors.request.use((request,_response)=>{
  const token = TokenService.getToken();
  request.headers={"x-access-token":token,'Content-Type':'application/JSON'}
  return request
})

axios.interceptors.response.use((res)=>{
  console.log('interceptors------------response',res)
  return res
},
async (error) => {
  console.log("internerror",error)
  const originalConfig = error.config;
  if (error.response.status===401) {
    console.log("error happended after 1 minute")
    if (error.response.data.message==="Access Token was expired!"){
      try {
        console.log("okay",error.response.data.message)
        let refresh=TokenService.getRefreshToken()
         console.log("1 hour refresh",refresh)
      const res = await axios.post("http://localhost:3017/refresh", {
        "x-access-token":refresh, 
        'content-type':'application/json'
      });
      console.log('index',res)
      console.log("response===>",res.data.data.token)
      TokenService.UpdateToken(res?.data?.data?.token)
      axios.defaults.headers.common["x-access-token"] =res?.data?.data?.token;
      return axios(originalConfig);
    } 
    catch (_error) {
      return Promise.reject(_error);
    }
  }
 }
return Promise.reject(error);
}
);
    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
