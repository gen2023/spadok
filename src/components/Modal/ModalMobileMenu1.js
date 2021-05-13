import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import ModalMobileMenuItems from './ModalMobileMenuItems';

import list from '../../json/navigation1.json';
import './Modal.css';
import './ModalMobileMenu.css';

const modalRoot = document.querySelector('#modal-root');

class ModalMobileMenu1 extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
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
    const { onToggle } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="Modal">
          <nav>
            <ul className="navMobileMenu">
              {list.map(({ id, heading, link }) => (
                <ModalMobileMenuItems
                  key={id}
                  name={heading}
                  link={link}
                  onToggle={onToggle}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>,
      modalRoot,
    );
  }
}

ModalMobileMenu1.propTypes = {
  //   image: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ModalMobileMenu1;
