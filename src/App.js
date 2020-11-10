import React from 'react';
import Login from './Views/Login/Login';
import Home from "./Views/Home/Home"
import Setup from "./Views/Setup/Setup";
import About from "./Views/About/About";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
          <Route path = "/About">
             <About/>
          </Route>
          <Route path="/Setup">   
              <Setup/>
          </Route>
            <Route path="/home">
              <Home/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
      
  );
}

export default App;
