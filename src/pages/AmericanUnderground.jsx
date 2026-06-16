import Text from '../components/Typography';
import './AmericanUnderground.css';
import RapidSlideshow from '../components/RapidSlideshow';

const AU_IMAGES = [
  '/images/au/au-hero.png',
  '/images/au/au-hublo-1.png',
  '/images/au/au-hublo-2.png',
  '/images/au/au-hublo-3.png',
  '/images/au/au-hubco-1.png',
  '/images/au/au-hubco-2.png',
  '/images/au/au-hubco-3.png',
  '/images/au/au-co-1.png',
  '/images/au/au-co-2.png',
  '/images/au/au-co-3.png',
  '/images/au/p4_7.jpeg',
];

function Placeholder({ aspect, fill = false }) {
  return (
    <div
      className="au__placeholder"
      style={fill ? { height: '100%' } : { aspectRatio: aspect }}
      aria-hidden="true"
    />
  );
}

export default function AmericanUnderground() {
  return (
    <div className="au">

      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="au__hero">
        <div className="au__hero-text">
          <Text as="p" variant="eyebrow" className="au__eyebrow">Weird × American Underground</Text>
          <Text as="h1" variant="h1">American<br />Underground</Text>
          <Text as="p" variant="body" className="au__hero-sub">Interior Design &nbsp;·&nbsp; Durham, NC &nbsp;·&nbsp; 2026</Text>
        </div>
        <div className="au__hero-slideshow">
          <div className="au__hero-slideshow-inner">
            <RapidSlideshow images={AU_IMAGES} interval={700} />
          </div>
        </div>
      </section>

      {/* ─── Project Meta ─────────────────────────────────────────────────── */}
      <section className="au__meta">
        <div className="au__meta-inner">
          <div className="au__meta-item">
            <Text as="span" variant="label" className="au__meta-label">Client</Text>
            <Text as="span" variant="body" className="au__meta-value">American Underground</Text>
          </div>
          <div className="au__meta-item">
            <Text as="span" variant="label" className="au__meta-label">Scope</Text>
            <Text as="span" variant="body" className="au__meta-value">Interior Design</Text>
          </div>
          <div className="au__meta-item">
            <Text as="span" variant="label" className="au__meta-label">Spaces</Text>
            <Text as="span" variant="body" className="au__meta-value">3 across 2 floors</Text>
          </div>
          <div className="au__meta-item">
            <Text as="span" variant="label" className="au__meta-label">Location</Text>
            <Text as="span" variant="body" className="au__meta-value">Durham, NC</Text>
          </div>
          <div className="au__meta-item">
            <Text as="span" variant="label" className="au__meta-label">Year</Text>
            <Text as="span" variant="body" className="au__meta-value">2026</Text>
          </div>
        </div>
      </section>

      {/* ─── Project Statement ────────────────────────────────────────────── */}
      <section className="au__statement">
        <div className="au__statement-inner">
          <Text as="p" variant="bodyLg" className="au__statement-text">
            AU brought us in as collaborators, not just decorators. We worked side by side with their team to make the new ATC feel like home. We scoured Nomadic Trading, Gibson Girl, and a dozen other local spots for furniture with character, and commissioned 4 art installations paying out over $3,000 to local artists.          </Text>
        </div>
      </section>

      {/* ─── Space 01: The HUB Lounge ─────────────────────────────────────── */}
      <section className="au__pspace">
        <div className="au__pspace-inner">
          <div className="au__pspace-header">
            <Text as="span" variant="displaySm" className="au__pspace-num">01</Text>
            <div className="au__pspace-title-group">
              <Text as="h2" variant="h2" className="au__pspace-name">The HUB: Lounge</Text>
              <Text as="p" variant="body" className="au__pspace-floor">1st Floor</Text>
            </div>
          </div>

          <div className="au__pspace-collage">
            <div className="au__pspace-collage-main">
              <img src="/images/au/au-hublo-1.png" alt="The HUB Lounge" loading="lazy" />
            </div>
            <div className="au__pspace-collage-stack">
              <img src="/images/au/au-hublo-2.png" alt="The HUB Lounge detail" loading="lazy" />
              <img src="/images/au/au-hublo-3.png" alt="The HUB Lounge detail" loading="lazy" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <Text as="p" variant="body">The first thing you feel walking in is that someone actually cared. A thrifted leather chair from Gibson Girl anchors one corner, a vintage runner from Nomadic Trading leads you through the door, and curated art gives the walls real weight. This is where members linger: between meetings, between ideas.</Text>
          </div>

        </div>
      </section>

      {/* ─── Space 02: The HUB Coworking ──────────────────────────────────── */}
      <section className="au__pspace au__pspace--alt">
        <div className="au__pspace-inner">
          <div className="au__pspace-header">
            <Text as="span" variant="displaySm" className="au__pspace-num">02</Text>
            <div className="au__pspace-title-group">
              <Text as="h2" variant="h2" className="au__pspace-name">The HUB: Coworking</Text>
              <Text as="p" variant="body" className="au__pspace-floor">1st Floor</Text>
            </div>
          </div>

          <div className="au__pspace-collage">
            <div className="au__pspace-collage-main">
              <img src="/images/au/au-hubco-2.png" alt="The HUB Coworking" loading="lazy" />
            </div>
            <div className="au__pspace-collage-stack">
              <img src="/images/au/au-hubco-3.png" alt="The HUB Coworking detail" loading="lazy" />
              <img src="/images/au/au-hubco-1.png" alt="The HUB Coworking detail" loading="lazy" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <Text as="p" variant="body">Productive without feeling corporate. Salvaged credenzas and local finds divide the open plan into distinct zones, topped with books, plants, and objects that give the eye somewhere to rest. We commissioned original art for this floor as part of $3,000+ paid directly to local artists.</Text>
          </div>

        </div>
      </section>

      {/* ─── Space 03: Coworking 2nd Floor ────────────────────────────────── */}
      <section className="au__pspace">
        <div className="au__pspace-inner">
          <div className="au__pspace-header">
            <Text as="span" variant="displaySm" className="au__pspace-num">03</Text>
            <div className="au__pspace-title-group">
              <Text as="h2" variant="h2" className="au__pspace-name">Coworking Space</Text>
              <Text as="p" variant="body" className="au__pspace-floor">2nd Floor</Text>
            </div>
          </div>

          <div className="au__pspace-collage">
            <div className="au__pspace-collage-main">
              <img src="/images/au/au-co-1.png" alt="Coworking Space 2nd Floor" loading="lazy" />
            </div>
            <div className="au__pspace-collage-stack">
              <img src="/images/au/au-co-2.png" alt="Coworking Space 2nd Floor detail" loading="lazy" />
              <img src="/images/au/au-co-3.png" alt="Coworking Space 2nd Floor detail" loading="lazy" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <Text as="p" variant="body">Calmer, more focused, but no less alive. Room dividers carve out quiet corners, rugs soften the sound, and the walls carry commissioned installations from local artists. The kind of depth that makes a space feel earned. Members have made it their own, which was the whole point.</Text>
          </div>

        </div>
      </section>

      {/* ─── Hero Collage ─────────────────────────────────────────────────── */}
      <div className="au__hero-img">
        <img src="/images/au/au-hero.png" alt="American Underground interior" loading="lazy" />
      </div>

      {/* ─── Credits ──────────────────────────────────────────────────────── */}
      <section className="au__credits">
        <div className="au__credits-inner">
          <Text as="p" variant="eyebrow" className="au__credits-collab">A collaboration between</Text>
          <Text as="p" variant="h2" className="au__credits-names">Weird &amp; American Underground</Text>
          <div className="au__credits-meta">
            <Text as="span" variant="body">Interior Design</Text>
            <span>·</span>
            <Text as="span" variant="body">Durham, NC</Text>
            <span>·</span>
            <Text as="span" variant="body">2026</Text>
          </div>
        </div>
      </section>

    </div>
  );
}
