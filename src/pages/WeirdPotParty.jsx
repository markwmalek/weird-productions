import ContactCard from '../components/ContactCard';
import Marquee from '../components/Marquee';
import Text from '../components/Typography';
import './WeirdPotParty.css';

const schedule = [
  { label: 'Painting Hours', date: 'Friday, May 15', time: '2 PM – 9 PM' },
  { label: 'Third Friday Event', date: 'Friday, May 15', time: '6 PM – 9 PM' },
];

const potImages = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/pot-party/Pot ${index + 1}.jpg`,
  alt: `Pot ${index + 1}`,
}));

export default function WeirdPotParty() {
  return (
    <div className="wpp">

      {/* Hero */}
      <section className="wpp__hero">
        <div className="wpp__hero-text">
          <Text as="p" variant="eyebrow" className="wpp__eyebrow">Third Friday — May 15, 2026</Text>
          <Text as="h1" variant="h1">Weird<br />Pot<br />Party</Text>
          <Text as="p" variant="script" className="wpp__hero-sub">CCB Plaza, Downtown Durham</Text>
          <Text as="p" variant="bodyLg" className="wpp__hero-copy">Ten artists painted live around the plaza, turning city planters into experimental sculptures and the street into a canvas.</Text>
        </div>
      </section>

      {/* ─── Project Meta ─────────────────────────────────────────────────── */}
      <section className="wpp__meta">
        <div className="wpp__meta-inner">
          <div className="wpp__meta-item">
            <Text as="span" variant="label" className="wpp__meta-label">Location</Text>
            <Text as="span" variant="body" className="wpp__meta-value">CCB Plaza, Downtown Durham</Text>
          </div>
          <div className="wpp__meta-item">
            <Text as="span" variant="label" className="wpp__meta-label">Format</Text>
            <Text as="span" variant="body" className="wpp__meta-value">Live Painting Activation</Text>
          </div>
          <div className="wpp__meta-item">
            <Text as="span" variant="label" className="wpp__meta-label">Artists</Text>
            <Text as="span" variant="body" className="wpp__meta-value">10 Participating Artists</Text>
          </div>
          <div className="wpp__meta-item">
            <Text as="span" variant="label" className="wpp__meta-label">Date</Text>
            <Text as="span" variant="body" className="wpp__meta-value">May 15, 2026</Text>
          </div>
        </div>
      </section>

      {/* ─── Project Statement ────────────────────────────────────────────── */}
      <section className="wpp__statement">
        <div className="wpp__statement-inner">
          <Text as="p" variant="bodyLg" className="wpp__statement-text">
            Ten artists set up at select planters around CCB Plaza and paint the city as it happens around them — plein air style. The event turned downtown Durham into a live canvas for the neighborhood, the people, and the energy of Third Friday.
          </Text>
        </div>
      </section>

      {/* Marquee */}
      <Marquee
        items={['LIVE PAINTING', 'PLEIN AIR', 'DOWNTOWN DURHAM', 'THIRD FRIDAY']}
        dark={false}
        speed={28}
        separatorIcon="/images/lindsay.svg"
      />

      {/* Event Images */}
      <section className="wpp__event-images">
        <div className="wpp__event-images-inner">
          <div className="wpp__event-col">
            <img src="/images/pot-party/Pot Hero.jpg" alt="Weird Pot Party event" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="wpp__schedule">
        <div className="wpp__section-inner">
          <Text as="p" variant="eyebrow" className="wpp__section-label">Schedule</Text>
          <div className="wpp__schedule-grid">
            {schedule.map((item, i) => (
              <div className="wpp__schedule-item" key={i}>
                <Text as="span" variant="label" className="wpp__schedule-label">{item.label}</Text>
                <Text as="span" variant="displaySm" className="wpp__schedule-date">{item.date}</Text>
                {item.time && <Text as="span" variant="body" className="wpp__schedule-time">{item.time}</Text>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pot Images */}
      <section className="wpp__pot-gallery">
        <div className="wpp__section-inner">
          <Text as="p" variant="eyebrow" className="wpp__section-label">Pot Gallery</Text>
          <div className="wpp__bento-grid">
            {potImages.map((pot, index) => (
              <div className="wpp__bento-item" key={index}>
                <img src={pot.src} alt={pot.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee
        items={['CCB PLAZA', 'DOWNTOWN DURHAM', '10 ARTISTS', 'THIRD FRIDAY MAY 15']}
        dark={true}
        speed={30}
        separatorIcon="/images/lindsay.svg"
      />

    </div>
  );
}
