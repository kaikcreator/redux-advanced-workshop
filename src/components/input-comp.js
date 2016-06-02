import React, { Component } from 'react';
import { connect } from 'react-redux';

import {inputActionCreator} from '../actions';

class InputComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {input: ''};
    }
    
    onInputChange = (event) =>{
        this.setState({input: event.target.value});
    }
    
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.inputActionCreator(this.state.input);
        this.setState({input:''});
    }
  
    render(){
      return(
        <div className="button-a"> 
          <h2>Input component</h2>
          <form className="form-inline" onSubmit={this.onSubmit}>
            <input type="text" className="form-control"
                    value={this.state.input} 
                    onChange={this.onInputChange}/>
            <button type="submit" className="btn btn-default">Click here</button>
            <label>Text introduced: {this.props.input}</label>
          </form>
        </div>
      );
    }
}

function mapStateToProps(state){
  return {input: state.input};
}
  
//const ReduxInputComponent = connect(mapStateToProps, increaseActionCreator)(CounterComponent);
export default connect(mapStateToProps, {inputActionCreator})(InputComponent);
