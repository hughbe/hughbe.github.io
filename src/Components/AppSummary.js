import React from 'react';
import { Link } from 'react-router-dom';
import makeLink from '../Utilities/MakeLink';
import './css/AppSummary.css';

const AppSummary = ({ app }) => (
  <div className="app-summary bordered-box">
    <div className="app-header">
      <h3 className="app-name">
        <Link className="dotted-link" to={`/apps/${makeLink(app.name)}`}>{app.name}</Link>
      </h3>
      <p className="app-price">{app.price}</p>
    </div>
    <small className="app-category"><em>{app.category}</em></small>
    <p className="app-description">{app.description}</p>
    <hr />
    <p className="app-downloads">{app.downloads} downloads</p>
    <p className="app-milestones">{app.milestones}</p>
  </div>
);
export default AppSummary;