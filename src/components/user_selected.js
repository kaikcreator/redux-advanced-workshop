import React, { Component } from 'react';
import DataLoader from './data_loader';

class UserSelected extends Component {

	render() {

		const { selectedUser } = this.props;

		return (
			<div className="user-selected">
				<div className="email">Email: {selectedUser.email}</div>
				<div>Phone: {selectedUser.phone}</div>
				<div>Address: {`${selectedUser.address.street} ${selectedUser.address.suite}`}</div>
				<div>City: {selectedUser.address.city}</div>
				<div>ZIP: {selectedUser.address.zipcode}</div>
				<div>Website: {selectedUser.website}</div>
				<div>Company: {selectedUser.company.name}</div>
			</div>
		);
	}
}

export default DataLoader(UserSelected, null, "selectedUser", "No user selected");
