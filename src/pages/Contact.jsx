import { useState } from 'react';
import Text from '../components/Typography';
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
        <Text as="h1" variant="h1" className="contact-title">
          <span className="anim-underline">
            CONTACT WEIRD
            <svg viewBox="0 0 280 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2,9 Q70,3 140,8 Q210,13 278,7" />
            </svg>
          </span>
        </Text>
        <Text as="p" variant="eyebrow" className="contact-sub">let's make something together</Text>
      </div>

      {/* Contact body */}
      <div className="contact-body page-wrap">

        {/* Left — info */}
        <div className="contact-info">
          <Text as="p" variant="h5" className="contact-info-heading">Wanna collaborate on an event?</Text>
          <Text as="p" variant="body" className="contact-info-body">
            Have some art you want to share? Looking to partner on a project?
            Drop us a message and we'll get back to you as soon as we can.
          </Text>

          <div className="contact-channels">
            <a
              href="https://instagram.com/weirdproductions.art"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <span className="contact-channel-icon">😘</span>
              <div>
                <Text as="p" variant="label" className="contact-channel-label">DM us on Instagram</Text>
                <Text as="p" variant="body" className="contact-channel-value">@weirdproductions.art</Text>
              </div>
            </a>
            <div className="contact-channel">
              <span className="contact-channel-icon">📍</span>
              <div>
                <Text as="p" variant="label" className="contact-channel-label">Based in</Text>
                <Text as="p" variant="body" className="contact-channel-value">Durham, NC</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="contact-success">
              <Text as="p" variant="h3" className="contact-success-check">✓</Text>
              <Text as="h3" variant="h4">Thank you!</Text>
              <Text as="p" variant="body">We'll get back to you as soon as we can.</Text>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-field-group">
                <Text as="label" htmlFor="name" variant="label" className="contact-label">Name</Text>
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
                <Text as="label" htmlFor="email" variant="label" className="contact-label">Email</Text>
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
                <Text as="label" htmlFor="message" variant="label" className="contact-label">Message</Text>
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
              <Text as="button" type="submit" variant="body" className="btn btn-filled contact-submit">
                Send
              </Text>
            </form>
          )}
        </div>

      </div>

    </main>
  );
}
