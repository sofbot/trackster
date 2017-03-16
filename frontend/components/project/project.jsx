import React from 'react';
import { values } from 'lodash';

class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    };
  }

  componentWillMount() {
    this.setState({ title: this.props.fetchProject(this.props.params.id) });
  }

  render() {
    console.log(this.state.title);
    return (
      <div className="project-container">
        <div className="project-header">
          <p>bloop</p>
          <p>members</p>
        </div>

      </div>
    );
  }
}


export default Project;
