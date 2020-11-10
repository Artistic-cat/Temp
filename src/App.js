import React from 'react';
import Login from './Views/Login/Login';
import Home from "./Views/Home/Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import FileUpload from "./Views/FileUpload/FileUpload";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/files">
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
