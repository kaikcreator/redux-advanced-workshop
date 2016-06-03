import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserSelected extends Component {

	render() {

		const { selectedUser } = this.props;

		if (!selectedUser) {
			return <div>No user selected</div>;
		}

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

function mapStateToProps(state) {
	return {
		selectedUser: state.selectedUser
	}
}

export default connect(mapStateToProps)(UserSelected);
