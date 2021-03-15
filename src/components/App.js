import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import HomePage from '../Pages/HomePage';
import TablePage from '../Pages/TablePage';
import ReviewsPage from '../Pages/ReviewsPage';
import SeminarBasePage from '../Pages/SeminarBasePage';
import NotFoundPage from '../Pages/NotFoundPage';

import routes from '../services/routes';
import routesNavigation from '../services/routesNavigation';

import '../../node_modules/modern-normalize/modern-normalize.css';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.table} component={TablePage} />
        <Route path={routesNavigation.reviews} component={ReviewsPage} />
        <Route path={routesNavigation.base} component={SeminarBasePage} />
        <Route render={props => <NotFoundPage {...props} />} />
      </Switch>
    </>
  );
}

export default App;
