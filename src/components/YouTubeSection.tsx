import React, { useState, useMemo } from 'react';
import { VIDEOS_DATA, CHANNEL_URL, CHANNEL_HANDLE } from '../data/videosData';
import type { CategoryType, VideoItem } from '../types';

interface YouTubeSectionProps {
  onOpenVideoModal: (videoId: string, videoTitle: string) => void;
}

export const YouTubeSection: React.FC<YouTubeSectionProps> = ({ onOpenVideoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { key: CategoryType; label: string; count: number }[] = [
    { key: 'all', label: 'All Videos', count: VIDEOS_DATA.length },
    { key: 'flutter', label: 'Flutter & Dart', count: VIDEOS_DATA.filter((v) => v.category === 'flutter').length },
    { key: 'web', label: 'Web Dev', count: VIDEOS_DATA.filter((v) => v.category === 'web').length },
    { key: 'career', label: 'Career & Tips', count: VIDEOS_DATA.filter((v) => v.category === 'career').length },
    { key: 'products', label: 'Product Demos', count: VIDEOS_DATA.filter((v) => v.category === 'products').length }
  ];

  const filteredVideos = useMemo(() => {
    return VIDEOS_DATA.filter((video) => {
      const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        video.title.toLowerCase().includes(q) ||
        video.description.toLowerCase().includes(q) ||
        video.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="section-wrapper youtube-section" id="videos">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="badge badge-yt">YouTube Channel • {CHANNEL_HANDLE}</span>
          </div>
          <h2>
            Coding Tutorials &amp; Masterclasses in <span className="gradient-text">Tamil</span>
          </h2>
          <p>
            Learn modern software development with step-by-step clarity. We cover Flutter mobile apps,
            clean state management, frontend engineering, backend integrations, and career guides.
          </p>

          <div className="header-channel-bar">
            <div className="channel-info-pill">
              <span className="yt-dot" />
              <span>Free Education • No Cost Platform</span>
            </div>
            <a
              href={`${CHANNEL_URL}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-youtube btn-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Subscribe to Channel</span>
            </a>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="video-filter-bar glass-card">
          {/* Category Filter Pills */}
          <div className="category-pills-row" role="tablist" aria-label="Video Categories">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.key}
                className={`category-pill-btn ${selectedCategory === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                <span>{cat.label}</span>
                <span className="pill-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="search-input-wrapper">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search tutorials (Flutter, BLoC, Web, Xpense)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search tutorials"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="videos-grid">
            {filteredVideos.map((video: VideoItem) => (
              <article key={video.id} className="video-card glass-card">
                {/* Thumbnail Container */}
                <div
                  className="video-thumb-container"
                  onClick={() => onOpenVideoModal(video.id, video.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenVideoModal(video.id, video.title);
                    }
                  }}
                  aria-label={`Play preview: ${video.title}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-thumbnail"
                    loading="lazy"
                  />
                  <div className="video-thumb-overlay">
                    <div className="play-button-circle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  </div>
                  {video.duration && (
                    <span className="video-duration-badge">{video.duration}</span>
                  )}
                  {video.featured && (
                    <span className="video-featured-badge">Featured</span>
                  )}
                </div>

                {/* Video Info Content */}
                <div className="video-info-content">
                  <div className="video-meta-row">
                    <span className="badge badge-accent badge-mini">
                      {video.categoryLabel}
                    </span>
                    <span className="video-author">Ethics Of Coding</span>
                  </div>

                  <h3 className="video-title" title={video.title}>
                    {video.title}
                  </h3>

                  <p className="video-desc">
                    {video.description}
                  </p>

                  {/* Tags */}
                  <div className="video-tags-row">
                    {video.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="video-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="video-actions-row">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm watch-preview-btn"
                      onClick={() => onOpenVideoModal(video.id, video.title)}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                      <span>Watch Preview</span>
                    </button>

                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm watch-yt-link"
                      title="Open on YouTube in new tab"
                    >
                      <span>YouTube</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-videos-box glass-card">
            <div className="no-videos-icon">🔍</div>
            <h3>No Tutorials Found</h3>
            <p>We couldn't find any videos matching "{searchQuery}". Try a different keyword or reset filters.</p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* View All Videos On Channel Banner */}
        <div className="glass-card channel-cta-banner">
          <div className="channel-cta-left">
            <h3>Want more tutorials and live code sessions?</h3>
            <p>
              Subscribe to <strong>Ethics Of Coding</strong> on YouTube to get notified whenever
              new Flutter masterclasses, web development guides, and app breakdowns go live!
            </p>
          </div>
          <div className="channel-cta-right">
            <a
              href={`${CHANNEL_URL}/videos`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Full Channel Feed ↗
            </a>
            <a
              href={`${CHANNEL_URL}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-youtube"
            >
              Subscribe ({CHANNEL_HANDLE})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
