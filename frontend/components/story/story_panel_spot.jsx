import React, { Component, PropTypes } from 'react';
import { updateStory } from '../../actions/story_actions';
import { ItemTypes } from '../../util/constants';
import { DropTarget } from 'react-dnd';
import StoryContainer from './story_container';

const storyTarget = {
  drop(props) {
    return props.story;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


class StoryPanelSpot extends Component {
  render() {
    const { priority, connectDropTarget, isOver, story } = this.props;

    return connectDropTarget(
      <div>
        <StoryContainer story={ story }>
          { this.props.children }
        </StoryContainer>
        { isOver }
      </div>
    );
  }
}

StoryPanelSpot.propTypes = {
  priority: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.STORY, storyTarget, collect)(StoryPanelSpot)
