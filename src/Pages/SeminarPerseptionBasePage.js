import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import PerseptionBase from '../components/Seminar/PerceptionBase';

class SeminarPerseptionBasePage extends Component {
  componentDidMount() {
    document.title = 'Spadok - основы перцепции';
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="contentBasePage">
          <PerseptionBase />
        </div>
      </>
    );
  }
}
export default SeminarPerseptionBasePage;
