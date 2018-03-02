import React, { Component } from 'react';
import { findWithLink } from '../../Utilities/MakeLink';
import FadeTransition from '../Common/FadeTransition';
import SelectList from '../SelectList';
import CVSection from './CVSection';
import AppSummary from './AppSummary';
import Apps from '../../Content/Apps';
import './css/CodingSection.css';

export default class CodingSection extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    if (!this.props.selectedAppId && nextProps.selectedAppId) {
      // We're selecting something for the first time.
      this.setState({animateAppear: true});
    }
  }

  render() {
    const selectedApp = findWithLink(Apps, this.props.selectedAppId);

    return (
      <CVSection title="Coding">
        <p>I <strong>self-taught programming aged 13</strong>, starting with C#. I soon moved onto iOS apps and now enjoy contributing to open source projects.</p>
        <p>I have experience with web technologies such as React, Javascript, HTML and CSS. I've used C#, C++ and Python in <strong>backend and application development</strong>. I also have experience using Python and R for <strong>data analytics and NLP.</strong></p>
        <p>Sharing my knowledge of programming is great fun. I have published <strong>C# tutorials on YouTube</strong> which have gained 30,000 views, and also act as a tutor for application and web development.</p>
        <div className="coding-apps-container">
          <SelectList
            className="coding-apps"
            selected={selectedApp && selectedApp.name}
            baseLink="/cv/app"
            showImage
          >
            {Apps.map(app => app.name)}
          </SelectList>
          {selectedApp &&
          <FadeTransition className="app-summary" transitionAppear={this.state.animateAppear}>
            <AppSummary key={selectedApp.name} app={selectedApp} />
          </FadeTransition>
          }
        </div>
      </CVSection>
    );
  }
}