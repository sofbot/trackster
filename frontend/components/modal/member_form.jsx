import React from 'react';
import { fetchUser } from '../../util/invite_api_util';

class MemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: ''
    };
    this.findFriend = this.findFriend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  findFriend() {
    fetchUser(this.state.member)
    .then(user => this.props.addMembers(user))
  }

  handleChange(e) {
    this.setState({ member: e.target.value });
  }

  render() {
    return (
      <form className="add-members-form" onSubmit={ this.findFriend }>
        <div className="modal-inputs">
          <label className="modal-label">Add teammates</label>
          <input className="modal-input teammates-field"
            onChange={ this.handleChange }></input>
        </div>
        <span onClick={ this.findFriend }></span>
      </form>
    );
  }
}

export default MemberForm;
