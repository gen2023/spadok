import React, { Component } from 'react';

import Baner from '../components/Baner';
import Block1 from '../components/Landing/Block1';
import Block2 from '../components/Landing/Block2';
import Block3 from '../components/Landing/Block3';
import Block4 from '../components/Landing/Block4';
import Block5 from '../components/Landing/Block5';
import Block6 from '../components/Landing/Block6';
import Block7 from '../components/Landing/Block7';
import Block8 from '../components/Landing/Block8';
import Block9 from '../components/Landing/Block9';
import Bonus from '../components/Landing/Bonus';
import Price from '../components/Landing/Price';

import '../components/App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="content">
        <Baner />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />
        <Block5 />
        <Block6 />
        <Block7 />
        <Block8 />
        <Block9 />
        <Bonus />
        <Price />
      </div>
    );
  }
}
export default HomePage;
