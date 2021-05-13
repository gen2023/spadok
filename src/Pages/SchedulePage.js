import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ruLocale from '@fullcalendar/core/locales/ru';

import events from '../json/events.json';

import Navigation from '../components/Navigation';
import ModalEvent from '../components/Modal/ModalEvent';

class SchedulePage extends Component {
  state = { events: events, currentEvent: null, isModal: false };

  handleEventClick = info => {
    this.setState({ currentEvent: info.event.id });
    if (info.event.url === '') {
      this.toggleModal(info.event.id);
      console.log('hello');
    }
    // console.log(info.event.id);
    return info.event.id;
  };
  toggleModal = currentEvent => {
    // console.log(componentName);
    this.setState(prevState => ({
      isModal: !prevState.isModal,
      currentPackage: prevState.isModal ? null : currentEvent,
    }));
  };

  render() {
    const { isModal, currentEvent } = this.state;
    return (
      <>
        {isModal && (
          <ModalEvent onToggle={this.toggleModal} currentEvent={currentEvent} />
        )}
        <Navigation />
        <div className="content">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            firstDay="1"
            locale={ruLocale}
            eventColor="#bd1422"
            eventClick={this.handleEventClick}
          />
        </div>
      </>
    );
  }
}
export default SchedulePage;
