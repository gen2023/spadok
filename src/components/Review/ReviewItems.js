import React, { Component } from 'react';
import propTypes from 'prop-types';

import ReadMoreReact from 'read-more-react';

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
          <p>{date}</p>

          <p className="text">
            <ReadMoreReact text={text} readMoreText="Еще..." />
          </p>

          <img src={foto} alt="" />
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
