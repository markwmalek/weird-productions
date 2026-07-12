import RapidSlideshow from '../components/RapidSlideshow';
import Text from '../components/Typography';
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
          <Text as="p" variant="eyebrow" className="dw-eyebrow">Art Show — Durham, NC</Text>
          <Text as="h1" variant="display" className="dw-title">Dollyweird</Text>
          <Text as="p" variant="bodyLg" className="dw-tagline">The party that started weird.</Text>
          <Text as="p" variant="h4" className="dw-meta">Saturday, September 23, 2023</Text>
        </div>
      </section>

      {/* About */}
      <section className="dw-about">
        <div className="page-wrap dw-about-inner">
          <Text as="h2" variant="h2" className="dw-section-heading">About the show</Text>
          <div className="dw-about-body">
            <Text as="p" variant="bodyLg">
              DOLLYWEIRD — a one-night art party celebrating all things Dolly. The show included
              over 100 works of art from the Triangle and beyond, all available for purchase.
            </Text>
            <Text as="p" variant="bodyLg">
              This was the event that started it all for Weird Productions — built by art lovers
              who were bored of art shows and wanted something that felt more like a party than
              a gallery opening.
            </Text>
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
          <Text as="h2" variant="h2" className="dw-section-heading">Featured in</Text>
          <ul className="dw-press-list">
            <li>
              <Text
                as="a"
                href="https://downtowndurham.com/event/dollyweird-durham-art-show/"
                target="_blank"
                rel="noopener noreferrer"
                variant="body"
                className="dw-press-link"
              >
                Downtown Durham Inc. ↗
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="https://www.triangledowntowner.com/events/270665/dollyweird-art-show-party"
                target="_blank"
                rel="noopener noreferrer"
                variant="body"
                className="dw-press-link"
              >
                Triangle Downtowner ↗
              </Text>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}
