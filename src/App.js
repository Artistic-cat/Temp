import React from 'react';
import Login from './Views/Login/Login';
import Reset from './Views/Login/Reset';
import About from './Views/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from "./Views/Home/Home"
import Setup from "./Views/Setup/Setup";
import CascadingDropdown from "./Components/CascadingDropdown/CascadingDropdown";
import FileUpload from "./Views/FileUpload/FileUpload";

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import FileDropBox from "./Components/FlieDropBox/FileDropBox";
import Cttabs from './Components/Test/Cttabs'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dropdown">
            <CascadingDropdown />
          </Route>
          <Route path="/testing">
            <Cttabs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Setup">
            <Setup/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <Route path="/files">
            <FileDropBox/>
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
