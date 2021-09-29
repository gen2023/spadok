import React, { Component } from 'react';

import PublicationItems from './PublicationItems';
// import ReviewVideoItems from './ReviewVideoItems';

import dataText from '../../json/publication.json';
// import dataVideo from '../../json/videoReviews.json';
import './publication.css';

class Publication extends Component {
  render() {
    return (
      <>
        <div>
          <ul className="contentRow">
            {dataText.map(({ id, date, text, foto, title }) => (
              <PublicationItems
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
export default Publication;
