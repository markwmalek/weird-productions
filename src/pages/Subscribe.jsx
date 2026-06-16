import { useState } from 'react';
import { Link } from 'react-router-dom';
import Text from '../components/Typography';
import './Subscribe.css';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="subscribe-page">

      {/* Heading */}
      <div className="subscribe-header page-wrap">
        <Text as="h1" variant="h1" className="subscribe-title">
          <span className="anim-underline">
            Get on the list.
            <svg viewBox="0 0 220 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2,9 Q55,3 110,8 Q165,13 218,7" />
            </svg>
          </span>
        </Text>
        <Text as="p" variant="bodySm" className="subscribe-sub">Cool events. Calls for art. Be the first to know.</Text>
      </div>

      {/* Main content */}
      <div className="subscribe-body page-wrap">

        {/* Left — benefits + form */}
        <div className="subscribe-left">
          <div className="subscribe-benefits">
            <Text as="p" variant="body">🍾 Cool events</Text>
            <Text as="p" variant="body">🖼️ Calls for art</Text>
            <Text as="p" variant="body">🗞️ Be the first to know</Text>
          </div>

          {submitted ? (
            <div className="subscribe-success">
              <Text as="p" variant="h4" className="subscribe-success-check">✓</Text>
              <Text as="h3" variant="h5">You're on the list!</Text>
              <Text as="p" variant="bodySm">We'll be in touch with the good stuff. Keep an eye on your inbox.</Text>
              <Text as={Link} to="/events" variant="body" className="btn" style={{ marginTop: '24px', display: 'inline-block' }}>
                See Upcoming Events
              </Text>
            </div>
          ) : (
            <form className="subscribe-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="subscribe-input"
              />
              <Text as="button" type="submit" variant="body" className="btn btn-filled">Sign Up</Text>
              <Text as="p" variant="caption" className="subscribe-privacy">
                Your email ain't no one's business but yours. We'll keep it private.
              </Text>
            </form>
          )}
        </div>

        {/* Right — why subscribe */}
        <div className="subscribe-right">
          <Text as="h2" variant="h5" className="subscribe-why-heading">Why subscribe?</Text>
          <Text as="p" variant="bodySm" className="subscribe-why-body">
            Weird Productions throws some of the best art parties in Durham, NC.
            You'll hear about them before anyone else.
          </Text>
          <Text as="p" variant="bodySm" className="subscribe-why-body">
            We don't spam. We don't sell your info. We just let you know when
            something cool is happening.
          </Text>
          <Text as="p" variant="bodySm" className="subscribe-why-body">
            Artists on the list also get first notice about calls for submissions.
          </Text>
          <div className="subscribe-ig-block">
            <Text as="p" variant="caption" className="subscribe-ig-text">Also find us on Instagram:</Text>
            <Text
              as="a"
              variant="body"
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              @weirdproductions.art ↗
            </Text>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="subscribe-strip">
        <div className="page-wrap subscribe-strip-inner">
          <Text as="p" variant="label" className="subscribe-strip-tag">unusual art parties</Text>
          <Text as="p" variant="h3" className="subscribe-strip-text">
            Built by art lovers bored of art shows.<br />
            Follow for creative people, parties, &amp; projects.
          </Text>
          <div className="subscribe-strip-links">
            <Text as={Link} to="/events" variant="bodySm">Upcoming Events</Text>
            <Text as="span" variant="bodySm" className="subscribe-strip-dot">·</Text>
            <Text as={Link} to="/artists" variant="bodySm">For Artists</Text>
            <Text as="span" variant="bodySm" className="subscribe-strip-dot">·</Text>
            <Text
              as="a"
              variant="bodySm"
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
            >
              😘 DM us
            </Text>
          </div>
        </div>
      </div>

    </main>
  );
}
