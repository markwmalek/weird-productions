import { Link } from 'react-router-dom';
import './WorkWithWeird.css';

const services = [
  {
    title: 'Immersive Celebrations',
    description: 'Host unforgettable events that go beyond the expected. We design and produce parties, launches, and gatherings people actually talk about.',
  },
  {
    title: 'Initiative Launches',
    description: 'Launch programs, campaigns, or products with promotional events that have real creative impact. We know how to create buzz.',
  },
  {
    title: 'Values-Driven Experiences',
    description: 'Create events that authentically reflect your mission and values. We build trust through art and community.',
  },
  {
    title: 'Audience Connection',
    description: 'Connect with audiences through art and authenticity. We bridge organizations and creative communities in meaningful ways.',
  },
];

const whyWeird = [
  'Curating artists, chefs, performers, and creatives from our established community network',
  'We understand impact creation vs. impression-focused metrics. We make things that matter.',
  'Budget-conscious, timely, and reliable event execution. Every time.',
  'We combine structure and soul in every project. Professional + weird = the sweet spot.',
];

const portfolio = [
  { name: 'Triangle Tech Night: Moonlighting Edition', category: 'Corporate Event', img: '/images/wwww-gallery2.jpg' },
  { name: 'Fast & Loose Art Salon', category: 'Art Event', img: '/images/wwww-gallery3.jpg' },
  { name: 'THE SALON', category: 'Art Event', img: '/images/wwww-gallery4.jpg' },
  { name: 'Raleigh Renaissance Fashion Show', category: 'Fashion Show', img: '/images/wwww-gallery1.jpg' },
  { name: 'Third Friday Takeover', category: 'Community Event', img: '/images/wwww-gallery5.jpg' },
  { name: 'UNCANNY Salon', category: 'Art Event', img: '/images/wwww-gallery6.jpg' },
];

const promoImages = [
  '/images/wwww-promo1.png',
  '/images/wwww-promo2.png',
  '/images/wwww-promo4.png',
  '/images/wwww-promo5.png',
];

const partners = [
  { src: '/images/wwww-logo-hubrtp.png', alt: 'HUB RTP' },
  { src: '/images/wwww-logo-layer1.png', alt: 'Partner' },
];

export default function WorkWithWeird() {
  return (
    <main className="www-page">

      {/* Hero */}
      <section className="www-hero">
        <div className="page-wrap">
          <h1 className="www-hero-title">WORK WITH US</h1>
          <p className="www-hero-sub">
            We partner with companies and communities who want more than what's expected.
          </p>
          <a
            href="https://instagram.com/weirdproductions.art"
            target="_blank"
            rel="noopener noreferrer"
            className="www-hero-dm"
          >
            DM us
          </a>
        </div>
      </section>

      {/* Pitch */}
      <section className="www-pitch">
        <div className="page-wrap www-pitch-inner">
          <h2 className="www-pitch-heading">Who we are</h2>
          <div className="www-pitch-body">
            <p>
              Weird Productions is not your standard event vendor. We're a creative event studio
              that specializes in building experiences with art at the center.
            </p>
            <p>
              Whether you're a tech company looking to connect with the creative community,
              a nonprofit wanting to celebrate your mission, or a brand that wants to make
              something genuinely memorable — we'd love to talk.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="www-services">
        <div className="page-wrap">
          <h2 className="www-section-heading">WHAT WE DO</h2>
          <div className="www-services-grid">
            {services.map((s, i) => (
              <div key={i} className="www-service">
                <h3 className="www-service-title">{s.title}</h3>
                <p className="www-service-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo photo strip */}
      <div className="www-promo-strip">
        {promoImages.map((src, i) => (
          <div key={i} className="www-promo-item">
            <img src={src} alt={`Weird Productions promo ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Why Weird */}
      <section className="www-why">
        <div className="page-wrap">
          <h2 className="www-section-heading">WHY WEIRD</h2>
          <div className="www-why-list">
            {whyWeird.map((item, i) => (
              <div key={i} className="www-why-item">
                <span className="www-why-num">0{i + 1}</span>
                <p className="www-why-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="www-portfolio">
        <div className="page-wrap">
          <h2 className="www-section-heading">WEIRD IN THE WORLD</h2>
          <div className="www-portfolio-grid">
            {portfolio.map((p, i) => (
              <div key={i} className="www-portfolio-item">
                <div className="www-portfolio-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <span className="www-portfolio-cat">{p.category}</span>
                <p className="www-portfolio-name">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="www-partners">
        <div className="page-wrap">
          <h2 className="www-section-heading">PARTNERS &amp; COLLABORATORS</h2>
          <div className="www-partners-logos">
            {partners.map((p, i) => (
              <div key={i} className="www-partner-logo">
                <img src={p.src} alt={p.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="www-cta">
        <div className="page-wrap www-cta-inner">
          <h2 className="www-cta-heading">READY TO MAKE SOMETHING WEIRD?</h2>
          <p className="www-cta-sub">Tell us about your project and let's figure out how we can help.</p>
          <a
            href="https://instagram.com/weirdproductions.art"
            target="_blank"
            rel="noopener noreferrer"
            className="www-cta-dm"
          >
            DM us
          </a>
        </div>
      </section>

    </main>
  );
}
