import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import online from '../images/on_line.jpg';

import '../components/App.css';

class OnlinePage extends Component {
  componentDidMount() {
    document.title = 'Spadok - обучение онлайн';
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="content">
          <img src={online} alt="Spadok" />
        </div>
      </>
    );
  }
}
export default OnlinePage;
