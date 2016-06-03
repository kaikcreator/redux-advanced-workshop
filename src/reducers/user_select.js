import { CLICK_ACTION } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case CLICK_ACTION:
			return action.payload;
		default:
			return state;
	}
}
