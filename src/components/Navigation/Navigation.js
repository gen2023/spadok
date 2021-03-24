import React from 'react';
// import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routesNavigation from '../../services/routesNavigation';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="content">
      <nav className="nav">
        <NavLink
          exact
          to={routesNavigation.home}
          className="nav_link"
          activeClassName="active"
        >
          Главная
        </NavLink>
        <NavLink
          exact
          to={routesNavigation.training}
          className="nav_link"
          activeClassName="active"
        >
          Обучение
        </NavLink>
        <NavLink
          exact
          to={routesNavigation.reviews}
          className="nav_link"
          activeClassName="active"
        >
          Отзывы
        </NavLink>
        <NavLink
          exact
          to={routesNavigation.schedule}
          className="nav_link"
          activeClassName="active"
        >
          Расписание
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
