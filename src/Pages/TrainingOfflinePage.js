import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import ofline from '../images/ofline.jpg';

import '../components/App.css';

class TrainingOfflinePage extends Component {
  componentDidMount() {
    document.title = 'Spadok - обучение офлайн';
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="content">
          <img src={ofline} alt="Spadok" />
        </div>
      </>
    );
  }
}
export default TrainingOfflinePage;
