import React from 'react';
import makeLink from '../Utilities/MakeLink';
import SelectListItem from './SelectListItem';
import './css/SelectList.css';

const SelectList = ({ className, selected, children, ...other }) => (
  <section className={`select-list ${selected ? ' has-selection' : ''}${className ? ` ${className}` : ''}`}>
    {children && children.map(child => 
      <SelectListItem
        key={child}
        selected={selected && makeLink(selected.toLowerCase()) === makeLink(child.toLowerCase())}
        name={child}
        {...other}
      />
    )}
  </section>
)
export default SelectList;