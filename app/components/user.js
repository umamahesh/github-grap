import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.Component {

  render() {
  	return (
  		<div> 
  		  This is User Component<br/>
  		  Name: {this.props.name}<br/>
  		  Role: {this.props.role}<br/>
  		  Profile: <img src={this.props.image}/>
  		</div>
  	)
  }
}

User.PropTypes = {
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
}