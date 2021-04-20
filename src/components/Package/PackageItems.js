import React from 'react';
import propTypes from 'prop-types';

function PackageItems({ packageName, componentName, onClick }) {
  return (
    <div className="package">
      <div
        className="packageContent"
        onClick={() => onClick(componentName)}
        href="#top"
      >
        <span>{packageName}</span>
      </div>
    </div>
  );
}
PackageItems.propTypes = {
  packageName: propTypes.string.isRequired,
  componentName: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};
export default PackageItems;
