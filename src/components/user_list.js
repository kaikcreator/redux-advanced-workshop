import React, { Component } from 'react';
import UserItem from './user_item';
import { fetchAllUsers } from '../actions/index';

import DataLoader from './data_loader';

class UserList extends Component {

	createUserMap() {
		return this.props.userList.map(user => {
			return (
				<UserItem key={user.id} user={user} />
			);
		});
	}

	render() {
		return (
			<ul className="user-list, col-md-10">
				{this.createUserMap()}
			</ul>
		);
	}
}


export default DataLoader(UserList,fetchAllUsers,"userList","Loading...");
