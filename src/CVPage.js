import React, { Component } from 'react';
import makeLink from './Utilities/MakeLink';
import CV from './Content/CV';
import SelectList from './Components/SelectList';
import AppSummary from './Components/AppSummary';
import WorkSummary from './Components/WorkSummary';
import './css/CVPage.css';

const getSectionId = (title) => `${makeLink(title.toLowerCase())}-section`;

const CVSection = ({ id, title, children }) => {
  const sectionId = makeLink(id || title);

  return (
    <section
      data-section-id={sectionId}
      id={getSectionId(id || title)}
      className="cv-section"
    >
      {title && <h2 className="cv-section-title"><span>{title}</span></h2>}
      {children}
    </section>
  );
}

export default class CVPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {section: this.getSection(props)};
  }

  getSection = (props) => {
    let section = props.match.params.section;
    const lowerSection = section && section.toLowerCase();

    if (!CV.sections.some(s => makeLink(s.toLowerCase()) === lowerSection)) {
      return CV.sections[0];
    }

    return section;
  }

  componentDidMount() {
    const section = this.getSection(this.props);
    const element = document.getElementById(getSectionId(section));
    const top = element.offsetTop - 10;

    window.addEventListener('scroll', this.handleScrolled);
    window.$('html,body').animate({scrollTop: `${top}px`});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrolled);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.section !== prevProps.match.params.section) {
      const section = this.getSection(this.props);
      const element = document.getElementById(getSectionId(section));

      const top = element.offsetTop - 10;
      window.$('html,body').animate({scrollTop: `${top}px`});
    }
  };

  handleScrolled = (event) => {
    const top  = window.pageYOffset || document.documentElement.scrollTop;
    const finalElements = [...document.getElementsByClassName('cv-section')].filter(element => {
      if (element.nextSibling) {
        return element.offsetTop < top + 100;
      } else {
        return element.offsetTop + element.offsetHeight < top + window.innerHeight;
      }
    });
    const finalElement = finalElements.length > 0 && finalElements[finalElements.length - 1];
    if (finalElement) {
      const sectionId = finalElement.getAttribute('data-section-id');
      if (this.state.section !== sectionId) {
        this.setState({section: sectionId});
      }
    }
  }

  render() {
    const { section } = this.state;

    return (
      <main className="cv-page">
        <SelectList baseLink="/cv" selected={section}>
          {CV.sections}
        </SelectList>
        <section className="sidebar-right">
          <CVSection title="Hi." id="About">
            <h3>I'm Hugh.</h3>
            <p className="introduction-text"><span>I'm a 19 year old student studying Politics, Philosophy and Economics at Oxford University. In my spare time I develop apps, hack on side projects and contribute to open source projects.</span></p>
          </CVSection>
          <CVSection title="Coding">
            <p>I self-taught programming aged 13, starting with C#. I soon moved onto iOS apps and now enjoy contributing to open source projects.</p>
            <p>Languages: {CV.coding.languages}</p>
            <p>Teaching: {CV.coding.teaching}</p>
            <div className="coding-apps">
              {CV.coding.apps.map(app => <AppSummary key={app.name} app={app} />)}
            </div>
            <div className="coding-open-source">
              <div className="bordered-box">
                <p>Open source software (OSS) is the future of software development. I'm passionate about the accountability and interactivity that OSS brings. I enjoy contributing to and publishing open source software.</p>
                <p>I mostly contribute via GitHub, under the username <a href="https://github.com/hughbe">hughbe</a>.</p>
                <hr />
                <p>Some projects I have contributed to include:</p>
                <ul>
                  <li>.NET Framework: installed on 1.5 billion devices. So far in 2016, I am one of the most active external contributor to the <a href="https://github.com/dotnet/corefx">corefx</a> project in terms of pull requests, commits and code changes.</li>
                  <li>15 other miscellaneous self-published projects, with over 125 stars on GitHub.</li>
                </ul>
              </div>
            </div>
          </CVSection>
          <CVSection title="Academic">
            <div className="academic-results">
              <p>A Levels <span className="academic-result"><strong>1A*:</strong> Maths; <strong>2As:</strong> Chemistry, Economics</span></p>
              <p>Extended Project <span className="academic-result"><strong>A*:</strong> Serbia's democratic and economic transition - which has EU conditionality promoted more?</span></p>
              <p>AS Levels <span className="academic-result"><strong>4 As:</strong> Chemistry, Economics, Maths, Russian</span></p>
              <p>GCSEs <span className="academic-result"><strong>10 A*s:</strong> Maths, English Language, English Literature, Physics, Chemistry, Biology, Latin, Russian, Spanish, Geography</span></p>
            </div>
            <div className="epq">
              <h3>Extended Project Qualification (EPQ)</h3>
              <p>The EPQ is an opportunity for students to demonstrate indepdent study and dissertation writing skills on a topic of their choice.</p>
              <h3>Serbia's democratic and economic transition - which has EU conditionality promoted more?</h3>
              <blockquote>
                <p>Serbia has undergone a political and economic transition after the fall of Yugoslavia and Milosevic. The carrot of EU accession and the stick of EU conditionality have aided these transitions immensely. In this dissertation, I shall evaluate the most important benefits from EU conditionality from both a political and economic perspective. Politically, I shall discuss how EU conditionality has helped Serbia's democratic transition through judicial reform, the fight against corruption, the development of regional cooperation within the Western Balkans and the facilitation of social inclusion and improved fundamental rights. Economically, I shall evaluate the effect of Serbia's transition from a command economy to a market based economy focusing on free trade, competition policy and economic reform.</p>
                <p>I will argue that each of these benefits has the potential to facilitate democratic and economic transition in Serbia and include an assessment of the effectiveness of EU conditionality - how much can it achieve and can it potentially hinder democratic or economic transition?</p>
                <p>I conclude that Serbia's democratic transition has been promoted more by EU conditionality than its economic transition, as little would have been achieved democratically without the EU. The main priority of the EU for the Western Balkans region is political stability and the alignment with European democratic standards. It is clear that Serbia's democratic transition also has an economic dimension owing to the increased stability of the country thanks to EU conditionality. Because of this, Serbia will become a more desirable place for investors and businesses, and the lives of its citizens will be improved.</p>
              </blockquote>
              <p>Download: <a href={require('./Content/EPQ/Hugh Bellamy EPQ.pdf')}>PDF</a>; <a href={require('./Content/EPQ/Hugh Bellamy EPQ.docx')}>Word</a></p>
            </div>
          </CVSection>
          <CVSection title="Work/Internships">
            <div className="work-history">
              {CV.work.map(work => <WorkSummary key={work.name} work={work} />)}
            </div>
            <div className="work-referees">
              <h3>Referees</h3>
              <p><strong>Fabio Fabrizio:</strong> Head of Technology at SYZYGY</p>
              <p><strong>Andrew Sykes:</strong> Senior economics tutor at St Paul's School</p>
            </div>
          </CVSection>
          <CVSection title="Personal">
            <h4>Here's some information about me:</h4>
            <p>Date of Birth: 08/06/1998</p>
            <p>Location: London</p>
            <p>Nationality: UK Citizen</p>
            <p>Email: <a href="mailto:hughbellars@gmail.com">hughbellars@gmail.com</a></p>
            <p>Skype and Phone: <a href="mailto:hughbellars@gmail.com">please request</a></p>

            <p><strong>Languages:</strong> {CV.personal.languages}</p>
            <p><strong>Travel:</strong> {CV.personal.travel}</p>
            <p><strong>Sport:</strong> {CV.personal.sport}</p>
            <p><strong>Music:</strong> {CV.personal.music}</p>
          </CVSection>
        </section>
      </main>
    );
  }
}