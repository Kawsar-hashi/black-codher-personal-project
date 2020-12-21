import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../src/components/homepage/Home';
import About from '../src/components/homepage/About';





export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
              <div className= "container">
                  <p>router is working</p>

              </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Home">
            <About />
          </Route>
          <Route path="/About">
            <Users />
          </Route>
          <Route path="/SignUp">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;