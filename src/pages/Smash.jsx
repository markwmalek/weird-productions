import RapidSlideshow from '../components/RapidSlideshow';
import './Smash.css';

const chefs = [
  { name: 'Aaron Benjamin', venue: 'Gocciolina', img: '/images/smash/chef-aaron.png' },
  { name: 'Brandon Chaney', venue: 'Weird Burgers', img: '/images/smash/chef-brandon.png' },
  { name: 'Wyatt Dickson', venue: 'Picnic', img: '/images/smash/chef-wyatt.jpg' },
];

const poets = [
  { name: 'Endlesswill', img: '/images/smash/poet-endlesswill.jpg' },
  { name: 'Antino Art', img: '/images/smash/poet-antino.jpg' },
  { name: 'Bishop Omega', img: '/images/smash/poet-bishop.jpg' },
];

const judges = [
  { name: 'Zachery Eanes', venue: 'Axios', img: '/images/smash/judge-zach.png' },
  { name: 'Preeti Waas', venue: 'Cheeni', img: '/images/smash/judge-preeti.png' },
  { name: 'Lindsay Wrege', venue: '321 Coffee', img: '/images/smash/judge-lindsay.jpg' },
];

const images = [
  '/images/smash/DSC07772.jpg',
  '/images/smash/DSC_0689.jpg',
  '/images/smash/DSC_0642.JPG',
  '/images/smash/DSC_0628.JPG',
  '/images/smash/DSC_0570.JPG',
  '/images/smash/DSC_0550.JPG',
  '/images/smash/DSC_0614.JPG',
  '/images/smash/DSC_0525.JPG',
  '/images/smash/DSC_0501.JPG',
  '/images/smash/DSC_0420.JPG',
  '/images/smash/DSC_0410.JPG',
  '/images/smash/DSC_0439.JPG',
  '/images/smash/DSC_0405.JPG',
];

function CompetitorGroup({ title, people }) {
  return (
    <div className="sm-competitor-group">
      <h3 className="sm-competitor-label">{title}</h3>
      <div className="sm-competitor-grid">
        {people.map((p, i) => (
          <div key={i} className="sm-competitor">
            <div className="sm-competitor-img">
              <img src={p.img} alt={p.name} loading="lazy" />
            </div>
            <p className="sm-competitor-name">{p.name}</p>
            {p.venue && <p className="sm-competitor-venue">{p.venue}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Smash() {
  return (
    <main className="sm-page">

      {/* Hero */}
      <section className="sm-hero">
        <div className="page-wrap">
          <p className="sm-eyebrow">Event — Durham, NC</p>
          <h1 className="sm-title">SMASH<br />&amp; SLAM</h1>
          <p className="sm-tagline">Smash burgers, slam poets, classic Durm.</p>
          <p className="sm-meta">Sunday, October 6 · 2PM · PS37</p>
        </div>
      </section>

      {/* About */}
      <section className="sm-about">
        <div className="page-wrap sm-about-inner">
          <h2 className="sm-section-heading">About the event</h2>
          <div className="sm-about-body">
            <p>
              A culinary and poetry competition unlike anything Durham had seen — three chefs
              competed in a smash burger showdown while three poets performed slam sets as their backdrop.
            </p>
            <p>
              Your ticket included a slider from each chef, a drink, and the show. A portion of
              every ticket sale went directly to Western NC arts community disaster relief.
            </p>
          </div>
        </div>
      </section>

      {/* Competitors */}
      <section className="sm-competitors">
        <div className="page-wrap">
          <h2 className="sm-section-heading">The lineup</h2>
          <div className="sm-competitors-inner">
            <CompetitorGroup title="Chefs" people={chefs} />
            <CompetitorGroup title="Poets" people={poets} />
            <CompetitorGroup title="Judges" people={judges} />
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="sm-slideshow-section">
        <div className="sm-slideshow-box">
          <RapidSlideshow images={images} />
        </div>
      </section>

    </main>
  );
}
