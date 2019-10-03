import React from 'react';
import CVSection from './CVSection';
import CVDetail from './CVDetail';
import './css/OpenSourceSection.css';

const OpenSourceSection = () => (
  <CVSection title="Open Source">
    <p>I'm passionate about the accountability and interactivity that contributing to open source brings. I mostly contribute via GitHub, under the username <a href="https://github.com/hughbe">hughbe</a>. Some projects I have contributed to include:</p>
    <div className="cv-details">
        <CVDetail title=".NET Framework">
        Installed on 1.5 billion devices. I am one of the most active external contributor to the <a href="https://github.com/dotnet/corefx">corefx</a> and <a href="https://github.com/dotnet/winforms">winforms</a> project in terms of pull requests, commits and code changes.
        </CVDetail>
        <CVDetail title="Swift">
        Swift is a programming language developed by Apple. My contributions porting <a href="https://github.com/apple/swift">Swift</a> to Windows made me one of the top 5 contributors to the project.
        </CVDetail>
        <CVDetail title="Giving Back">
        I have published 15 other miscellaneous projects, with over 125 stars on GitHub. I accept code changes and manage bug reports, feature requests and questions.
        </CVDetail>
    </div>
  </CVSection>
);
export default OpenSourceSection;