import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const SLIDESHOW_IMAGES = [
  '/images/slideshow/0E57C2DE-7C0F-4125-9554-52CA0B03C986_1_105_c.jpeg',
  '/images/slideshow/417FE75E-27FB-4AF2-951B-93E8F26EFD83_1_105_c.jpeg',
  '/images/slideshow/A7I030591.jpg',
  '/images/slideshow/A7I03498.jpg',
  '/images/slideshow/A7I03512.jpg',
  '/images/slideshow/A7I03592.jpg',
  '/images/slideshow/A7I03593.jpg',
  '/images/slideshow/A7I03646.jpg',
  '/images/slideshow/A7I03772.jpg',
  '/images/slideshow/A7I03850.jpg',
  '/images/slideshow/A7I09158.jpg',
  '/images/slideshow/A7I09187.jpg',
  '/images/slideshow/A7I09206.jpg',
  '/images/slideshow/A7I09373.jpg',
  '/images/slideshow/A7I09413.jpg',
  '/images/slideshow/A7I09507-Enhanced-NR-Edit.jpg',
  '/images/slideshow/IMG_3674.jpg',
  '/images/slideshow/IMG_4470.jpg',
  '/images/slideshow/Speedhouse-X-WP-29.jpg',
  '/images/slideshow/Speedhouse-X-WP-45.jpg',
  '/images/slideshow/Speedhouse-X-WP-57.jpg',
  '/images/slideshow/Speedhouse-X-WP-73.jpg',
  '/images/slideshow/Speedhouse-X-WP-87.jpg',
  '/images/slideshow/Speedhouse-X-WP-90.jpg',
  '/images/slideshow/Speedhouse-X-WP-92.jpg',
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function RapidSlideshow() {
  const [images] = useState(() => shuffle(SLIDESHOW_IMAGES));
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 600);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className="slideshow-rapid">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={`slideshow-frame ${i === index ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/subscribe');
  }

  return (
    <main className="home-page">

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-title-wrap">
          <img src="/images/hero-lindsay.png" alt="" className="home-hero-char home-hero-lindsay" aria-hidden="true" />
          <img src="/images/hero-mark.png"    alt="" className="home-hero-char home-hero-mark"    aria-hidden="true" />
          <h1 className="home-hero-title">Weird</h1>
        </div>
        <p className="home-hero-sub">A CREATIVE STUDIO</p>
        <div className="home-hero-arrow" />
      </section>

      {/* ── SLIDESHOW ── */}
      <section className="home-slideshow">
        <div className="home-slideshow-box">
          <RapidSlideshow />
        </div>
        <p className="home-slideshow-caption">
          Follow for creative people, parties, &amp; experiences.
        </p>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="home-wwd">
        <div className="home-wwd-inner">
          <h2 className="home-wwd-heading">What we do</h2>
          <p className="home-wwd-sub">We partner with people who want more than what's expected.</p>

          <div className="home-wwd-grid">
            <div className="home-wwd-card">
              <div className="home-wwd-img">
                <img src="/images/artists-gallery4.jpg" alt="Projects" loading="lazy" />
              </div>
              <h3 className="home-wwd-label">Projects</h3>
              <p className="home-wwd-desc">We want to find new ways for people to connect.</p>
            </div>
            <div className="home-wwd-card">
              <div className="home-wwd-img">
                <img src="/images/wwww-gallery2.jpg" alt="Events" loading="lazy" />
              </div>
              <h3 className="home-wwd-label">Events</h3>
              <p className="home-wwd-desc">We want people to talk about your events for months.</p>
            </div>
            <div className="home-wwd-card">
              <div className="home-wwd-img">
                <img src="/images/wwd-branding.png" alt="Branding" loading="lazy" />
              </div>
              <h3 className="home-wwd-label">Branding</h3>
              <p className="home-wwd-desc">We want them to feel something.</p>
            </div>
          </div>

          <p className="home-wwd-note">
            We curate artists, chefs, performers, and creatives from our expansive network.
          </p>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="home-portfolio">
        <h2 className="home-portfolio-heading">Portfolio</h2>
        <div className="home-portfolio-track">
          <Link to="/salondurham" className="home-portfolio-card">
            <div className="home-portfolio-card-img">
              <img src="/images/salon/0968.jpeg" alt="The Salon Durham" loading="lazy" />
            </div>
            <p className="home-portfolio-card-title">The Salon</p>
            <p className="home-portfolio-card-desc">Women's event — Durham, NC, 2025</p>
          </Link>
          <Link to="/speedhouse" className="home-portfolio-card">
            <div className="home-portfolio-card-img">
              <img src="/images/speedhouse/WP-134.jpg" alt="Fast & Loose Art Salon" loading="lazy" />
            </div>
            <p className="home-portfolio-card-title">Fast &amp; Loose</p>
            <p className="home-portfolio-card-desc">Art salon — Durham, NC, 2025</p>
          </Link>
          <Link to="/raleigh" className="home-portfolio-card">
            <div className="home-portfolio-card-img">
              <img src="/images/raleigh/A7I09373.jpg" alt="Raleigh Renaissance Fashion Show" loading="lazy" />
            </div>
            <p className="home-portfolio-card-title">Raleigh Renaissance</p>
            <p className="home-portfolio-card-desc">Fashion show — Raleigh, NC, 2024</p>
          </Link>
          <Link to="/smash" className="home-portfolio-card">
            <div className="home-portfolio-card-img">
              <img src="/images/smash/DSC07772.jpg" alt="Sunday Smash & Slam" loading="lazy" />
            </div>
            <p className="home-portfolio-card-title">Smash &amp; Slam</p>
            <p className="home-portfolio-card-desc">Burger + poetry competition — Durham, NC, 2024</p>
          </Link>
          <Link to="/dollyweird" className="home-portfolio-card">
            <div className="home-portfolio-card-img">
              <img src="/images/dollyweird/DSC06240.jpg" alt="Dollyweird Art Show" loading="lazy" />
            </div>
            <p className="home-portfolio-card-title">Dollyweird</p>
            <p className="home-portfolio-card-desc">One-night art party — Durham, NC, 2023</p>
          </Link>
          <Link to="/american-underground" className="home-portfolio-card">
            <div className="home-portfolio-card-img">
              <img src="/images/au/p6_0.png" alt="American Underground" loading="lazy" />
            </div>
            <p className="home-portfolio-card-title">American Underground</p>
            <p className="home-portfolio-card-desc">Interior art curation proposal — Durham, NC</p>
          </Link>
        </div>
      </section>

      {/* ── WORK WITH US ── */}
      <section className="home-wwu">
        <div className="home-wwu-inner">
          <h2 className="home-wwu-heading">WORK WITH US</h2>
          <p className="home-wwu-body">
            Weird blends artistic direction and strategic vision to create unforgettable experiences.<br />
            We don't do cookie-cutter.
          </p>
          <a
            href="https://instagram.com/weirdproductions.art"
            target="_blank"
            rel="noopener noreferrer"
            className="home-wwu-dm"
          >
            DM us
          </a>
        </div>
      </section>

      {/* ── GET ON THE LIST ── */}
      <section className="home-gol">
        <div className="home-gol-inner">
          <h2 className="home-gol-heading">GET ON THE LIST</h2>
          <p className="home-gol-sub">Cool events. Calls for art. Be the first to know.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="home-gol-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
        </div>
      </section>

    </main>
  );
}
