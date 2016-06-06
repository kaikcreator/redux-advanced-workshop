import React, { Component } from 'react';
import UserList from '../components/user_list';
import UserSelected from '../components/user_selected';
import ErrorMsg from '../components/error_msg';

export default class App extends Component {

	render() {
		return (
			<div className="app">
				<ErrorMsg />
				<UserList />
				<UserSelected />
			</div>
		);
	}
}
