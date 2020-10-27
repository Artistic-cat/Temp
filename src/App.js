import React from 'react';
import Login from './Views/Login/Login';
import Home from "./Views/Home/Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
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
