import React from 'react';
import { Link } from 'react-router';

export const Header = ({ location }) => {
  switch(location.pathname) {
    case '/':
      return (
        <div className="header">
          <h1>trackster</h1>
          <div className="auth-links">
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    case '/login':
      return (
        <div className="header header-login">
          <Link to="/">
            <h1>trackster</h1>
          </Link>
          <div className="auth-links">
            <span> DON'T HAVE AN ACCOUNT? </span>
            <Link to="/signup" id="signup-link">SIGN UP</Link>
          </div>
        </div>
      );
    case '/signup':
      return (
        <div className="header header-signup">
          <Link to="/">
            <h1>trackster</h1>
          </Link>
          <div className="auth-links">
            <span> ALREADY HAVE AN ACCOUNT? </span>
            <Link to="/login" id="signup-link">SIGN IN</Link>
          </div>
        </div>
      );
  }
};
