import React from 'react'
import { Navigate } from 'react-router-dom';

const Private_router = () => {
    const isToken=  localStorage.getItem("token");
    console.log(isToken)


  if(isToken){
    window.location.href='/dashboard'
}
}

export default Private_router;