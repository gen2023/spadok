import React, { Component } from 'react';

import Navigation from '../components/Navigation';
// import HomeLanding from '../components/HomeLanding';

import logo from '../images/logo.png';
import logoText from '../images/logo_text.png';
import Healt from '../components/Healt';
import data from '../json/healt.json';

class HealtPage extends Component {
  componentDidMount() {
    document.title = 'Spadok - публикации о здоровье';
  }

  readText() {
    const textResult = data.map(text => text.text)[0];
    return textResult; //console.log(textResult);
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="content">
          <div className="homePage1">
            <div className="homePage1_leftColumn">
              <div className="homePage1_leftColumn_title">
                Школа перцептивного обучения
              </div>
              <img src={logoText} alt="logoText" />
            </div>
            <div className="homePage1_rightColumn">
              <img src={logo} alt="logo" />
            </div>
            <div className="homePage1_rightColumn_logoText">
              <img src={logoText} alt="logoText" />
            </div>
          </div>
          <div className="footer_titleRewiews">ПУБЛИКАЦИИ</div>
          <Healt />
        </div>
      </>
    );
  }
}
export default HealtPage;
