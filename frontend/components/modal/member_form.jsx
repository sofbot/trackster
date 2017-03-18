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
    console.log(this.props);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  findFriend() {
    fetchUser(this.state.member)
    .then(user => this.addMembers(user))
  }

  handleChange(e) {
    this.setState({ member: e.target.value });
  }

  addMembers(member) {
    const newMembers = this.props.memberIds.concat(member['id']);

    if (this.props.memberIds.indexOf(member['id']) === -1) {
      this.addMemberToList(member);
    }

    this.props.addMembersToState(newMembers);
    this.resetForm();
  };

  addMemberToList(member) {
    const memberList = document.getElementById('members-list');
    const newMember = document.createElement('li');
    newMember.className = 'teammate';
    newMember.innerHTML = member.username;
    memberList.appendChild(newMember);
  };

  resetForm() {
    const form = document.getElementsByClassName('add-members-form')[0];
    form.reset();
  };

  render() {
    return (
      <div className="members-container">
        <form className="add-members-form" onSubmit={ this.findFriend }>
          <div className="modal-inputs">
            <label className="modal-label">Add teammates</label>
            <input className="modal-input teammates-field"
              onChange={ this.handleChange }></input>
          </div>
          <span onClick={ this.findFriend }></span>
        </form>
        <div className="members-list-container">
          <ul id="members-list"></ul>
        </div>
      </div>
    );
  }
}

export default MemberForm;
