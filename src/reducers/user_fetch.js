import { FETCH_ACTION } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ACTION:
			return action.payload.data;
		default:
			return state;
	}
}
