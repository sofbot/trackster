import React from 'react';
import { fetchUser } from '../../util/invite_api_util';
import Autocomplete from '../autocomplete/autocomplete';
import { values } from 'lodash';

class MemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: ' '
    };
    this.findFriend = this.findFriend.bind(this);
    this.update = this.update.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log(this.props);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    );
  }

  handleChange(value) {
    this.setState({ member: value });
  }

  findFriend(name) {
    let username;
    if (this.state.member === '' || typeof name === 'string') {
      username = name;
    } else {
      username = this.state.member;
    }
    console.log(username);

    fetchUser(username)
              .then((user => this.addMembers(user)),
                      err => this.displayError());
  }


  displayError() {
    document.getElementById('member-error').style.visibility = 'visible';
  }

  removeError() {
    document.getElementById('member-error').style.visibility = 'hidden';
  }


  addMembers(member) {
    const newMembers = this.props.memberIds.concat(member['id']);

    if (this.props.memberIds.indexOf(member['id']) === -1) {
      this.addMemberToList(member);
    }

    this.props.addMembersToState(newMembers);
    this.resetForm();
    this.removeError();
  }

  addMemberToList(member) {
    const memberList = document.getElementById('members-list');
    const newMember = document.createElement('li');
    newMember.className = 'teammate auto';
    newMember.innerHTML = member.username;
    memberList.appendChild(newMember);
  }

  resetForm() {
    const form = document.getElementsByClassName('add-members-form')[0];
    form.reset();
  }

  render() {
    return (
      <div className="members-container">
        <form className="add-members-form" onSubmit={ this.findFriend }>
          <div className="modal-inputs">
            <div className="member-input-label">
              <label className="modal-label">Add teammates</label>
              <span id="member-error" className="modal-label">
                member not found
              </span>
            </div>


          <Autocomplete
            names={ this.props.usernames }
            handleChange={ this.handleChange }
            findFriend={ this.findFriend }/>

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
