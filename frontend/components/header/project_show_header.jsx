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
          <span>{ this.props.project.title }</span>
          <Link className="header-txt"
                onClick={ this.handleLogout }>Logout</Link>
        </div>
        <div className="lower-header header-txt">
          <Link to={ storiesURL }><span>Stories</span></Link>
          <Link to="/dashboard"><span>Projects</span></Link>
          <Link to="#"><span>Members</span></Link>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectShowHeader);
