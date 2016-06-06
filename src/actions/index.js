import { FETCH_ACTION } from './types';
import { CLICK_ACTION } from './types';

import axios from 'axios';

const ROOT_URL = 'http://jsonplaceholder.typicode.com';


export function fetchAllUsers() {
	
	const request = axios.get(`${ROOT_URL}/users`);

	return {
		type: FETCH_ACTION,
		payload: request
	}
}

export function selectUser(id) {

	const request = axios.get(`${ROOT_URL}/users/${id}`);
	return {
		type: CLICK_ACTION,
		payload: request
	}
}
