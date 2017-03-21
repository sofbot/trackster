import React from 'react';
import { Link } from 'react-router';
import StoryPanelContainer from './story_panel_container';

class StoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="main-panels">
        <div className="panels">
          <div className="table">
            <div className="current-container story-panel-container">
              <StoryPanelContainer
                filter="current"
                stories={ this.props.project.stories }/>
            </div>
            <div className="icebox-container story-panel-container">
              <StoryPanelContainer
                filter="icebox"
                stories={ this.props.project.stories } />
            </div>
            <div className="done-container story-panel-container">
              <StoryPanelContainer
                filter="done"
                stories={ this.props.project.stories } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default StoryIndex;
