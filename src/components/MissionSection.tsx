import React from "react";

export const MissionSection: React.FC = () => {
  const pillars = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "Breaking Language Barriers",
      subtitle: "Native Regional Clarity in Tamil",
      description:
        "Software engineering concepts are often wrapped in dense jargon. We translate complex topics—like BLoC patterns, state management, asynchronous streams, and cloud APIs—into accessible Tamil without losing technical depth.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        </svg>
      ),
      title: "Architectural Excellence",
      subtitle: "Beyond Toy Examples",
      description:
        "Anyone can copy-paste a tutorial. We teach how senior software engineers think: clean architecture separation (Data, Domain, Presentation), error recovery, dependency injection, and scalable state.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
      title: "Production-Grade Software",
      subtitle: "Ecosystem & xpense-cloud",
      description:
        "We don’t just teach theory; we build real platforms. Our flagship financial tracking product, xpense-cloud, serves as both a live service and an open architectural masterclass for our developer community.",
    },
  ];

  return (
    <section className="section-wrapper mission-section" id="mission">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="badge badge-accent">
              Our Philosophy &amp; Mission
            </span>
          </div>
          <h2>
            Democratizing Technology with{" "}
            <span className="gradient-text">Purpose &amp; Integrity</span>
          </h2>
          <p>
            At Ethics Of Coding, we believe every developer deserves access to
            elite software engineering knowledge, regardless of geographical or
            linguistic boundaries.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="pillars-grid">
          {pillars.map((item, index) => (
            <div key={index} className="glass-card pillar-card">
              <div className="pillar-icon-bubble">{item.icon}</div>
              <div className="pillar-header-group">
                <span className="pillar-subtitle">{item.subtitle}</span>
                <h3 className="pillar-title">{item.title}</h3>
              </div>
              <p className="pillar-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Education Highlight Quote Card */}
        <div className="glass-card mission-quote-card">
          <div className="quote-mark">“</div>
          <blockquote className="mission-quote-text">
            The Great Learning Platform In Tamil, With lots of Learning With No
            Cost 💰 Because We Value Education. 📚
          </blockquote>
          <div className="quote-attribution">
            <span className="quote-author">Ethics Of Coding</span>
            <span className="quote-role">
              Channel &amp; Organization Vision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
