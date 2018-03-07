import React from 'react';
import makeLink from './Utilities/MakeLink';
import Apps from './Content/Apps';
import Error404Page from './Error404Page';
import DividedSelectList from './Components/DividedSelectList';
import ProjectDisplay from './Components/ProjectDisplay';

const AppsPage = ({ match }) => {
  const { appId } = match.params;
  const lowerAppIdRaw = appId && appId.toLowerCase();
  const lowerAppId = lowerAppIdRaw === 'school-planner' ? 'homework-planner' : lowerAppIdRaw;

  const selectedApp = appId && Apps.find(app => makeLink(app.name).toLowerCase() === lowerAppId);
  if (appId && !selectedApp) {
    return <Error404Page />;
  }

  return (
    <DividedSelectList
      className="sticky-sidebar"
      selected={selectedApp && selectedApp.name}
      baseLink="/apps"
      showImage
      mainDisplay={selectedApp && <ProjectDisplay project={selectedApp} />}
      mainClassName={"selected-project"}
    >
    {Apps.map(app => app.name)}
    </DividedSelectList>
  );
};
export default AppsPage;