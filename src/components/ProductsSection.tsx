import React from "react";
import { PRODUCTS_DATA } from "../data/productsData";

export const ProductsSection: React.FC = () => {
  const xpenseCloud = PRODUCTS_DATA.find((p) => p.id === "xpense-cloud")!;
  const devKits = PRODUCTS_DATA.find((p) => p.id === "ethics-devkits");

  return (
    <section className="section-wrapper projects-section" id="products">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="badge badge-primary">Organization Projects</span>
          </div>
          <h2>
            Featured{" "}
            <span className="gradient-text">Projects &amp; Products</span>
          </h2>
          <p>
            Production-grade cloud platforms and developer ecosystems crafted
            under Ethics Of Coding. Available worldwide across mobile, desktop,
            and web.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="projects-grid">
          {/* 1. Flagship Card: Xpense Cloud */}
          <div className="project-card glass-card flagship-project">
            <div className="project-card-header">
              <div className="project-brand-row">
                <div className="project-icon-box">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div className="project-title-group">
                  <div className="project-badge-row">
                    <span className="badge badge-accent">Flagship Project</span>
                    <span className="badge badge-primary">Live App</span>
                    <span className="badge-platform-tag">
                      Android • iOS • Web
                    </span>
                  </div>
                  <h3 className="project-name">{xpenseCloud.name}</h3>
                </div>
              </div>
            </div>

            <p className="project-tagline-text">{xpenseCloud.tagline}</p>
            <p className="project-description-text">
              {xpenseCloud.description}
            </p>

            {/* Feature Pills */}
            <div className="project-pills-row">
              <span className="project-pill">
                <span className="project-pill-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </span>
                <span>Real-time Sync</span>
              </span>

              <span className="project-pill">
                <span className="project-pill-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </span>
                <span>Visual Analytics</span>
              </span>

              <span className="project-pill">
                <span className="project-pill-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <span>Offline First</span>
              </span>

              <span className="project-pill">
                <span className="project-pill-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </span>
                <span>Mobile &amp; Web</span>
              </span>

              <span className="project-pill">
                <span className="project-pill-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </span>
                <span>Multi-Currency</span>
              </span>

              <span className="project-pill">
                <span className="project-pill-icon" aria-hidden="true">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </span>
                <span>End-to-End Privacy</span>
              </span>
            </div>

            {/* Navigation & Store Links */}
            <div className="project-actions-container">
              {/* Landing Page Button */}
              <a
                href={xpenseCloud.websiteUrl || "https://xpense-cloud.in"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary project-action-btn main-landing-btn"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>Visit Landing Page (xpense-cloud.in) ↗</span>
              </a>

              {/* Google Play Store Button */}
              {xpenseCloud.playStoreUrl && (
                <a
                  href={xpenseCloud.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary project-action-btn store-btn"
                  title="Download Xpense Cloud on Google Play Store"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.339-.304-.543-.761-.543-1.309V3.123c0-.548.204-1.005.542-1.309zm11.307 11.307l2.257 2.257-11.45 6.442 9.193-8.699zm0-2.242L5.723 2.18l11.45 6.442-2.257 2.257zm1.121 1.121l3.543-1.993c.895-.503.895-1.325 0-1.828l-3.543-1.993-2.121 2.121 2.121 2.121z" />
                  </svg>
                  <span>Google Play Store</span>
                </a>
              )}

              {/* Apple App Store Button */}
              {xpenseCloud.appStoreUrl && (
                <a
                  href={xpenseCloud.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary project-action-btn store-btn"
                  title="Download Xpense Cloud on Apple App Store"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.12.64-2.8 1.44-.59.68-1.11 1.77-1.03 2.84 1.07.08 2.2-.66 2.82-1.41z" />
                  </svg>
                  <span>Apple App Store</span>
                </a>
              )}
            </div>
          </div>

          {/* 2. Secondary Card: Ethics DevKits */}
          {devKits && (
            <div className="project-card glass-card secondary-project">
              <div className="project-card-header">
                <div className="project-brand-row">
                  <div className="project-icon-box devkits-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div className="project-title-group">
                    <div className="project-badge-row">
                      <span className="badge badge-accent">
                        Developer Toolkits
                      </span>
                      <span className="badge-platform-tag">Open Source</span>
                    </div>
                    <h3 className="project-name">{devKits.name}</h3>
                  </div>
                </div>
              </div>

              <p className="project-tagline-text">{devKits.tagline}</p>
              <p className="project-description-text">{devKits.description}</p>

              <div className="project-pills-row">
                <span className="project-pill">Flutter BLoC</span>
                <span className="project-pill">Clean Architecture</span>
                <span className="project-pill">React 19 &amp; TypeScript</span>
                <span className="project-pill">MIT Licensed</span>
              </div>

              <div className="project-actions-container">
                <a
                  href="#videos"
                  className="btn btn-secondary project-action-btn"
                >
                  <span>Learn Architecture in Tutorials ↗</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
