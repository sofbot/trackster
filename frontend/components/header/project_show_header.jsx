import React from 'react';
import { Link, withRouter } from 'react-router';

class ProjectShowHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleLogout = this.handleLogout.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.redirect());
  }

  redirect() {
    this.props.router.push('/');
  }

  render() {
    const storiesURL = `/projects/${this.props.project.id}`;
    return (
      <div className="project-show-header">
        <div className="upper-header">
          <h1>{ this.props.project.title }</h1>
          <Link onClick={ this.handleLogout }>Logout</Link>
        </div>
        <div className="lower-header">
          <Link to={ storiesURL }>Stories</Link>
          <Link to="/dashboard">Projects</Link>
          <Link to="#">Members</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectShowHeader);
