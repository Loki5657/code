import React from 'react'
import { Navigate } from 'react-router-dom';

const Public_router = () => {

    const isToken=  localStorage.getItem("token");
    console.log(isToken)


  if(!isToken){
   <Navigate to='/login' replace   />
}
}

export default Public_router;