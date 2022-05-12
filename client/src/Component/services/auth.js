import TokenService from "./tokenService";
const auth = () =>{
    const Head = TokenService.getToken()
    if(Head){
        return { 'x-access-token': Head};
    }
    else{
        return{}
    }
}
export default auth