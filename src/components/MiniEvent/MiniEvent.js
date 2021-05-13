import React from 'react';
// import PropTypes from 'prop-types';
import './miniEvent.css';

function MiniEvent(eventDetail) {
  // console.log(eventDetail.src);
  // console.log(eventDetail.alt);
  return (
    <>
      <img
        className="img_miniEvent"
        src={eventDetail.src}
        alt={eventDetail.alt}
      />
    </>
  );
}

// MiniEvent.propTypes = {
//   eventClick: PropTypes.object.isRequired,
// };

export default MiniEvent;
