/*==========================================================================
Name        : SignupForm.js
Assignment  : Assignment 5
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/

import React, { useState } from 'react';

const SignupForm = ({ switchLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const signupEnter = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      alert('Please fill in all fields')
    } 
    else {
      console.log('Signing up...')
    };
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={signupEnter}>Signup</button>
      </div>
      <div>
        <button onClick={switchLogin}>Switch to Login</button>
      </div>
    </div>
  );
};

export default SignupForm;
