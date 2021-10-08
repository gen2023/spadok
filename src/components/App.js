import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
// import HomePageV1 from '../Pages/HomePageV1';
// import HomePageV2 from '../Pages/HomePageV2';
// import HomePageV3 from '../Pages/HomePageV3';
import TrainingOfflinePage from '../Pages/TrainingOfflinePage';
import TrainingOnlinePage from '../Pages/TrainingOnlinePage';
import ReviewsPage from '../Pages/ReviewsPage';
import SeminarBasePage from '../Pages/SeminarBasePage';
import SeminarPerseptionBasePage from '../Pages/SeminarPerseptionBasePage';
import SeminarPerseptionStartPage from '../Pages/SeminarPerseptionStartPage';
// import MiniEvent from '../Pages/EventPage';
import SchedulePage from '../Pages/SchedulePage';
import PublicationsPage from '../Pages/PublicationsPage';
import HealtPage from '../Pages/HealtPage';
import NotFoundPage from '../Pages/NotFoundPage';

import routesNavigation from '../services/routesNavigation';

import '../../node_modules/modern-normalize/modern-normalize.css';
import './App.css';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route path={routesNavigation.home} exact component={HomePage} />
        <Route
          path={routesNavigation.trainingOnline}
          component={TrainingOnlinePage}
        />
        <Route
          path={routesNavigation.trainingOffline}
          component={TrainingOfflinePage}
        />
        <Route path={routesNavigation.reviews} component={ReviewsPage} />
        <Route path={routesNavigation.schedule} component={SchedulePage} />
        <Route path={routesNavigation.base} component={SeminarBasePage} />
        <Route
          path={routesNavigation.perseptionBase}
          component={SeminarPerseptionBasePage}
        />
        <Route
          path={routesNavigation.perseptionStart}
          component={SeminarPerseptionStartPage}
        />
        {/* <Route path={routesNavigation.event} component={MiniEvent} />*/}
        <Route
          path={routesNavigation.publications}
          component={PublicationsPage}
        />
        <Route path={routesNavigation.health} component={HealtPage} />
        {/* <Route path={routesNavigation.homeV1} component={HomePageV1} />
        <Route path={routesNavigation.homeV2} component={HomePageV2} />
        <Route path={routesNavigation.homeV3} component={HomePageV3} /> */}
        <Route render={props => <NotFoundPage {...props} />} />
      </Switch>
    </>
  );
}

export default App;
