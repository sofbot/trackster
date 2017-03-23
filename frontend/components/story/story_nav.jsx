import React from 'react';
import { Link } from 'react-router';
import StoryFormContainer from './story_form_container';

class StoryNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: 'closed'
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  showForm() {
    this.setState({ form: 'open'});
  }

  hideForm() {
    this.setState({ form: 'closed'});
  }

  togglePanel(e) {
    const id = `${e.currentTarget.classList[0]}-container`;
    document.getElementById(id).style.display = 'block';
  }

  render() {

    return(
      <aside className="story-nav">
        <div className="story-nav-header">
          <span>{ this.props.project.title }</span>
        </div>
        <ul className="story-nav-links">
          <li className="current panel-name" onClick={ this.togglePanel }>
            <Link>
              <span>Current</span>
            </Link>
          </li>
          <li className="icebox panel-name" onClick={ this.togglePanel }>
            <Link>
              <span>Icebox</span>
            </Link>
          </li>
          <li className="done panel-name" onClick={ this.togglePanel }>
            <Link>
              <span>Done</span>
            </Link>
          </li>
        </ul>
        <div>
          <div className="story-nav-header">
            <span> team </span>
          </div>
          <ul className="story-nav-links">
            {
              this.props.members.map((member, idx) => (
                <li key={idx} className="panel-name">{ member }</li>
              ))
            }
          </ul>
        </div>
      </aside>
    );
  }
}

export default StoryNav;
