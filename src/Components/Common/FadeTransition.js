import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './css/FadeTransition.css';

const FadeTransition = ({ children, ...rest }) => (
  <CSSTransitionGroup
    transitionName="fade"
    transitionAppearTimeout={1000}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={250}
    {...rest}
  >
    {children}
  </CSSTransitionGroup>
);
export default FadeTransition;