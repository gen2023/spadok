import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import HomePageV1 from '../Pages/HomePageV1';
import HomePageV2 from '../Pages/HomePageV2';
import HomePageV3 from '../Pages/HomePageV3';
import TrainingPage from '../Pages/TrainingPage';
import ReviewsPage from '../Pages/ReviewsPage';
import SeminarBasePage from '../Pages/SeminarBasePage';
import MiniEvent from '../Pages/EventPage';
import SchedulePage from '../Pages/SchedulePage';
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
        <Route path={routesNavigation.training} component={TrainingPage} />
        <Route path={routesNavigation.reviews} component={ReviewsPage} />
        <Route path={routesNavigation.schedule} component={SchedulePage} />
        <Route path={routesNavigation.base} component={SeminarBasePage} />
        <Route path={routesNavigation.event} component={MiniEvent} />
        <Route path={routesNavigation.homeV1} component={HomePageV1} />
        <Route path={routesNavigation.homeV2} component={HomePageV2} />
        <Route path={routesNavigation.homeV3} component={HomePageV3} />
        <Route render={props => <NotFoundPage {...props} />} />
      </Switch>
    </>
  );
}

export default App;
