import React, { Component } from 'react';

import HomeV2 from '../components/HomeV1';
import Navigation from '../components/NavigationV1';

class HomePageV2 extends Component {
  render() {
    return (
      <>
        <div className="PageHomeV2">
          <Navigation />
          <div className="content">
            <HomeV2 />
          </div>
        </div>
      </>
    );
  }
}
export default HomePageV2;
