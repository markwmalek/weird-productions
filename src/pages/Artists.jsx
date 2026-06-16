import { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from '../components/Typography';
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
          <Text as="h1" variant="h1" className="artists-hero-title">
            <span className="anim-underline anim-circle">
              Weird Artists.
              <svg viewBox="0 0 220 80" preserveAspectRatio="none" aria-hidden="true" className="artists-circle-svg">
                <ellipse cx="110" cy="40" rx="108" ry="36" />
              </svg>
            </span>
          </Text>
          <Text as="p" variant="bodyLg" className="artists-hero-sub">Do you make art? Do you like parties?</Text>
          <Text as={Link} variant="body" to="#artist-signup" className="btn btn-white" style={{ marginTop: '24px', display: 'inline-block' }}>
            Join the collective
          </Text>
        </div>
      </div>

      {/* Pitch section */}
      <section className="artists-pitch page-wrap" id="artist-signup">
        <div className="artists-pitch-inner">
          <div className="artists-pitch-text">
            <Text as="h2" variant="h2" className="artists-pitch-heading">
              <span className="anim-underline">
                Artists = VIPs.
                <svg viewBox="0 0 170 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2,9 Q42,3 85,8 Q128,13 168,7" />
                </svg>
              </span>
            </Text>
            <div className="artists-benefits">
              <Text as="p" variant="body">✅ Cool creative community</Text>
              <Text as="p" variant="body">✅ Always free to submit art</Text>
              <Text as="p" variant="body">✅ Payment within 24 hours</Text>
            </div>
            <div className="artists-not-required">
              <Text as="p" variant="label" className="artists-not-label">NOT required:</Text>
              <Text as="p" variant="bodySm" className="artists-not-list">
                <em>art degrees, lots of followers, schmoozing, gallery approval, sales of even one single piece ever</em>
              </Text>
            </div>
          </div>
          <div className="artists-signup-block">
            <Text as="p" variant="eyebrow" className="artists-signup-eyebrow">Get on our artist list</Text>
            <Text as="p" variant="body" className="artists-signup-sub">We'll keep you posted on future events and calls for art.</Text>
            {submitted ? (
              <div className="artists-success">
                <Text as="p" variant="body">You're on the list! 🎉 We'll be in touch.</Text>
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
                <Text as="button" variant="body" type="submit" className="btn btn-filled">Sign Up</Text>
              </form>
            )}
            <Text as="p" variant="caption" className="artists-signup-ig">
              Or DM us:{' '}
              <Text
                as="a"
                variant="caption"
                href="https://instagram.com/weirdproductions.art"
                target="_blank"
                rel="noopener noreferrer"
              >
                @weirdproductions.art
              </Text>
            </Text>
          </div>
        </div>
      </section>

      {/* VIP dark section */}
      <section className="artists-vip">
        <div className="artists-vip-bg">
          <img src="/images/artists-gallery3.jpg" alt="Artists at Weird Productions" loading="lazy" />
        </div>
        <div className="artists-vip-overlay page-wrap">
          <div className="artists-vip-content">
            <Text as="p" variant="label" className="vip-tag">ARTISTs = VIPs</Text>
            <Text as="h2" variant="h2" className="vip-heading">
              Built by art lovers<br />bored of art shows.
            </Text>
            <Text as="p" variant="body" className="vip-body">
              👩‍🎤 Built by art lovers bored of art shows
            </Text>
            <Text as="p" variant="body" className="vip-body">
              🎉 Follow for creative people, parties, &amp; projects
            </Text>
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
        <Text as="p" variant="label" className="testimonials-label">Artists Love It</Text>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial">
              <Text as="p" variant="bodyLg" className="testimonial-quote">"{t.quote}"</Text>
              <Text as="p" variant="bodySm" className="testimonial-name">— {t.name}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="artists-cta page-wrap">
        <div className="artists-cta-inner">
          <Text as="p" variant="h3" className="artists-cta-text">
            <span className="anim-underline">
              Ready to be weird?
              <svg viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2,7 Q50,2 100,6 Q150,10 198,5" />
              </svg>
            </span>
          </Text>
          <Text as="p" variant="body" className="artists-cta-sub">Follow us on Instagram for the latest calls for art and event announcements.</Text>
          <div className="artists-cta-btns">
            <Text
              as="a"
              variant="body"
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled"
            >
              @weirdproductions.art ↗
            </Text>
            <Text as={Link} variant="body" to="/events" className="btn">See Upcoming Events</Text>
          </div>
        </div>
      </section>

    </main>
  );
}
