import React from 'react';
import ProjectIndexContainer from '../project/project_index_container';
import { Link } from 'react-router';

const Dashboard = () => (
  <div>
    <div className="dashboard-header">
      <span>Projects</span>
    </div>
    <h3>My Projects</h3>
    <ProjectIndexContainer />
  </div>
);

export default Dashboard;
