import React from 'react';
import { Link } from 'react-router-dom';
import makeLink from '../../Utilities/MakeLink';
import './css/AppSummary.css';

const AppSummary = ({ app, ...rest }) => {
  const id = makeLink(app.name);

  return (
    <section {...rest}>
      <div className="app-container">
        <div className="app-image">
          <img
            src={require(`../../Content/Screenshots/${id}/1.png`)}
            alt={app.name}
          />
        </div>
        <div className="app-metadata">
          <div className="app-header">
            <h3 className="app-name">
              <Link to={`/apps/${id}`}>{app.name}</Link>
            </h3>
            <p className="app-price">{app.price}</p>
          </div>
          <small className="app-category"><em>{app.category}</em></small>
          <p
            className="app-description"
            dangerouslySetInnerHTML={{__html: app.shortDescription}}
          />
          <hr />
          <p>{app.downloads} downloads</p>
          <p>{app.milestones}</p>
        </div>
      </div>
    </section>
  );
}
export default AppSummary;