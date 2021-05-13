import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({Component}) => {
  return (
      <>
        {true ? 
           <Component/> : <Redirect to='/'/>
        }
    </>
  )
};
export default ProtectedRoute
