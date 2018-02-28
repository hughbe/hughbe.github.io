import React from 'react';
import CVSection from './CVSection';
import WorkSummary from './WorkSummary';
import Work from '../../Content/CV/Work';
import './css/WorkSection.css';

const WorkSection = () => (
  <CVSection title="Work & Internships">
    <div className="work-history">
      {Work.map(work => <WorkSummary key={work.name} work={work} />)}
    </div>
  </CVSection>
);
export default WorkSection;