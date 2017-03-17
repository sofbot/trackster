import React from 'react';
import { values } from 'lodash';

class Project extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchProject(this.props.params.id);
  }

  render() {
    return (
      <div className="project-container">
        <div className="project-header">
          { this.props.project.title }
          <p>bloop</p>
          <p>members</p>
        </div>
      </div>
    );
  }
}


export default Project;
