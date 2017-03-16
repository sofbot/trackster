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
    console.log(this.props.projects);
    return (
      <div className="project-container">
        <div className="project-header">
          <h1>{this.props.projects}</h1>
          <p>bloop</p>
          <p>members</p>
        </div>

      </div>
    );
  }
}


export default Project;
