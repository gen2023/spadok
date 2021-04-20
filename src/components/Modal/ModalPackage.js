import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import { goToTop } from 'react-scrollable-anchor';

import './Modal.css';
import './MobileModal.css';

import VisiblePackage from '../Package/VisiblePackage';

const modalRoot = document.querySelector('#modal-root');

class ModalPackage extends Component {
  componentDidMount() {
    goToTop();
    window.addEventListener('keydown', this.handleKeydown);
    const closeModal = document.querySelector(
      'button[data-action="closeModal"]',
    );
    closeModal.addEventListener('click', this.handleBackdrop);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
    }
  };

  handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onToggle();
    }
  };

  render() {
    const { componentName } = this.props;
    // console.log(this.props);
    return createPortal(
      <div className="OverlayPackage" onClick={this.handleBackdrop}>
        <div className="modalContent">
          <div className="contentModalVideo">
            <div className="titleModalVideo">
              <VisiblePackage componentName={componentName} />
            </div>
            <div className="Modal">
              <button
                type="button"
                className="closeButton"
                data-action="closeModal"
              ></button>
            </div>
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

ModalPackage.propTypes = {
  //   text: propTypes.string.isRequired,
  componentName: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
};

export default ModalPackage;
