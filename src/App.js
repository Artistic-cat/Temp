import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import About from "./Views/About/About";
import Setup from "./Views/Setup/Setup";
import Reset from "./Views/Login/Reset";
import Login from './Views/Login/Login';
import Home from "./Views/Home/Home"
import CascadingDropdown from "./Components/CascadingDropdown/CascadingDropdown";
import FileUpload from "./Views/FileUpload/FileUpload";
import FileMapper from "./Views/FileUpload/FileMapper";
import Status from "./Views/APITags/Status";
import Define from "./Views/APITags/Define";

/**
 * Author Sristi, Vidhi, Rifas
 *
 * Add your routes here
 * To use the global backend url
 *      "global.config.backend_ip"
 *
 * Use react buttons
 *      <button className="btn"></button> to render the common button
 */
function App() {
    // Globally used variables
    global.config = {
        backend_ip: "http://13.229.56.134:1337",
    }

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/apidefine">
                        <Define/>
                    </Route>
                    <Route path="/apitag">
                        <Status/>
                    </Route>
                    <Route path="/mapfile">
                        <FileMapper/>
                    </Route>
                    <Route path="/dropdown">
                        <CascadingDropdown/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/setup">
                        <Setup/>
                    </Route>

                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/reset">
                        <Reset/>
                    </Route>
                    <Route path="/files"> {/* Move this inside some other page */}
                        <FileUpload/>
                    </Route>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
