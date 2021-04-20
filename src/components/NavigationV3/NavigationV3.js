import React, { Component } from 'react';

import NavigationItem from './NavigationItemsV3';

import list from '../../json/navigation1.json';
import './navigationV3.css';

// import logo from '../../images/logo.png';
// import logoText from '../../images/logo_text.png';

export default class Navigation extends Component {
  render() {
    return (
      <>
        <div className="navigation">
          <nav className="menu">
            <ul className="navV3">
              {list.map(({ id, heading, link }) => (
                <NavigationItem key={id} name={heading} link={link} />
              ))}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
