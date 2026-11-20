import { useRef } from 'react';
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

const promoImages = [
  {
    src: '/images/dollyweird/promo-music.webp',
    alt: 'Azul performing live on stage with a microphone',
  },
  {
    src: '/images/dollyweird/promo-portraits.webp',
    alt: 'Portrait studio photograph by Jillian Clark',
  },
  {
    src: '/images/dollyweird/promo-burgers.webp',
    alt: 'Chef holding a Weird Burger at Dollyweird',
  },
  {
    src: '/images/dollyweird/promo-party.webp',
    alt: 'Two Dollyweird guests posing together under pink and purple lights',
  },
];

export default function DollyWeird() {
  const promoCarouselRef = useRef(null);

  const scrollPromoCarousel = (direction) => {
    const carousel = promoCarouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.querySelector('.dw-promo-card');
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const cardWidth = firstCard?.getBoundingClientRect().width || carousel.clientWidth;

    carousel.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <main className="dw-page">

      {/* Photo hero */}
      <section className="dw-photo-hero" aria-labelledby="dw-hero-title">
        <img
          src="/images/dollyweird/dollyweird-hero.jpg"
          alt="Dollyweird guests celebrating in front of a wall of Dolly-inspired artwork"
          fetchPriority="high"
        />
        <div className="page-wrap dw-photo-hero-content">
          <Text as="p" variant="eyebrow" className="dw-eyebrow">Tickets on sale — one night only</Text>
          <Text as="h1" variant="display" className="dw-title" id="dw-hero-title">Dollyweird 3</Text>
          <Text as="p" variant="bodyLg" className="dw-tagline">
            Durham&rsquo;s love letter to her life and legacy.
          </Text>

          <div className="dw-hero-actions">
            <Text
              as="a"
              href="https://fa7b88-3.myshopify.com/products/dollyweird-3-ticket?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web"
              target="_blank"
              rel="noopener noreferrer"
              variant="h4"
              className="dw-ticket-button"
            >
              Snag a Ticket
            </Text>
            <Text
              as="a"
              href="https://fa7b88-3.myshopify.com/collections/dollyweird-4"
              target="_blank"
              rel="noopener noreferrer"
              variant="h4"
              className="dw-ticket-button dw-art-button"
            >
              Buy Art
            </Text>
          </div>
        </div>
      </section>

      {/* Event details */}
      <section className="dw-hero">
        <div className="page-wrap">
          <div className="dw-event-card" aria-label="Dollyweird 3 event details">
            <div>
              <Text as="p" variant="eyebrow" className="dw-detail-label">When</Text>
              <Text as="p" variant="h4" className="dw-detail-value">
                <time dateTime="2026-11-20T19:00:00-05:00">7 PM Friday, November 20, 2026</time>
              </Text>
            </div>
            <div>
              <Text as="p" variant="eyebrow" className="dw-detail-label">Where</Text>
              <Text
                as="a"
                href="https://www.instagram.com/durhamfruit/"
                target="_blank"
                rel="noopener noreferrer"
                variant="h4"
                className="dw-detail-value dw-detail-link"
              >
                The Fruit ↗
              </Text>
              <Text as="p" variant="body" className="dw-detail-note">Downtown Durham, NC</Text>
            </div>
            <div>
              <Text as="p" variant="eyebrow" className="dw-detail-label">Parking</Text>
              <Text
                as="a"
                href="https://maps.google.com/?q=Maizon+Parking+Deck,+500+E+Main+St,+Durham,+NC"
                target="_blank"
                rel="noopener noreferrer"
                variant="h4"
                className="dw-detail-value dw-detail-link"
              >
                Maizon Deck ↗
              </Text>
              <Text as="p" variant="body" className="dw-detail-note">
                One block away, or find street parking nearby.
              </Text>
            </div>
          </div>
        </div>
      </section>

      {/* Event highlights */}
      <section className="dw-highlights">
        <div className="page-wrap dw-highlights-inner">
          <div className="dw-highlights-heading-wrap">
            <Text as="p" variant="eyebrow" className="dw-highlights-kicker">Don&rsquo;t miss</Text>
            <Text as="h2" variant="h2" className="dw-highlights-heading">
              A whole night of Dolly-inspired weirdness.
            </Text>
          </div>

          <ul className="dw-highlights-list">
            <li className="dw-highlight-item">
              <span className="dw-highlight-icon" aria-hidden="true">🖼️</span>
              <Text as="p" variant="bodyLg"><strong>100+ pieces</strong> of Dolly-inspired original art</Text>
            </li>
            <li className="dw-highlight-item">
              <span className="dw-highlight-icon" aria-hidden="true">🪩</span>
              <Text as="p" variant="bodyLg">
                Live music + Dolly covers by{' '}
                <a href="https://www.instagram.com/azulmazapata/" target="_blank" rel="noopener noreferrer">@azulmzapata</a>{' '}
                and{' '}
                <a href="https://www.instagram.com/theemilymusolino/" target="_blank" rel="noopener noreferrer">@theemilymusolino</a>
              </Text>
            </li>
            <li className="dw-highlight-item">
              <span className="dw-highlight-icon" aria-hidden="true">📸</span>
              <Text as="p" variant="bodyLg">
                Portrait studio by{' '}
                <a href="https://www.instagram.com/itsjillianclark/" target="_blank" rel="noopener noreferrer">@itsjillianclark</a>
              </Text>
            </li>
            <li className="dw-highlight-item">
              <span className="dw-highlight-icon" aria-hidden="true">🍔</span>
              <Text as="p" variant="bodyLg">
                Weird burgers by Chef{' '}
                <a href="https://www.instagram.com/b_chain_e/" target="_blank" rel="noopener noreferrer">@b_chain_e</a>
              </Text>
            </li>
            <li className="dw-highlight-item">
              <span className="dw-highlight-icon" aria-hidden="true">💫</span>
              <Text as="p" variant="bodyLg">
                Surprises, special guests, and a whole bunch of cool folks ready to p<strong>ART</strong>y!
              </Text>
            </li>
          </ul>
        </div>
      </section>

      {/* Promo carousel */}
      <section className="dw-promo" aria-labelledby="dw-promo-heading">
        <div className="page-wrap dw-promo-header">
          <div>
            <Text as="p" variant="eyebrow" className="dw-promo-kicker">A taste of the pARTy</Text>
            <Text as="h2" variant="h3" className="dw-promo-heading" id="dw-promo-heading">
              See what&rsquo;s waiting for you.
            </Text>
          </div>
          <div className="dw-promo-controls" aria-label="Carousel controls">
            <button
              type="button"
              className="dw-promo-control"
              onClick={() => scrollPromoCarousel(-1)}
              aria-label="Show previous image"
            >
              ←
            </button>
            <button
              type="button"
              className="dw-promo-control"
              onClick={() => scrollPromoCarousel(1)}
              aria-label="Show next image"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="dw-promo-carousel"
          ref={promoCarouselRef}
          tabIndex="0"
          aria-label="Dollyweird event preview images"
        >
          {promoImages.map((image) => (
            <figure className="dw-promo-card" key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="dw-about">
        <div className="page-wrap dw-about-inner">
          <Text as="h2" variant="h2" className="dw-section-heading">It all started with Dolly.</Text>
          <div className="dw-about-body">
            <Text as="p" variant="bodyLg">
              Our first-ever weird event was DOLLYWEIRD, back before Weird Productions even
              existed. Now we invite you to join us for DOLLYWEIRD 3: Durham&rsquo;s love letter to
              her life and legacy.
            </Text>
            <Text as="p" variant="bodyLg">
              DOLLYWEIRD 3 is a one-night community art exhibition celebrating all expressions
              and interpretations of the theme &ldquo;DOLLYWEIRD.&rdquo;
            </Text>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section className="dw-slideshow-section">
        <div className="page-wrap">
          <Text as="p" variant="eyebrow" className="dw-gallery-label">Where the weird began</Text>
          <div className="dw-slideshow-box">
            <RapidSlideshow images={images} />
          </div>
        </div>
      </section>

      {/* Signoff */}
      <section className="dw-signoff">
        <div className="page-wrap dw-signoff-inner">
          <Text as="h2" variant="h2" className="dw-signoff-heading">
            We&rsquo;re so excited to have you.
          </Text>
          <div className="dw-signature">
            <Text as="p" variant="bodyLg">xo</Text>
            <Text as="p" variant="h4">Team Weird</Text>
          </div>
        </div>
      </section>

    </main>
  );
}
