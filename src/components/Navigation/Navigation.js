import React from 'react';
// import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routesNavigation from '../../services/routesNavigation';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        exact
        to={routesNavigation.reviews}
        className="nav_link"
        activeClassName="active"
      >
        Отзывы
      </NavLink>
    </nav>
  );
};

export default Navigation;
