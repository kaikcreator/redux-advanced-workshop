import React, { Component } from 'react';
import UserList from '../components/user_list';
import UserSelected from '../components/user_selected';

export default class App extends Component {

	render() {
		return (
			<div className="app">
				<UserList />
				<UserSelected />
			</div>
		);
	}
}
