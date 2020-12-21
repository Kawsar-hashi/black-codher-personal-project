import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Home.css'; 

const Home = () => {

  return (
    
    <header className="header">
      <div></div>
      <div className="main">
        <div className="main-body">Setle</div>
      </div>
      <ul className="nav nav-tabs nav justify-content-start navbar navbar-expand-lg navbar-light bg-light">
        <nav className="nav-item">
          <Link className="nav-link Home" to="/">Home</Link>
        </nav>
        <nav className="nav-item">
          <Link className="nav-link Games" to="/Games">Games</Link>
        </nav>
        <nav className="nav-item">
          <Link className="nav-link Quiz" to="/Quiz">Quiz</Link>
        </nav>
      </ul>
   </header>   
  ); 
}

export default Home; 