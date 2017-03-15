import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllProjects();
  }

  render() {
    return(
      <div className="projects-index-container">
        <ul>
          {
            this.props.projects.map(project => (
              <ProjectIndexItem
                key={project.id}
                deleteProject={this.props.deleteProject}
                updateProject={this.props.updateProject}
                project={project} />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default ProjectIndex;
