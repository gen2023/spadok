import React, { Component } from 'react';

import Navigation from '../components/Navigation';

import logo from '../images/logo.png';
import logoText from '../images/logo_text.png';
import Review from '../components/Review';
import data from '../json/reviews.json';

class ReviewsPage extends Component {
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
                Школа перцептивных технологий
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
          <Review />
        </div>
      </>
    );
  }
}
export default ReviewsPage;
