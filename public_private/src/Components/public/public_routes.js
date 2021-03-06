import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PublicRoute(props) {
    const hasToken = localStorage.getItem("token");
    let location = useLocation();
  
    if (hasToken) {
      return <Navigate to="/dashboard"  replace />;
    }
  
    return props.children;
}

export default PublicRoute;