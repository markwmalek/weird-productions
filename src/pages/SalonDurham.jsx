import RapidSlideshow from '../components/RapidSlideshow';
import Text from '../components/Typography';
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
          <Text as="p" variant="eyebrow" className="sd-eyebrow">Women's Event — Durham, NC</Text>
          <Text as="h1" variant="display" className="sd-title">THE<br />SALON</Text>
          <Text as="p" variant="bodyLg" className="sd-tagline">The Triangle's premier women's event. Celebrating creativity, leadership, and community.</Text>
          <Text as="p" variant="script" className="sd-meta">310 E Main St, Durham, NC · March 11, 2025</Text>
        </div>
      </section>

      {/* About */}
      <section className="sd-about">
        <div className="page-wrap sd-about-inner">
          <Text as="h2" variant="h2" className="sd-section-heading">About</Text>
          <div className="sd-about-body">
            <Text as="p" variant="bodyLg">
              Curated for intentional collisions. An evening of keynote, fireside conversation, chef's potluck, original art, and connection — brought together by Weird Productions.
            </Text>
            <ul className="sd-inclusions">
              <li><Text as="span" variant="body">Keynote address</Text></li>
              <li><Text as="span" variant="body">Fireside chat panel</Text></li>
              <li><Text as="span" variant="body">Chef's potluck</Text></li>
              <li><Text as="span" variant="body">Art collection showcase</Text></li>
              <li><Text as="span" variant="body">Drinks &amp; hors d'oeuvres</Text></li>
              <li><Text as="span" variant="body">DJ spinning all night</Text></li>
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

      {/* Speakers & Panelists */}
      <section className="sd-people">
        <div className="page-wrap sd-people-inner">
          <div className="sd-people-col">
            <Text as="h2" variant="h2" className="sd-section-heading">Keynote</Text>
            <ul className="sd-person-list">
              {speakers.map((s, i) => (
                <li key={i} className="sd-person-item">
                  <Text as="span" variant="h6" className="sd-person-name">{s.name}</Text>
                  <Text as="span" variant="bodySm" className="sd-person-label">{s.label}</Text>
                </li>
              ))}
            </ul>
            <Text as="h2" variant="h2" className="sd-section-heading sd-section-heading--spaced">Fireside Chat</Text>
            <ul className="sd-person-list">
              {panelists.map((p, i) => (
                <li key={i} className="sd-person-item">
                  <Text as="span" variant="h6" className="sd-person-name">{p.name}</Text>
                  <Text as="span" variant="bodySm" className="sd-person-label">{p.label}</Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="sd-people-col">
            <Text as="h2" variant="h2" className="sd-section-heading">Chef's Potluck</Text>
            <ul className="sd-person-list">
              {chefs.map((c, i) => (
                <li key={i} className="sd-person-item">
                  <Text as="span" variant="h6" className="sd-person-name">{c.name}</Text>
                  <Text as="span" variant="bodySm" className="sd-person-label">{c.label}</Text>
                </li>
              ))}
            </ul>
            <Text as="h2" variant="h2" className="sd-section-heading sd-section-heading--spaced">Art Collection</Text>
            <ul className="sd-artist-list">
              {artists.map((a, i) => (
                <li key={i}><Text as="span" variant="body">{a}</Text></li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Production */}
      <section className="sd-production">
        <div className="page-wrap sd-production-inner">
          <Text as="h2" variant="h2" className="sd-section-heading">Production</Text>
          <ul className="sd-person-list">
            <li className="sd-person-item">
              <Text as="span" variant="h6" className="sd-person-name">DJ Uymami</Text>
              <Text as="span" variant="bodySm" className="sd-person-label">Music by Eleazar Yisrael</Text>
            </li>
            <li className="sd-person-item">
              <Text as="span" variant="h6" className="sd-person-name">Cowboy Collective</Text>
              <Text as="span" variant="bodySm" className="sd-person-label">Video &amp; photo production</Text>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
