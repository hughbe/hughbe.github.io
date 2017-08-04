import React, { Component } from 'react';
import './css/WorkSummary.css';

export default class WorkSummary extends Component {
  render() {
    const { work } = this.props;

    return (
      <div className="work-summary bordered-box">
        <div className="work-header">
          <h3 className="work-name">
            <a className="dotted-link" href={work.url}>{work.name}</a>
          </h3>
          <div className="work-duration">{work.duration}</div>
        </div>
        {work.title && work.location &&
        <div className="work-header">
          <p className="work-title">{work.title}</p>
          <p className="work-location">{work.location}</p>
        </div>
        }
        <div
          className="work-description"
          dangerouslySetInnerHTML={{__html: work.description}} />
      </div>
    );
  }
}