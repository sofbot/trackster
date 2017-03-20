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
      <div className="panel-container">
        <div className="current-container story-panel">
          <StoryPanel filter="current" />
        </div>
        <div className="icebox-container story-panel">
          <StoryPanel filter="icebox" />
        </div>
        <div className="done-container story-panel">
          <StoryPanel filter="done" />
        </div>
      </div>
    );
  }
}

export default StoryIndex;
