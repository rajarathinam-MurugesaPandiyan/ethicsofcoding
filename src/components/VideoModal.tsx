import React, { useEffect } from 'react';

interface VideoModalProps {
  videoId: string | null;
  videoTitle: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ videoId, videoTitle, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (videoId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [videoId, onClose]);

  if (!videoId) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="modal-content glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-box">
            <span className="badge badge-yt">Now Playing</span>
            <h3 id="video-modal-title" className="modal-title">
              {videoTitle}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close video player"
          >
            ×
          </button>
        </div>

        {/* Video Player Embed Container */}
        <div className="modal-player-container">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="modal-iframe"
          />
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <span className="modal-note">
            💡 Ethics Of Coding Tutorial Stream • Powered by YouTube
          </span>
          <div className="modal-footer-actions">
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>Watch on YouTube</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onClose}
            >
              Done Watching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
