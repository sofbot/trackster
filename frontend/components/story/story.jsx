import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="story">
        <div className="story-icons">
          <i className="fa fa-folder-open-o" aria-hidden="true"></i>
          <i className="fa fa-code-fork" aria-hidden="true"></i>
        </div>
        <div className="story-title">
          { this.props.story.title }
        </div>
        <div className="story-buttons">
          <span>Start</span>
        </div>
      </div>
    );
  }
}

export default Story;
