import React, { Component } from 'react';

import Baner from '../components/Baner';
import TableHeader from '../components/Table/Block/TableHeader';
import Block0 from '../components/Table/Block/Block0';
import Block1 from '../components/Table/Block/Block1';
import Block2 from '../components/Table/Block/Block2';
import Block3 from '../components/Table/Block/Block3';
import Block4 from '../components/Table/Block/Block4';
import Block5 from '../components/Table/Block/Block5';
import Block6 from '../components/Table/Block/Block6';
import Block7 from '../components/Table/Block/Block7';
import Block8 from '../components/Table/Block/Block8';
import Block9 from '../components/Table/Block/Block9';
import Bonus from '../components/Table/Block/Bonus';
import Price from '../components/Table/Block/Price';

import '../components/Table/table.css';

class TablePage extends Component {
  render() {
    return (
      <div className="content">
        <Baner />
        <div className="contentRow blockRowJs">
          <div className="table">
            <TableHeader />
            <Block0 />
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
        </div>
      </div>
    );
  }
}
export default TablePage;
