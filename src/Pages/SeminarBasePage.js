import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Base from '../components/Seminar/Base';

class SeminarBasePage extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="contentBasePage">
          <Base />
        </div>
      </>
    );
  }
}
export default SeminarBasePage;
