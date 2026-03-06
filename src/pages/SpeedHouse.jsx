import RapidSlideshow from '../components/RapidSlideshow';
import './SpeedHouse.css';

const artists = [
  { name: 'Brian Ownbey', handle: '@abstract.art.by.otto' },
  { name: 'Catherine Coan', handle: '@catcoan' },
  { name: 'Katie Öztürk', handle: '@upsnerch' },
  { name: 'Jason Blyskal', handle: '@night.owl.creations' },
  { name: 'Joel Tesch', handle: '@artbyjoeltesch' },
];

const images = [
  '/images/speedhouse/WP-134.jpg',
  '/images/speedhouse/WP-46.jpg',
  '/images/speedhouse/WP-87.jpg',
  '/images/speedhouse/WP-109.jpg',
  '/images/speedhouse/WP-94.jpg',
  '/images/speedhouse/WP-89.jpg',
  '/images/speedhouse/WP-32.jpg',
  '/images/speedhouse/WP-40.jpg',
  '/images/speedhouse/WP-123.jpg',
  '/images/speedhouse/WP-70.jpg',
  '/images/speedhouse/WP-92.jpg',
  '/images/speedhouse/WP-74.jpg',
  '/images/speedhouse/WP-79.jpg',
  '/images/speedhouse/WP-47.jpg',
  '/images/speedhouse/WP-55.jpg',
  '/images/speedhouse/WP-63.jpg',
  '/images/speedhouse/WP-21.jpg',
  '/images/speedhouse/WP-67.jpg',
  '/images/speedhouse/WP-24.jpg',
  '/images/speedhouse/WP-64.jpg',
  '/images/speedhouse/WP-44.jpg',
  '/images/speedhouse/WP-4.jpg',
  '/images/speedhouse/WP-5.jpg',
  '/images/speedhouse/WP-31.jpg',
  '/images/speedhouse/WP-25.jpg',
  '/images/speedhouse/WP-45.jpg',
];

export default function SpeedHouse() {
  return (
    <main className="sh-page">

      {/* Hero */}
      <section className="sh-hero">
        <div className="page-wrap">
          <p className="sh-eyebrow">Art Salon — Durham, NC</p>
          <h1 className="sh-title">FAST &amp;<br />LOOSE</h1>
          <p className="sh-tagline">Private art show, DJ spinning vinyl, Mad Men vibes.</p>
          <p className="sh-meta">Speed House · January 25, 2025</p>
        </div>
      </section>

      {/* About */}
      <section className="sh-about">
        <div className="page-wrap sh-about-inner">
          <h2 className="sh-section-heading">The deets</h2>
          <div className="sh-about-body">
            <p>
              A private art exhibition featuring five local artists at Speed House in downtown Durham.
              Mad Men-inspired vibes with dinner club hors d'oeuvres, Mad Men era cocktails, and a DJ spinning vinyl all night.
            </p>
            <ul className="sh-inclusions">
              <li>Private art exhibition by five local artists</li>
              <li>Dinner club hors d'oeuvres</li>
              <li>Mad Men era beverages</li>
              <li>DJ spinning vinyl records</li>
              <li>Dress code: Don / Peggy / Joan, Marlboro Man, Italian Grand Prix</li>
            </ul>
            <p className="sh-venue-line">
              <strong>Venue:</strong> Speed House, 505 N Mangum St, Durham, NC
            </p>
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="sh-artists">
        <div className="page-wrap sh-artists-inner">
          <h2 className="sh-section-heading">Artists</h2>
          <ul className="sh-artist-list">
            {artists.map((a, i) => (
              <li key={i} className="sh-artist-item">
                <span className="sh-artist-name">{a.name}</span>
                <span className="sh-artist-handle">{a.handle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Slideshow */}
      <section className="sh-slideshow-section">
        <div className="sh-slideshow-box">
          <RapidSlideshow images={images} />
        </div>
      </section>

    </main>
  );
}
