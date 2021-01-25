import React, { Component, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Home from '../src/components/homepage/Pages/Home';
import About from '../src/components/homepage/About';
import SignUp from './components/homepage/Pages/SignUp';
import Navbar from '../src/components/homepage/NavBar';
// import Hero from '../src/components/homepage/Hero';
import './App.css';
//import Quiz from '../src/components/homepage/Pages/Quiz';
import Quiz from '../src/components/homepage/Pages/Quiz_New';


function App() {

  const[user, setUser] = useState(null);
  return (
    <Router>
      {/* {user.first_name} */}
      <div>
        <nav>
          <ul>
              <Navbar user={user} setUser={setUser}  />
            {/* <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/SignUp">SignUp</Link>
            </li>
            <li>
              
            </li> */}
          </ul>
          <div>
              
          </div>
        </nav>

        <Switch>
          <Route exact path="/" exact component= {Home}>
            <Home/>
          </Route>
          <Route path="/About">
           <About />
          </Route>
          <Route exact path="/SignUp">
          <SignUp setUser={setUser} />
          </Route>
          <Route path="/Quiz">
           <Quiz />

           

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