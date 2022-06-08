import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';



const Googlelogin=()=>{
const responseGoogle = (response) => {
  console.log(response);
}

return(
  <GoogleLogin
    clientId="770316289409-s438ogv59cmlbdspbfccbe4itg9f4oic.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  );

}
export default Googlelogin;