import React, { useState, } from "react";
import { useHistory } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

export default function Login(props) {

const [userName, setUsername] = useState()

  const history = useHistory();
 
 

  function handleSubmit(event) {
      
    event.preventDefault();
   fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'userName': userName })
      }).then(res => res.json()).then(res => {
          props.setUser(res.user)
          
       history.push("/");
      }
    )

  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        
    
        <Form.Group size="lg" controlId="username">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
      </Form>
    </div>
  );
}