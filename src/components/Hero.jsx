import React from 'react'
import './Hero.css'

const Hero = () => {
  const yearsOfExperience = new Date().getFullYear() - 2002;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Senior Technical Program Manager</div>
          <h1 className="hero-title">
            Roy Effendie
          </h1>
          <p className="hero-subtitle">
            Driving strategic technical initiatives at scale. {yearsOfExperience}+ years delivering complex, cross-functional programs in fintech, AI, and enterprise systems.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">$70M+</span>
              <span className="stat-label">Program Value Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-value">30+</span>
              <span className="stat-label">Team Leadership</span>
            </div>
            <div className="stat">
              <span className="stat-value">{yearsOfExperience}+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="mailto:reffendie@outlook.com" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/reffendie/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
