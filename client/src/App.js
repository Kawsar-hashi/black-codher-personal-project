import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../src/components/homepage/Home';
import About from '../src/components/homepage/About';
import SignUp from '../src/components/homepage/SignUp';
import Navbar from '../src/components/homepage/NavBar';





function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
              <Navbar />
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
          </ul>
          <div>
              <h1>
                  Welcome to Setle
              </h1>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/About">
           <About />
          </Route>
         
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;