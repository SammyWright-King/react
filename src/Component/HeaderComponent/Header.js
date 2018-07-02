import React, { Component } from 'react';
import style from './head.css';
import {
  Link} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
        <header>
          <div className="logo">
            LOGO
          </div>
          <ul className="links">
            <li><Link to="HomePage">Home</Link></li>
            <li><Link to="Login">Login</Link></li>
            <li><Link to="Signup">Signup</Link></li>
          </ul>
        </header>
    );
  }
}

export default Header;
