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
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    monitor.getItem().index = hoverIndex;

    // console.log('clientOffset', clientOffset);
    // console.log('componentRect', componentRec);
    // console.log('dragIndex', dragIndex);
    // console.log('hoverIndex', hoverIndex);
    console.log(component.props.story);
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
    const { priority, connectDropTarget, isOver, story, index } = this.props;

    return connectDropTarget(
      <div>
        <StoryContainer story={ story } index={ index } />
        { isOver }
      </div>
    );
  }
}

StoryPanelSpot.propTypes = {
  priority: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.STORY, storyTarget, collect)(StoryPanelSpot);
