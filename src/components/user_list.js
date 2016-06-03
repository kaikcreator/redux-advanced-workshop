import React, { Component } from 'react';
import UserItem from './user_item';
import { fetchAllUsers } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserList extends Component {

	componentWillMount() {
		this.props.fetchAllUsers();
	}

	createUserMap() {
		return this.props.userList.map(user => {
			return (
				<UserItem key={user.id} user={user} />
			);
		});
	}

	render() {
		if (!this.props.userList) {
			return <span>"Loading..."</span>;
		}
		return (
			<ul className="col-md-10">
				{this.createUserMap()}
			</ul>
		);
	}
}


function mapStateToProps(state) {
	return {
		userList: state.userList
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchAllUsers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
