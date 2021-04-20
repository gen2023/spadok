import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ruLocale from '@fullcalendar/core/locales/ru';
import events from '../json/events.json';

import Navigation from '../components/Navigation';

class SchedulePage extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="content">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            firstDay="1"
            locale={ruLocale}
            eventColor="#bd1422"
          />
        </div>
      </>
    );
  }
}
export default SchedulePage;
