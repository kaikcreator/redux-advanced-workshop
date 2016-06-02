import React from 'react';
import { connect } from 'react-redux';
import { increaseActionCreator, decreaseActionCreator } from '../actions';

const CounterComponent = (props) => {
    return (
      <div className="counter-component"> 
        <h2>Counter component</h2>
        <label>Counter: {props.counter}</label>
        <button type="submit" className="btn btn-default"
          onClick={props.increaseActionCreator}> + </button>        
        <button type="submit" className="btn btn-default"
          onClick={props.decreaseActionCreator}> - </button>
      </div>
    ) 
}

function mapStateToProps(state){
  return {counter: state.counter};
}
  
//const ReduxCounterComponent = connect(mapStateToProps, increaseActionCreator)(CounterComponent);
export default connect(mapStateToProps, {increaseActionCreator, decreaseActionCreator})(CounterComponent);
