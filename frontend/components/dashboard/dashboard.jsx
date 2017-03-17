import React from 'react';
import ProjectIndexContainer from '../project/project_index_container';
import CreateProjectModalContainer from '../modal/create_project_modal_container';
import { Link, withRouter } from 'react-router';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      document.documentElement.style.backgroundColor = 'initial';
    });
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
          <ProjectIndexContainer />
        </div>
      </div>
    );
  }
}



export default Dashboard;
