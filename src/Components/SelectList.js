import React from 'react';
import makeLink from '../Utilities/MakeLink';
import SelectListItem from './SelectListItem';
import './css/SelectList.css';

const SelectList = ({ selected, children, ...other }) => (
  <section className={`select-list sticky-sidebar${selected ? ' has-selection' : ''}`}>
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