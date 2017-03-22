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
  }

  showForm() {
    this.setState({ form: 'open'});
  }

  hideForm() {
    this.setState({ form: 'closed'});
  }

  render() {
    // let storyForm;
    // if (this.state.form === 'open') {
    //   storyForm = <StoryFormContainer hideForm={ this.hideForm }/>;
    // } else {
    //   storyForm = <div></div>;
    // }

    return(
      <aside className="story-nav">
        <div className="story-nav-header">
          <span>{ this.props.project.title }</span>
        </div>
        <ul className="story-nav-links">
          <li className="current panel-name">
            <Link>
              <span>Current</span>
            </Link>
          </li>
          <li className="back burner panel-name">
            <Link>
              <span>Back Burner</span>
            </Link>
          </li>
          <li className="done panel-name">
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

// <li className="add-story">
//   <Link onClick={ this.showForm }>
//     <i className="fa fa-plus" aria-hidden="true"></i>
//     <p>Add Story</p>
//   </Link>
// </li>
