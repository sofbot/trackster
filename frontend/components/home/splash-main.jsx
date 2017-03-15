import React from 'react';
import { Link, hashHistory } from 'react-router';


class SplashMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.currentUser) {
      hashHistory.push('/dashboard');
    }
  }

  handleLogin() {
    let demoUser = { username: 'sofbot', password: 'password' };
    this.props.login(demoUser);
  }


  render () {
    return (
      (
        <div className="splash-main">
          <h1 className="splash-heading">
            Changing how teams build software
          </h1>
          <div className="demo">
            <Link onClick={ this.handleLogin }>
              <span></span>
            </Link>
          </div>

        </div>
      )
    );
  }
}


// <a href="#" onClick={ handleLogin }>Take a tour
//   <span></span>
// </a>

export default SplashMain;
