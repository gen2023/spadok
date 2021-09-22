import React, { Component } from 'react';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
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
    const menus = list.map(({ heading, submenu, link }) =>
      submenu ? (
        <Menu
          key={heading}
          menuButton={
            <MenuButton key={heading} className="nav_link_sub">
              {heading}
            </MenuButton>
          }
        >
          {submenu.map(({ heading, link }) => (
            <MenuItem className="nav_link" key={heading} href={link}>
              {heading}
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <Menu
          key={heading}
          menuButton={
            <MenuItem href={link} className="nav_link">
              {heading}
            </MenuItem>
          }
        ></Menu>
      ),
    );
    const menu_mobile = list.map(({ heading, submenu, link }) =>
      submenu ? (
        <SubMenu key={heading} label={heading}>
          {submenu.map(({ heading, link }) => (
            <MenuItem className="nav_link" key={heading} href={link}>
              {heading}
            </MenuItem>
          ))}
        </SubMenu>
      ) : (
        <MenuItem key={heading} href={link} className="nav_link">
          {heading}
        </MenuItem>
      ),
    );
    return (
      <>
        <div className="content">
          <div className="menu_nav">{menus}</div>
          <div className="mobile_menu">
            <Menu
              menuButton={
                <MenuButton className="mobile_menu_button"> </MenuButton>
              }
            >
              {menu_mobile}
            </Menu>
          </div>
        </div>
      </>
    );
  }
}
