import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReadMoreReact from 'read-more-react';

import ButtonSubscribe from '../ButtonSubscribe';

class ReviewItems extends Component {
  // function ReviewItems({ date, text, foto }) {
  //   readText() {
  //     const text = this.props.text;
  //     //const textResult = text.map(text => text.text);
  //     return text.map(text => text.text);
  //   }
  render() {
    const { foto, date, text } = this.props;
    // console.log(this.readText());
    return (
      <>
        <li className="reviewsBlock" id="review">
          <div className="dateReviews">{date}</div>

          <div className="text">
            <ReadMoreReact text={text} readMoreText="Еще..." />
          </div>
          <div className="imgReviews">
            <img src={foto} alt="" />
          </div>
        </li>
        <li className="blockButton">
          <ButtonSubscribe />
        </li>
      </>
    );
  }
}
ReviewItems.propTypes = {
  //   text: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  foto: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default ReviewItems;
