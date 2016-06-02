import React, { Component } from 'react';
import UserItem from '../containers/user_item';
import { fetchAllUsers } from '../actions/index';

import DataLoader from '../components/data_loader';

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
			<ul className="col-md-10">
				{this.createUserMap()}
			</ul>
		);
	}
}


export default DataLoader(UserList,fetchAllUsers,"userList","Loading...");
