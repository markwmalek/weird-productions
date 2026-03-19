import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');
  const [retryAfterSeconds, setRetryAfterSeconds] = useState(0);

  useEffect(() => {
    if (retryAfterSeconds <= 0) return undefined;

    const timer = window.setInterval(() => {
      setRetryAfterSeconds((current) => (current > 0 ? current - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [retryAfterSeconds]);

  const openChat = () => {
    setMenuOpen(false);
    setChatOpen(true);
    setSendStatus('');
  };

  const closeChat = () => {
    setChatOpen(false);
    setSendStatus('');
    setRetryAfterSeconds(0);
  };

  const handleChatSubmit = async (event) => {
    event.preventDefault();
    const trimmedMessage = message.trim();
    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    if (!trimmedMessage || !trimmedEmail || isSending || retryAfterSeconds > 0) return;

    setIsSending(true);
    setSendStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          website
        })
      });

      if (response.status === 429) {
        const retryAfterHeader = Number(response.headers.get('Retry-After')) || 60;
        setRetryAfterSeconds(retryAfterHeader);
        setSendStatus('rate_limited');
        return;
      }

      if (response.status === 400) {
        setSendStatus('invalid');
        return;
      }

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setMessage('');
      setEmail('');
      setName('');
      setWebsite('');
      setSendStatus('sent');
    } catch {
      setSendStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  // Render directly into document.body so no parent container
  // (overflow, transform, etc.) can ever clip the fixed pill nav
  return createPortal(
    <>
      {/* Floating pill nav */}
      <header className="site-header">
        <nav className="pill-nav">

          {/* Logo */}
          <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
            Weird
          </Link>

          {/* Divider */}
          <span className="pill-divider" aria-hidden="true" />

          {/* Desktop links */}
          <div className="pill-links">
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              Portfolio
            </NavLink>
            <NavLink to="/work-with-weird" className="nav-link" onClick={() => setMenuOpen(false)}>
              Work With Us
            </NavLink>
            <button type="button" className="nav-link nav-button" onClick={openChat}>
              DM us
            </button>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="top-bun" />
            <span className="patty" />
            <span className="bottom-bun" />
          </button>

        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      {menuOpen && (
        <div className="mobile-overlay">
          <NavLink to="/about" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/work-with-weird" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Work With Us
          </NavLink>
          <button type="button" className="mobile-link mobile-link-button" onClick={openChat}>
            DM us
          </button>
        </div>
      )}

      {chatOpen && (
        <div className="chat-modal-backdrop" role="presentation" onClick={closeChat}>
          <div
            className="chat-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chat-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="chat-close"
              aria-label="Close message window"
              onClick={closeChat}
            >
              ×
            </button>
            <h2 id="chat-modal-title" className="chat-title">Send us a message</h2>
            <p className="chat-subtitle">
              Your message will be sent directly as an email to <strong>lindsay@weirdproductions.art</strong>.
            </p>
            <form className="chat-form" onSubmit={handleChatSubmit}>
              <label htmlFor="chat-name" className="chat-label">Your name (optional)</label>
              <input
                id="chat-name"
                type="text"
                className="chat-input"
                placeholder="Lindsay"
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={120}
              />
              <label htmlFor="chat-email" className="chat-label">Your email</label>
              <input
                id="chat-email"
                type="email"
                className="chat-input"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <label htmlFor="chat-website" className="chat-honeypot" aria-hidden="true">
                Website
              </label>
              <input
                id="chat-website"
                type="text"
                className="chat-honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
              <label htmlFor="chat-message" className="chat-label">Message</label>
              <textarea
                id="chat-message"
                className="chat-textarea"
                placeholder="Type your message here..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                required
              />
              <button
                type="submit"
                className="chat-submit"
                disabled={isSending || retryAfterSeconds > 0}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {sendStatus === 'sent' && (
                <p className="chat-feedback success">Message sent. We will reply soon.</p>
              )}
              {sendStatus === 'error' && (
                <p className="chat-feedback error">Could not send right now. Please try again.</p>
              )}
              {sendStatus === 'rate_limited' && (
                <p className="chat-feedback error">
                  Too many tries. Please wait {retryAfterSeconds}s and try again.
                </p>
              )}
              {sendStatus === 'invalid' && (
                <p className="chat-feedback error">Please enter a valid email and message.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
