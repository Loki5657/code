import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Login = () => {

  const navigate = useNavigate();

  const submit = () => {
    localStorage.setItem('token', 123)

    navigate('/dashboard')
  }

  return (
    <div>
      <button type='submit' onClick={submit}>Submit</button>
    </div>
  )
}

export default Login;

