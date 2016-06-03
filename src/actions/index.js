import { FETCH_ACTION } from './types';
import { CLICK_ACTION } from './types';
import users from '../resources/users';


export function fetchAllUsers() {

	return {
		type: FETCH_ACTION,
		payload: users
	}
}

export function selectUser(id) {

	let selected;

	for (const user of users) {
		if(user.id === id) {
			selected = user;
			break;
		}
	}

	return {
		type: CLICK_ACTION,
		payload: selected
	}
}
