import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ModalMobileMenuItems({ name, link, onToggle }) {
  return (
    <li className="nav_link" activeClassName="active">
      <Link to={link} onClick={onToggle}>
        {name}
      </Link>
    </li>
  );
}

ModalMobileMenuItems.propTypes = {
  name: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
};

export default ModalMobileMenuItems;
