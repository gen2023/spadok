import React, { Component } from 'react';

import ReviewItems from './ReviewItems';
import ReviewVideoItems from './ReviewVideoItems';

import dataText from '../../json/reviews.json';
import dataVideo from '../../json/videoReviews.json';
import './reviews.css';

class Review extends Component {
  render() {
    return (
      <>
        <div>
          <ul className="contentRow">
            {dataVideo.map(({ id, small, name, description }) => (
              <ReviewVideoItems
                key={id}
                video={small}
                name={name}
                description={description}
              />
            ))}
          </ul>
          <ul className="contentRow">
            {dataText.map(({ id, date, text, foto }) => (
              <ReviewItems key={id} date={date} text={text} foto={foto} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Review;
