// import React, { Component } from 'react';
import React from 'react';
import propTypes from 'prop-types';

import Mentor from './Mentor';
import Minimal from './Minimal';
import Vip from './Vip';

function VisiblePackage(props) {
  const componentName = props.componentName;
  if (componentName === 'Mentor') {
    return <Mentor />;
  } else if (componentName === 'Minimal') {
    return <Minimal />;
  } else {
    return <Vip />;
  }
}

VisiblePackage.propTypes = {
  //   packageName: propTypes.string.isRequired,
  componentName: propTypes.string.isRequired,
  //   onClick: propTypes.func.isRequired,
};
export default VisiblePackage;
