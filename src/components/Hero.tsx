import React from 'react';
import { CHANNEL_URL, CHANNEL_HANDLE } from '../data/videosData';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-content-grid">
        {/* Hero Text & Call to Actions */}
        <div className="hero-text-block">
          <div className="badge badge-primary hero-badge">
            <span className="pulsing-dot" />
            <span>Organization &amp; Channel • {CHANNEL_HANDLE}</span>
          </div>

          <h1 className="hero-title">
            Empowering Developers With Code, Craft &amp; <span className="hero-highlight">Ethics.</span>
          </h1>

          <p className="hero-description">
            We break language barriers in tech with hands-on, high-production coding masterclasses in Tamil.
            From mastering <strong>Flutter &amp; Web Development</strong> to building our flagship finance cloud platform, <strong>xpense-cloud</strong>.
          </p>

          <div className="hero-actions">
            <a
              href="https://xpense-cloud.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Launch xpense-cloud.in</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a href="#products" className="btn btn-secondary">
              <span>Explore Projects</span>
            </a>
            <a href="#videos" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>Watch Tutorials</span>
            </a>
            <a
              href={`${CHANNEL_URL}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-youtube hide-on-mobile"
            >
              <span>Subscribe</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats-row">
            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="15" x="2" y="4.5" rx="2" />
                  <polygon points="10 8.5 15 12 10 15.5 10 8.5" fill="currentColor" />
                </svg>
              </span>
              <div className="stat-info">
                <span className="stat-number">16+</span>
                <span className="stat-label">In-Depth Tutorials</span>
              </div>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              <div className="stat-info">
                <span className="stat-number">Flutter &amp; Web</span>
                <span className="stat-label">Production Stacks</span>
              </div>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </span>
              <div className="stat-info">
                <span className="stat-number">xpense-cloud.in</span>
                <span className="stat-label">Live Platform</span>
              </div>
            </div>

            <div className="stat-divider" />

            <div className="stat-item">
              <span className="stat-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </span>
              <div className="stat-info">
                <span className="stat-number">Free</span>
                <span className="stat-label">Tamil Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
