import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu, { SubMenu, Item as MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
// import CSSMotion from 'rc-motion';
// import animate from 'css-animation';

import list from '../../json/navigation.json';
import './navigation.css';

export default class Navigation extends Component {
  state = {
    isMobileMenu: false,
  };

  mobileMenu = () => {
    this.setState(prevState => ({
      isMobileMenu: !prevState.isMobileMenu,
    }));
  };

  render() {
    const { isMobileMenu } = this.state;
    const menus = list.map(({ id, heading, submenu, link }) =>
      submenu ? (
        <SubMenu
          title={<span className="submenu-title-wrapper">{heading}</span>}
          key={id}
        >
          {submenu.map(({ submenuId, heading, link }) => (
            <MenuItem key={submenuId}>
              <Link to={link}>{heading}</Link>
            </MenuItem>
          ))}
        </SubMenu>
      ) : (
        <MenuItem key={id}>
          <Link to={link}>{heading}</Link>
        </MenuItem>
      ),
    );
    // const menu_mobile = list.map(({ heading, submenu, link }) =>
    //   submenu ? (
    //     <SubMenu key={heading} label={heading}>
    //       {submenu.map(({ heading, link }) => (
    //         <MenuItem className="nav_link" key={heading} href={link}>
    //           {heading}
    //         </MenuItem>
    //       ))}
    //     </SubMenu>
    //   ) : (
    //     <MenuItem key={heading} href={link} className="nav_link">
    //       {heading}
    //     </MenuItem>
    //   ),
    // );
    return (
      <>
        <div className="content">
          <div className="menu_nav">
            <Menu mode="horizontal">{menus}</Menu>
          </div>
          <div className="mobile_menu">
            <div className="mobile_menu_button" onClick={this.mobileMenu}>
              {isMobileMenu && (
                <div className="mobile_menu_content">
                  <Menu mode="vertical" triggerSubMenuAction="click">
                    {menus}
                  </Menu>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
