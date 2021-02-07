import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import TablePage from '../Pages/TablePage';
import NotFoundPage from '../Pages/NotFoundPage';

import routes from '../services/routes';

// import Baner from './Baner';
// import Block1 from './Block1';
// import Block2 from './Block2';
// import Block3 from './Block3';
// import Block4 from './Block4';
// import Block5 from './Block5';
// import Block6 from './Block6';
// import Block7 from './Block7';
// import Block8 from './Block8';
// import Block9 from './Block9';
// import Bonus from './Bonus';
// import Price from './Price';

import './App.css';

function App() {
  return (
    <>
      {/* <TablePage /> */}
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.table} component={TablePage} />
        <Route render={props => <NotFoundPage {...props} />} />
      </Switch>
    </>
  );
}

export default App;
