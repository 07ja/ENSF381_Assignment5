/*==========================================================================
Name        : SignupForm.js
Assignment  : Assignment 5
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/

import React, { useState } from 'react';
import { addUser } from '../service/apiService.js';

const SignupForm = ({ switchLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const signupEnter = async () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || email.trim() === '') {
      setError('Please fill in all fields')
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format');
    } else {
      try {
        await addUser({username, password, email});
        console.log('Signing up...')  
      } catch (error) {
        console.log('error signing up', error);
      }
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
      {error && <div style={{ color: 'red' }}>{error}</div>}
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
