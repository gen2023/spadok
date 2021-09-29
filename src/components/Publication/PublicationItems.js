import React, { Component } from 'react';
import propTypes from 'prop-types';
import ReadMoreReact from 'read-more-react';

import ButtonSubscribe from '../ButtonSubscribe';

class PublicationItems extends Component {
  render() {
    const { foto, date, text, title } = this.props;

    return (
      <>
        <li className="reviewsBlock" id="review">
          <div className="dateReviews">{date}</div>
          <div className="titlePublication">
            <span>{title}</span>
          </div>
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
PublicationItems.propTypes = {
  title: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  foto: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
};

export default PublicationItems;
