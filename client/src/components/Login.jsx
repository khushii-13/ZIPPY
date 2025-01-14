import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email or Username</label>
          <input type="text" id="email" name="email" className="form-input" placeholder="Enter your email or username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-input" placeholder="Enter your password" />
        </div>
        <button type="submit" className="login-button">Login</button>
        <button type="button" className="google-button">Sign up with Google</button>
      </form>
      <div className="register-link-container">
        <p>
          Don't have an account?{' '}
          <Link to="/register" className="register-link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
