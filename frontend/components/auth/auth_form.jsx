import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSignUp = this.handleSignUp.bind(this);
    this.demoSignUp = this.demoSignUp.bind(this);
    console.log(this.props);
  }

  handleSignUp(e) {
    e.preventDefault();
    console.log('signup!');
  }

  demoSignUp(e) {
    e.preventDefault();
    console.log('demo');
  }

  render () {
    return (
      <div className="auth-container">
        <h3 className="auth title">Get started, it's free</h3>
        <form className="auth-form">
          <label>
            Username
            <input type="text"></input>
          </label>
          <label>
            Email
            <input type="text"></input>
          </label>
          <label>
            Password
            <input type="text"></input>
          </label>

          <input type="submit" onClick={this.handleSignUp}></input>
        </form>
        <p> or </p>
        <button onClick={this.demoSignUp}>Demo</button>
      </div>
    );
  }
}


export default AuthForm;
