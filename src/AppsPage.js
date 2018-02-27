import React, { Component } from 'react';
import makeLink from './Utilities/MakeLink';
import Apps from './Content/Apps';
import Error404Page from './Error404Page';
import FadeTransition from './Components/Common/FadeTransition';
import SelectList from './Components/SelectList';
import ProjectDisplay from './Components/ProjectDisplay';

export default class AppsPage extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    if (!this.props.match.params.appId && nextProps.match.params.appId) {
      // We're selecting something for the first time.
      this.setState({animateAppear: true});
    }
  }

  render() {
    const { animateAppear } = this.state;
    const { appId } = this.props.match.params;
    const lowerAppIdRaw = appId && appId.toLowerCase();
    const lowerAppId = lowerAppIdRaw === 'school-planner' ? 'homework-planner' : lowerAppIdRaw;

    const selectedApp = appId && Apps.find(app => makeLink(app.name).toLowerCase() === lowerAppId);
    if (appId && !selectedApp) {
      return <Error404Page />;
    }

    return (
      <main>
        <SelectList
          className="sticky-sidebar"
          selected={selectedApp && selectedApp.name}
          baseLink="/apps"
          showImage
        >
        {Apps.map(app => app.name)}
        </SelectList>
        {selectedApp &&
        <FadeTransition transitionAppear={animateAppear} className="sidebar-right selected-project">
          <ProjectDisplay key={selectedApp.name} project={selectedApp} />
        </FadeTransition>
        }
      </main>
    );
  }
}