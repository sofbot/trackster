import React from 'react';
import { Link } from 'react-router';

class StoryNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const storyURL = `/projects/${this.props.project.id}/new-story`;
    return(
      <aside className="story-nav">
        <div className="story-nav-header">
          <span>{ this.props.project.title }</span>
        </div>
        <div className="story-nav-links">
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
        <div className="project-team">
          <div className="story-nav-header">
            <span> team </span>
          </div>
          <ul>
            {
              this.props.project.members.map((member, idx) => (
                <li key={idx}>{ member }</li>
              ))
            }
          </ul>
        </div>
      </aside>
    );
  }
}

export default StoryNav;
