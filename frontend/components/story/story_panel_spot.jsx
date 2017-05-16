import React, { Component, PropTypes } from 'react';
import { updateStory } from '../../actions/story_actions';
import { ItemTypes } from '../../util/constants';
import { DropTarget } from 'react-dnd';
import StoryContainer from './story_container';
import { findDOMNode } from 'react-dom';

const storyTarget = {
  drop(props) {
    return props.story;
  },
  hover(props, monitor, component) {
    if (monitor.getItem().internal_state === 'unstarted'
        && component.props.story.internal_state !== 'unstarted') {
      return;
    } else if (monitor.getItem().internal_state === 'done'
      && component.props.story.internal_state !== 'done') {
      return;
    } else if (monitor.getItem().storyId === component.props.story.id) {
      return;
    } else if (monitor.getItem().internal_state !== 'unstarted'
      && component.props.story.internal_state === 'unstarted') {
      return;
    } else if (monitor.getItem().internal_state !== 'done'
      && component.props.story.internal_state === 'done') {
      return;
    } else {
      const hoverTarget = findDOMNode(component);
      props.handleHover(hoverTarget);
      props.getTarget(component);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


class StoryPanelSpot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      priority,
      connectDropTarget,
      isOver, story,
      lastTarget,
      getTarget,
      dropTarget,
      index
    } = this.props;

    return connectDropTarget(
      <div>
        <StoryContainer story={ story }
          lastTarget={ lastTarget }
          dropTarget={ dropTarget }
          index={ index }/>
        { isOver }
      </div>
    );
  }
}

StoryPanelSpot.propTypes = {
  story: PropTypes.object.isRequired,
  isOver: PropTypes.bool.isRequired,
  handleHover: PropTypes.func,
  getTarget: PropTypes.func,
  index: PropTypes.number
};

export default DropTarget(
  ItemTypes.STORY,
  storyTarget,
  collect)(StoryPanelSpot);
