import React, { Component } from 'react';

import Navigation from '../components/Navigation';
// import HomeLanding from '../components/HomeLanding';

import logo from '../images/logo.png';
import logoText from '../images/logo_text.png';
import Publication from '../components/Publication';
import data from '../json/publication.json';

class PublicationsPage extends Component {
  componentDidMount() {
    document.title = 'Spadok - публикации';
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
          <Publication />
        </div>
      </>
    );
  }
}
export default PublicationsPage;
