import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="story">
        { this.props.story.title }
      </div>
    );
  }
}

export default Story;
