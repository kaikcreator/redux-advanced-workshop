import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions';

import { bindActionCreators } from 'redux';

class UserItem extends Component {

  onUserSelect(event) {
    this.props.selectUser(this.props.user.id);
  }

  render() {
    return (
      <div
    		className="col-md-3 user-item"
    		key={this.props.user.id}
        onClick={ this.onUserSelect.bind(this) } >
    		<span>{this.props.user.name}</span>
    	</div>
    );
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectUser }, dispatch);
}

export default connect(null,mapDispatchToProps)(UserItem);
