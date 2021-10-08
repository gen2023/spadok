import React, { Component } from 'react';

import HealtItems from './HealtItems';
// import ReviewVideoItems from './ReviewVideoItems';

import dataText from '../../json/healt.json';
// import dataVideo from '../../json/videoReviews.json';
import './healt.css';

class Healt extends Component {
  render() {
    return (
      <>
        <div>
          <ul className="contentRow">
            {dataText.map(({ id, date, text, foto, title }) => (
              <HealtItems
                key={id}
                date={date}
                text={text}
                foto={foto}
                title={title}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Healt;
