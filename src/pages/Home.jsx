import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

const SLIDESHOW_IMAGES = [
  '/images/slideshow/20250913_PS37_Dollyweird_051_TommyCoyote_IG tommycoyote.jpg',
  '/images/slideshow/20250913_PS37_Dollyweird_122_TommyCoyote_IG tommycoyote.jpg',
  '/images/slideshow/20250913_PS37_Dollyweird_123_TommyCoyote_IG tommycoyote.jpg',
  '/images/slideshow/20250913_PS37_Dollyweird_140_TommyCoyote_IG tommycoyote.jpg',
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

const PORTFOLIO_ITEMS = [
  { to: '/salondurham', img: '/images/salon/0810.jpeg', alt: 'The Salon Durham', title: 'The Salon', desc: "Women's event — Durham, NC, 2025" },
  { to: '/speedhouse', img: '/images/speedhouse/WP-45.jpg', alt: 'Fast & Loose Art Salon', title: 'Fast & Loose', desc: 'Art salon — Durham, NC, 2025' },
  { to: '/raleigh', img: '/images/raleigh/A7I09373.jpg', alt: 'Raleigh Renaissance Fashion Show', title: 'Raleigh Renaissance', desc: 'Fashion show — Raleigh, NC, 2024' },
  { to: '/smash', img: '/images/smash/DSC_0689.jpg', alt: 'Sunday Smash & Slam', title: 'Smash & Slam', desc: 'Burger + poetry competition — Durham, NC, 2024' },
  { to: '/dollyweird', img: '/images/dollyweird/dw_1.jpg', alt: 'Dollyweird Art Show', title: 'Dollyweird', desc: 'One-night art party — Durham, NC, 2023' },
  { to: '/american-underground', img: '/images/au/p4_7.jpeg', alt: 'American Underground', title: 'American Underground', desc: 'Interior art curation — Durham, NC' },
  { to: '/film-durham', img: '/images/film-durham/film-durham-thumb.png', alt: 'Film Durham', title: 'Film Durham', desc: 'Brand guidelines — Durham, NC, 2025' },
];

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
  const portfolioItems = useMemo(() => shuffle(PORTFOLIO_ITEMS).slice(0, 2), []);

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
        <p className="home-hero-sub">A Creative Studio</p>
        <div className="home-hero-arrow" />
      </section>

      {/* ── SLIDESHOW ── */}
      <section className="home-slideshow">
        <div className="home-slideshow-box">
          <RapidSlideshow />
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="home-wwd">
        <div className="home-wwd-inner">
          <h2 className="home-wwd-heading">What we do</h2>
          <p className="home-wwd-sub">We partner with people who want more than what's expected — curating artists, chefs, performers, and creatives from our expansive network.</p>

          <div className="home-wwd-grid">
            <div className="home-wwd-card">
              <div className="home-wwd-img">
                <img src="/images/au/p4_7.jpeg" alt="Interiors" loading="lazy" />
              </div>
              <h3 className="home-wwd-label">Interiors</h3>
              <p className="home-wwd-desc">Art that earns its place on the wall.</p>
            </div>
            <div className="home-wwd-card">
              <div className="home-wwd-img">
                <img src="/images/work-with-us/gallery2.jpg" alt="Events" loading="lazy" />
              </div>
              <h3 className="home-wwd-label">Events</h3>
              <p className="home-wwd-desc">The kind of night people bring up for months.</p>
            </div>
            <div className="home-wwd-card">
              <div className="home-wwd-img">
                <img src="/images/wwd-branding.png" alt="Branding" loading="lazy" />
              </div>
              <h3 className="home-wwd-label">Branding</h3>
              <p className="home-wwd-desc">A look people stop scrolling for.</p>
            </div>
          </div>


        </div>
      </section>

      {/* ── NON-PROFIT ── */}
      <section className="home-nonprofit">
        <div className="home-nonprofit-inner">
          <div className="home-nonprofit-img">
            <img src="/images/pot-party/Hero Image.png" alt="Weird Art Projects — live painting activation at CCB Plaza" loading="lazy" />
          </div>
          <div className="home-nonprofit-text">
            <p className="home-nonprofit-eyebrow">Non-Profit Arm</p>
            <h2 className="home-nonprofit-heading">Weird Art Projects</h2>
            <p className="home-nonprofit-body">A registered 501(c)(3) solving community problems through art. We fund local artists, run public activations, and prove that creativity belongs at the center of Durham's story.</p>
            <a href="https://weirdprojects.art" target="_blank" rel="noopener noreferrer" className="home-nonprofit-link">Learn more ↗</a>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="home-portfolio">
        <div className="home-portfolio-inner">
          <h2 className="home-portfolio-heading">Portfolio</h2>
          <div className="home-portfolio-grid">
            {portfolioItems.map((item) => (
              <Link key={item.to} to={item.to} className="home-portfolio-card">
                <div className="home-portfolio-card-img">
                  <img src={item.img} alt={item.alt} loading="lazy" />
                </div>
                <p className="home-portfolio-card-title">{item.title}</p>
                <p className="home-portfolio-card-desc">{item.desc}</p>
              </Link>
            ))}
          </div>
          <Link to="/portfolio" className="home-portfolio-see-all">See all</Link>
        </div>
      </section>

      {/* ── WORK WITH US + GET ON THE LIST (2 columns desktop) ── */}
      <section className="home-cta-split" aria-label="Work with us and get on the list">
        <div className="home-cta-col home-cta-col--work">
          <h2 className="home-wwu-heading">WORK WITH US</h2>
          <p className="home-wwu-body">
            Weird blends artistic direction and strategic vision to create unforgettable experiences.<br />
            We don't do cookie-cutter.
          </p>
          <Link to="/work-with-weird" className="home-wwu-dm">
            Work with us
          </Link>
        </div>
        <div className="home-cta-col home-cta-col--subscribe">
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
