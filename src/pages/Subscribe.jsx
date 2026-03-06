import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <h1 className="subscribe-title">
          <span className="anim-underline">
            Get on the list.
            <svg viewBox="0 0 220 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2,9 Q55,3 110,8 Q165,13 218,7" />
            </svg>
          </span>
        </h1>
        <p className="subscribe-sub">Cool events. Calls for art. Be the first to know.</p>
      </div>

      {/* Main content */}
      <div className="subscribe-body page-wrap">

        {/* Left — benefits + form */}
        <div className="subscribe-left">
          <div className="subscribe-benefits">
            <p>🍾 Cool events</p>
            <p>🖼️ Calls for art</p>
            <p>🗞️ Be the first to know</p>
          </div>

          {submitted ? (
            <div className="subscribe-success">
              <p className="subscribe-success-check">✓</p>
              <h3>You're on the list!</h3>
              <p>We'll be in touch with the good stuff. Keep an eye on your inbox.</p>
              <Link to="/events" className="btn" style={{ marginTop: '24px', display: 'inline-block' }}>
                See Upcoming Events
              </Link>
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
              <button type="submit" className="btn btn-filled">Sign Up</button>
              <p className="subscribe-privacy">
                Your email ain't no one's business but yours. We'll keep it private.
              </p>
            </form>
          )}
        </div>

        {/* Right — why subscribe */}
        <div className="subscribe-right">
          <h2 className="subscribe-why-heading">Why subscribe?</h2>
          <p className="subscribe-why-body">
            Weird Productions throws some of the best art parties in Durham, NC.
            You'll hear about them before anyone else.
          </p>
          <p className="subscribe-why-body">
            We don't spam. We don't sell your info. We just let you know when
            something cool is happening.
          </p>
          <p className="subscribe-why-body">
            Artists on the list also get first notice about calls for submissions.
          </p>
          <div className="subscribe-ig-block">
            <p className="subscribe-ig-text">Also find us on Instagram:</p>
            <a
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              @weirdproductions.art ↗
            </a>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="subscribe-strip">
        <div className="page-wrap subscribe-strip-inner">
          <p className="subscribe-strip-tag">unusual art parties</p>
          <p className="subscribe-strip-text">
            Built by art lovers bored of art shows.<br />
            Follow for creative people, parties, &amp; projects.
          </p>
          <div className="subscribe-strip-links">
            <Link to="/events">Upcoming Events</Link>
            <span className="subscribe-strip-dot">·</span>
            <Link to="/artists">For Artists</Link>
            <span className="subscribe-strip-dot">·</span>
            <a
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
            >
              😘 DM us
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
