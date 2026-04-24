import React from 'react';

const LandingSection = () => {
  return (
    <main className="hero-wrapper container">
      <section className="landing-section simple-hero">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <span className="badge-dot"></span>
            <span className="badge-text">Introducing Smart Portfolio 2.0</span>
            <span className="badge-arrow">→</span>
          </div>
          
          <h1 className="hero-title animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Smarter wealth <br/>
            <span className="hero-highlight gradient-shimmer">management.</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            Consolidate assets, automate investments, and track real-time. <br/>
            A unified platform beautifully designed for you.
          </p>
          
          <div className="hero-actions animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <button className="btn-primary">
              <span className="btn-text">Get Started Free</span>
              <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="btn-secondary">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingSection;
