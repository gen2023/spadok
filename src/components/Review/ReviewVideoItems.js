import React from 'react';
import propTypes from 'prop-types';

import ButtonSubscribe from '../ButtonSubscribe';

const ReviewVideoItems = ({ name, /*onClick, description,*/ video }) => {
  return (
    <>
      <li className="reviewsBlock">
        <div className="videoCategory">
          <iframe
            className="videoItem"
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="nameVideo"> {name} </div>
      </li>
      <li className="blockButton">
        <ButtonSubscribe />
      </li>
    </>
  );
};

ReviewVideoItems.propTypes = {
  //   text: propTypes.string.isRequired,
  video: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  //   onClick: propTypes.func.isRequired,
};

export default ReviewVideoItems;
