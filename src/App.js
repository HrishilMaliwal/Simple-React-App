import logo from './logo.svg';
import './App.css';
import './Helloworld' 
import Helloworld from './Helloworld';
import UserRegistration from './UserRegistration'
import UserInput from './UserInput'
import Image from './Image'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >       
    <Switch>       
      <Route exact path="/" component={Helloworld}/>
      <Route exact path="/userregistration" component={UserRegistration}/>
      <Route exact path="/userinput" component={UserInput}/>
      <Route exact path="/image" component={Image}/>
    </Switch>  
    </BrowserRouter >
  );
}

export default App;
