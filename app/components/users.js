var React = require('react');
import PropTypes from 'prop-types';

export default class Users extends React.Component {

  render() {
  	return (      
      <ul>
        {this.props.list.map(function(name){
        	return <li key={name}>{name}</li>
        })}
      </ul>
  	);
  }
}

Users.PropTypes ={
	list : PropTypes.array.isRequired
}