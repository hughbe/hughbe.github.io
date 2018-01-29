import React, { Component } from 'react';
import makeLink from './Utilities/MakeLink';
import CV from './Content/CV';
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
      className="cv-section-container"
    >
      <div className="cv-section">
        {title && <h2 className="cv-section-title"><span>{title}</span></h2>}
        {children}
      </div>
    </section>
  );
}

const CVDetail = ({ title, children }) => (
  <div className="cv-detail">
    <h3 className="cv-detail-title">{title}</h3>
    <p className="cv-detail-description">{children}</p>
  </div>
);

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
    const sectionParams = this.props.match.params.section;
    if (sectionParams) {
      const section = this.getSection(this.props);
      const element = document.getElementById(getSectionId(section));
      const top = element.offsetTop - 10;

      window.$('html,body').animate({scrollTop: `${top}px`});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.section !== prevProps.match.params.section) {
      const section = this.getSection(this.props);
      const element = document.getElementById(getSectionId(section));

      const top = element.offsetTop - 10;
      window.$('html,body').animate({scrollTop: `${top}px`});
    }
  };

  toggleBool = (key) => (event) => {
    event.preventDefault();
    this.setState({[key]: !this.state[key]});
  }

  render() {
    const { epqVisible } = this.state;

    return (
      <main className="cv-page">
        <CVSection title="Hi. I'm Hugh" id="About">
          <p className="introduction-text"><span>I'm a 19 year old student studying Politics, Philosophy and Economics at Oxford University. In my spare time I develop apps, hack on side projects and contribute to open source projects.</span></p>
        </CVSection>
        <CVSection title="Coding">
          <p>I self-taught programming aged 13, starting with C#. I soon moved onto iOS apps and now enjoy contributing to open source projects.</p>
          <p>I have experience with web technologies such as React, Javascript, HTML and CSS. I've used C#, C++ and Python in backend and application development. I also have experience using Python and R for data analytics and NLP.</p>
          <p>Sharing my knowledge of programming is great fun. I have published C# tutorials on YouTube which have gained 30,000 views, and also act as a tutor for application and web development.</p>
          <div className="coding-apps">
            {CV.coding.apps.map(app => <AppSummary key={app.name} app={app} />)}
          </div>
        </CVSection>
        <CVSection title="Open Source">
          <p>Open source software (OSS) is the future of software development. I'm passionate about the accountability and interactivity that OSS brings. I enjoy contributing to and publishing open source software.</p>
          <p>I mostly contribute via GitHub, under the username <a href="https://github.com/hughbe">hughbe</a>. Some projects I have contributed to include:</p>
          <div className="cv-details">
            <CVDetail title=".NET Framework">
              Installed on 1.5 billion devices. I am one of the most active external contributor to the <a href="https://github.com/dotnet/corefx">corefx</a> project in terms of pull requests, commits and code changes.
            </CVDetail>
            <CVDetail title="Swift">
              Swift is a programming language developed by Apple. My contributions porting <a href="https://github.com/apple/swift">Swift</a> to Windows made me one of the top 5 contributors to the project.
            </CVDetail>
            <CVDetail title="Self Published">
              I have published 15 other miscellaneous projects, with over 125 stars on GitHub. I accept code changes and manage bug reports, feature requests and questions.
            </CVDetail>
          </div>
        </CVSection>
        <CVSection title="Academic">
          <div className="cv-details">
            <CVDetail title="A Levels">
              <strong>1A*:</strong> Maths <br />
              <strong>2As:</strong> Chemistry, Economics
            </CVDetail>
            <CVDetail title="Extended Project">
              <strong>A*:</strong> Serbia's democratic and economic transition - which has EU conditionality promoted more? <br />
              Click <a href="#toggleEpq" onClick={this.toggleBool('epqVisible')}>here</a> to reveal the abstract
            </CVDetail>
            <CVDetail title="AS Levels">
              <strong>4 As:</strong> Chemistry, Economics, Maths, Russian
            </CVDetail>
            <CVDetail title="GCSEs">
            <strong>10 A*s:</strong> Maths, English Language, English Literature, Physics, Chemistry, Biology, Latin, Russian, Spanish, Geography
            </CVDetail>
          </div>
          <div className={`${!epqVisible ? 'cv-section-hidden ' : ''}epq-abstract`}>
            <h3>Extended Project Qualification (EPQ)</h3>
            <p>The EPQ is an opportunity for students to demonstrate indepdent study and dissertation writing skills on a topic of their choice.</p>
            <blockquote>
              <p>Serbia has undergone a political and economic transition after the fall of Yugoslavia and Milosevic. The carrot of EU accession and the stick of EU conditionality have aided these transitions immensely. In this dissertation, I shall evaluate the most important benefits from EU conditionality from both a political and economic perspective. Politically, I shall discuss how EU conditionality has helped Serbia's democratic transition through judicial reform, the fight against corruption, the development of regional cooperation within the Western Balkans and the facilitation of social inclusion and improved fundamental rights. Economically, I shall evaluate the effect of Serbia's transition from a command economy to a market based economy focusing on free trade, competition policy and economic reform.</p>
              <p>I will argue that each of these benefits has the potential to facilitate democratic and economic transition in Serbia and include an assessment of the effectiveness of EU conditionality - how much can it achieve and can it potentially hinder democratic or economic transition?</p>
              <p>I conclude that Serbia's democratic transition has been promoted more by EU conditionality than its economic transition, as little would have been achieved democratically without the EU. The main priority of the EU for the Western Balkans region is political stability and the alignment with European democratic standards. It is clear that Serbia's democratic transition also has an economic dimension owing to the increased stability of the country thanks to EU conditionality. Because of this, Serbia will become a more desirable place for investors and businesses, and the lives of its citizens will be improved.</p>
            </blockquote>
            <p>Download: <a href={require('./Content/EPQ/Hugh Bellamy EPQ.pdf')}>PDF</a>; <a href={require('./Content/EPQ/Hugh Bellamy EPQ.docx')}>Word</a></p>
          </div>
        </CVSection>
        <CVSection title="Work & Internships">
          <div className="cv-details">
            {CV.work.map(work => <WorkSummary key={work.name} work={work} />)}
          </div>
        </CVSection>
        <CVSection title="Personal Details">
          <div className="personal-details">
            <h4>You made it to the end, so here's some information about me:</h4>
            <p><strong>Date of Birth:</strong> 08/06/1998</p>
            <p><strong>Location:</strong> London</p>
            <p><strong>Nationality:</strong> UK Citizen</p>
            <p><strong>Email:</strong> <a href="mailto:hughbellars@gmail.com">hughbellars@gmail.com</a></p>
            <p><strong>Skype and Phone:</strong> <a href="mailto:hughbellars@gmail.com">please request</a></p>

            <p><strong>Languages:</strong> {CV.personal.languages}</p>
            <p><strong>Travel:</strong> <span dangerouslySetInnerHTML={{__html: CV.personal.travel}} /></p>
            <p><strong>Sport:</strong> {CV.personal.sport}</p>
            <p><strong>Music:</strong> {CV.personal.music}</p>
          </div>
          <div className="personal-references">
            <h3>References - please ask for contact details:</h3>
            <p><strong>Fabio Fabrizio:</strong> Head of Technology at SYZYGY</p>
            <p><strong>Andrew Sykes:</strong> Senior economics tutor at St Paul's School</p>
          </div>
        </CVSection>
      </main>
    );
  }
}