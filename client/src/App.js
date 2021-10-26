import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import LandingPage from './components/LandingPage';
import { ProtectedRoute } from './ProtectedRoute';

function App() {
  const[isAutheticated, setisAutheticated] = useState(localStorage.getItem('token') !== null);
  console.log(localStorage.getItem('token'))
  console.log(isAutheticated)


  return (<Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <ProtectedRoute path="/home" component={LandingPage} />
          </Switch>
    </div>
    </Router>
  );
}

export default App;