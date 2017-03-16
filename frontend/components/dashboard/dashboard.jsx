import React from 'react';
import ProjectIndexContainer from '../project/project_index_container';
import { Link } from 'react-router';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.createProjectModal = this.createProjectModal.bind(this);
  }

  createProjectModal() {
    console.log('launch modal');
    console.log(this.props.createProject);
  }

  render() {
    return(
      <div>
        <div className="dashboard-header d-lower">
          <div className="dashboard-l-left">
            <span>Projects</span>
          </div>
          <div className="dashboard-l-right">
            <Link onClick={ this.createProjectModal }>Create Project</Link>
          </div>
        </div>
        <h3>My Projects</h3>
        <ProjectIndexContainer />
      </div>
    );
  }
}



export default Dashboard;
