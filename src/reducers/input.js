import {INPUT_ACTION} from '../actions/types';

export const inputReducer = (state='', action) => {
  switch (action.type){
    case INPUT_ACTION:
      return action.payload; 
  }
  
  return state;
}