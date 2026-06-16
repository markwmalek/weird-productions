import { Link } from 'react-router-dom';
import Text from '../components/Typography';
import './Events.css';

const upcomingEvents = [
  {
    id: 1,
    date: 'Nov 21',
    name: 'Weird Windows',
    location: 'Durham, NC',
    ticketUrl: null,
  },
  {
    id: 2,
    date: 'Sep 13',
    name: 'Dollyweird 2',
    location: 'Durham, NC',
    ticketUrl: null,
  },
  {
    id: 3,
    date: 'Aug 24',
    name: 'Smash & Slam 2',
    location: 'Durham, NC',
    ticketUrl: null,
  },
  {
    id: 4,
    date: 'Aug 25',
    name: 'Third Friday Takeover',
    location: 'CCB Plaza, Durham, NC',
    time: '6–8 PM',
    ticketUrl: null,
  },
  {
    id: 5,
    date: 'Mar 6',
    name: 'Fuckup Nights',
    location: 'Durham, NC',
    ticketUrl: '#',
  },
  {
    id: 6,
    date: 'Feb 27',
    name: 'UNCANNY Salon',
    location: 'delafia Wine Bar, Durham, NC',
    time: '6–10 PM',
    ticketUrl: null,
  },
  {
    id: 7,
    date: 'Jan 25',
    name: 'Fast & Loose Salon',
    location: 'Durham, NC',
    ticketUrl: null,
  },
];

const pastEvents = [
  { id: 8, date: 'Nov 2, 2024', name: 'Canvas Clash' },
  { id: 9, date: 'Oct 18, 2024', name: 'Raleigh Renaissance' },
  { id: 10, date: 'Oct 6, 2024', name: 'Smash & SLAM' },
  { id: 11, date: '2024', name: 'Godfather Salon' },
  { id: 12, date: '2024', name: 'Dollyweird Popup' },
  { id: 13, date: '2023', name: 'Dollyweird' },
  { id: 14, date: '2023', name: 'Prints-4-Prince' },
  { id: 15, date: '2023', name: 'Raleigh Renaissance Fashion Show' },
];

export default function Events() {
  return (
    <main className="events-page">

      {/* Page heading */}
      <div className="events-header page-wrap">
        <Text as="h1" variant="h1" className="events-title">
          <span className="anim-underline">
            Mark your calendar.
            <svg viewBox="0 0 260 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2,9 Q65,3 130,8 Q195,13 258,7" />
            </svg>
          </span>
        </Text>
        <Text as="p" variant="eyebrow" className="events-sub">unusual art parties — Durham, NC</Text>
      </div>

      {/* Upcoming events */}
      <section className="events-section page-wrap">
        <Text as="p" variant="label" className="events-label">Upcoming</Text>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-row">
              <Text as="span" variant="bodySm" className="event-date">{event.date}</Text>
              <div className="event-main">
                <Text as="span" variant="body" className="event-name">{event.name}</Text>
                {event.time && (
                  <Text as="span" variant="bodySm" className="event-time">{event.time}</Text>
                )}
                <Text as="span" variant="bodySm" className="event-location">{event.location}</Text>
              </div>
              <div className="event-action">
                {event.ticketUrl ? (
                  <Text
                    as="a"
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body"
                    className="btn btn-filled event-ticket-btn"
                  >
                    Tickets
                  </Text>
                ) : (
                  <Text as="span" variant="label" className="event-tba">TBA</Text>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <div className="events-cta-strip page-wrap">
        <Text as="p" variant="h5" className="events-cta-text">Don't miss the next one.</Text>
        <Text as={Link} to="/subscribe" variant="body" className="btn btn-filled">Get on the list</Text>
      </div>

      {/* Past events */}
      <section className="events-section page-wrap">
        <Text as="p" variant="label" className="events-label events-label--past">Past Events</Text>
        <div className="events-list events-list--past">
          {pastEvents.map((event) => (
            <div key={event.id} className="event-row event-row--past">
              <Text as="span" variant="bodySm" className="event-date">{event.date}</Text>
              <div className="event-main">
                <Text as="span" variant="body" className="event-name">{event.name}</Text>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="events-bottom page-wrap">
        <Text as="p" variant="body" className="events-bottom-text">
          Follow for announcements and calls for art.
        </Text>
        <Text
          as="a"
          href="https://instagram.com/weirdproductions.art"
          target="_blank"
          rel="noopener noreferrer"
          variant="body"
          className="btn"
        >
          @weirdproductions.art ↗
        </Text>
      </section>

    </main>
  );
}
