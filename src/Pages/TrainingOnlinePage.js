import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Baner from '../components/Baner';
import Package from '../components/Package';

import perseptionStart from '../images/perseptionStart.png';
import perseptionBase from '../images/perseptionBase.png';

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
          <div className="contentRow textCenter">
            <Link to="/perseptionStart">
              <img className="imgSeminar" src={perseptionStart} alt="Spadok" />
            </Link>
            <Link to="/perseptionBase">
              <img className="imgSeminar" src={perseptionBase} alt="Spadok" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
export default TrainingOnlinePage;
