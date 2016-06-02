import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataLoader from '../components/data_loader';

class UserSelected extends Component {

	render() {

		const { selectedUser } = this.props;

		return (
			<div class="user-selected">
				<span>Email: {selectedUser.email}</span>
				<span>Phone: {selectedUser.phone}</span>
				<span>Address: {`${selectedUser.address.street} ${selectedUser.address.suite}`}</span>
				<span>City: {selectedUser.address.city}</span>
				<span>ZIP: {selectedUser.address.zipcode}</span>
				<span>Website: {selectedUser.website}</span>
				<span>Company: {selectedUser.company.name}</span>
			</div>
		);
	}
}

export default DataLoader(UserSelected,null,"selectedUser","No user selected");
