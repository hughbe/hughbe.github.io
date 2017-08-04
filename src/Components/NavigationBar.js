import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/NavigationBar.css';

export default class NavigationBar extends Component {
  render() {
    return (
      <nav className="navigation-bar">
        <div>
          <Link to="/apps">Apps</Link>
          <Link to="/open-source">Open Source</Link>
          <Link to="/cv">CV</Link>
        </div>
        <div>
          <a href="https://github.com/hughbe">GitHub</a>
          <a href="https://itunes.apple.com/gb/developer/hugh-bellamy/id505295952">App Store</a>
        </div>
      </nav>
    );
  }
}