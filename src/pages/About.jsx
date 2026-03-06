import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <main className="portfolio-page">

      <div className="portfolio-header page-wrap">
        <h1 className="portfolio-title">Portfolio</h1>
      </div>

      <div className="portfolio-grid page-wrap">

        <Link to="/speedhouse" className="portfolio-card">
          <div className="portfolio-card-img">
            <img src="/images/speedhouse/WP-134.jpg" alt="Fast & Loose Art Salon" loading="lazy" />
          </div>
          <div className="portfolio-card-info">
            <h2 className="portfolio-card-title">Fast &amp; Loose</h2>
            <p className="portfolio-card-desc">Art salon — Durham, NC, 2025</p>
          </div>
        </Link>

        <Link to="/raleigh" className="portfolio-card">
          <div className="portfolio-card-img">
            <img src="/images/raleigh/A7I09373.jpg" alt="Raleigh Renaissance Fashion Show" loading="lazy" />
          </div>
          <div className="portfolio-card-info">
            <h2 className="portfolio-card-title">Raleigh Renaissance</h2>
            <p className="portfolio-card-desc">Fashion show — Raleigh, NC, 2024</p>
          </div>
        </Link>

        <Link to="/smash" className="portfolio-card">
          <div className="portfolio-card-img">
            <img src="/images/smash/DSC07772.jpg" alt="Sunday Smash & Slam" loading="lazy" />
          </div>
          <div className="portfolio-card-info">
            <h2 className="portfolio-card-title">Smash &amp; Slam</h2>
            <p className="portfolio-card-desc">Burger + poetry competition — Durham, NC, 2024</p>
          </div>
        </Link>

        <Link to="/dollyweird" className="portfolio-card">
          <div className="portfolio-card-img">
            <img src="/images/dollyweird/DSC06240.jpg" alt="Dollyweird Art Show" loading="lazy" />
          </div>
          <div className="portfolio-card-info">
            <h2 className="portfolio-card-title">Dollyweird</h2>
            <p className="portfolio-card-desc">One-night art party — Durham, NC, 2023</p>
          </div>
        </Link>

        <Link to="/american-underground" className="portfolio-card">
          <div className="portfolio-card-img">
            <img src="/images/au/p6_0.png" alt="American Underground" loading="lazy" />
          </div>
          <div className="portfolio-card-info">
            <h2 className="portfolio-card-title">American Underground</h2>
            <p className="portfolio-card-desc">Interior art curation proposal — Durham, NC</p>
          </div>
        </Link>

      </div>

    </main>
  );
}
