import React from 'react';
import { Link } from 'react-router';
import * as APIUtil from '../../actions/session_actions';

const loggedOut = () => (
  <div className="auth">
    <Link to="/signup">Sign Up</Link> <br/>
    <Link to="/login">Log In</Link>
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
