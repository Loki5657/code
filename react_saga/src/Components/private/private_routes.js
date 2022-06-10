import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute(props) {
    const hasToken = localStorage.getItem("token");
  
  
    if (!hasToken) {
      return <Navigate to="/login" replace />;
    }
  
    return props.children;
}

export default PrivateRoute;