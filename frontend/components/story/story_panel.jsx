import React from 'react';
import { Link } from 'react-router';

class StoryPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose() {
    console.log('hide this container');
  }

  render() {
    // const storyURL = `/projects/${this.props.project.id}/new-story`;
    return(
      <div className="story-panel">
        <div className="story-container">
          <header className="story-container-header">
            <span className="close-container" onClick={ this.handleClose }>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
            <h3>{ this.props.filter }</h3>
            <Link className="add-story">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Link>
          </header>
        </div>
      </div>
    );
  }
}

export default StoryPanel;
