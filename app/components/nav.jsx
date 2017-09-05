import React, { Component } from 'react';
import {IndexLink,Link} from 'react-router';

class Nav extends Component{
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
              <IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to = "/Countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href ="https://github.com/Calvo94" target="_blank">Said Mançouri</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = Nav;
