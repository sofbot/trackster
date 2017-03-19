import React from 'react';
import ProjectIndexItemContainer from './project_index_item_container';
import { myProjects, teamProjects } from '../../reducers/selectors';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.getVisibleProjects = this.getVisibleProjects.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllProjects();
  }

  getVisibleProjects(projects, filter) {
    switch(filter) {
      case 'my-projects':
        return myProjects(projects);
      case 'team-projects':
        return teamProjects(projects);
    }
  }

  render() {
    const visibleProjects = this.getVisibleProjects(
      this.props.projects,
      this.props.filter
    );

    return(
      <div className="projects-index-container">
        <ul>
          {
            visibleProjects.map((project, idx) => (
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
