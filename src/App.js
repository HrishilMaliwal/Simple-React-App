import "./App.css";
import "./Helloworld";
import Helloworld from "./Helloworld";
import UserRegistration from "./UserRegistration";
import UserInput from "./UserInput";
import Image from "./Image";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, {useState} from 'react'
import ProtectedRoute from './ProtectedRoute'
import xccl from "./Xccl";

function App() {
  
  const [auth, setAuth] = useState(false)
  
  const ToggleAuth = () => {
    setAuth(true)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Helloworld authfunc={ToggleAuth}/>} />
        <ProtectedRoute auth={auth}>
          <Route exact path="/userregistration" component={UserRegistration}/>  
          <Route exact path="/userinput" component={UserInput} />
          <Route exact path="/image" component={Image} />
          <Route exact path="/excel" component={xccl} />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
