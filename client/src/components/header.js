/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions';
import './header.css';

class Header extends Component {
  getLinks() {
    if (this.props.authenticated) {
      return (
        <div className="navlinks">
          <Link to="/" onClick={this.props.logout} className="navlinks__button">Sign Out</Link>
        </div>
      );
    }
    return (
      <div className="navlinks">
        <Link to="/signin" className="navlinks__button">Sign In</Link>
        <Link to="/signup" className="navlinks__button">Sign Up</Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getLinks()}
      </div>
    );
  }
}


export default connect(null, { logout })(Header);
