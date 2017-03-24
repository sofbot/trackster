import React from 'react';
import { Link } from 'react-router';
import {
  IceBoxStories,
  CurrentStories,
  DoneStories
} from '../../reducers/selectors';
import StoryPanelSpot from './story_panel_spot';
import StoryContainer from './story_container';
import StoryFormContainer from './story_form_container';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class StoryPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 'closed',
      prevTarget: false,
      dropTarget: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.filterStories = this.filterStories.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.getTarget = this.getTarget.bind(this);
  }

  componentDidMount(){
    document.getElementById('done-container').style.display = 'none';
  }

  componentWillReceiveProps(nextProps) {

  }

  handleClose(e) {
    const target = this.findAncestor(e.currentTarget, 'story-panel-container');
    target.style.display = 'none';
  }

  findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  filterStories(stories, filter) {
    switch(filter) {
      case 'icebox':
        return IceBoxStories(stories);
      case 'current':
        return CurrentStories(stories);
      case 'done':
        return DoneStories(stories);
    }
  }

  showForm() {
    this.setState({ form: 'open'});
  }

  hideForm() {
    this.setState({ form: 'closed'});
  }

  handleHover(target) {
    if (this.state.prevTarget) {
      this.state.prevTarget.style.marginTop = '0';
    }
    target.style.marginTop = '28px';
    this.setState({ prevTarget: target });
  }

  getTarget(component) {
    this.setState({ dropTarget: component });
  }

  render() {
    const filteredStories = this.filterStories(
      this.props.stories,
      this.props.filter
    ).sort((a, b) => (
      a.priority - b.priority
    ));

    let storyForm;
    if (this.state.form === 'open') {
      storyForm = <StoryFormContainer hideForm={ this.hideForm }/>;
    } else {
      storyForm = <div></div>;
    }

    return(
      <div className="story-panel">
        <header className="story-container-header">
          <div className="story-header-left">
            <span className="close-container" onClick={ this.handleClose }>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
            <p>{ this.props.filter }</p>
          </div>
          <Link className="add-story" onClick={ this.showForm }>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </Link>
        </header>
        <div className="story-content-container">
          <div className="story-container">
            <ul>
              {
                filteredStories.map((story, idx) => (
                  <StoryPanelSpot
                    key={ story.id }
                    index={ idx }
                    story={ story }
                    handleHover={ this.handleHover }
                    lastTarget={ this.state.prevTarget }
                    dropTarget={ this.state.dropTarget }
                    getTarget={ this.getTarget }/>
                ))
              }
            </ul>
          </div>
          { storyForm }
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(StoryPanel);
