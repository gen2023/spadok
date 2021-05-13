import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';

import routes from '../services/routesNavigation';

class NotFoundPage extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="contentGeneral notFound">
          <div>
            <span>Страница временно недоступна</span>
          </div>
          <Link to={routes.home}>
            <span className="linkHome">Главная</span>
          </Link>
        </div>
      </>
    );
  }
}

export default NotFoundPage;
