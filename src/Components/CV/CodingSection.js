import React, { Component } from 'react';
import { findWithLink } from '../../Utilities/MakeLink';
import DividedSelectList from '../DividedSelectList';
import CVSection from './CVSection';
import AppSummary from './AppSummary';
import Apps from '../../Content/Apps';
import './css/CodingSection.css';

const CodingSection = ({ selectedAppId }) => {
  const selectedApp = findWithLink(Apps, selectedAppId);
  return (
    <CVSection title="Coding">
      <p>I <strong>self-taught programming aged 13</strong>, starting with C#. I soon moved onto iOS apps and now enjoy contributing to open source projects.</p>
      <p>I have experience with web technologies such as React, Javascript, HTML and CSS. I've used C#, C++ and Python in <strong>backend and application development</strong>. I also have experience using Python and R for <strong>data analytics and NLP.</strong></p>
      <p>Sharing my knowledge of programming is great fun. I have published <strong>C# tutorials on YouTube</strong> which have gained 30,000 views, and also act as a tutor for application and web development.</p>
      <DividedSelectList
        className="coding-apps"
        selected={selectedApp && selectedApp.name}
        baseLink="/cv/app"
        showImage
        mainDisplay={selectedApp && <AppSummary app={selectedApp} /> }
      >
        {Apps.map(app => app.name)}
      </DividedSelectList>
    </CVSection>
  );
};
export default CodingSection;