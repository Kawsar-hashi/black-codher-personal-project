import React, { useState, useEffect } from 'react';
import Home from '../src/HomePage/Home.js';
import Form from '../src/HomePage/Form';

// SERVICES
import userService from './services/userService';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [users, setusers] = useState(null);

  useEffect(() => {
    if (!users) {
      getusers();
    }
  });

  const getusers = async () => {
    let res = await userService.getAll();
    setusers(res);
  };

  const renderUser = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
    );
  };

  return (


    <div>
      <ul>
        {users && users.length > 0 ? (
          users.map((user) => renderUser(user))
        ) : (
          <p>No users found</p>
        )}
        <h1>Welcome to Setle.
        </h1>
        <h2>
          A space where you can unwind play games and quizes with your mates
        </h2>
      </ul>
    </div>
  );
}


const App = (props) => {

  const []

}

  
return (
  <BrowserRouter>
  <Route exact path="/home" render={() => (
        <>
          <Home />
        </>
      )} />
  </BrowserRouter>
) 

export default App;


