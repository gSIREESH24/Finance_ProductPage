import React from 'react';
import './LandingSection.css';

const LandingSection=()=>{
  return (
    <main className="landing-page-wrapper container">
      <section className="landing-page">
        <div className="landing-content">
          <div className="update-badge fade-up-animation" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <span className="dot-indicator"></span>
            <span className="badge-text">Introducing Smart Portfolio 2.0</span>
            <span className="arrow-icon">→</span>
          </div>
          
          <h1 className="main-title fade-up-animation" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            Smarter wealth <br/>
            <span className="highlighted-text shimmer-animation">management.</span>
          </h1>
          
          <p className="description-text fade-up-animation" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            Consolidate assets, automate investments, and track real-time. <br/>
            A unified platform beautifully designed for you.
          </p>
          
          <div className="button-group fade-up-animation" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <button className="start-button">
              <span className="button-text">Get Started Free</span>
              <svg className="start-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button className="demo-button">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingSection;
