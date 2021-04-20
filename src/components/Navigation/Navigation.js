import React, { Component } from 'react';
// import propTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

import ModalMobileMenu from '../Modal/ModalMobileMenu';
import NavigationItem from './NavigationItems';

// import routesNavigation from '../../services/routesNavigation';
import list from '../../json/navigation.json';
import './navigation.css';

export default class Navigation extends Component {
  state = {
    isModal: false,
  };
  leftMenu = () => {
    this.setState(prevState => ({
      isModal: !prevState.isModal,
    }));
  };
  render() {
    const { isModal } = this.state;
    return (
      <>
        <nav className="menu">
          <ul className="nav">
            {list.map(({ id, heading, link }) => (
              <NavigationItem key={id} name={heading} link={link} />
            ))}
          </ul>
        </nav>
        <div className="mobile_menu">
          <button
            className="mobile_menu_button"
            type="button"
            onClick={this.leftMenu}
          ></button>
          {isModal && <ModalMobileMenu onToggle={this.leftMenu} />}
        </div>
      </>
    );
  }
}
