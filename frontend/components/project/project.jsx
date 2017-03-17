import React from 'react';
import { Link } from 'react-router';
import ProjectShowHeader from '../header/project_show_header';

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
        PROJECT STUFF
      </div>
    );
  }
}


export default Project;
