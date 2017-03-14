import React from 'react';
import { Link } from 'react-router';
import * as APIUtil from '../../actions/session_actions';

// const loggedOut = () => (
//   <HeaderContainer />
// );

const loggedIn = (currentUser, logout) => (
  <div className="auth">
    <h1> welcome { currentUser.username }</h1>
    <button onClick={ logout }>logout</button>
  </div>
);

const Auth = ({ logout, currentUser }) => (
  <h1>hi</h1>
);

export default Auth;

// currentUser ? loggedIn(currentUser, logout) : loggedOut()
