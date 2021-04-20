import React, { Component } from 'react';

import HomeV1 from '../components/HomeV1';
import Navigation from '../components/NavigationV1';

class HomePageV1 extends Component {
  render() {
    return (
      <>
        <div className="PageHomeV1">
          <Navigation />
          <div className="content">
            <HomeV1 />
          </div>
        </div>
      </>
    );
  }
}
export default HomePageV1;
