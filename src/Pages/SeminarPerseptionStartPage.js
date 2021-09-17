import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import PerseptionStart from '../components/Seminar/PerseptionStart';

class SeminarPerseptionStartPage extends Component {
  componentDidMount() {
    document.title = 'Spadok -  введение в перцепцию';
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="contentBasePage">
          <PerseptionStart />
        </div>
      </>
    );
  }
}
export default SeminarPerseptionStartPage;
