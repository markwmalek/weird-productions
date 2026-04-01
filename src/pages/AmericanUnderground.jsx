import './AmericanUnderground.css';

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
        <div className="au__hero-img">
          <img src="/images/au/au-hero.png" alt="American Underground interior" />
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
            <span className="au__meta-value">5 across 2 floors</span>
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
            American Underground came to us with one brief: make the new space feel warm, lived-in, and unmistakably Durham. We designed five distinct spaces across two floors — layering vintage furniture, hand-sourced rugs, custom lighting, and sourced objects to build an environment that reflects the community-driven spirit AU was built on.
          </p>
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
            <p>The first thing you feel walking into the HUB Lounge is that someone actually cared. A thrifted leather chair anchors one corner, a 14-foot oriental runner leads you through the front door, and warm spotlights make the whole space feel like late afternoon even at noon. This is where people linger — between meetings, between ideas, between the city outside and the work inside.</p>
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
              <Placeholder aspect="4/3" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <p>The coworking floor needed to feel productive without feeling corporate. Three salvaged credenzas divide the open plan into distinct zones, topped with books, plants, and objects that give the eye somewhere to rest. Flags from Durham's history hang alongside custom graphic panels — a reminder that this building sits at the intersection of community and ambition.</p>
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
            <p>Upstairs, the second floor needed to feel like a different world — calmer, more focused, but no less alive. Room dividers carve out quiet corners without closing them off. Two large oriental rugs ground the space and soften the sound. Zeus Alexander's custom paintings bring the walls to life, bold enough to inspire without pulling focus from the work in front of you.</p>
          </div>

        </div>
      </section>

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
