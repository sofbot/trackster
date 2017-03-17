import React from 'react';
import { Link, withRouter } from 'react-router';
import { values } from 'lodash';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.clearErrors();
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
    if (values(this.props.errors).length > 0) {
      errs = <div className="errors">
                { values(this.props.errors)[0].join(' & ') }
              </div>;
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
              onChange={this.update('username')}></input>
            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}></input>
            <input type="submit" value="SUBMIT"></input>
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
