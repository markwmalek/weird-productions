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
          <p className="au__eyebrow">Weird × American Underground</p>
          <h1>American<br />Underground</h1>
          <p className="au__hero-sub">Interior Design &nbsp;·&nbsp; Durham, NC &nbsp;·&nbsp; 2026</p>
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
            <span className="au__meta-label">Client</span>
            <span className="au__meta-value">American Underground</span>
          </div>
          <div className="au__meta-item">
            <span className="au__meta-label">Scope</span>
            <span className="au__meta-value">Interior Design</span>
          </div>
          <div className="au__meta-item">
            <span className="au__meta-label">Spaces</span>
            <span className="au__meta-value">3 across 2 floors</span>
          </div>
          <div className="au__meta-item">
            <span className="au__meta-label">Location</span>
            <span className="au__meta-value">Durham, NC</span>
          </div>
          <div className="au__meta-item">
            <span className="au__meta-label">Year</span>
            <span className="au__meta-value">2026</span>
          </div>
        </div>
      </section>

      {/* ─── Project Statement ────────────────────────────────────────────── */}
      <section className="au__statement">
        <div className="au__statement-inner">
          <p className="au__statement-text">
            AU brought us in as collaborators, not just decorators. We worked side by side with their team to make the new ATC feel like home. We scoured Nomadic Trading, Gibson Girl, and a dozen other local spots for furniture with character, and commissioned 4 art installations paying out over $3,000 to local artists.          </p>
        </div>
      </section>

      {/* ─── Space 01: The HUB Lounge ─────────────────────────────────────── */}
      <section className="au__pspace">
        <div className="au__pspace-inner">
          <div className="au__pspace-header">
            <span className="au__pspace-num">01</span>
            <div className="au__pspace-title-group">
              <h2 className="au__pspace-name">The HUB: Lounge</h2>
              <p className="au__pspace-floor">1st Floor</p>
            </div>
          </div>

          <div className="au__pspace-collage">
            <div className="au__pspace-collage-main">
              <img src="/images/au/au-hublo-1.png" alt="The HUB Lounge" />
            </div>
            <div className="au__pspace-collage-stack">
              <img src="/images/au/au-hublo-2.png" alt="The HUB Lounge detail" />
              <img src="/images/au/au-hublo-3.png" alt="The HUB Lounge detail" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <p>The first thing you feel walking in is that someone actually cared. A thrifted leather chair from Gibson Girl anchors one corner, a vintage runner from Nomadic Trading leads you through the door, and curated art gives the walls real weight. This is where members linger: between meetings, between ideas.</p>
          </div>

        </div>
      </section>

      {/* ─── Space 02: The HUB Coworking ──────────────────────────────────── */}
      <section className="au__pspace au__pspace--alt">
        <div className="au__pspace-inner">
          <div className="au__pspace-header">
            <span className="au__pspace-num">02</span>
            <div className="au__pspace-title-group">
              <h2 className="au__pspace-name">The HUB: Coworking</h2>
              <p className="au__pspace-floor">1st Floor</p>
            </div>
          </div>

          <div className="au__pspace-collage">
            <div className="au__pspace-collage-main">
              <img src="/images/au/au-hubco-2.png" alt="The HUB Coworking" />
            </div>
            <div className="au__pspace-collage-stack">
              <img src="/images/au/au-hubco-3.png" alt="The HUB Coworking detail" />
              <img src="/images/au/au-hubco-1.png" alt="The HUB Coworking detail" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <p>Productive without feeling corporate. Salvaged credenzas and local finds divide the open plan into distinct zones, topped with books, plants, and objects that give the eye somewhere to rest. We commissioned original art for this floor as part of $3,000+ paid directly to local artists.</p>
          </div>

        </div>
      </section>

      {/* ─── Space 03: Coworking 2nd Floor ────────────────────────────────── */}
      <section className="au__pspace">
        <div className="au__pspace-inner">
          <div className="au__pspace-header">
            <span className="au__pspace-num">03</span>
            <div className="au__pspace-title-group">
              <h2 className="au__pspace-name">Coworking Space</h2>
              <p className="au__pspace-floor">2nd Floor</p>
            </div>
          </div>

          <div className="au__pspace-collage">
            <div className="au__pspace-collage-main">
              <img src="/images/au/au-co-1.png" alt="Coworking Space 2nd Floor" />
            </div>
            <div className="au__pspace-collage-stack">
              <img src="/images/au/au-co-2.png" alt="Coworking Space 2nd Floor detail" />
              <img src="/images/au/au-co-3.png" alt="Coworking Space 2nd Floor detail" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <p>Calmer, more focused, but no less alive. Room dividers carve out quiet corners, rugs soften the sound, and the walls carry commissioned installations from local artists. The kind of depth that makes a space feel earned. Members have made it their own, which was the whole point.</p>
          </div>

        </div>
      </section>

      {/* ─── Hero Collage ─────────────────────────────────────────────────── */}
      <div className="au__hero-img">
        <img src="/images/au/au-hero.png" alt="American Underground interior" />
      </div>

      {/* ─── Credits ──────────────────────────────────────────────────────── */}
      <section className="au__credits">
        <div className="au__credits-inner">
          <p className="au__credits-collab">A collaboration between</p>
          <p className="au__credits-names">Weird &amp; American Underground</p>
          <div className="au__credits-meta">
            <span>Interior Design</span>
            <span>·</span>
            <span>Durham, NC</span>
            <span>·</span>
            <span>2026</span>
          </div>
        </div>
      </section>

    </div>
  );
}
