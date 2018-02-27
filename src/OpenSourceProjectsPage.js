import React from 'react';
import makeLink from './Utilities/MakeLink';
import OpenSourceProjects from './Content/OpenSourceProjects';
import Error404Page from './Error404Page';
import FadeTransition from './Components/Common/FadeTransition';
import SelectList from './Components/SelectList';
import ProjectDisplay from './Components/ProjectDisplay';

const OpenSourceProjectsPage = ({ match }) => {
  const { projectId } = match.params;
  const lowerProject = projectId && projectId.toLowerCase();

  const selectedProject = projectId && OpenSourceProjects.find(project => makeLink(project.name).toLowerCase() === lowerProject);
  if (projectId && !selectedProject) {
    return <Error404Page />;
  }

  return (
    <main>
      <SelectList
        className="sticky-sidebar"
        selected={selectedProject && selectedProject.name}
        baseLink="/open-source"
      >
      {OpenSourceProjects.map(project => project.name)}
      </SelectList>
      {selectedProject &&
      <FadeTransition className="sidebar-right selected-project">
        <ProjectDisplay key={selectedProject.name} project={selectedProject} />
      </FadeTransition>
      }
    </main>
  );
};
export default OpenSourceProjectsPage;