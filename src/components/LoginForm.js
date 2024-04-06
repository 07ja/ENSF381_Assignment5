/*==========================================================================
Name        : LoginForm.js
Assignment  : Assignment 5
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/

import React, { useState } from 'react';

const LoginForm = ({ switchSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const loginEnter = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in both Username and Password fields')
    } 
    else {
      console.log('Logging in...')
    };
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={loginEnter}>Login</button>
      </div>
      <div>
        <button onClick={switchSignup}>Switch to Signup</button>
      </div>
    </div>
  );
};

export default LoginForm;
