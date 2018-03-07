import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './css/FadeTransition.css';

const FadeTransition = (props) => (
  <CSSTransition
    {...props}
    classNames="fade"
    timeout={{ enter: 500, exit: 300 }}
  />
);
export default FadeTransition;