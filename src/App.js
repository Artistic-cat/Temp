import React from 'react';
import Login from './Views/Login/Login';
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
                    <Route path="/home">
                        <Home/>
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
