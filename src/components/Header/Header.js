import React, { Component } from 'react';

import ModalMobileMenu from '../Modal/ModalMobileMenu1';

import './header.css';

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
          <div className="headerContentV3">
            <div className="mobile_headerContentV3">
              <img className="headerLogoV3" src={logo} alt="logo_spadok" />
              <img
                className="headerLogoTextV3"
                src={logoText}
                alt="logo_spadok_text"
              />
              <div className="headerContentRightName">
                ШКОЛА ПЕРЦЕПТИВНЫХ ТЕХНОЛОГИЙ
              </div>
            </div>
            <div className="headerContentRightDescriptionV3">
              Понимание одного принципа избавляет от запоминания тысячи факторов
            </div>
          </div>
        </div>
        <div className="mobile_menu">
          <button type="button" onClick={this.leftMenu}>
            МЕНЮ
          </button>
          {isModal && <ModalMobileMenu onToggle={this.leftMenu} />}
        </div>
      </>
    );
  }
}
