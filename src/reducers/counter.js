import {INCREASE_ACTION, DECREASE_ACTION} from '../actions/types';

export const counter = (state=0, action) => {
  switch (action.type){
    case INCREASE_ACTION:
    case DECREASE_ACTION:
      return state + action.payload; 
  }
  
  return state;
}