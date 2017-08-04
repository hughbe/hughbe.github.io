import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AppsPage from './AppsPage';
import OpenSourceProjectsPage from './OpenSourceProjectsPage';
import CVPage from './CVPage';
import Error404Page from './Error404Page';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/apps/:appId?" component={AppsPage} />
          <Route path="/open-source/:projectId?" component={OpenSourceProjectsPage} />
          <Route path="/resume/:section?" component={CVPage} />
          <Route path="/cv/:section?" component={CVPage} />
          <Route component={Error404Page} />
        </Switch>
      </Router>
    );
  }
}