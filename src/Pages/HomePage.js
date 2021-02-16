import React, { Component } from 'react';

import Baner from '../components/Baner';
import ColumnLeft from '../components/Landing/columnLeft';
import ColumnRight from '../components/Landing/ColumnRight';
import ColumnCenter from '../components/Landing/columnCenter';

import '../components/App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <Baner />
        <div className="contentRow blockRowJs">
          <ColumnLeft />
          <ColumnCenter />
          <ColumnRight />
        </div>
      </div>
    );
  }
}
export default HomePage;
