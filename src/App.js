import React from 'react';
import Login from './Views/Login/Login';
import Reset from './Views/Login/Reset';
import About from './Views/About/About';
import Home from "./Views/Home/Home"
import Setup from "./Views/Setup/Setup";
import FileUpload from "./Views/FileUpload/FileUpload"

import CascadingDropdown from "./Components/CascadingDropdown/CascadingDropdown";


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StatusOfMasterSetup from './Views/StatusOfMasterSetup/StatusOfMasterSetup'
import GiiXMapping from './Views/StatusOfMasterSetup/GiiXMapping/GiiXMapping';
import PreviewMappedEntries from './Views/StatusOfMasterSetup/GiiXMapping/PreviewMappedEntries'
// import Form from './Components/FormsOnSetupPage/Form'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/setup/giixmapping/preview">
            <PreviewMappedEntries />
          </Route>
          <Route path="/setup/giixmapping">
            <GiiXMapping/>
          </Route>
          <Route path="/testing">
            <StatusOfMasterSetup />
          </Route>
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
