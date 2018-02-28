import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import makeLink from '../../Utilities/MakeLink';
import './css/WorkSummary.css';

export default class WorkSummary extends Component {
  state = {}
  
  onClick = (event) => {
    event.preventDefault();

    const { work } = this.props;
    this.setState({[work.name]: !this.state[work.name]});
  }

  render() {
    const { work, selected } = this.props;
    let title;
    if (work.title || work.location) {
      title = `${work.title ? work.title : ''}${work.title && work.location ? ': ' : ''}${work.location} (${work.duration})`;
    } else {
      title = work.duration;
    }

    const actuallySelected = selected || this.state[work.name] || true;
    return (
      <div className={`${actuallySelected ? 'selected ' : ''}work-history-item`} key={work.name}>
        <div className="work-image">
          <Link to={`/cv/work/${makeLink(work.name)}`} onClick={this.onClick}>
            <img
              src={require(`../../Content/Logos/${work.name}.png`)}
              alt={work.name}
            />
          </Link>
        </div>
        {actuallySelected &&
          <div className="work-details cv-detail">
            <h3 className="work-name">
              <a href={work.url}>{work.name}</a>
            </h3>
            <p><strong>{title}</strong></p>
            <div
              className="work-description"
              dangerouslySetInnerHTML={{__html: work.description}} />
          </div>
        }
      </div>
    );
  }
}