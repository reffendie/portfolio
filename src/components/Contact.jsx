import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const yearsOfExperience = new Date().getFullYear() - 2002;

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">Let's Build Something Great</h2>
          <p className="contact-subtitle">
            Seeking challenging TPM opportunities where I can drive strategic technical initiatives, bridge business and engineering, and deliver measurable impact at scale.
          </p>
          <div className="contact-info">
            <a href="mailto:reffendie@outlook.com" className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <div className="contact-label">Email</div>
                <div className="contact-value">reffendie@outlook.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/reffendie/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">linkedin.com/in/reffendie</div>
              </div>
            </a>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <div className="contact-label">Location</div>
                <div className="contact-value">Bothell, WA</div>
              </div>
            </div>
          </div>
          <div className="cta-buttons">
            <a href="mailto:reffendie@outlook.com?subject=TPM Opportunity" className="btn btn-primary btn-lg">
              Start a Conversation
            </a>
            <a href="https://www.linkedin.com/in/reffendie/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              Connect on LinkedIn
            </a>
          </div>
          <div className="value-prop">
            <div className="value-item">
              <div className="value-number">$70M+</div>
              <div className="value-text">Program Value</div>
            </div>
            <div className="value-item">
              <div className="value-number">{yearsOfExperience}+</div>
              <div className="value-text">Years Experience</div>
            </div>
            <div className="value-item">
              <div className="value-number">30+</div>
              <div className="value-text">Team Leadership</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <p className="footer-text">
            Roy Effendie, BA., MSc. | Senior Technical Program Manager
          </p>
          <p className="footer-subtext">
            Available for TPM roles at $225K+ | Open to remote and hybrid opportunities
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
