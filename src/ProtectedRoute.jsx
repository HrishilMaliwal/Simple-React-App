import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({children, auth}) => {
  return (
      <>
        {true ? 
          children : <Redirect to='/'/>
        }
    </>
  )
};
export default ProtectedRoute
