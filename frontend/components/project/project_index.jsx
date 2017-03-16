import React from 'react';
import ProjectIndexItemContainer from './project_index_item_container';

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
            this.props.projects.map((project, idx) => (
              <ProjectIndexItemContainer
                key={idx}
                project={project} />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default ProjectIndex;
