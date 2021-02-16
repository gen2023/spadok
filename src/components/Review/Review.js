import React, { Component } from 'react';

import ReviewItems from './ReviewItems';

import data from '../../json/reviews.json';
import './reviews.css';

class Review extends Component {
  render() {
    // console.log(data.map(date => date.date));
    return (
      <>
        <div className="contentRow">
          <ul>
            {data.map(({ id, date, text, foto }) => (
              <ReviewItems key={id} date={date} text={text} foto={foto} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Review;
