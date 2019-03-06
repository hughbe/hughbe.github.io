import React, { Component } from 'react';
import CVSection from './CVSection';
import CVDetail from './CVDetail';
import './css/AcademicSection.css';

export default class AcademicSection extends Component {
  state = {};

  toggleBool = (key) => (event) => {
    event.preventDefault();
    this.setState({[key]: !this.state[key]});
  }

  render() {
    const { epqVisible } = this.state

    return (
      <CVSection title="Academic">
        <div className="cv-details">
          <CVDetail title="University">
            <strong>Prelimary Examinations:</strong> Class 2(1) <br />
            <strong>Q-Step Data Science Module:</strong> Class 1
          </CVDetail>
          <CVDetail title="Extended Project">
            <strong>A*:</strong> Serbia's democratic and economic transition - which has EU conditionality promoted more? <br />
            Click <a href="#toggleEpq" onClick={this.toggleBool('epqVisible')}>here</a> to reveal the abstract
          </CVDetail>
          <CVDetail title="School">
            <strong>A Levels:</strong> 1A*, 2As; Maths, Chemistry, Economics <br /><br />
            <strong>AS Levels:</strong> 4As; Chemistry, Economics, Maths, Russian <br /><br />
            <strong>GCSEs:</strong> 10A*s
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
          <p>Download: <a href={require('../../Content/EPQ/Hugh Bellamy EPQ.pdf')}>PDF</a>; <a href={require('../../Content/EPQ/Hugh Bellamy EPQ.docx')}>Word</a></p>
        </div>
      </CVSection>
    );
  }
}