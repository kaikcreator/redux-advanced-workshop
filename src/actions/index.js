import {INCREASE_ACTION, DECREASE_ACTION, INPUT_ACTION} from './types';


export function increaseActionCreator(){
  return{
    type: INCREASE_ACTION,
    payload: 1
  }
}

export function decreaseActionCreator(){
  return{
    type: DECREASE_ACTION,
    payload: -1
  }
}

export function inputActionCreator(input){
  return{
    type: INPUT_ACTION,
    payload: input
  }
}