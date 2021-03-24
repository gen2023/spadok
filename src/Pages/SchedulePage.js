import React, { Component } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ruLocale from '@fullcalendar/core/locales/ru';
import events from '../json/events.json';

class SchedulePage extends Component {
  render() {
    return (
      <div className="content">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          firstDay="1"
          locale={ruLocale}
          eventColor="green"
        />
      </div>
    );
  }
}
export default SchedulePage;
