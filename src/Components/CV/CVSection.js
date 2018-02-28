import React from 'react';
import makeLink, { getSectionId } from '../../Utilities/MakeLink';
import './css/CVSection.css';

const CVSection = ({ id, title, children }) => {
  const sectionId = makeLink(id || title);

  return (
    <section
      data-section-id={sectionId}
      id={getSectionId(id || title)}
      className="cv-section-container"
    >
      <div className="cv-section">
        {title && <h2 className="cv-section-title"><span>{title}</span></h2>}
        {children}
      </div>
    </section>
  );
};
export default CVSection;