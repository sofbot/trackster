import React from 'react';
import { Link } from 'react-router';
import * as APIUtil from '../../actions/session_actions';

class Auth extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props);
    if (this.props.currentUser) {
      console.log('logged in');
      return (
        <div>
          <h1> aloha { this.props.currentUser.username } </h1>
          <button onClick={ APIUtil.logout() }>logout</button>
        </div>
      );
    } else {
      console.log('logged out');
      return (
        <div>
          <Link to='/signup'>sign up</Link> <br/>
          <Link to='/login'>login</Link>
        </div>
      );
    }
  }
}

export default Auth;
