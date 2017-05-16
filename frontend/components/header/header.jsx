import React from 'react';
import { Link } from 'react-router';
import ProjectShowHeaderContainer from './project_show_header_container';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    switch(this.props.currentLocation) {
      case '/':
      if (this.props.currentUser) {
        return (
          <div className="header">
            <h1>trackster</h1>
            <div className="auth-links" onClick={ this.props.clearErrors }>
              <a href="/" id="logout-home"
                onClick={ this.props.logout }>log out</a>
            </div>
          </div>
        );
      } else {
        return (
          <div className="header">
            <h1>trackster</h1>
            <div className="auth-links" onClick={ this.props.clearErrors }>
              <Link to="/login">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        );
      }
      case '/login':
      return (
        <div className="header header-login">
          <Link to="/">
            <h1>trackster</h1>
          </Link>
          <div className="auth-links" onClick={ this.props.clearErrors }>
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
          <div className="auth-links" onClick={ this.props.clearErrors }>
            <span> ALREADY HAVE AN ACCOUNT? </span>
            <Link to="/login" id="signup-link">SIGN IN</Link>
          </div>
        </div>
      );
      case '/dashboard':
      return (
        <div className="header dashboard-header">
          <h1>trackster</h1>
          <div className="auth-links dashboard-logout">
            <a href="/" id="logout-dashboard"
              onClick={ this.props.logout }>log out</a>
          </div>
        </div>
      );
      default:
      return (
        <ProjectShowHeaderContainer />
      );
    }
  }
}

export default Header;
