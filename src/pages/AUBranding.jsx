import { useState } from 'react';
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
            <h1 className="au-gate__title">American Underground</h1>
            <p className="au-gate__sub">This page is private. Enter the password to continue.</p>
            <form className="au-gate__form" onSubmit={handleSubmit}>
              <input
                type="password"
                className={`au-gate__input ${error ? 'au-gate__input--error' : ''}`}
                placeholder="Password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="au-gate__btn">Enter</button>
            </form>
            {error && <p className="au-gate__error">Incorrect password</p>}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="aub__hero">
        <div className="aub__hero-text">
          <p className="aub__eyebrow">Weird × American Underground</p>
          <h1>Brand Identity<br />Proposal</h1>
          <p className="aub__hero-sub">Branding Proposal — March 2026</p>
          <p className="aub__hero-byline">Lindsay &amp; Mark</p>
        </div>
      </section>

      {/* Intro */}
      <section className="aub__intro">
        <div className="aub__intro-inner">
          <p className="aub__section-label">Overview</p>
          <div className="aub__intro-body">
            <p>Following the design direction established through the American Underground interior project, we see an opportunity to evolve the organization's visual identity to reflect the energy, creativity, and cultural presence of the space.</p>
            <p>Our goal would be to translate the spirit of the physical environment into a cohesive brand system that can live across digital platforms, physical spaces, communications, and future programming.</p>
            <p>Rather than a simple logo update, this process would develop a visual language and creative direction that reflects American Underground's role as a hub for innovation, creativity, and community in Durham.</p>
          </div>
        </div>
      </section>

      {/* Deliverables Header */}
      <section className="aub__deliverables-header">
        <div className="aub__section-inner">
          <p className="aub__section-label">Scope of Work</p>
          <h2 className="aub__section-title">Five deliverables, one cohesive system.</h2>
        </div>
      </section>

      {/* 01 Brand Discovery */}
      <section className="aub__deliverable aub__deliverable--alt">
        <div className="aub__section-inner aub__deliverable-layout">
          <div className="aub__deliverable-content">
            <div className="aub__deliverable-header">
              <span className="aub__deliverable-num">01</span>
              <h2 className="aub__deliverable-title">Brand Discovery Workshop</h2>
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
                <span className="aub__callout-label">Deliverable</span>
                <span className="aub__callout-value">Creative Direction Presentation</span>
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
              <span className="aub__deliverable-num">02</span>
              <h2 className="aub__deliverable-title">Visual Identity Package</h2>
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
                <span className="aub__callout-label">Deliverable</span>
                <span className="aub__callout-value">Three Distinct Visual Directions to Choose From</span>
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
              <span className="aub__deliverable-num">03</span>
              <h2 className="aub__deliverable-title">Environmental Brand Integration</h2>
            </div>
            <div className="aub__deliverable-body">
              <p className="aub__deliverable-desc">American Underground lives both physically and digitally, so the identity system extends to the building environment.</p>
              <ul className="aub__list">
                <li>Signage and wayfinding</li>
                <li>Wall graphics</li>
                <li>Mural concepts</li>
                <li>Branded moments within shared spaces</li>
                <li>Visual consistency between the physical space and brand materials</li>
              </ul>
              <div className="aub__deliverable-callout">
                <span className="aub__callout-label">Deliverable</span>
                <span className="aub__callout-value">Environmental Brand Concepts</span>
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
              <span className="aub__deliverable-num">04</span>
              <h2 className="aub__deliverable-title">Brand Toolkit</h2>
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
                <span className="aub__callout-label">Deliverable</span>
                <span className="aub__callout-value">Brand Toolkit &amp; Guidelines</span>
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
              <span className="aub__deliverable-num">05</span>
              <h2 className="aub__deliverable-title">Website</h2>
            </div>
            <div className="aub__deliverable-body">
              <p className="aub__deliverable-desc">Embodies the same creative energy and visual identity as the physical space, communicating the organization's role as a hub for founders, creators, and innovators.</p>
              <p className="aub__deliverable-scope-label">Scope may include:</p>
              <ul className="aub__list">
                <li>Website structure and page architecture</li>
                <li>Homepage design and visual storytelling</li>
                <li>Integration of the new brand system (typography, color, graphics)</li>
                <li>Layout design for key pages (about, membership, events, community)</li>
                <li>Visual assets and graphic elements</li>
                <li>Tech stack agreement (platform, CMS, and hosting decisions made collaboratively)</li>
              </ul>
              <div className="aub__deliverable-callout">
                <span className="aub__callout-label">Deliverable</span>
                <span className="aub__callout-value">Website</span>
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
          <p className="aub__section-label">Timeline</p>
          <h2 className="aub__section-title">Estimated timeline: 4–6 weeks</h2>
          <div className="aub__timeline-steps">
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <span className="aub__step-num">1</span>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <p className="aub__step-title">Discovery Workshop</p>
                <p className="aub__step-date">Date TBD</p>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <span className="aub__step-num">2</span>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <p className="aub__step-title">Visual Identity Package</p>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <span className="aub__step-num">3</span>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <p className="aub__step-title">Environmental Brand Integration</p>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <span className="aub__step-num">4</span>
                <div className="aub__timeline-connector" />
              </div>
              <div>
                <p className="aub__step-title">Brand Toolkit &amp; Guidelines</p>
              </div>
            </div>
            <div className="aub__timeline-step">
              <div className="aub__step-left">
                <span className="aub__step-num">5</span>
              </div>
              <div>
                <p className="aub__step-title">Website</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="aub__investment">
        <div className="aub__section-inner">
          <p className="aub__section-label">Investment</p>
          <div className="aub__invest-card">
            <div className="aub__invest-top">
              <p className="aub__invest-scope">Creative Direction &amp; Brand Identity Development</p>
              <p className="aub__invest-total">$28,000</p>
            </div>
            <div className="aub__invest-divider" />
            <p className="aub__invest-schedule-label">Payment Schedule</p>
            <div className="aub__invest-payments">
              <div className="aub__invest-payment">
                <span className="aub__invest-pct">50%</span>
                <span className="aub__invest-note">Deposit upon project start</span>
              </div>
              <div className="aub__invest-payment">
                <span className="aub__invest-pct">50%</span>
                <span className="aub__invest-note">Upon delivery of final brand assets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
