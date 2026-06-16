import Text from '../components/Typography';
import './FilmDurham.css';

export default function FilmDurham() {
  return (
    <div className="fd">

      {/* Hero */}
      <section className="fd__hero">
        <div className="fd__hero-text">
          <Text as="p" variant="eyebrow" className="fd__eyebrow">Weird × Film Durham</Text>
          <Text as="h1" variant="h1">Brand<br />Guidelines</Text>
          <Text as="p" variant="bodyLg" className="fd__hero-sub">Brand Guidelines for a Local Film Festival</Text>
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
            <Text as="span" variant="label" className="fd__meta-label">Date</Text>
            <Text as="span" variant="body" className="fd__meta-value">May 21, 2025</Text>
          </div>
          <div className="fd__meta-item">
            <Text as="span" variant="label" className="fd__meta-label">Role</Text>
            <Text as="span" variant="body" className="fd__meta-value">Brand Designer</Text>
          </div>
          <div className="fd__meta-item">
            <Text as="span" variant="label" className="fd__meta-label">Tools</Text>
            <Text as="span" variant="body" className="fd__meta-value">Adobe Illustrator, Adobe InDesign, Figma</Text>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="fd__intro">
        <div className="fd__section-inner">
          <Text as="p" variant="eyebrow" className="fd__section-label">Overview</Text>
          <Text as="p" variant="bodyLg" className="fd__intro-text">A distinctive visual identity for a local film festival, balancing artistic expression with professional polish through research, creative development, and iterative refinement.</Text>
          <Text as="p" variant="body" className="fd__intro-body">The Film Durham branding initiative emphasized developing a distinctive visual identity suited to the festival's character while appealing to diverse audiences.</Text>
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
            <Text as="p" variant="eyebrow" className="fd__section-label">Research &amp; Strategy</Text>
          </div>
          <div className="fd__split-body">
            <Text as="p" variant="bodyLg">The team investigated the festival's core mission, organizational principles, and Durham's regional film landscape to inform the visual direction.</Text>
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
            <Text as="p" variant="eyebrow" className="fd__section-label">Creative Development</Text>
          </div>
          <div className="fd__split-body">
            <Text as="p" variant="bodyLg">Brainstorming sessions produced visual concepts reflecting the festival's essence, followed by mood board creation establishing color palettes and typography that balanced artistic expression with professional polish.</Text>
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
          <Text as="p" variant="eyebrow" className="fd__section-label">Community Impact</Text>
          <Text as="h2" variant="h3" className="fd__impact-text">The resulting branding strengthened audience recognition and fostered connection among filmmakers and festival participants.</Text>
        </div>
      </section>

      {/* Image 6 */}
      <section className="fd__image-full fd__image-full--last">
        <img src="/images/film-durham/film-durham-6.png" alt="Poster and print design" loading="lazy" />
      </section>

    </div>
  );
}
