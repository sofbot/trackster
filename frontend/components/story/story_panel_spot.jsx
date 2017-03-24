import React, { Component, PropTypes } from 'react';
import { updateStory } from '../../actions/story_actions';
import { ItemTypes } from '../../util/constants';
import { DropTarget } from 'react-dnd';
import StoryContainer from './story_container';
import { findDOMNode } from 'react-dom';

const storyTarget = {
  drop(props) {
    return props.story;
  }
  // hover(props, monitor, component) {
  //   let hoverTarget = findDOMNode(component);
  //   if (hoverTarget === findDOMNode(monitor.getItem())) {
  //     return
  //   } else {
  //     hoverTarget.style.marginTop = '28px';
  //     // console.log(hoverTarget);
  //   }
  //   // console.log(hoverTarget);
  // }
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
