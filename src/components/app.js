import React, { Component } from 'react';
import Counter from './counter-comp';
import InputComponent from './input-comp';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Counter />
        <InputComponent />
      </div>
    );
  }
}
