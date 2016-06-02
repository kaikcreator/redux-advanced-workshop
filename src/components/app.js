import React, { Component } from 'react';
import UserList from '../containers/user_list';
import UserSelected from '../containers/user_selected';

export default class App extends Component {

	render() {
		return (
			<div>
				<UserList />
				<UserSelected />
			</div>
		);
	}
}
