import React from 'react';
import CVSection from './CVSection';
import CVDetail from './CVDetail';
import './css/PersonalDetailsSection.css';

const PersonalDetailsSection = () => (
  <CVSection title="Personal Details">
    <h4>You made it to the end, so here's some information about me:</h4>
    <div className="cv-details">
      <CVDetail title="The Boring Stuff">
        <p><strong>Date of Birth:</strong> 08/06/1998</p>
        <p><strong>Location:</strong> London</p>
        <p><strong>Nationality:</strong> UK Citizen</p>
      </CVDetail>
      <CVDetail title="Contact">
        <p><strong>Email:</strong> <a href="mailto:hughbellars@gmail.com">hughbellars@gmail.com</a></p>
        <p><strong>Skype and Phone:</strong> <a href="mailto:hughbellars@gmail.com">please request</a></p>
      </CVDetail>
      <CVDetail title="The Fun Stuff">
        <p><strong>Sport:</strong> Tennis, golf, fives, rackets, squash, skiing</p>
        <p><strong>Music:</strong> Grade 5 saxophone, singing</p>
        <p><strong>Languages:</strong> Written and spoken Russian, Serbian</p>
        <p><strong>Travel:</strong> Vietnam, Cambodia, Thailand, Laos, Myanmar, India, Sri Lanka, Syria, Jordan, Egypt, Israel, Tanzania, Russia, USA, Continental Europe</p>
      </CVDetail>
      <CVDetail title="References - please ask for contact details">
        <p><strong>Fabio Fabrizio:</strong> Head of Technology at SYZYGY</p>
        <p><strong>Andrew Sykes:</strong> Senior economics tutor at St Paul's School</p>
      </CVDetail>
    </div>
  </CVSection>
);
export default PersonalDetailsSection;