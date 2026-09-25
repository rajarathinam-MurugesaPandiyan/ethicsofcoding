import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import type { AnimationItem } from 'lottie-web';

interface HeroLottieProps {
  /**
   * Optional path or URL to your Lottie JSON animation.
   * Drop your JSON in `public/hero-animation.json` or pass a URL from LottieFiles!
   */
  animationPath?: string;
}

export const HeroLottie: React.FC<HeroLottieProps> = ({
  animationPath = '/hero-animation.json'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [lottieLoaded, setLottieLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset previous instance
    if (animRef.current) {
      animRef.current.destroy();
      animRef.current = null;
    }

    try {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
      });

      anim.addEventListener('DOMLoaded', () => {
        setLottieLoaded(true);
        setHasError(false);
      });

      anim.addEventListener('data_failed', () => {
        // Fallback gracefully to the sleek themed illustration if JSON isn't yet provided
        setHasError(true);
        setLottieLoaded(false);
      });

      animRef.current = anim;
    } catch {
      setHasError(true);
    }

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [animationPath]);

  return (
    <div className="hero-lottie-card xpense-glass">
      {/* Top Card Header */}
      <div className="lottie-header-bar">
        <a
          href="https://xpense-cloud.in"
          target="_blank"
          rel="noopener noreferrer"
          className="lottie-visit-link"
        >
          <span>Visit xpense-cloud.in</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Animation Viewport Container */}
      <div className="lottie-display-area">
        {/* Lottie Container for your animation */}
        <div
          ref={containerRef}
          className={`lottie-player-wrapper ${lottieLoaded ? 'visible' : 'hidden'}`}
          style={{ width: '100%', height: '100%' }}
        />

        {/* Clean Theme-Styled Illustration (shown as active fallback or until custom lottie is loaded) */}
        {(!lottieLoaded || hasError) && (
          <div className="lottie-placeholder-art">
            <svg
              viewBox="0 0 420 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="art-svg animate-float"
            >
              {/* Cloud Base Platform */}
              <rect x="60" y="210" width="300" height="60" rx="30" fill="var(--color-surface-2)" stroke="var(--color-border)" strokeWidth="2" />
              <circle cx="110" cy="240" r="14" fill="var(--color-primary-light)" />
              <path d="M104 240 L109 245 L116 235" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="136" y="245" fill="var(--color-text)" fontSize="13" fontWeight="700" fontFamily="Poppins, sans-serif">
                xpense-cloud.in Active Sync
              </text>
              <rect x="290" y="228" width="54" height="24" rx="12" fill="var(--color-primary)" />
              <text x="303" y="244" fill="#FFFFFF" fontSize="10" fontWeight="800" fontFamily="Poppins, sans-serif">
                LIVE
              </text>

              {/* Central Floating FinTech Card */}
              <g transform="translate(110, 60)">
                <rect width="200" height="125" rx="18" fill="var(--color-surface)" stroke="var(--color-primary)" strokeWidth="2" filter="drop-shadow(0 14px 24px var(--color-glow))" />
                <rect x="18" y="18" width="40" height="26" rx="6" fill="var(--color-primary-light)" />
                <path d="M28 31 L38 31 M33 26 L33 36" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="165" cy="30" r="8" fill="var(--color-accent)" opacity="0.6" />
                <circle cx="175" cy="30" r="8" fill="var(--color-primary)" opacity="0.8" />
                
                <text x="18" y="74" fill="var(--color-text-secondary)" fontSize="10" fontWeight="600" fontFamily="Poppins, sans-serif">
                  Monthly Cashflow
                </text>
                <text x="18" y="100" fill="var(--color-text)" fontSize="20" fontWeight="800" fontFamily="Poppins, sans-serif">
                  $4,850.00
                </text>
                <rect x="120" y="85" width="62" height="18" rx="9" fill="var(--color-primary-light)" />
                <text x="128" y="98" fill="var(--color-primary)" fontSize="9" fontWeight="700" fontFamily="Poppins, sans-serif">
                  +18.4% ↗
                </text>
              </g>

              {/* Orbiting Satellite Pills */}
              <g transform="translate(50, 95)" className="animate-float" style={{ animationDelay: '1s' }}>
                <rect width="105" height="34" rx="17" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.06))" />
                <circle cx="17" cy="17" r="7" fill="var(--color-primary)" />
                <text x="32" y="21" fill="var(--color-text)" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">
                  Android &amp; iOS
                </text>
              </g>

              <g transform="translate(265, 140)" className="animate-float" style={{ animationDelay: '2s' }}>
                <rect width="115" height="34" rx="17" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.06))" />
                <circle cx="17" cy="17" r="7" fill="var(--color-primary-hover)" />
                <text x="32" y="21" fill="var(--color-text)" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">
                  Web Dashboard
                </text>
              </g>
            </svg>
          </div>
        )}
      </div>

      {/* Bottom Footer Info Strip */}
      <div className="lottie-footer-bar">
        <div className="lottie-feature-points">
          <span className="feature-pill">⚡ Realtime Sync</span>
          <span className="feature-pill">📱 Mobile &amp; Web</span>
          <span className="feature-pill">🔒 Offline First</span>
        </div>
      </div>
    </div>
  );
};
