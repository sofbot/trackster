import React from 'react';

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

  redirect() {
    this.props.router.push('/dashboard');
  }

  render () {
    const authTitle = (
      this.props.formType === '/login' ? 'Sign In' : 'Get started, it\'s free'
    );

    return (
      <div className="auth-container">
        <h3 className="auth title">{ authTitle }</h3>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <div>{this.props.errors}</div>
          <label>
            Username
            <input value={this.state.username}
                    onChange={this.handleUsername}></input>
          </label>
          <label>
            Password
            <input type="password"
                    value={this.state.password}
                    onChange={this.handlePassword}></input>
          </label>
          <input type="submit" onClick={this.handleSignUp}></input>
        </form>
        <p> or </p>
        <button>Demo</button>
      </div>
    );
  }
}


export default AuthForm;
