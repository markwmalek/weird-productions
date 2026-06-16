import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import Text from './Typography';
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
          <Text as={Link} to="/" variant="h5" className="header-logo" onClick={() => setMenuOpen(false)}>
            Weird
          </Text>

          {/* Desktop links */}
          <div className="pill-links">
            <Text as={NavLink} to="/portfolio" variant="h5" className="nav-link" onClick={() => setMenuOpen(false)}>
              Portfolio
            </Text>
            <Text as={NavLink} to="/work-with-weird" variant="h5" className="nav-link" onClick={() => setMenuOpen(false)}>
              Work With Us
            </Text>
            <Text as="button" type="button" variant="h5" className="nav-link nav-button nav-cta" onClick={openChat}>
              DM us
            </Text>
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
          <Text as={NavLink} to="/portfolio" variant="h5" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Portfolio
          </Text>
          <Text as={NavLink} to="/work-with-weird" variant="h5" className="mobile-link" onClick={() => setMenuOpen(false)}>
            Work With Us
          </Text>
          <Text as="button" type="button" variant="h5" className="mobile-link mobile-link-button" onClick={openChat}>
            DM us
          </Text>
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
            <Text as="h2" id="chat-modal-title" variant="displaySm" className="chat-title">Send us a message</Text>
            <Text as="p" variant="bodySm" className="chat-subtitle">
              Your message will be sent directly as an email to <strong>lindsay@weirdproductions.art</strong>.
            </Text>
            <form className="chat-form" onSubmit={handleChatSubmit}>
              <Text as="label" htmlFor="chat-name" variant="bodySm" className="chat-label">Your name (optional)</Text>
              <input
                id="chat-name"
                type="text"
                className="chat-input"
                placeholder="Lindsay"
                value={name}
                onChange={(event) => setName(event.target.value)}
                maxLength={120}
              />
              <Text as="label" htmlFor="chat-email" variant="bodySm" className="chat-label">Your email</Text>
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
              <Text as="label" htmlFor="chat-message" variant="bodySm" className="chat-label">Message</Text>
              <textarea
                id="chat-message"
                className="chat-textarea"
                placeholder="Type your message here..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                required
              />
              <Text
                as="button"
                type="submit"
                variant="bodySm"
                className="chat-submit"
                disabled={isSending || retryAfterSeconds > 0}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </Text>
              {sendStatus === 'sent' && (
                <Text as="p" variant="bodySm" className="chat-feedback success">Message sent. We will reply soon.</Text>
              )}
              {sendStatus === 'error' && (
                <Text as="p" variant="bodySm" className="chat-feedback error">Could not send right now. Please try again.</Text>
              )}
              {sendStatus === 'rate_limited' && (
                <Text as="p" variant="bodySm" className="chat-feedback error">
                  Too many tries. Please wait {retryAfterSeconds}s and try again.
                </Text>
              )}
              {sendStatus === 'invalid' && (
                <Text as="p" variant="bodySm" className="chat-feedback error">Please enter a valid email and message.</Text>
              )}
            </form>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}
