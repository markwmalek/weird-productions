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
          <Text as="p" variant="eyebrow" className="dw-eyebrow">One night only — Durham, NC</Text>
          <Text as="h1" variant="display" className="dw-title">Dollyweird 3</Text>
          <Text as="p" variant="bodyLg" className="dw-tagline">
            Durham&rsquo;s love letter to her life and legacy.
          </Text>

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

          <div className="dw-event-card" aria-label="Dollyweird 3 event details">
            <div>
              <Text as="p" variant="eyebrow" className="dw-detail-label">When</Text>
              <Text as="p" variant="h4" className="dw-detail-value">Friday, November 20, 2026</Text>
            </div>
            <div>
              <Text as="p" variant="eyebrow" className="dw-detail-label">Where</Text>
              <Text as="p" variant="h4" className="dw-detail-value">The Fruit</Text>
              <Text as="p" variant="body" className="dw-detail-note">Downtown Durham, NC</Text>
            </div>
          </div>
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

      {/* Artists */}
      <section className="dw-artists">
        <div className="page-wrap">
          <div className="dw-artists-intro">
            <Text as="p" variant="eyebrow" className="dw-artists-kicker">Calling all artists</Text>
            <div>
              <Text as="h2" variant="h2" className="dw-artists-heading">
                Submit something weird.
              </Text>
              <Text as="p" variant="bodyLg" className="dw-artists-lede">
                It is <strong>always free</strong> to submit art to Weird Productions.
              </Text>
              <Text
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSejH2KyU07oYc84JWVJPFwhVtXVw3f6uMzd7LXX0Ap7RJgOLQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                variant="h4"
                className="dw-submit-button"
              >
                Submit Your Art
              </Text>
            </div>
          </div>

          <div className="dw-artist-dates" aria-label="Artist submission dates">
            <article className="dw-artist-date dw-artist-date-featured">
              <Text as="p" variant="eyebrow" className="dw-artist-date-label">Submission deadline</Text>
              <Text as="p" variant="h4" className="dw-artist-date-value">
                <time dateTime="2026-10-30T23:59:00-04:00">11:59 PM Friday, October 30, 2026</time>
              </Text>
            </article>
            <article className="dw-artist-date">
              <Text as="p" variant="eyebrow" className="dw-artist-date-label">Acceptance notifications</Text>
              <Text as="p" variant="h4" className="dw-artist-date-value">
                <time dateTime="2026-11-03">Tuesday, November 3, 2026</time>
              </Text>
            </article>
            <article className="dw-artist-date">
              <Text as="p" variant="eyebrow" className="dw-artist-date-label">Final work due</Text>
              <Text as="p" variant="h4" className="dw-artist-date-value">
                <time dateTime="2026-11-18">Wednesday, November 18, 2026</time>
              </Text>
            </article>
          </div>

          <div className="dw-artist-perk">
            <Text as="p" variant="bodyLg">
              Participating artists get in <strong>free</strong> and go to the <strong>front of the line.</strong>
            </Text>
          </div>

          <div className="dw-artist-notice">
            <Text as="p" variant="eyebrow" className="dw-notice-kicker">Please read before you submit</Text>
            <Text as="h3" variant="h3" className="dw-notice-heading">
              This show will be a true p<strong>ART</strong>y.
            </Text>
            <div className="dw-notice-copy">
              <Text as="p" variant="body">
                Expect a festive, high-energy, art-filled experience. We are not professional art
                handlers, and The Fruit is not a traditional art gallery. We are a crew of
                art-loving weirdos who will be installing 100+ pieces of art in a few hours on the
                day of the show.
              </Text>
              <Text as="p" variant="body">
                We are not liable for damage done before, during, or after the event. Please
                consider the fragility and expense of your work before submitting.
              </Text>
              <Text as="p" variant="body" className="dw-care-promise">
                <strong>We will do our absolute best to keep your art celebrated and safe in our care.</strong>
              </Text>
            </div>
          </div>

          <div className="dw-artist-footer">
            <div className="dw-artist-contact">
              <Text as="p" variant="eyebrow" className="dw-artists-kicker">Questions? We&rsquo;re here.</Text>
              <Text
                as="a"
                href="mailto:YourFriends@WeirdProductions.Art"
                variant="body"
                className="dw-artist-link"
              >
                YourFriends@WeirdProductions.Art
              </Text>
              <Text
                as="a"
                href="https://www.instagram.com/weirdproductions.art/"
                target="_blank"
                rel="noopener noreferrer"
                variant="body"
                className="dw-artist-link"
              >
                @weirdproductions.art ↗
              </Text>
            </div>
            <Text as="h2" variant="h2" className="dw-artist-cta">
              If you&rsquo;re brave enough to get this far&hellip;<br />Time to get weird!
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
