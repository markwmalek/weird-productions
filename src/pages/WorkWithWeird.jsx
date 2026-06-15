import { useState, useEffect, useRef } from 'react';
import './WorkWithWeird.css';

const GALLERY_IMAGES = [
  '/images/work-with-us/gallery1.jpg',
  '/images/work-with-us/gallery2.jpg',
  '/images/work-with-us/gallery3.jpg',
  '/images/work-with-us/gallery4.jpg',
  '/images/work-with-us/gallery5.jpg',
  '/images/work-with-us/gallery6.jpg',
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
  { src: '/images/work-with-us/logo-hubrtp.png', alt: 'HUB RTP' },
  { src: '/images/work-with-us/logo-layer1.png', alt: 'Partner' },
  { src: '/images/work-with-us/promo1.png', alt: 'Durham Art Guild' },
  { src: '/images/work-with-us/promo2.png', alt: '21c Museum Hotel' },
  { src: '/images/work-with-us/promo4.png', alt: 'Night' },
  { src: '/images/work-with-us/promo5.png', alt: 'American Underground' },
];

const boardMembers = [
  {
    name: 'Lindsay Hebert',
    title: 'Executive Director',
    image: '/images/work-with-us/team/lindsay-hebert.png',
    bio: 'Founder of Weird Productions and Weird Projects, bringing together a lifetime of curiosity, global experience, and a conviction that you don\'t need permission to make things happen.',
  },
  {
    name: 'Jonathan Collins',
    title: 'Board Chair',
    image: '/images/work-with-us/team/jon-collins.png',
    bio: 'Entrepreneur and small business advocate with lived experience building and selling local businesses in Durham.',
  },
  {
    name: 'Mark Wilson Malek',
    title: 'Creative Director, Board Member',
    image: '/images/work-with-us/team/mark-malek.jpeg',
    bio: 'Co-founder of Weird Productions and the creative vision behind the Weird brands. An artist with a background in product and graphic design.',
  },
  {
    name: 'Jill Lederer-Hicks',
    title: 'Board Treasurer',
    image: '/images/work-with-us/team/jill-hicks.png',
    bio: 'Formerly known as the "Pizza Queen" for her Domino\'s Pizza empire. Jill brings a career spent scaling businesses alongside community leadership.',
  },
  {
    name: 'Joel Tesch',
    title: 'Board Secretary',
    image: '/images/work-with-us/team/joel-tesch.png',
    bio: 'Full-time painter who understands the artist journey, having made the leap from corporate career to sustaining a full-time art practice.',
  },
  {
    name: 'Jes Averhart',
    title: 'Board Member',
    image: '/images/work-with-us/team/jes-averhart.jpg',
    bio: 'Brings a combination of excellence, generosity, and momentum. Known for showing up supportive and deeply invested in helping ideas reach their potential.',
  },
  {
    name: 'Shelley McPhatter',
    title: 'Board Member',
    image: '/images/work-with-us/team/shelley-mcphatter.jpg',
    bio: 'Brings decades of experience leading complex commercial construction projects across the Triangle.',
  },
];

export default function WorkWithWeird() {
  return (
    <main className="www-page">

      {/* Hero */}
      <section className="www-hero">
        <div className="page-wrap">
          <h1 className="www-hero-title">WORK WITH US</h1>
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
                <img src={p.src} alt={p.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Profit */}
      <section className="www-nonprofit">
        <div className="page-wrap">
          <h2 className="www-section-heading">WEIRD ART PROJECTS</h2>
          <div className="www-nonprofit-intro">
            <p>
              Beyond commercial work, we run <strong>Weird Art Projects</strong> — a registered 501(c)(3) non-profit dedicated to solving community problems with art.
            </p>
            <p>
              We partner with Durham to create public art activations, support local artists, and prove that art can be the answer to real community challenges. From holiday window installations to live painting events and public-facing art experiences, we bring creativity where it matters most.
            </p>
          </div>
          <h2 className="www-board-subheader">Weird Art Projects Board</h2>
          <div className="www-board-grid">
            {boardMembers.map((member) => (
              <div key={member.name} className="www-board-member">
                <div className="www-board-img-wrap">
                  <img src={member.image} alt={member.name} className="www-board-img" loading="lazy" />
                </div>
                <h3 className="www-board-name">{member.name}</h3>
                <p className="www-board-title">{member.title}</p>
                <p className="www-board-bio">{member.bio}</p>
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
