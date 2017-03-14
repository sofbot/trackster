import React from 'react';
import { Link } from 'react-router';
import * as APIUtil from '../../actions/session_actions';

const loggedOut = () => (
  <div className="header">
    <h1>trackster</h1>
    <div className="auth-links">
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </div>
);

const loggedIn = (currentUser, logout) => (
  <div className="auth">
    <h1> welcome { currentUser.username }</h1>
    <button onClick={ logout }>logout</button>
  </div>
);

const Auth = ({ logout, currentUser }) => (
  currentUser ? loggedIn(currentUser, logout) : loggedOut()
);

export default Auth;
