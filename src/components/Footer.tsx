import React from 'react';
import { CHANNEL_URL, CHANNEL_HANDLE } from '../data/videosData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" id="community">
      <div className="container footer-content-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <div className="logo-badge-placeholder">
              <svg
                className="logo-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" stroke="var(--color-primary)" strokeWidth="2.5" />
              </svg>
              <span className="logo-dummy-tag">LOGO</span>
            </div>
            <span className="footer-brand-name">Ethics Of Coding</span>
          </div>

          <p className="footer-about-text">
            Bridging technology and developers worldwide through native local-language masterclasses in Tamil.
            Home of <strong>xpense-cloud</strong> and production-grade developer resources.
          </p>

          <div className="footer-channel-link-box">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-channel-badge"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-youtube)">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>{CHANNEL_HANDLE} on YouTube</span>
            </a>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links-list">
            <li><a href="#hero">Home</a></li>
            <li><a href="https://xpense-cloud.in" target="_blank" rel="noopener noreferrer">xpense-cloud.in (Live App ↗)</a></li>
            <li><a href="#products">Product Architecture</a></li>
            <li><a href="#videos">YouTube Video Library</a></li>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#community">Community</a></li>
          </ul>
        </div>

        {/* Tutorials Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Popular Masterclasses</h4>
          <ul className="footer-links-list">
            <li><a href="#videos">Flutter Complete Tutorial Season 1</a></li>
            <li><a href="#videos">Flutter Complete Tutorial Season 2</a></li>
            <li><a href="#videos">Flutter BLoC Pattern Masterclass</a></li>
            <li><a href="#videos">Web Dev Course (HTML, CSS, JS)</a></li>
            <li><a href="#products">xpense-cloud App Walkthrough</a></li>
          </ul>
        </div>

        {/* Connect & Community Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Join the Community</h4>
          <p className="footer-community-desc">
            Subscribe ❤️ and join our coding community today! Learn, build, and grow together.
          </p>
          <div className="footer-social-buttons">
            <a
              href={`${CHANNEL_URL}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-youtube btn-sm"
              style={{ width: '100%' }}
            >
              Subscribe on YouTube 🔔
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="container footer-bottom-bar">
        <div className="bottom-copy">
          © {new Date().getFullYear()} Ethics Of Coding. All rights reserved.
        </div>
        <div className="bottom-center">
          Value Education 📚 • No Barriers 🚀
        </div>
        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};
