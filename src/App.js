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

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/dropdown">
                          <CascadingDropdown />
                        </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/About">
                        <About/>
                    </Route>
                    <Route path="/Setup">
                        <Setup/>
                    </Route>
                    <Route path="/reset">
                        <Reset/>
                    </Route>
                    <Route path="/files">
                        <FileUpload />
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
