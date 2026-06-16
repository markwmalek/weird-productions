import { useState, useEffect, useRef } from 'react';
import Text from '../components/Typography';
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
          <Text as="h1" variant="h1" className="www-hero-title">WORK WITH US</Text>
        </div>
      </section>

      {/* Pitch */}
      <section className="www-pitch">
        <div className="page-wrap www-pitch-inner">
          <Text as="h2" variant="h2" className="www-pitch-heading">Who we are</Text>
          <div className="www-pitch-body">
            <Text as="p" variant="bodyLg">
              Weird Productions is a creative studio working at the intersection of events, interiors, and branding.
              We partner with businesses and organizations who want more than what's expected — and aren't afraid to be a little weird about it.
            </Text>
            <Text as="p" variant="bodyLg">
              Whether you're throwing an event, furnishing a space with art, or building a brand identity from scratch — we bring the same thing to all of it: intention, taste, and a network of genuinely talented people.
            </Text>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="www-services">
        <div className="page-wrap">
          <Text as="h2" variant="h2" className="www-section-heading">WHAT WE DO</Text>
          <div className="www-services-grid">
            {services.map((s, i) => (
              <div key={i} className="www-service">
                <Text as="h3" variant="h3" className="www-service-title">{s.title}</Text>
                <Text as="p" variant="body" className="www-service-desc">{s.description}</Text>
                <ul className="www-service-list">
                  {s.offerings.map((o, j) => (
                    <li key={j}><Text as="span" variant="bodySm">{o}</Text></li>
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
          <Text as="h2" variant="h2" className="www-section-heading">WHY WEIRD</Text>
          <div className="www-why-list">
            {whyWeird.map((item, i) => (
              <div key={i} className="www-why-item">
                <Text as="span" variant="label" className="www-why-num">0{i + 1}</Text>
                <Text as="p" variant="body" className="www-why-text">{item}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="www-portfolio">
        <div className="page-wrap">
          <Text as="h2" variant="h2" className="www-section-heading">WEIRD IN THE WORLD</Text>
          <WorldSlideshow />
        </div>
      </section>

      {/* Partners */}
      <section className="www-partners">
        <div className="page-wrap">
          <Text as="h2" variant="h2" className="www-section-heading">PARTNERS &amp; COLLABORATORS</Text>
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
          <Text as="h2" variant="h2" className="www-section-heading">WEIRD ART PROJECTS</Text>
          <div className="www-nonprofit-intro">
            <Text as="p" variant="bodyLg">
              Beyond commercial work, we run <strong>Weird Art Projects</strong> — a registered 501(c)(3) non-profit dedicated to solving community problems with art.
            </Text>
            <Text as="p" variant="bodyLg">
              We partner with Durham to create public art activations, support local artists, and prove that art can be the answer to real community challenges. From holiday window installations to live painting events and public-facing art experiences, we bring creativity where it matters most.
            </Text>
          </div>
          <Text as="h2" variant="h2" className="www-board-subheader">Weird Art Projects Board</Text>
          <div className="www-board-grid">
            {boardMembers.map((member) => (
              <div key={member.name} className="www-board-member">
                <div className="www-board-img-wrap">
                  <img src={member.image} alt={member.name} className="www-board-img" loading="lazy" />
                </div>
                <Text as="h3" variant="h6" className="www-board-name">{member.name}</Text>
                <Text as="p" variant="label" className="www-board-title">{member.title}</Text>
                <Text as="p" variant="bodySm" className="www-board-bio">{member.bio}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="www-cta">
        <div className="page-wrap www-cta-inner">
          <Text as="h2" variant="h1" className="www-cta-heading">READY TO MAKE SOMETHING WEIRD?</Text>
          <Text as="p" variant="bodyLg" className="www-cta-sub">Tell us about your project and let's figure out how we can help.</Text>
          <Text
            as="a"
            variant="body"
            href="https://instagram.com/weirdproductions.art"
            target="_blank"
            rel="noopener noreferrer"
            className="www-cta-dm"
          >
            DM us
          </Text>
        </div>
      </section>

    </main>
  );
}
