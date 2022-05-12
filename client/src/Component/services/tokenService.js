const setToken = (data) =>{
    localStorage.setItem('accessToken',JSON.stringify(data))
}

const setRefreshToken = (data) =>{
    localStorage.setItem('RefreshToken',JSON.stringify(data))
}

const getToken = () =>{
    return JSON.parse(localStorage.getItem('accessToken'))
}

const getRefreshToken = () =>{
    return JSON.parse(localStorage.getItem('RefreshToken'))
}

const UpdateToken=(token)=>{
    let user = JSON.parse(localStorage.getItem("accessToken"));
    console.log("older access token",user)
    user=token
    console.log("user new access token",user)
    localStorage.setItem("accessToken", JSON.stringify(user));
  }

const TokenService = {
    setToken,
    setRefreshToken,
    getToken,
    getRefreshToken,
    UpdateToken
}

export default TokenService