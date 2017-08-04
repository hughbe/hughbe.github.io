import React from 'react';
import { Link } from 'react-router-dom';
import makeLink from '../Utilities/MakeLink';
import './css/SelectList.css';

const SelectList = ({ selected, baseLink, showImage, children }) => (
  <section className={`select-list sticky-sidebar${selected ? ' has-selection' : ''}`}>
    {children && children.map(child => (
      <li
        key={child}
        className={selected && makeLink(selected.toLowerCase()) === makeLink(child.toLowerCase()) ? 'selected' : ''}
      >
        {showImage &&
          <img
            src={require(`../Content/Logos/${child}.png`)}
            width="75"
            height="75"
            alt={child}
          />
        }
        <Link to={`${baseLink}/${makeLink(child)}`}>{child}</Link>
      </li>
    ))}
  </section>
)
export default SelectList;