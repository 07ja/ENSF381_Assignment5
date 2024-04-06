/*==========================================================================
Name        : Login.js
Assignment  : Assignment 5
Author(s)   : Jaimal Sahota (30126909), Xicheng(Justin) Wang (30191121)
Submission  : Mar 25, 2024
===========================================================================*/

import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => { 
  const [isLoginForm, setIsLoginForm] = useState(true);
  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      <Header />
      {isLoginForm ? (
        <LoginForm switchSignup={switchForm} />
      ) : (
        <SignupForm switchLogin={switchForm} />
      )}
      <Footer />
    </div>
  );
};

export default LoginPage;
