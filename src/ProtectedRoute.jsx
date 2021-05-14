import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({children, auth}) => {
  return (
      <>
        {auth ? 
          children : <Redirect to='/'/>
        }
    </>
  )
};
export default ProtectedRoute
