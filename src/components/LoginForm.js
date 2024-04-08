/*==========================================================================
Name        : LoginForm.js
Assignment  : Assignment 5
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/

import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { addUser } from '../service/apiService.js';


const LoginForm = ({ switchSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticationMessage, setAuthenticationMessage] = useState('');
  const [authenticated, setAuthenticated] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', 'false'); 
  }, []);
  
  const loginEnter = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please fill in both Username and Password fields');
    } 
    else{
      setLoading(true);
      const apiCall = addUser({'username':username, 'password':password});
      apiCall.then(data => {
        setLoading(false);
        // console.log(data.data.authMessage);
        setAuthenticationMessage(data.data.authMessage); 
        setAuthenticated(data.data.authenticated); 
        
        // sessionStorage.setItem('authenticated', data.data.authenticated);
        if (data.data.authenticated === true){
          alert('Login successful');
          console.log(data.data.authMessage);
          localStorage.setItem('isAuthenticated', 'true');
          // Navigate back
          navigate('/products');
        }
        else{
          alert(data.data.authMessage);
          console.log(data.data.authMessage);
        }
      })

      .catch(error => {
        console.error("Error saving product:", error);
        // setError('Failed to save product');
        setLoading(false);
      });
    };
  };





  if (loading) return <div>Loading...</div>;
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
      {error && <div style={{ color: 'red' }}>{error}</div>}
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
