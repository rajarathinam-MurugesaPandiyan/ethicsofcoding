import React, { useState, useEffect } from 'react';
import { CHANNEL_URL } from '../data/videosData';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Placeholder */}
        <a href="#" className="brand-logo" aria-label="Ethics of Coding Homepage">
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
            <span className="logo-dummy-tag">CODE</span>
          </div>
          <div className="brand-names">
            <div className="brand-title-row">
              <span className="brand-title">Ethics Of Coding</span>
              <span className="brand-badge-pill">DEV</span>
            </div>
            <span className="brand-subtitle">Tech • Community • Cloud</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#products" className="nav-link">
            Products
            <span className="nav-pill-dot">xpense-cloud.in</span>
          </a>
          <a href="#videos" className="nav-link">
            YT Tutorials
          </a>
          <a href="#mission" className="nav-link">
            Mission
          </a>
          <a href="#community" className="nav-link">
            Community
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Subscribe CTA */}
          <a
            href={`${CHANNEL_URL}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-youtube btn-sm nav-subscribe-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Subscribe</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          <div className="mobile-drawer-links">
            <a
              href="#products"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Products</span>
              <span className="badge badge-primary">xpense-cloud.in</span>
            </a>
            <a
              href="#videos"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>YouTube Tutorials</span>
              <span className="badge badge-yt">16+ Videos</span>
            </a>
            <a
              href="#mission"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Our Mission</span>
            </a>
            <a
              href="#community"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Community</span>
            </a>
          </div>

          <div className="mobile-drawer-footer">
            <div className="mobile-theme-row">
              <span>Theme Appearance</span>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onToggleTheme}
              >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
            <a
              href={`${CHANNEL_URL}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-youtube"
              style={{ width: '100%', marginTop: '12px' }}
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
