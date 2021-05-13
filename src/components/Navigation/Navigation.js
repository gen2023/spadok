import React, { Component } from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

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
    // const { isModal } = this.state;
    let menu = list.map(({ id, heading, submenu, link }) =>
      submenu ? (
        <Menu
          key={id}
          menuButton={
            <MenuButton className="nav_link_sub">{heading}</MenuButton>
          }
        >
          {submenu.map(({ id, heading, link }) => (
            <MenuItem className="nav_link" key={id} href={link}>
              {heading}
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <Menu
          menuButton={
            <MenuItem href={link} className="nav_link">
              {heading}
            </MenuItem>
          }
        ></Menu>
      ),
    );

    return (
      <>
        <div className="content">
          <div className="menu_nav">{menu}</div>
          <div className="mobile_menu">
            <Menu
              menuButton={
                <MenuButton className="mobile_menu_button"></MenuButton>
              }
            >
              {menu}
            </Menu>
          </div>
        </div>
      </>
    );
  }
}
