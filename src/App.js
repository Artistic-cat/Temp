import React from 'react';
import Login from './Views/Login/Login';
import Reset from './Views/Login/Reset';
import About from './Views/About/About';
import Home from "./Views/Home/Home"
import Setup from "./Views/Setup/Setup";
import FileUpload from "./Views/FileUpload/FileUpload"

import CascadingDropdown from "./Components/CascadingDropdown/CascadingDropdown";
import Looks from './Components/Testing/Looks'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from './Components/Testing/NavDropdown';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/testing"><Looks /></Route>
          
          <Route path="/dropdown">
            <CascadingDropdown />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/setup">
            <Setup />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/files"> {/* Move this inside some other page */}
            <FileUpload/>
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
