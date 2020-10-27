import React from 'react';
import Login from './Views/Login/Login';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Header />
            <Footer />
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
