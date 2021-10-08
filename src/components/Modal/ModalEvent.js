import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import { goToTop } from 'react-scrollable-anchor';

import MiniEvent from '../MiniEvent';

import './Modal.css';
import './MobileModal.css';
import events from '../../json/events.json';

const modalRoot = document.querySelector('#modal-root');

class ModalEvent extends Component {
  state = {
    events: events,
    currentEvent: [],
  };
  componentDidMount() {
    const eventId = this.props.currentEvent;
    const event = events.find(ev => ev.id === eventId);
    this.setState({ currentEvent: event });

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
    const { currentEvent } = this.state;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdrop}>
        <div className="modalContent">
          <MiniEvent src={currentEvent.img} alt={currentEvent.title} />
          <div className="Modal">
            <button
              type="button"
              className="closeButton"
              data-action="closeModal"
            ></button>
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

ModalEvent.propTypes = {
  currentEvent: propTypes.string.isRequired,
  componentName: propTypes.string.isRequired,
  onToggle: propTypes.func.isRequired,
};

export default ModalEvent;
