import React from 'react';
import { Link } from 'react-router';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const storyURL = `/projects/${this.props.project.id}/new-story`;

    return(
      <div className="story-nav">
        <Link className="add-story" to="/story">
          <i className="fa fa-plus" aria-hidden="true"></i>
          <p>Add Story</p>
        </Link>
      </div>
    );
  }
}

export default StoryForm;
