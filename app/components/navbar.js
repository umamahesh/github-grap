import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Navbar() {

	return (
    <ul className="nav">  
      <li className="nav-link">
        <NavLink exact activeClassName='active' to="/">
          Home
        </NavLink>
      </li>

      <li className="nav-link">
        <NavLink activeClassName='active' to="/popular">
          Popular
        </NavLink>
      </li>
    </ul>
	)
}