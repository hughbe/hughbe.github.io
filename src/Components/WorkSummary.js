import React from 'react';
import './css/WorkSummary.css';

const WorkSummary = ({ work }) => (
  <div className="work-summary bordered-box">
    <div className="work-header">
      <h3 className="work-name">{work.name}</h3>
      <div className="work-duration">{work.duration}</div>
    </div>
  </div>
);
export default WorkSummary;