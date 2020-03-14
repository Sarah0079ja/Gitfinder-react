import React from 'react';
import PropTypes from 'prop-types';
// import {fab fa-github} from "@fortawesome/react-fontawesome";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
// import './users/User.css';
import {Link} from 'react-router-dom';
 import '../../App.css'

const Navbar = ({ icon, title}) => {
  // var FontAwesome = require("react-fontawesome");
    return (
      <nav className = 'navbar'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    );
};
 
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
};

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
};
export default Navbar