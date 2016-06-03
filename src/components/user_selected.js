import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSelected extends Component {

	render() {

		const { selectedUser } = this.props;

		if (!selectedUser) {
			return <span>No user selected</span>;
		}

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

function mapStateToProps(state) {
	return {
		selectedUser: state.selectedUser
	}
}

export default connect(mapStateToProps)(UserSelected);
