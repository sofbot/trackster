import React from 'react';
import { Link } from 'react-router';
import * as APIUtil from '../../actions/session_actions';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h1> aloha { this.props.currentUser.username } </h1>
          <button onClick={ APIUtil.logout() }>logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>you should sign up, but later kthxbai</p>
        </div>
      );
    }
  }
}

export default Auth;
