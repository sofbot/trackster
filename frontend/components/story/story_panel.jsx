import React from 'react';
import { Link, withRouter } from 'react-router';
import {
  IceboxStories,
  CurrentStories,
  DoneStories
} from '../../reducers/selectors';
import StoryContainer from './story_container';
import StoryFormContainer from './story_form_container';

class StoryPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 'closed'
    };

    this.handleClose = this.handleClose.bind(this);
    this.filterStories = this.filterStories.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
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
        return IceboxStories(stories);
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

  render() {
    const filteredStories = this.filterStories(
      this.props.stories,
      this.props.filter
    );

    let storyForm;
    if (this.state.form === 'open') {
      storyForm = <StoryFormContainer hideForm={ this.hideForm }/>
    } else {
      storyForm = <div></div>
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
        <div className="story-container">
          <ul>
            {
              filteredStories.map((story, idx) => (
                <StoryContainer key={ idx } story={ story }/>
              ))
            }
          </ul>
        </div>
        { storyForm }
      </div>
    );
  }
}

export default withRouter(StoryPanel);
