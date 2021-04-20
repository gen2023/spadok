import React, { Component } from 'react';

import ModalMobileMenu from '../Modal/ModalMobileMenu1';
import NavigationItem from './NavigationItemsV1';

import list from '../../json/navigation1.json';
import './navigationV1.css';

import logo from '../../images/logo.png';
import logoText from '../../images/logo_text.png';

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
        <div className="header">
          <div className="headerContent">
            <div className="headerContentLeft">
              <img
                className="headerLogoText"
                src={logoText}
                alt="logo_spadok_text"
              />
              <img className="headerLogo" src={logo} alt="logo_spadok" />
            </div>
            <div className="headerContentRight">
              <div className="headerContentRightName">
                ШКОЛА ПЕРЦЕПТИВНЫХ ТЕХНОЛОГИЙ
              </div>
              <div className="headerContentRightDescription">
                Понимание одного принципа избавляет от запоминания тысячи
                факторов
              </div>
            </div>
          </div>
          <div className="navigation">
            <nav className="menu">
              <ul className="navV1">
                {list.map(({ id, heading, link }) => (
                  <NavigationItem key={id} name={heading} link={link} />
                ))}
              </ul>
            </nav>
            <div className="mobile_menu">
              <button type="button" onClick={this.leftMenu}>
                МЕНЮ
              </button>
              {isModal && <ModalMobileMenu onToggle={this.leftMenu} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}
