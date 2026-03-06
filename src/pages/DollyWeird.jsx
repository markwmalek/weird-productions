import RapidSlideshow from '../components/RapidSlideshow';
import './DollyWeird.css';

const images = [
  '/images/dollyweird/DSC06429.jpg',
  '/images/dollyweird/DSC06427.jpg',
  '/images/dollyweird/DSC06358.jpg',
  '/images/dollyweird/DSC06271.jpg',
  '/images/dollyweird/DSC06244.jpg',
  '/images/dollyweird/DSC06236.jpg',
  '/images/dollyweird/DSC06240.jpg',
  '/images/dollyweird/DSC06145.jpg',
  '/images/dollyweird/DSC06125.jpg',
  '/images/dollyweird/DSC06070.jpg',
  '/images/dollyweird/DSC06025.jpg',
  '/images/dollyweird/DSC05999.jpg',
  '/images/dollyweird/DSC06006.jpg',
  '/images/dollyweird/IMG_0659.jpeg',
];

export default function DollyWeird() {
  return (
    <main className="dw-page">

      {/* Hero */}
      <section className="dw-hero">
        <div className="page-wrap">
          <p className="dw-eyebrow">Art Show — Durham, NC</p>
          <h1 className="dw-title">DOLLYWEIRD</h1>
          <p className="dw-tagline">The party that started weird.</p>
          <p className="dw-meta">Saturday, September 23, 2023</p>
        </div>
      </section>

      {/* About */}
      <section className="dw-about">
        <div className="page-wrap dw-about-inner">
          <h2 className="dw-section-heading">About the show</h2>
          <div className="dw-about-body">
            <p>
              DOLLYWEIRD — a one-night art party celebrating all things Dolly. The show included
              over 100 works of art from the Triangle and beyond, all available for purchase.
            </p>
            <p>
              This was the event that started it all for Weird Productions — built by art lovers
              who were bored of art shows and wanted something that felt more like a party than
              a gallery opening.
            </p>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="dw-slideshow-section">
        <div className="dw-slideshow-box">
          <RapidSlideshow images={images} />
        </div>
      </section>

      {/* Press */}
      <section className="dw-press">
        <div className="page-wrap dw-press-inner">
          <h2 className="dw-section-heading">Featured in</h2>
          <ul className="dw-press-list">
            <li>
              <a
                href="https://downtowndurham.com/event/dollyweird-durham-art-show/"
                target="_blank"
                rel="noopener noreferrer"
                className="dw-press-link"
              >
                Downtown Durham Inc. ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.triangledowntowner.com/events/270665/dollyweird-art-show-party"
                target="_blank"
                rel="noopener noreferrer"
                className="dw-press-link"
              >
                Triangle Downtowner ↗
              </a>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
