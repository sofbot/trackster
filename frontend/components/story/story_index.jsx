import React from 'react';
import { Link } from 'react-router';
import StoryPanel from './story_panel';

class StoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClose() {
    console.log('hide this container');
  }

  render() {
    // const storyURL = `/projects/${this.props.project.id}/new-story`;
    return(
      <div className="main">
        <div className="panels">
          <div className="table">
            <div className="current-container story-panel-container">
              <StoryPanel filter="Current" />
            </div>
            <div className="icebox-container story-panel-container">
              <StoryPanel filter="Icebox" />
            </div>
            <div className="done-container story-panel-container">
              <StoryPanel filter="Done" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryIndex;
