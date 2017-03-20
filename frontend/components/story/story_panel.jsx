import React from 'react';
import { Link } from 'react-router';

class StoryPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    console.log(e.currentTarget);
    const target = this.findAncestor(e.currentTarget, 'story-panel-container');
    target.style.display = 'none';
  }

  findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  render() {
    return(
      <div className="story-panel">
        <div className="story-container">
          <header className="story-container-header">
            <div className="story-header-left">
              <span className="close-container" onClick={ this.handleClose }>
                <i className="fa fa-times" aria-hidden="true"></i>
              </span>
              <p>{ this.props.filter }</p>
            </div>
            <Link className="add-story">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </Link>
          </header>
        </div>
      </div>
    );
  }
}

export default StoryPanel;
