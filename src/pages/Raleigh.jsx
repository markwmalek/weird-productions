import RapidSlideshow from '../components/RapidSlideshow';
import Text from '../components/Typography';
import './Raleigh.css';

const designers = [
  { name: 'Derrick Grant', label: 'Needle & Thread Co.' },
  { name: 'Sabrina Lee', label: 'Sabrina Lee Handmade Dresses' },
  { name: 'Katie Allen', label: 'Lifted Millinery' },
  { name: 'Kathleen Grebe', label: 'Bold Standard' },
];

const images = [
  '/images/raleigh/A7I09156.png',
  '/images/raleigh/A7I09134.png',
  '/images/raleigh/A7I09253.jpg',
  '/images/raleigh/A7I09216.jpg',
  '/images/raleigh/A7I09373.jpg',
  '/images/raleigh/A7I09527.jpg',
  '/images/raleigh/A7I09205.jpg',
  '/images/raleigh/A7I09614.jpg',
  '/images/raleigh/A7I09148.jpg',
  '/images/raleigh/A7I09158.jpg',
  '/images/raleigh/A7I09378.jpg',
  '/images/raleigh/A7I09464.jpg',
  '/images/raleigh/A7I09433.jpg',
  '/images/raleigh/A7I09422.jpg',
  '/images/raleigh/A7I09401.jpg',
  '/images/raleigh/A7I09588.jpg',
  '/images/raleigh/A7I09599.jpg',
  '/images/raleigh/A7I09603.jpg',
  '/images/raleigh/A7I09133.jpg',
];

export default function Raleigh() {
  return (
    <main className="rl-page">

      {/* Hero */}
      <section className="rl-hero">
        <div className="page-wrap">
          <Text as="p" variant="eyebrow" className="rl-eyebrow">Fashion Show — Raleigh, NC</Text>
          <Text as="h1" variant="display" className="rl-title">RALEIGH<br />RENAISSANCE</Text>
          <Text as="p" variant="bodyLg" className="rl-tagline">Where would I wear this? Wear that.</Text>
          <Text as="p" variant="h5" className="rl-meta">Photography by Aaron Oates</Text>
        </div>
      </section>

      {/* About */}
      <section className="rl-about">
        <div className="page-wrap rl-about-inner">
          <Text as="h2" variant="h2" className="rl-section-heading">About the show</Text>
          <div className="rl-about-body">
            <Text as="p" variant="body">
              A fashion show celebrating designers, artists, and entrepreneurs from the Triangle.
              Four designers. Eleven models. One night of wearable art in downtown Raleigh.
            </Text>
            <Text as="p" variant="body">
              20% of event profits were donated to support the WNC arts community.
            </Text>
            <div className="rl-schedule">
              <div className="rl-schedule-item">
                <Text as="span" variant="label" className="rl-schedule-time">6–7 PM</Text>
                <Text as="span" variant="body" className="rl-schedule-desc">Arrival + Pre-show Drinks</Text>
              </div>
              <div className="rl-schedule-item">
                <Text as="span" variant="label" className="rl-schedule-time">7–8 PM</Text>
                <Text as="span" variant="body" className="rl-schedule-desc">Fashion Show</Text>
              </div>
              <div className="rl-schedule-item">
                <Text as="span" variant="label" className="rl-schedule-time">8–9 PM</Text>
                <Text as="span" variant="body" className="rl-schedule-desc">Shopping, Drinking, Dancing</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="rl-slideshow-section">
        <div className="rl-slideshow-box">
          <RapidSlideshow images={images} />
        </div>
      </section>

      {/* Designers */}
      <section className="rl-designers">
        <div className="page-wrap rl-designers-inner">
          <Text as="h2" variant="h2" className="rl-section-heading">Designers</Text>
          <ul className="rl-designer-list">
            {designers.map((d, i) => (
              <li key={i} className="rl-designer-item">
                <Text as="span" variant="body" className="rl-designer-name">{d.name}</Text>
                <Text as="span" variant="bodySm" className="rl-designer-label">{d.label}</Text>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sponsors */}
      <section className="rl-sponsors">
        <div className="page-wrap rl-sponsors-inner">
          <Text as="h2" variant="h2" className="rl-section-heading">Sponsors</Text>
          <ul className="rl-sponsor-list">
            <li><Text as="span" variant="body">Triangle Wine Company</Text></li>
            <li><Text as="span" variant="body">Smoky Hollow</Text></li>
            <li><Text as="span" variant="body">Crank Arm Brewing</Text></li>
          </ul>
        </div>
      </section>

    </main>
  );
}
