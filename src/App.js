import React from 'react';
import Login from './Views/Login/Login';
import Home from "./Views/Home/Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from "./Views/About/About";
import Setup from "./Views/Setup/Setup";
import FileDropBox from "./Components/FlieDropBox/FileDropBox";
import Reset from "./Views/Login/Reset";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
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
                        <FileDropBox/>
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
