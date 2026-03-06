import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Artists.css';

const testimonials = [
  {
    name: 'Sophia Rene',
    quote: 'What a beautiful night, met more people in the art community and we all sold multiple pieces!!!',
  },
  {
    name: 'HP Fangs',
    quote: 'Thank you weird productions...gaht dang this was fun tonight.',
  },
  {
    name: 'Event Attendee',
    quote: 'I felt such a spiritual connection with my fellow artists. The energy in the room was electric — unlike any gallery I\'ve been to.',
  },
  {
    name: 'Joel Tesch',
    quote: 'The supportive atmosphere and event quality were beyond anything I expected. Genuinely one of the best nights of my year.',
  },
];

const galleryPhotos = [
  '/images/artists-hero2.jpg',
  '/images/artists-gallery1.jpg',
  '/images/artists-gallery2.jpg',
  '/images/artists-gallery3.jpg',
  '/images/artists-gallery4.jpg',
  '/images/artists-gallery5.jpg',
  '/images/artists-gallery6.jpg',
  '/images/artists-gallery7.jpg',
  '/images/artists-gallery8.jpg',
  '/images/artists-gallery9.jpg',
];

export default function Artists() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="artists-page">

      {/* Hero */}
      <div className="artists-hero">
        <div className="artists-hero-bg">
          <img src="/images/artists-hero1.jpg" alt="Weird Productions artist event" />
        </div>
        <div className="artists-hero-content page-wrap">
          <h1 className="artists-hero-title">
            <span className="anim-underline anim-circle">
              Weird Artists.
              <svg viewBox="0 0 220 80" preserveAspectRatio="none" aria-hidden="true" className="artists-circle-svg">
                <ellipse cx="110" cy="40" rx="108" ry="36" />
              </svg>
            </span>
          </h1>
          <p className="artists-hero-sub">Do you make art? Do you like parties?</p>
          <Link to="#artist-signup" className="btn btn-white" style={{ marginTop: '24px', display: 'inline-block' }}>
            Join the collective
          </Link>
        </div>
      </div>

      {/* Pitch section */}
      <section className="artists-pitch page-wrap" id="artist-signup">
        <div className="artists-pitch-inner">
          <div className="artists-pitch-text">
            <h2 className="artists-pitch-heading">
              <span className="anim-underline">
                Artists = VIPs.
                <svg viewBox="0 0 170 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2,9 Q42,3 85,8 Q128,13 168,7" />
                </svg>
              </span>
            </h2>
            <div className="artists-benefits">
              <p>✅ Cool creative community</p>
              <p>✅ Always free to submit art</p>
              <p>✅ Payment within 24 hours</p>
            </div>
            <div className="artists-not-required">
              <p className="artists-not-label">NOT required:</p>
              <p className="artists-not-list">
                <em>art degrees, lots of followers, schmoozing, gallery approval, sales of even one single piece ever</em>
              </p>
            </div>
          </div>
          <div className="artists-signup-block">
            <p className="artists-signup-eyebrow">Get on our artist list</p>
            <p className="artists-signup-sub">We'll keep you posted on future events and calls for art.</p>
            {submitted ? (
              <div className="artists-success">
                <p>You're on the list! 🎉 We'll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="artists-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="artists-input"
                />
                <button type="submit" className="btn btn-filled">Sign Up</button>
              </form>
            )}
            <p className="artists-signup-ig">
              Or DM us:{' '}
              <a
                href="https://instagram.com/weirdproductions.art"
                target="_blank"
                rel="noopener noreferrer"
              >
                @weirdproductions.art
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* VIP dark section */}
      <section className="artists-vip">
        <div className="artists-vip-bg">
          <img src="/images/artists-gallery3.jpg" alt="Artists at Weird Productions" />
        </div>
        <div className="artists-vip-overlay page-wrap">
          <div className="artists-vip-content">
            <p className="vip-tag">ARTISTs = VIPs</p>
            <h2 className="vip-heading">
              Built by art lovers<br />bored of art shows.
            </h2>
            <p className="vip-body">
              👩‍🎤 Built by art lovers bored of art shows
            </p>
            <p className="vip-body">
              🎉 Follow for creative people, parties, &amp; projects
            </p>
          </div>
        </div>
      </section>

      {/* Photo gallery grid */}
      <section className="artists-gallery">
        <div className="artists-gallery-grid">
          {galleryPhotos.map((src, i) => (
            <div
              key={i}
              className={`artists-gallery-item ${i === 0 ? 'artists-gallery-item--wide' : ''}`}
            >
              <img src={src} alt={`Weird Productions event ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="artists-testimonials page-wrap">
        <p className="testimonials-label">Artists Love It</p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <p className="testimonial-quote">"{t.quote}"</p>
              <p className="testimonial-name">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="artists-cta page-wrap">
        <div className="artists-cta-inner">
          <p className="artists-cta-text">
            <span className="anim-underline">
              Ready to be weird?
              <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2,7 Q50,2 100,6 Q150,10 198,5" />
              </svg>
            </span>
          </p>
          <p className="artists-cta-sub">Follow us on Instagram for the latest calls for art and event announcements.</p>
          <div className="artists-cta-btns">
            <a
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
            >
              @weirdproductions.art ↗
            </a>
            <Link to="/events" className="btn">See Upcoming Events</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
