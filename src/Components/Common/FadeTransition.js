import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './css/FadeTransition.css';

const FadeTransition = ({ children, ...rest }) => (
  <CSSTransitionGroup
    {...rest}
    transitionName="fade"
    transitionEnterTimeout={300}
    transitionLeaveTimeout={250}>
    {children}
  </CSSTransitionGroup>
);
export default FadeTransition;