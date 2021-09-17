import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import HomeLanding from '../components/HomeLanding';

class HomePage extends Component {
  componentDidMount() {
    document.title = 'Spadok - главная страница';
  }
  render() {
    return (
      <>
        <Navigation />
        <div className="content">
          <HomeLanding />
        </div>
      </>
    );
  }
}
export default HomePage;
