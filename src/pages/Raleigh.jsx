import RapidSlideshow from '../components/RapidSlideshow';
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
          <p className="rl-eyebrow">Fashion Show — Raleigh, NC</p>
          <h1 className="rl-title">RALEIGH<br />RENAISSANCE</h1>
          <p className="rl-tagline">Where would I wear this? Wear that.</p>
          <p className="rl-meta">Photography by Aaron Oates</p>
        </div>
      </section>

      {/* About */}
      <section className="rl-about">
        <div className="page-wrap rl-about-inner">
          <h2 className="rl-section-heading">About the show</h2>
          <div className="rl-about-body">
            <p>
              A fashion show celebrating designers, artists, and entrepreneurs from the Triangle.
              Four designers. Eleven models. One night of wearable art in downtown Raleigh.
            </p>
            <p>
              20% of event profits were donated to support the WNC arts community.
            </p>
            <div className="rl-schedule">
              <div className="rl-schedule-item">
                <span className="rl-schedule-time">6–7 PM</span>
                <span className="rl-schedule-desc">Arrival + Pre-show Drinks</span>
              </div>
              <div className="rl-schedule-item">
                <span className="rl-schedule-time">7–8 PM</span>
                <span className="rl-schedule-desc">Fashion Show</span>
              </div>
              <div className="rl-schedule-item">
                <span className="rl-schedule-time">8–9 PM</span>
                <span className="rl-schedule-desc">Shopping, Drinking, Dancing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designers */}
      <section className="rl-designers">
        <div className="page-wrap rl-designers-inner">
          <h2 className="rl-section-heading">Designers</h2>
          <ul className="rl-designer-list">
            {designers.map((d, i) => (
              <li key={i} className="rl-designer-item">
                <span className="rl-designer-name">{d.name}</span>
                <span className="rl-designer-label">{d.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Slideshow */}
      <section className="rl-slideshow-section">
        <div className="rl-slideshow-box">
          <RapidSlideshow images={images} />
        </div>
      </section>

      {/* Sponsors */}
      <section className="rl-sponsors">
        <div className="page-wrap rl-sponsors-inner">
          <h2 className="rl-section-heading">Sponsors</h2>
          <ul className="rl-sponsor-list">
            <li>Triangle Wine Company</li>
            <li>Smoky Hollow</li>
            <li>Crank Arm Brewing</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
