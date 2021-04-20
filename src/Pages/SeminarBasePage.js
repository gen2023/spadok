import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Base from '../components/Seminar/Base';
// import data from '../json/reviews.json';

class SeminarBasePage extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="content">
          <Base />
        </div>
      </>
    );
  }
}
export default SeminarBasePage;
