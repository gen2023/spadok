import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../components/Navigation';
import MiniEvent from '../components/MiniEvent';
import events from '../json/events.json';

class EventPage extends Component {
  state = {
    events: events,
    currentEvent: [],
  };

  componentDidMount() {
    const { eventId } = this.props.match.params;
    const event = events.find(ev => ev.id === eventId);
    // console.log(event);
    this.setState({ currentEvent: event });
  }
  render() {
    const { currentEvent } = this.state;
    // console.log(window.location.origin); //yields: "https://stacksnippets.net/js"
    return (
      <>
        <Navigation />
        <div className="content">
          <MiniEvent src={currentEvent.img} alt={currentEvent.title} />
        </div>
      </>
    );
  }
}
EventPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      eventId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default EventPage;
