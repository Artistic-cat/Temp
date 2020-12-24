import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import About from "./Views/About/About";
import Setup from "./Views/Setup/Setup";
import Reset from "./Views/Login/Reset";
import Login from './Views/Login/Login';
import Home from "./Views/Home/Home"
import NewProductApi from "./Components/FormsOnSetupPage/NewProduct";
import CascadingDropdown from "./Components/CascadingDropdown/CascadingDropdown";
import FileUpload from "./Views/FileUpload/FileUpload";
import FileMapper from "./Views/FileUpload/FileMapper";
import AutomaticMapping from "./Views/StatusOfMasterSetup/GiiXMapping/AutomaticMapping";
import PreviewMappedEntries from "./Views/StatusOfMasterSetup/GiiXMapping/PreviewMappedEntries";
import Status from "./Views/APITags/Status";
import Define from "./Views/APITags/Define"
import InsurerDefinition from './Views/StatusOfMasterSetup/InsurerDefinition/InsurerDefinition';
import GiiXMapping from './Views/StatusOfMasterSetup/GiiXMapping/GiiXMapping'
import StatusOfMasterSetup from './Views/StatusOfMasterSetup/StatusOfMasterSetup'
import InsurerAPISequence from './Views/DefineAPISequence/InsurerAPISequence'
import MappingOfInsurerAPIFiles from './Views/DefineAPISequence/MappingOfInsurerAPIFiles'
import StatusOfApiSetup from './Views/DefineAPISequence/StatusOfApiSetup'
import EntityMapping from './Views/DefineAPISequence/StatusOfApiSetup/EntityMappingOfInsurerAPIFiles'
import APIPreviewMapping from './Views/DefineAPISequence/StatusOfApiSetup/PreviewMappedEntries'
import APIAutomaticMapping from './Views/DefineAPISequence/StatusOfApiSetup/AutomaticMapping'
import Nomenclature from "./Views/Nomenclature/Nomenclature";
import MasterDependency from "./Views/MasterDependency/MasterDependency";
import Xmltags from "./Views/Xmltags/Xmltags";
import Preview from "./Views/Preview/Preview";
import AutomaticDependency from "./Views/MasterDependency/DependencyMap/AutomaticDependency";
import AdminHome from "./Views/Admin/AdminHome";




/**
 * Author Sristi, Vidhi, Rifas
 *
 * Add your routes here
 *
 * To use the global backend url
 *      "global.config.backend_ip"
 *
 * Use react buttons
 *      <button className="btn"></button>
 *      to render the common button
 * 
 * Put the navigation buttons of the pages(without sidebar) in a div or Row with className navigation-buttons
 * 
 * Code for status bar on transaction pages
 * <div className='completed-status-bar'>
      <div className='left-name'>Name of the page</div>
      <div className='status-icons'>
          <div className='status-icon-complete'></div>
          <div className='status-icon-active'>Name of the stage it's in</div>
          <div className='status-icon-incomplete'></div>
          <div className='status-icon-incomplete'></div>
          <div className='status-icon-incomplete'></div>
      </div>
  </div> 
 */

function App() {
  global.config = {
    backend_ip: "http://54.255.177.94:1337",
  }
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/admin/adminhome">
            <AdminHome/>
          </Route>
          <Route path="/masterdependency/dependencymap">
            <AutomaticDependency/>
          </Route>
          <Route path="/statusofapisetup/mapping/preview">
            <APIPreviewMapping/>
          </Route>
          <Route path="/statusofapisetup/mapping/automatic">
            <APIAutomaticMapping/>
          </Route>
          <Route path="/test">
            <NewProductApi/>
          </Route>
          <Route path="/statusofapisetup/entitymapping">
            <EntityMapping/>
          </Route>
          <Route path="/statusofapisetup">
            <StatusOfApiSetup/>
          </Route>
          <Route path="/mappingofinsurerapifiles">
            <MappingOfInsurerAPIFiles/>
          </Route>
          <Route path="/insurerapisequence">
            <InsurerAPISequence/>
          </Route>
          <Route path = "/Preview">
            <Preview/>
          </Route>
          <Route path = "/Xmltags">
            <Xmltags/>
          </Route>
          <Route path = "/MasterDependency">
            <MasterDependency/>
          </Route>
          <Route path = "/nomenclature">
            <Nomenclature/>
          </Route>
          <Route path="/apidefine">
              <Define/>
          </Route>
          <Route path="/apitag">
              <Status/>
          </Route>
          <Route path="/mapfile">
              <FileMapper/>
          </Route>
          <Route path="/status/giixmapping/automaticmapping">
            <AutomaticMapping />
          </Route>
          <Route path="/status/giixmapping/preview">
            <PreviewMappedEntries />
          </Route>
          <Route path="/status/insurerdefinition">
            <InsurerDefinition/>
          </Route>
          <Route path="/status/giixmapping">
            <GiiXMapping/>
          </Route>
          <Route path="/status">
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
      </Router>
    </div>
      
      

  );
}

export default App;