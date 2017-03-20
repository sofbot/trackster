import React from 'react';
import { Link } from 'react-router';
import ProjectShowHeader from '../header/project_show_header';
import StoryNavContainer from '../story/story_nav_container';
import StoryIndexContainer from '../story/story_index_container';

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
        <StoryNavContainer />
        <StoryIndexContainer />
      </div>
    );
  }
}


export default Project;
