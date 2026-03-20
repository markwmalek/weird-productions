import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './WorkWithWeird.css';

const GALLERY_IMAGES = [
  '/images/wwww-gallery1.jpg',
  '/images/wwww-gallery2.jpg',
  '/images/wwww-gallery3.jpg',
  '/images/wwww-gallery4.jpg',
  '/images/wwww-gallery5.jpg',
  '/images/wwww-gallery6.jpg',
];

function WorldSlideshow() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % GALLERY_IMAGES.length);
    }, 600);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="www-slideshow-box">
      <div className="slideshow-rapid">
        {GALLERY_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`slideshow-frame ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: 'Events',
    description: 'We design and produce nights people don\'t forget — art salons, launch parties, competitions, community gatherings. If you want something with a real pulse, this is it.',
    offerings: ['Concept & creative direction', 'Artist and talent curation', 'Full event production'],
  },
  {
    title: 'Interiors',
    description: 'We source and place art that belongs in your space — not just on the wall. Whether it\'s a restaurant, office, or venue, we make rooms feel intentional.',
    offerings: ['Art sourcing & curation', 'Installation planning', 'Artist partnerships'],
  },
  {
    title: 'Branding',
    description: 'We build visual identities and brand voices for people who want to stand out. From naming to design systems, we make sure your brand feels like you — but better.',
    offerings: ['Naming & brand voice', 'Visual identity & design', 'Social and digital assets'],
  },
];

const whyWeird = [
  'A deep network of artists, makers, chefs, performers, and creatives — ready to work.',
  'We don\'t do cookie-cutter. Every project gets a real point of view.',
  'Budget-conscious, reliable, and on time. Without sacrificing the work.',
  'Structure and soul in equal measure. Professional + weird = the sweet spot.',
];


const partners = [
  { src: '/images/wwww-logo-hubrtp.png', alt: 'HUB RTP' },
  { src: '/images/wwww-logo-layer1.png', alt: 'Partner' },
  { src: '/images/wwww-promo1.png', alt: 'Durham Art Guild' },
  { src: '/images/wwww-promo2.png', alt: '21c Museum Hotel' },
  { src: '/images/wwww-promo4.png', alt: 'Night' },
  { src: '/images/wwww-promo5.png', alt: 'American Underground' },
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
              Weird Productions is a creative studio working at the intersection of events, interiors, and branding.
              We partner with businesses and organizations who want more than what's expected — and aren't afraid to be a little weird about it.
            </p>
            <p>
              Whether you're throwing an event, furnishing a space with art, or building a brand identity from scratch — we bring the same thing to all of it: intention, taste, and a network of genuinely talented people.
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
                <ul className="www-service-list">
                  {s.offerings.map((o, j) => (
                    <li key={j}>{o}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          <WorldSlideshow />
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
