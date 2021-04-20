import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function NavigationItem({ name, link }) {
  return (
    <NavLink exact to={link} className="nav_linkV3" activeClassName="active">
      <li>{name}</li>
    </NavLink>
  );
}

NavigationItem.propTypes = {
  name: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default NavigationItem;
