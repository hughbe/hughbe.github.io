import React from 'react';
import makeLink from './Utilities/MakeLink';
import Apps from './Content/Apps';
import FadeTransition from './Components/Common/FadeTransition';
import SelectList from './Components/SelectList';
import ProjectDisplay from './Components/ProjectDisplay';

const AppsPage = ({ match }) => {
  const { appId } = match.params;
  const lowerAppId = appId && appId.toLowerCase();

  const selectedApp = appId && Apps.find(app => makeLink(app.name).toLowerCase() === lowerAppId);
  return (
    <main>
      <SelectList
        selected={selectedApp && selectedApp.name}
        baseLink="/apps"
      >
      {Apps.map(app => app.name)}
      </SelectList>
      {selectedApp &&
      <FadeTransition className="sidebar-right selected-project">
        <ProjectDisplay key={selectedApp.name} project={selectedApp} />
      </FadeTransition>
      }
    </main>
  );
};
export default AppsPage;