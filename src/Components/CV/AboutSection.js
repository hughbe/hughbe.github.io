import React from 'react';
import CVSection from './CVSection';
import './css/AboutSection.css';

const AboutSection = () => (
  <CVSection title="Hi. I'm Hugh" id="About">
      <p className="introduction-text"><span>I'm a 20 year old student studying Philosophy, Politics and Economics at Oxford University. In my spare time I develop apps, hack on side projects and contribute to open source projects.</span></p>
  </CVSection>
);
export default AboutSection;