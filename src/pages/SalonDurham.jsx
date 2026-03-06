import RapidSlideshow from '../components/RapidSlideshow';
import './SalonDurham.css';

const speakers = [
  { name: 'Theresa Tha S.O.N.G.B.I.R.D.', label: 'Keynote Speaker' },
];

const panelists = [
  { name: 'Jes Averhart', label: 'Founder, Jes & Co.' },
  { name: 'Shelley McPhatter', label: 'President, BridgePoint' },
  { name: 'Tiffany M. Griffin', label: 'Founder, Bright Black' },
  { name: 'Kalle Simpson', label: 'Founder, Discover Night' },
];

const chefs = [
  { name: 'Zweli Williams', label: "Zweli's Kitchen & Catering" },
  { name: 'Anna Gibala', label: 'Moonbelly Meat Co.' },
  { name: 'Roselia Flores', label: 'La Superior, Super Taqueria' },
  { name: 'Shayda Wilson', label: 'Sweets by Shayda' },
];

const artists = [
  'Adrianne Huang', 'Britney Symone', 'Delayna Robbins', 'Katie Allen',
  'Michelle Wilkie', 'Reneesha', 'Samantha Everette', 'Yana Slutskaya',
];

const images = [
  '/images/salon/0968.jpeg',
  '/images/salon/0050.jpeg',
  '/images/salon/0180.jpg',
  '/images/salon/0144.jpeg',
  '/images/salon/0177.jpeg',
  '/images/salon/0254.jpeg',
  '/images/salon/0344.jpeg',
  '/images/salon/0542.jpeg',
  '/images/salon/0613.jpeg',
  '/images/salon/0236.jpeg',
  '/images/salon/0810.jpeg',
  '/images/salon/0824.jpeg',
  '/images/salon/0727.jpeg',
  '/images/salon/0647.jpeg',
  '/images/salon/0849.jpeg',
];

export default function SalonDurham() {
  return (
    <main className="sd-page">

      {/* Hero */}
      <section className="sd-hero">
        <div className="page-wrap">
          <p className="sd-eyebrow">Women's Event — Durham, NC</p>
          <h1 className="sd-title">THE<br />SALON</h1>
          <p className="sd-tagline">The Triangle's premier women's event. Celebrating creativity, leadership, and community.</p>
          <p className="sd-meta">310 E Main St, Durham, NC · March 11, 2025</p>
        </div>
      </section>

      {/* About */}
      <section className="sd-about">
        <div className="page-wrap sd-about-inner">
          <h2 className="sd-section-heading">About</h2>
          <div className="sd-about-body">
            <p>
              Curated for intentional collisions. An evening of keynote, fireside conversation, chef's potluck, original art, and connection — brought together by Weird Productions.
            </p>
            <ul className="sd-inclusions">
              <li>Keynote address</li>
              <li>Fireside chat panel</li>
              <li>Chef's potluck</li>
              <li>Art collection showcase</li>
              <li>Drinks &amp; hors d'oeuvres</li>
              <li>DJ spinning all night</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Speakers & Panelists */}
      <section className="sd-people">
        <div className="page-wrap sd-people-inner">
          <div className="sd-people-col">
            <h2 className="sd-section-heading">Keynote</h2>
            <ul className="sd-person-list">
              {speakers.map((s, i) => (
                <li key={i} className="sd-person-item">
                  <span className="sd-person-name">{s.name}</span>
                  <span className="sd-person-label">{s.label}</span>
                </li>
              ))}
            </ul>
            <h2 className="sd-section-heading sd-section-heading--spaced">Fireside Chat</h2>
            <ul className="sd-person-list">
              {panelists.map((p, i) => (
                <li key={i} className="sd-person-item">
                  <span className="sd-person-name">{p.name}</span>
                  <span className="sd-person-label">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sd-people-col">
            <h2 className="sd-section-heading">Chef's Potluck</h2>
            <ul className="sd-person-list">
              {chefs.map((c, i) => (
                <li key={i} className="sd-person-item">
                  <span className="sd-person-name">{c.name}</span>
                  <span className="sd-person-label">{c.label}</span>
                </li>
              ))}
            </ul>
            <h2 className="sd-section-heading sd-section-heading--spaced">Art Collection</h2>
            <ul className="sd-artist-list">
              {artists.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="sd-slideshow-section">
        <div className="sd-slideshow-box">
          <RapidSlideshow images={images} />
        </div>
      </section>

      {/* Production */}
      <section className="sd-production">
        <div className="page-wrap sd-production-inner">
          <h2 className="sd-section-heading">Production</h2>
          <ul className="sd-person-list">
            <li className="sd-person-item">
              <span className="sd-person-name">DJ Uymami</span>
              <span className="sd-person-label">Music by Eleazar Yisrael</span>
            </li>
            <li className="sd-person-item">
              <span className="sd-person-name">Cowboy Collective</span>
              <span className="sd-person-label">Video &amp; photo production</span>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
