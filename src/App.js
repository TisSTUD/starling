import './App.css';

import Appform from './form/Appform';
import test from './accueil/test';
import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Appform}/>
          <Route exact path='/home' component={test}/>
          
        </Switch>
      </Router>
     
    </div>
    
  );
}

export default App;


{/* <div className="Main">

<div className="Left_Sidebar_Area">
  <Left/>
</div>

<div className="Right_Sidebar_Area">
  <SignInOutContainer/> 
</div>
</div> */}