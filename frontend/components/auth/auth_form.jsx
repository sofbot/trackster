import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(e) {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  handleLogin(e) {
    console.log('handling login');
    e.preventDefault();
    let demoUser = { username: 'sofbot', password: 'password' };
    this.props.login(demoUser).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/dashboard');
  }

  render () {
    const authTitle = (
      this.props.formType === '/login' ? 'Sign In' : 'Get started - it\'s free!'
    );

    let errs;
    if (this.props.errors.length > 0) {
      errs = <div className="errors">{this.props.errors}</div>;
    } else {
      errs = <div></div>;
    }

    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <div className="form-container">
            <h3 className="auth title">{ authTitle }</h3>
            { errs }
            <label> Username</label>
            <input value={this.state.username}
              onChange={this.handleUsername}></input>
            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.handlePassword}></input>
            <input type="submit" value="SUBMIT" onClick={this.handleSignUp}></input>
          </div>
          <div className="or-container">
            <span className="or"> or </span>
          </div>
        </form>
        <div className="demo-auth" onClick={ this.handleLogin }>
            <span>Demo</span>
        </div>
      </div>
    );
  }
}


export default AuthForm;
