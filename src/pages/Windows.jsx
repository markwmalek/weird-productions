import Marquee from '../components/Marquee';
import WindowsMap from '../components/WindowsMap';
import Text from '../components/Typography';
import './Windows.css';

const windows = [
  {
    title: 'A Reclaimed Christmas by Ali Waller',
    location: '121 Market St, Durham, NC',
    handle: '@alicekayw',
    description:
      'Honors those who remake old traditions for themselves. Ali Waller began showing art at 18 in Glasgow and has worked as a sculptor on the east coast for eight years, now based in Durham. Her work confronts trauma with hyperreal life casts and her own illustrative symbols.',
    image: '/images/windows/artist-ali-waller.jpg',
  },
  {
    title: 'Carnival of Dogs by Christian Smith',
    location: '307 West Main St, Durham, NC',
    handle: '@goodchristianartpage',
    description:
      'Inspired by vintage toy and pet store displays. Christian is a Raleigh artist influenced by vintage comics, westerns, and clowns. He mainly paints clothing and hand-cuts wood.',
    image: '/images/windows/artist-christian-smith.jpg',
  },
  {
    title: 'Window Shopping in an Alternate Reality by Jeghetto',
    location: '407 E Chapel Hill St, Durham, NC',
    handle: '@jeghettos_puppets',
    description:
      'A sci-fi holiday season where robots and humans shop together. Tarish "Jeghetto" Pipkins is a master puppeteer who\'s built recycled, found-material puppets for 20+ years.',
    image: '/images/windows/artist-jeghetto.png',
  },
  {
    title: 'The Holiday Party by Jordan Grace Owens',
    location: '309 E Chapel Hill St, Durham, NC',
    handle: '@jordangraceowens',
    description:
      'Plays on the voyeurism of peeking into a strange office holiday party. Jordan Grace Owens is a Durham artist creating colorful, semi-sculptural figures and abstract paintings.',
    image: '/images/windows/artist-jordan-owens.png',
  },
  {
    title: "Santa's Werkshop by Jason Lord",
    location: '204 Rigsbee Ave, Durham, NC',
    handle: '@jasonearllord',
    description:
      'A public-facing intervention that activates curiosity outside of the white cube gallery space. Jason Lord is an interdisciplinary artist in Durham who stacks objects, takes photo walks, draws, and runs material experiments.',
    image: '/images/windows/artist-jason-lord.png',
  },
  {
    title: 'A Holiday Under the Sea by Bob Ostrom',
    location: '107 E Chapel Hill St, Durham, NC',
    handle: '@bobostromstudio',
    description:
      'An undersea holiday with mermaids and their underwater friends. Bob spent about thirty years drawing children\'s books and loved it.',
    image: '/images/windows/artist-bob-ostrom.png',
  },
  {
    title: 'Be Audacious by Sabrina Servance',
    location: '212 W Main St, Durham, NC',
    handle: '@sabrinastyled',
    description:
      'Bringing joy and color where things stay traditional. Sabrina Servance is a mixed-media artist exploring identity, memory, and transformation through layered visuals.',
    image: '/images/windows/artist-sabrina-servance.png',
  },
];

const highlights = [
  { label: 'Walking Tour', image: '/images/windows/highlight-walking-tour.png' },
  { label: 'Artist Talk', image: '/images/windows/highlight-artist-talk.png' },
  { label: '7 Unique Displays', image: '/images/windows/highlight-displays.png' },
];

const sponsors = [
  { name: 'Downtown Durham Inc', logo: '/images/sponsors/ddi-logo.webp' },
  { name: 'Durham Arts Council', logo: '/images/sponsors/durham-arts-council.png' },
];

export default function Windows() {
  return (
    <div className="windows">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="windows__hero">
        <div className="windows__hero-text">
          <Text as="p" variant="eyebrow" className="windows__eyebrow">Weird × Holiday Season</Text>
          <Text as="h1" variant="h1">Weird<br />Windows</Text>
          <Text as="p" variant="script" className="windows__hero-sub">Holiday Window Displays &nbsp;·&nbsp; Durham, NC &nbsp;·&nbsp; December 2025</Text>
        </div>
      </section>

      {/* ─── Project Meta ─────────────────────────────────────────────────── */}
      <section className="windows__meta">
        <div className="windows__meta-inner">
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Partner</Text>
            <Text as="span" variant="body" className="windows__meta-value">Downtown Durham Inc</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Format</Text>
            <Text as="span" variant="body" className="windows__meta-value">Window Displays</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Locations</Text>
            <Text as="span" variant="body" className="windows__meta-value">7 Downtown Storefronts</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Location</Text>
            <Text as="span" variant="body" className="windows__meta-value">Durham, NC</Text>
          </div>
          <div className="windows__meta-item">
            <Text as="span" variant="label" className="windows__meta-label">Date</Text>
            <Text as="span" variant="body" className="windows__meta-value">December 2025</Text>
          </div>
        </div>
      </section>

      {/* ─── Project Statement ────────────────────────────────────────────── */}
      <section className="windows__statement">
        <div className="windows__statement-inner">
          <Text as="p" variant="bodyLg" className="windows__statement-text">
            Our Weird spin on Macy's holiday windows. We invited seven extraordinary artists to transform downtown Durham storefronts into holiday displays, celebrating the creativity and spirit of our local community.
          </Text>
        </div>
      </section>

      {/* ─── Windows ──────────────────────────────────────────────────────── */}
      {windows.map((w, i) => (
        <section key={i} className={`windows__window ${i % 2 === 1 ? 'windows__window--alt' : ''}`}>
          <div className="windows__window-inner">
            <div className="windows__window-header">
              <Text as="span" variant="displaySm" className="windows__window-num">{String(i + 1).padStart(2, '0')}</Text>
              <div className="windows__window-title-group">
                <Text as="h2" variant="h2" className="windows__window-name">{w.title}</Text>
                <Text as="p" variant="label" className="windows__window-location">{w.location} · {w.handle}</Text>
              </div>
            </div>

            <div className="windows__window-image">
              <img src={w.image} alt={w.title} loading="lazy" />
            </div>

            <div className="windows__window-desc">
              <Text as="p" variant="bodyLg">{w.description}</Text>
            </div>
          </div>
        </section>
      ))}

      {/* ─── Map Section ──────────────────────────────────────────────────── */}
      <section className="windows__map-section" id="map">
        <div className="windows__map-section-inner">
          <div className="windows__map-header">
            <Text as="span" variant="label" className="windows__map-label">Explore</Text>
            <Text as="h2" variant="h2">Find the Windows on the Map</Text>
            <Text as="p" variant="body">All 7 displays are within walking distance in downtown Durham. Click a marker to see details and get directions.</Text>
          </div>
          <WindowsMap />
        </div>
      </section>

      {/* ─── Credits ──────────────────────────────────────────────────────── */}
      <section className="windows__credits">
        <div className="windows__credits-inner">
          <Text as="p" variant="label" className="windows__credits-collab">A collaboration between</Text>
          <Text as="p" variant="h1" className="windows__credits-names">Weird &amp; Downtown Durham</Text>
          <div className="windows__credits-meta">
            <Text as="span" variant="bodySm">Holiday Window Displays</Text>
            <Text as="span" variant="bodySm">·</Text>
            <Text as="span" variant="bodySm">Durham, NC</Text>
            <Text as="span" variant="bodySm">·</Text>
            <Text as="span" variant="bodySm">December 2025</Text>
          </div>
        </div>
      </section>

    </div>
  );
}
