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
        <div className="header">
          <h1>trackster</h1>
          <div className="auth-links">
            <span> don't have an account? </span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      );
    case '/signup':
      return (
        <div className="header">
          <h1>trackster</h1>
          <div className="auth-links">
            <span> already have an account? </span>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      );

  }
};
