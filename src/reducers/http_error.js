import { HTTP_ERROR_ACTION } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case HTTP_ERROR_ACTION:
            console.log("http error payload ", action.payload);
			return action.payload;
		default:
			return state;
	}
}
