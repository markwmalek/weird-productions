import RapidSlideshow from '../components/RapidSlideshow';
import Text from '../components/Typography';
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
          <Text as="p" variant="eyebrow" className="sh-eyebrow">Art Salon — Durham, NC</Text>
          <Text as="h1" variant="display" className="sh-title">Fast &amp;<br />Loose</Text>
          <Text as="p" variant="bodyLg" className="sh-tagline">Private art show, DJ spinning vinyl, Mad Men vibes.</Text>
          <Text as="p" variant="h4" className="sh-meta">Speed House · January 25, 2025</Text>
        </div>
      </section>

      {/* About */}
      <section className="sh-about">
        <div className="page-wrap sh-about-inner">
          <Text as="h2" variant="h2" className="sh-section-heading">The deets</Text>
          <div className="sh-about-body">
            <Text as="p" variant="bodyLg">
              A private art exhibition featuring five local artists at Speed House in downtown Durham.
              Mad Men-inspired vibes with dinner club hors d'oeuvres, Mad Men era cocktails, and a DJ spinning vinyl all night.
            </Text>
            <ul className="sh-inclusions">
              <Text as="li" variant="bodySm">Private art exhibition by five local artists</Text>
              <Text as="li" variant="bodySm">Dinner club hors d'oeuvres</Text>
              <Text as="li" variant="bodySm">Mad Men era beverages</Text>
              <Text as="li" variant="bodySm">DJ spinning vinyl records</Text>
              <Text as="li" variant="bodySm">Dress code: Don / Peggy / Joan, Marlboro Man, Italian Grand Prix</Text>
            </ul>
            <Text as="p" variant="bodySm" className="sh-venue-line">
              <strong>Venue:</strong> Speed House, 505 N Mangum St, Durham, NC
            </Text>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="sh-slideshow-section">
        <div className="sh-slideshow-box">
          <RapidSlideshow images={images} />
        </div>
      </section>

      {/* Artists */}
      <section className="sh-artists">
        <div className="page-wrap sh-artists-inner">
          <Text as="h2" variant="h2" className="sh-section-heading">Artists</Text>
          <ul className="sh-artist-list">
            {artists.map((a, i) => (
              <li key={i} className="sh-artist-item">
                <Text as="span" variant="body" className="sh-artist-name">{a.name}</Text>
                <Text as="span" variant="bodySm" className="sh-artist-handle">{a.handle}</Text>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
