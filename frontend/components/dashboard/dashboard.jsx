import React from 'react';
import ProjectIndexContainer from '../project/project_index_container';
import CreateProjectModalContainer from '../modal/create_project_modal_container';
import { Link, withRouter } from 'react-router';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.newInvite = this.newInvite.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllUsers();
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      document.documentElement.style.backgroundColor = 'initial';
    });

    document.documentElement.style.backgroundColor = '#eee';
  }

  newInvite() {
    const invite = { user_id: this.props.currentUser.id, project_id: 6 };
    this.props.createInvite(invite);
    document.getElementById('demo-project-invite').style.visibility = 'hidden';
  }

  render() {
    return(
      <div className="dashboard-body">
        <div className="dashboard-header d-lower">
          <div className="dashboard-l-left">
            <span>Projects</span>
          </div>
          <div>
            <CreateProjectModalContainer />
          </div>
        </div>
        <div className="dashboard-body-content">
          <div className="project-index-header">
            <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            <span className="project-index-heading">My Projects</span>
          </div>
          <ProjectIndexContainer filter={ "my-projects" } />
        </div>
        <div className="dashboard-body-content team-content">
          <div className="project-index-header">
            <div className="project-index-header-left">
              <i className="fa fa-stack-overflow" aria-hidden="true"></i>
              <span className="project-index-heading">
                Projects You Contribute To
              </span>
            </div>
            <span className="create-invite-btn"
                  id="demo-project-invite"
                  onClick={ this.newInvite } >Demo Project Invite</span>
          </div>
          <ProjectIndexContainer filter={ "team-projects" } />
        </div>
      </div>
    );
  }
}



export default Dashboard;
