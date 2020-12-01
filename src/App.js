import React from 'react';
import Login from './Views/Login/Login';
import Home from "./Views/Home/Home"
import Setup from "./Views/Setup/Setup";
import About from "./Views/About/About";
import Nomenclature from "./Views/Nomenclature/Nomenclature";
import MasterDependency from "./Views/MasterDependency/MasterDependency";
import Xmltags from "./Views/Xmltags/Xmltags";
import Preview from "./Views/Preview/Preview";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
          <Route path = "/Preview">
             <Preview/>
          </Route>
          <Route path = "/Xmltags">
             <Xmltags/>
          </Route>

          <Route path = "/MasterDependency">
             <MasterDependency/>
          </Route>

          <Route path = "/Nomenclature">
             <Nomenclature/>
          </Route>

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
