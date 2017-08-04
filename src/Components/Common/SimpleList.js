import React from 'react';

const SimpleList = ({ children, ...rest }) => (
  <ul {...rest}>
    {children.map((child, index) => <li key={index}>{child}</li>)}
  </ul>
);
export default SimpleList;