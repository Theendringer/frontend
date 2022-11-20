import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

import styled from "styled-components";

const DivLogin = styled.div`
display: flex;
align-items: center;
flex-direction: column; 
justify-content: center;
width: 100%;
min-height: 100%;
padding: 20px;
`;


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return(
    <>
    <DivLogin>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
        <br></br>
        <Button href="/adm" variant="primary">Admin</Button>
        </div>
      </form>
    </DivLogin>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};