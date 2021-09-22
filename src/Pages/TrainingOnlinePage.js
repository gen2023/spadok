import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Baner from '../components/Baner';
import Package from '../components/Package';

import '../components/App.css';

class TrainingOnlinePage extends Component {
  componentDidMount() {
    document.title = 'Spadok - обучение онлайн';
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="content">
          <Baner />
          <Package />
        </div>
      </>
    );
  }
}
export default TrainingOnlinePage;
