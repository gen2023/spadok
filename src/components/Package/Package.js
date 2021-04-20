import React, { Component } from 'react';

import Modal from '../Modal/ModalPackage';
import PackageItems from './PackageItems';

import packageName from '../../json/package.json';

class Package extends Component {
  state = {
    // package: package,
    isModal: false,
    currentPackage: null,
  };

  toggleModal = componentName => {
    // console.log(componentName);
    this.setState(prevState => ({
      isModal: !prevState.isModal,
      currentPackage: prevState.isModal ? null : componentName,
    }));
  };

  handlePackageClick = componentName => {
    this.toggleModal(componentName);
  };
  render() {
    const { isModal, currentPackage } = this.state;
    return (
      <>
        {isModal && (
          <Modal componentName={currentPackage} onToggle={this.toggleModal} />
        )}

        <div className="contentRow">
          {packageName.map(({ id, name, componentName }) => (
            <PackageItems
              key={id}
              packageName={name}
              componentName={componentName}
              onClick={this.handlePackageClick}
            />
          ))}
        </div>
      </>
    );
  }
}
export default Package;
