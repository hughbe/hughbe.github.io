import React from 'react';
import makeLink from './Utilities/MakeLink';
import OpenSourceProjects from './Content/OpenSourceProjects';
import Error404Page from './Error404Page';
import DividedSelectList from './Components/DividedSelectList';
import ProjectDisplay from './Components/ProjectDisplay';

const OpenSourceProjectsPage = ({ match }) => {
  const { projectId } = match.params;
  const lowerProject = projectId && projectId.toLowerCase();

  const selectedProject = projectId && OpenSourceProjects.find(project => makeLink(project.name).toLowerCase() === lowerProject);
  if (projectId && !selectedProject) {
    return <Error404Page />;
  }

  return (
    <DividedSelectList
      className="sticky-sidebar"
      selected={selectedProject && selectedProject.name}
      baseLink="/open-source"
      mainDisplay={selectedProject && <ProjectDisplay project={selectedProject} />}
      mainClassName="selected-project"
    >
    {OpenSourceProjects.map(project => project.name)}
    </DividedSelectList>
  );
};
export default OpenSourceProjectsPage;