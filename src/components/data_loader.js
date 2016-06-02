import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default function(Component, actionCreator, dataName, message) {

  class DataLoader extends Component {
    constructor(props) {
      super(props);
      this.state = {loaded: false};
    }

    componentWillMount() {
      const {actionCreator} = this.props;

      if(actionCreator){
        actionCreator();
      }
    }

    componentDidUpdate() {
      if(!this.state.loaded && this.props[dataName]) {
        this.setState({loaded: true});
      }
    }

    render() {
      if (!this.state.loaded) {
        return <span>{message}</span>;
      }
      return <Component {...this.props} />
    }
  }

  function mapStateToProps(state) {
  	return {
  		[dataName]: state[dataName]
  	}
  }

  function mapDispatchToProps(dispatch) {
  	return bindActionCreators({ actionCreator }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(DataLoader);
}
