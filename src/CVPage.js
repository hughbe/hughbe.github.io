import React, { Component } from 'react';
import makeLink, { getSectionId } from './Utilities/MakeLink';
import CV from './Content/CV';
import AboutSection from './Components/CV/AboutSection';
import CodingSection from './Components/CV/CodingSection';
import OpenSourceSection from './Components/CV/OpenSourceSection';
import AcademicSection from './Components/CV/AcademicSection';
import WorkSection from './Components/CV/WorkSection';
import './css/CVPage.css';
import PersonalDetailsSection from './Components/CV/PersonalDetailsSection';

export default class CVPage extends Component {
  getSection = (section) => {
    const lowerSection = section && section.toLowerCase();

    if (!CV.sections.some(s => makeLink(s.toLowerCase()) === lowerSection)) {
      return CV.sections[0];
    }

    return section;
  }

  componentDidMount() {
    const sectionParams = this.props.match.params.section;
    if (sectionParams) {
      const section = this.getSection(sectionParams);
      const element = document.getElementById(getSectionId(section));
      const top = element.offsetTop;

      window.$('html,body').animate({scrollTop: `${top}px`});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.section !== prevProps.match.params.section) {
      const section = this.getSection(this.props.match.params.section);
      const element = document.getElementById(getSectionId(section));

      const top = element.offsetTop;
      window.$('html,body').animate({scrollTop: `${top}px`});
    }
  };

  render() {
    return (
      <main className="cv-page">
        <AboutSection />
        <CodingSection selectedAppId={this.props.match.params.appId} />
        <OpenSourceSection />
        <AcademicSection />
        <WorkSection />
        <PersonalDetailsSection />
      </main>
    );
  }
}