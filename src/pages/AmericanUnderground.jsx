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
          <Placeholder aspect="21/9" />
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
            <span className="au__meta-value">Interior Design &amp; Art Curation</span>
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
            American Underground came to us with one brief: make the new space feel warm, lived-in, and unmistakably Durham. We curated five distinct spaces across two floors — layering vintage furniture, hand-sourced rugs, local art, custom lighting, and commissioned pieces from Durham artists to build an environment that reflects the community-driven spirit AU was built on.
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
              <Placeholder fill />
            </div>
            <div className="au__pspace-collage-stack">
              <Placeholder aspect="4/3" />
              <Placeholder aspect="4/3" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <p>The first thing you feel walking into the HUB Lounge is that someone actually cared. A thrifted leather chair anchors one corner, a 14-foot oriental runner leads you through the front door, and warm spotlights make the whole space feel like late afternoon even at noon. This is where people linger — between meetings, between ideas, between the city outside and the work inside.</p>
          </div>

          <div className="au__pspace-art">
            <p className="au__pspace-art-label">Art</p>
            <div className="au__pspace-art-grid">
              <div className="au__pspace-art-item">
                <img src="/images/au/p8_1.png" alt="Bright Orange Abstract Painting" />
                <p>Bright Orange Abstract Painting</p>
              </div>
              <div className="au__pspace-art-item">
                <img src="/images/au/p8_0.png" alt="Custom Mural by Christian Smith" />
                <p>Custom Mural — Christian Smith</p>
              </div>
              <div className="au__pspace-art-item">
                <img src="/images/au/p8_2.png" alt="Road Sign Sculpture" />
                <p>Road Sign Sculpture</p>
              </div>
            </div>
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
              <Placeholder fill />
            </div>
            <div className="au__pspace-collage-stack">
              <Placeholder aspect="4/3" />
              <Placeholder aspect="4/3" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <p>The coworking floor needed to feel productive without feeling corporate. Three salvaged credenzas divide the open plan into distinct zones, topped with books, plants, and objects that give the eye somewhere to rest. Flags from Durham's history hang alongside custom graphic panels — a reminder that this building sits at the intersection of community and ambition.</p>
          </div>

          <div className="au__pspace-art">
            <p className="au__pspace-art-label">Art</p>
            <div className="au__pspace-art-grid">
              <div className="au__pspace-art-item">
                <img src="/images/au/p11_0.jpeg" alt="Flags" />
                <p>Flags — Durham, Pride, Vote &amp; more</p>
              </div>
              <div className="au__pspace-art-item">
                <img src="/images/au/p11_2.png" alt="Custom Panels by Weird" />
                <p>Custom Panels — Weird</p>
              </div>
              <div className="au__pspace-art-item">
                <img src="/images/au/p11_1.png" alt="Custom Mural by Weird" />
                <p>Custom Mural — Weird</p>
              </div>
            </div>
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
              <Placeholder fill />
            </div>
            <div className="au__pspace-collage-stack">
              <Placeholder aspect="4/3" />
              <Placeholder aspect="4/3" />
            </div>
          </div>

          <div className="au__pspace-desc">
            <p>Upstairs, the second floor needed to feel like a different world — calmer, more focused, but no less alive. Room dividers carve out quiet corners without closing them off. Two large oriental rugs ground the space and soften the sound. Zeus Alexander's custom paintings bring the walls to life, bold enough to inspire without pulling focus from the work in front of you.</p>
          </div>

          <div className="au__pspace-art">
            <p className="au__pspace-art-label">Art</p>
            <div className="au__pspace-art-grid">
              <div className="au__pspace-art-item">
                <img src="/images/au/p14_0.png" alt="Custom Paintings by Zeus Alexander" />
                <p>Custom Paintings — Zeus Alexander</p>
              </div>
            </div>
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
            <span>Art Curation</span>
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
