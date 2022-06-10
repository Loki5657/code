import React from 'react'
import { Navigate } from 'react-router-dom';

function Login() {

const submit=()=>{
    const isToken=  localStorage.setItem("token", 123);
console.log(isToken)
// window.location.href='/dashboard'
}

  return (
    <div>
      {/* login_page */}
      <input type='text' placeholder='email' />
      <button type='submit' onClick={submit}>Submit</button>
    </div>
  )
}

export default Login;
