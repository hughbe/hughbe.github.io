import React from 'react';
import makeLink from '../Utilities/MakeLink';
import SimpleList from './Common/SimpleList';
import './css/ProjectDisplay.css';

const ProjectDisplaySection = ({ title, id, children }) => (
  <div className={`selected-project-section selected-project-${id}`}>
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

const ProjectDisplay = ({ project, ...rest }) => {
  const id = makeLink(project.name);
  const screenshots = [];
  for (var i = 1; i <= project.screenshots; i++) {
    const src = require(`../Content/Screenshots/${id}/${i}.png`);
    screenshots.push(<div key={i}><img src={src} alt={i} /></div>);
  }

  return (
    <section {...rest}>
      <ProjectDisplaySection id="metadata">
        <div className="selected-project-header">
          <span className="selected-project-links">
          {project.itunesUrl &&
            <a href={project.itunesUrl}>
              <img
                src={require('../Content/Logos/App Store.svg')}
                height="50"
                alt="iTunes" />
            </a>
          }
          {project.githubUrl &&
            <a href={project.githubUrl}>
              <img
                src={require('../Content/Logos/GitHub.png')}
                height="50"
                alt="GitHub"
              />
            </a>
          }
          </span>
          <span className="selected-project-description" dangerouslySetInnerHTML={{__html: project.description}} />
        </div>
      </ProjectDisplaySection>
      {screenshots.length !== 0 &&
      <ProjectDisplaySection id="screenshots">{screenshots}</ProjectDisplaySection>
      }
      <ProjectDisplaySection title="Features" id="features">
        <SimpleList>{project.features}</SimpleList>
      </ProjectDisplaySection>
      <ProjectDisplaySection title="Technologies" id="technologies">
        <ul>
          {project.technologies.languages &&
          <li><strong>Languages:</strong> {project.technologies.languages}</li>
          }
          {project.technologies.frameworks &&
          <li><strong>Frameworks:</strong> {project.technologies.frameworks}</li>
          }
          {project.technologies.technologies &&
          <li><strong>Technologies:</strong> {project.technologies.technologies}</li>
          }
        </ul>
      </ProjectDisplaySection>
      {project.installationInstructions &&
      <ProjectDisplaySection
        title="Installation Instructions"
        id="installation-instructions"
      >
        <SimpleList>{project.installationInstructions}</SimpleList>
      </ProjectDisplaySection>
      }
    </section>
  );
};
export default ProjectDisplay;