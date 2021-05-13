import logo from "./logo.svg";
import "./App.css";
import "./Helloworld";
import Helloworld from "./Helloworld";
import UserRegistration from "./UserRegistration";
import UserInput from "./UserInput";
import Image from "./Image";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Helloworld} />
        <ProtectedRoute>
          <Route exact path="/userregistration" component={UserRegistration}/>  
        </ProtectedRoute>
        {/* <ProtectedRoute exact path="/userinput" component={UserInput} />
        <ProtectedRoute exact path="/image" component={Image} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
