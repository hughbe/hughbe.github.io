import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import FadeTransition from './Common/FadeTransition';
import SelectList from './SelectList';
import './css/DividedSelectList.css';

const DividedSelectList = ({ mainDisplay, mainClassName, selected, ...rest }) => (
  <main className={`divided-select-list${selected ? ' selected' : ''}`}>
    <SelectList selected={selected} {...rest} />
    <TransitionGroup className="main-display">
    {selected &&
    <FadeTransition key={selected} className={mainClassName}>
      {mainDisplay}
    </FadeTransition>
    }
    </TransitionGroup>
  </main>
);
export default DividedSelectList;
