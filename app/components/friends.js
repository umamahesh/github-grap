import React from 'react';
import PropTypes from 'prop-types';

export default class Friends extends React.Component {

  render() {
  	return (
  		<div>
  		Freinds Component<br/>
	  		<ul>
	  		  {this.props.list.filter( function(user){
            return user.friend === true
	  		  }).map( function(user, index){
            return <li key={index}>{user.name}</li>
	  		  })}
	  		</ul>
  		</div>
  		);
  }

}

Friends.PropTypes = {
	list: PropTypes.array.isRequired
}