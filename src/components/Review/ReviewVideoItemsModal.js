import React from 'react';
import propTypes from 'prop-types';

const ReviewVideoItemsModal = ({
  image,
  name,
  onClick,
  video,
  description,
}) => {
  // console.log(video);
  //   console.log(name);
  //   console.log(description);
  return (
    <li className="reviewsBlock">
      <div className="videoCategory">
        <div className="overlay">
          <div className="overlayPlay">
            <img
              className="imgPlay"
              src="http://www.artvitrag.hol.es/galleryReact/video/play.png"
              alt=""
              onClick={() => onClick(name, video, description)}
            />
          </div>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className="nameVideo"> {name} </div>
    </li>
  );
};

ReviewVideoItemsModal.propTypes = {
  image: propTypes.string.isRequired,
  video: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default ReviewVideoItemsModal;
