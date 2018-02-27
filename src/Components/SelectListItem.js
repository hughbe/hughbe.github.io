import React from 'react';
import { Link } from 'react-router-dom';
import makeLink from '../Utilities/MakeLink';
import './css/SelectListItem.css';

const SelectListItem = ({ selected, showImage, baseLink, name }) => (
    <li className={`${selected ? 'selected ' : ''}select-list-item`} >
      {showImage &&
        <img
          src={require(`../Content/Logos/${name}.png`)}
          width="75"
          height="75"
          alt={name}
        />
      }
      <Link to={`${baseLink}/${makeLink(name)}`}>{name}</Link>
    </li>
)
export default SelectListItem;