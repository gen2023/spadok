import React, { Component } from 'react';

import Baner from '../components/Baner';
import Review from '../components/Review';
import data from '../json/reviews.json';

class ReviewsPage extends Component {
  readText() {
    const textResult = data.map(text => text.text)[0];
    return textResult; //console.log(textResult);
  }
  render() {
    return (
      <div className="content">
        <Baner />
        <Review />
      </div>
    );
  }
}
export default ReviewsPage;
