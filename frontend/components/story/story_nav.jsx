import React from 'react';
import { Link } from 'react-router';

class StoryNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const storyURL = `/projects/${this.props.project.id}/new-story`;
    return(
      <div className="story-nav">
        <Link className="add-story" to={ storyURL }>
          <i className="fa fa-plus" aria-hidden="true"></i>
          <p>Add Story</p>
        </Link>
        <span className="current">
          <p>Current</p>
        </span>
        <span className="icebox">
          <p>Icebox</p>
        </span>
        <span className="done">
          <p>Done</p>
        </span>
      </div>
    );
  }
}

export default StoryNav;
