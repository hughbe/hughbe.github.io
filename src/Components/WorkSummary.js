import React, { Component } from 'react';
import './css/WorkSummary.css';

export default class WorkSummary extends Component {
  render() {
    const { work } = this.props;
    let title;
    if (work.title || work.location) {
      title = `${work.title ? work.title : ''}${work.title && work.location ? ': ' : ''}${work.location} (${work.duration})`;
    } else {
      title = work.duration;
    }

    return (
      <div className="work-summary cv-detail">
        <h3 className="work-name">
          <a href={work.url}>{work.name}</a>
        </h3>
        <p>{title}</p>
        <div
          className="work-description"
          dangerouslySetInnerHTML={{__html: work.description}} />
      </div>
    );
  }
}