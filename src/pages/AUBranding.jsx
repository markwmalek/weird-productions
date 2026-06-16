import { useState } from 'react';
import Text from '../components/Typography';
import './AUBranding.css';
import RapidSlideshow from '../components/RapidSlideshow';

const TOOLKIT_IMAGES = Array.from({ length: 15 }, (_, i) => `/images/au-brand/aub-toolkit/${i + 1}.png`);

const PASSWORD = 'AU2026';
const STORAGE_KEY = 'au_brand_unlocked';

export default function AUBranding() {
  const [unlocked, setUnlocked] = useState(() => {
    try { return sessionStorage.getItem(STORAGE_KEY) === 'true'; } catch { return false; }
  });
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setUnlocked(true);
    } else {
      setError(true);
      setInput('');
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="aub">
      {!unlocked && (
        <div className="au-gate">
          <div className="au-gate__inner">
            <Text as="h1" variant="h3" className="au-gate__title">American Underground</Text>
            <Text as="p" variant="body" className="au-gate__sub">This page is private. Enter the password to continue.</Text>
            <form className="au-gate__form" onSubmit={handleSubmit}>
              <input
                type="password"
                className={`au-gate__input ${error ? 'au-gate__input--error' : ''}`}
                placeholder="Password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />
              <Text as="button" variant="label" type="submit" className="au-gate__btn">Enter</Text>
            </form>
            {error && <Text as="p" variant="bodySm" className="au-gate__error">Incorrect password</Text>}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="aub__hero">
        <div className="aub__hero-text">
          <Text as="p" variant="eyebrow" className="aub__eyebrow">Weird × American Underground</Text>
          <Text as="h1" variant="display">Brand Identity<br />Proposal</Text>
          <Text as="p" variant="bodyLg" className="aub__hero-sub">Branding Proposal — March 2026</Text>
          <Text as="p" variant="h4" className="aub__hero-byline">Lindsay &amp; Mark</Text>
        </div>
      </section>

      {/* Intro */}
      <section className="aub__intro">
        <div className="aub__intro-inner">
          <Text as="p" variant="label" className="aub__section-label">Overview</Text>
          <div className="aub__intro-body">
            <Text as="p" variant="bodyLg">Following the design direction established through the American Underground interior project, we see an opportunity to evolve the organization's visual identity to reflect the energy, creativity, and cultural presence of the space.</Text>
            <Text as="p" variant="bodyLg">Our goal would be to translate the spirit of the physical environment into a cohesive brand system that can live across digital platforms, physical spaces, communications, and future programming.</Text>
            <Text as="p" variant="bodyLg">Rather than a simple logo update, this process would develop a visual language and creative direction that reflects American Underground's role as a hub for innovation, creativity, and community in Durham.</Text>
          </div>
        </div>
      </section>

      {/* Deliverables Header */}
      <section className="aub__deliverables-header">
        <div className="aub__section-inner">
          <Text as="p" variant="label" className="aub__section-label">Scope of Work</Text>
          <Text as="h2" variant="h2" className="aub__section-title">Five deliverables, one cohesive system.</Text>
        </div>
      </section>

      {/* 01 Brand Discovery */}
      <section className="aub__deliverable aub__deliverable--alt">
        <div className="aub__section-inner aub__deliverable-layout">
          <div className="aub__deliverable-content">
            <div className="aub__deliverable-header">
              <Text as="span" variant="displaySm" className="aub__deliverable-num">01</Text>
              <Text as="h2" variant="h2" className="aub__deliverable-title">Brand Discovery Workshop</Text>
            </div>
            <div className="aub__deliverable-body">
              <ul className="aub__list">
                <li>Brand discussion and discovery session</li>
                <li>Review of existing brand materials and messaging</li>
                <li>Visual research and cultural references</li>
                <li>Development of creative positioning for the brand</li>
                <li>Presentation of a clear visual direction</li>
              </ul>
              <div className="aub__deliverable-callout">
                <Text as="span" variant="label" className="aub__callout-label">Deliverable</Text>
                <Text as="span" variant="bodySm" className="aub__callout-value">Creative Direction Presentation</Text>
              </div>
            </div>
          </div>
          <div className="aub__deliverable-img-wrap">
            <img src="/images/au-brand/aub-workshop.png" alt="Brand Discovery Workshop" className="aub__deliverable-img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 02 Visual Identity */}
      <section className="aub__deliverable">
        <div className="aub__section-inner aub__deliverable-layout">
          <div className="aub__deliverable-content">
            <div className="aub__deliverable-header">
              <Text as="span" variant="displaySm" className="aub__deliverable-num">02</Text>
              <Text as="h2" variant="h2" className="aub__deliverable-title">Visual Identity Package</Text>
            </div>
            <div className="aub__deliverable-body">
              <ul className="aub__list">
                <li>Refinement or redesign of the American Underground logo</li>
                <li>Typography system</li>
                <li>Color palette</li>
                <li>Graphic elements and patterns</li>
                <li>Imagery direction</li>
                <li>Overall visual language</li>
                <li>Selection of one visual direction from three options, with one round of follow-up edits included</li>
              </ul>
              <div className="aub__deliverable-callout">
                <Text as="span" variant="label" className="aub__callout-label">Deliverable</Text>
                <Text as="span" variant="bodySm" className="aub__callout-value">Three Distinct Visual Directions to Choose From</Text>
              </div>
            </div>
          </div>
          <div className="aub__deliverable-img-wrap">
            <img src="/images/au-brand/aub-package.png" alt="Visual Identity Package" className="aub__deliverable-img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 03 Environmental Brand Integration */}
      <section className="aub__deliverable aub__deliverable--alt">
        <div className="aub__section-inner aub__deliverable-layout">
          <div className="aub__deliverable-content">
            <div className="aub__deliverable-header">
              <Text as="span" variant="displaySm" className="aub__deliverable-num">03</Text>
              <Text as="h2" variant="h2" className="aub__deliverable-title">Environmental Brand Integration</Text>
            </div>
            <div className="aub__deliverable-body">
              <Text as="p" variant="body" className="aub__deliverable-desc">American Underground lives both physically and digitally, so the identity system extends to the building environment.</Text>
              <ul className="aub__list">
                <li>Signage and wayfinding</li>
                <li>Wall graphics</li>
                <li>Mural concepts</li>
                <li>Branded moments within shared spaces</li>
                <li>Visual consistency between the physical space and brand materials</li>
              </ul>
              <div className="aub__deliverable-callout">
                <Text as="span" variant="label" className="aub__callout-label">Deliverable</Text>
                <Text as="span" variant="bodySm" className="aub__callout-value">Environmental Brand Concepts</Text>
              </div>
            </div>
          </div>
          <div className="aub__deliverable-img-wrap">
            <img src="/images/au-brand/aub-enviornment.jpg" alt="Environmental Brand Integration" className="aub__deliverable-img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 04 Brand Toolkit */}
      <section className="aub__deliverable">
        <div className="aub__section-inner aub__deliverable-layout">
          <div className="aub__deliverable-content">
            <div className="aub__deliverable-header">
              <Text as="span" variant="displaySm" className="aub__deliverable-num">04</Text>
              <Text as="h2" variant="h2" className="aub__deliverable-title">Brand Toolkit</Text>
            </div>
            <div className="aub__deliverable-body">
              <ul className="aub__list">
                <li>Logo files and variations</li>
                <li>Color and typography specifications</li>
                <li>Basic brand guidelines</li>
                <li>Templates for presentations or communications</li>
                <li>Social media templates in AU's design platform of choice</li>
              </ul>
              <div className="aub__deliverable-callout">
                <Text as="span" variant="label" className="aub__callout-label">Deliverable</Text>
                <Text as="span" variant="bodySm" className="aub__callout-value">Brand Toolkit &amp; Guidelines</Text>
              </div>
            </div>
          </div>
          <div className="aub__deliverable-img-wrap">
            <div className="aub__toolkit-slideshow">
              <RapidSlideshow images={TOOLKIT_IMAGES} interval={600} />
            </div>
          </div>
        </div>
      </section>

      {/* 05 Website */}
      <section className="aub__deliverable aub__deliverable--alt">
        <div className="aub__section-inner aub__deliverable-layout">
          <div className="aub__deliverable-content">
            <div className="aub__deliverable-header">
              <Text as="span" variant="displaySm" className="aub__deliverable-num">05</Text>
              <Text as="h2" variant="h2" className="aub__deliverable-title">Website</Text>
            </div>
            <div className="aub__deliverable-body">
              <Text as="p" variant="body" className="aub__deliverable-desc">Embodies the same creative energy and visual identity as the physical space, communicating the organization's role as a hub for founders, creators, and innovators.</Text>
              <Text as="p" variant="label" className="aub__deliverable-scope-label">Scope may include:</Text>
              <ul className="aub__list">
                <li>Website structure and page architecture</li>
                <li>Homepage design and visual storytelling</li>
                <li>Integration of the new brand system (typography, color, graphics)</li>
                <li>Layout design for key pages (about, membership, events, community)</li>
                <li>Visual assets and graphic elements</li>
                <li>Tech stack agreement (platform, CMS, and hosting decisions made collaboratively)</li>
              </ul>
              <div className="aub__deliverable-callout">
                <Text as="span" variant="label" className="aub__callout-label">Deliverable</Text>
                <Text as="span" variant="bodySm" className="aub__callout-value">Website</Text>
              </div>
            </div>
          </div>
          <div className="aub__deliverable-img-wrap">
            <img src="/images/au-brand/aub-website.png" alt="Website" className="aub__deliverable-img" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="aub__timeline">
        <div className="aub__section-inner">
          <Text as="p" variant="label" className="aub__section-label">Timeline</Text>
          <Text as="h2" variant="h2" className="aub__section-title">Estimated timeline: 4–6 weeks</Text>
          <div className="aub__timeline-steps">
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <Text as="span" variant="displaySm" className="aub__step-num">1</Text>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <Text as="p" variant="bodySm" className="aub__step-title">Discovery Workshop</Text>
                <Text as="p" variant="caption" className="aub__step-date">Date TBD</Text>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <Text as="span" variant="displaySm" className="aub__step-num">2</Text>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <Text as="p" variant="bodySm" className="aub__step-title">Visual Identity Package</Text>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <Text as="span" variant="displaySm" className="aub__step-num">3</Text>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <Text as="p" variant="bodySm" className="aub__step-title">Environmental Brand Integration</Text>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <Text as="span" variant="displaySm" className="aub__step-num">4</Text>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <Text as="p" variant="bodySm" className="aub__step-title">Brand Toolkit &amp; Guidelines</Text>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <Text as="span" variant="displaySm" className="aub__step-num">5</Text>
              </div>
              <div>
                <Text as="p" variant="bodySm" className="aub__step-title">Website</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="aub__investment">
        <div className="aub__section-inner">
          <Text as="p" variant="label" className="aub__section-label">Investment</Text>
          <div className="aub__invest-card">
            <div className="aub__invest-top">
              <Text as="p" variant="bodyLg" className="aub__invest-scope">Creative Direction &amp; Brand Identity Development</Text>
              <Text as="p" variant="displaySm" className="aub__invest-total">$28,000</Text>
            </div>
            <div className="aub__invest-divider" />
            <Text as="p" variant="label" className="aub__invest-schedule-label">Payment Schedule</Text>
            <div className="aub__invest-payments">
              <div className="aub__invest-payment">
                <Text as="span" variant="displaySm" className="aub__invest-pct">50%</Text>
                <Text as="span" variant="bodySm" className="aub__invest-note">Deposit upon project start</Text>
              </div>
              <div className="aub__invest-payment">
                <Text as="span" variant="displaySm" className="aub__invest-pct">50%</Text>
                <Text as="span" variant="bodySm" className="aub__invest-note">Upon delivery of final brand assets</Text>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
