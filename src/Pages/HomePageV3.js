import React, { Component } from 'react';

import Header from '../components/Header';
import Navigation from '../components/NavigationV3';

class HomePageV3 extends Component {
  render() {
    return (
      <>
        <div className="PageHomeV3">
          <Header />
          <div className="content contentV3">{/* <HomeV3 /> */}</div>
          <Navigation />
        </div>
      </>
    );
  }
}
export default HomePageV3;
