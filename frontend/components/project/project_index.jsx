import React from 'react';
import ProjectIndexItemContainer from './project_index_item_container';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.getVisibleProjects = this.getVisibleProjects.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllProjects();
  }

  getVisibleProjects(projects, filter) {
    const mine = project => this.props.currentUser.id === project.creator_id;
    switch (filter) {
      case 'my-projects':
        return projects.filter(project => mine(project));
      case 'team-projects':
        return projects.filter(project => !mine(project));
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
