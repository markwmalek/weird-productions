import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <main className="contact-page">

      {/* Page heading */}
      <div className="contact-header page-wrap">
        <h1 className="contact-title">
          <span className="anim-underline">
            CONTACT WEIRD
            <svg viewBox="0 0 280 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2,9 Q70,3 140,8 Q210,13 278,7" />
            </svg>
          </span>
        </h1>
        <p className="contact-sub">let's make something together</p>
      </div>

      {/* Contact body */}
      <div className="contact-body page-wrap">

        {/* Left — info */}
        <div className="contact-info">
          <p className="contact-info-heading">Wanna collaborate on an event?</p>
          <p className="contact-info-body">
            Have some art you want to share? Looking to partner on a project?
            Drop us a message and we'll get back to you as soon as we can.
          </p>

          <div className="contact-channels">
            <a
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <span className="contact-channel-icon">😘</span>
              <div>
                <p className="contact-channel-label">DM us on Instagram</p>
                <p className="contact-channel-value">@weirdproductions.art</p>
              </div>
            </a>
            <div className="contact-channel">
              <span className="contact-channel-icon">📍</span>
              <div>
                <p className="contact-channel-label">Based in</p>
                <p className="contact-channel-value">Durham, NC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="contact-success">
              <p className="contact-success-check">✓</p>
              <h3>Thank you!</h3>
              <p>We'll get back to you as soon as we can.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-field-group">
                <label htmlFor="name" className="contact-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="contact-field"
                />
              </div>
              <div className="contact-field-group">
                <label htmlFor="email" className="contact-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="contact-field"
                />
              </div>
              <div className="contact-field-group">
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  required
                  rows={7}
                  className="contact-field contact-field--textarea"
                />
              </div>
              <button type="submit" className="btn btn-filled contact-submit">
                Send
              </button>
            </form>
          )}
        </div>

      </div>

    </main>
  );
}
