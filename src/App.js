import React from 'react';
import Login from './Views/Login/Login';
import Reset from './Views/Login/Reset';
import About from './Views/About/About';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DependentForms from './Components/DependentForms/DependentForms';
import Home from "./Views/Home/Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import FileDropBox from "./Components/FlieDropBox/FileDropBox";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/testing">
            <DependentForms />
          </Route> */}
          <Route path="/about">
            <Header />
            <About />
            <Footer />
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
