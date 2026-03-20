import './FilmDurham.css';

export default function FilmDurham() {
  return (
    <div className="fd">

      {/* Hero */}
      <section className="fd__hero">
        <div className="fd__hero-text">
          <p className="fd__eyebrow">Weird × Film Durham</p>
          <h1>Brand<br />Guidelines</h1>
          <p className="fd__hero-sub">Brand Guidelines for a Local Film Festival</p>
        </div>
        <img
          src="/images/film-durham/film-durham-hero.png"
          alt="Brand Guidelines for a Local Film Festival"
          className="fd__hero-img"
        />
      </section>

      {/* Meta */}
      <section className="fd__meta">
        <div className="fd__meta-inner">
          <div className="fd__meta-item">
            <span className="fd__meta-label">Date</span>
            <span className="fd__meta-value">May 21, 2025</span>
          </div>
          <div className="fd__meta-item">
            <span className="fd__meta-label">Role</span>
            <span className="fd__meta-value">Brand Designer</span>
          </div>
          <div className="fd__meta-item">
            <span className="fd__meta-label">Tools</span>
            <span className="fd__meta-value">Adobe Illustrator, Adobe InDesign, Figma</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="fd__intro">
        <div className="fd__section-inner">
          <p className="fd__section-label">Overview</p>
          <p className="fd__intro-text">A distinctive visual identity for a local film festival, balancing artistic expression with professional polish through research, creative development, and iterative refinement.</p>
          <p className="fd__intro-body">The Film Durham branding initiative emphasized developing a distinctive visual identity suited to the festival's character while appealing to diverse audiences.</p>
        </div>
      </section>

      {/* Image 2 */}
      <section className="fd__image-full">
        <img src="/images/film-durham/film-durham-2.png" alt="Film Durham brand guidelines" loading="lazy" />
      </section>

      {/* Research & Strategy */}
      <section className="fd__section fd__section--alt">
        <div className="fd__section-inner fd__section-inner--split">
          <div className="fd__split-label">
            <p className="fd__section-label">Research &amp; Strategy</p>
          </div>
          <div className="fd__split-body">
            <p>The team investigated the festival's core mission, organizational principles, and Durham's regional film landscape to inform the visual direction.</p>
          </div>
        </div>
      </section>

      {/* Image 3 */}
      <section className="fd__image-full">
        <img src="/images/film-durham/film-durham-3.png" alt="Typography and color guidelines" loading="lazy" />
      </section>

      {/* Creative Development */}
      <section className="fd__section">
        <div className="fd__section-inner fd__section-inner--split">
          <div className="fd__split-label">
            <p className="fd__section-label">Creative Development</p>
          </div>
          <div className="fd__split-body">
            <p>Brainstorming sessions produced visual concepts reflecting the festival's essence, followed by mood board creation establishing color palettes and typography that balanced artistic expression with professional polish.</p>
          </div>
        </div>
      </section>

      {/* Image 4 */}
      <section className="fd__image-full">
        <img src="/images/film-durham/film-durham-4.png" alt="Logo usage guidelines" loading="lazy" />
      </section>

      {/* Image 5 */}
      <section className="fd__image-full">
        <img src="/images/film-durham/film-durham-5.png" alt="Brand application mockups" loading="lazy" />
      </section>

      {/* Community Impact */}
      <section className="fd__impact">
        <div className="fd__section-inner">
          <p className="fd__section-label">Community Impact</p>
          <h2 className="fd__impact-text">The resulting branding strengthened audience recognition and fostered connection among filmmakers and festival participants.</h2>
        </div>
      </section>

      {/* Image 6 */}
      <section className="fd__image-full fd__image-full--last">
        <img src="/images/film-durham/film-durham-6.png" alt="Poster and print design" loading="lazy" />
      </section>

    </div>
  );
}
