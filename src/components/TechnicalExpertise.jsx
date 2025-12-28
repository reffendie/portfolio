import React from 'react'
import './TechnicalExpertise.css'

const expertise = {
  'Cloud & Infrastructure': {
    skills: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'CI/CD Pipelines'],
    level: 'Advanced'
  },
  'AI & Data': {
    skills: ['OpenAI/LLMs', 'Snowflake', 'Databricks', 'Kafka', 'Spark', 'ETL (Informatica)'],
    level: 'Advanced'
  },
  'Blockchain & Web3': {
    skills: ['Stellar', 'BSC', 'Web3', 'Crypto Wallets', 'Smart Contracts'],
    level: 'Proficient'
  },
  'Development': {
    skills: ['Python', 'JavaScript', 'React', 'Node.js', 'Golang', 'SQL'],
    level: 'Proficient'
  },
  'Databases': {
    skills: ['Oracle', 'SQL Server', 'PostgreSQL', 'NoSQL', 'Database Architecture'],
    level: 'Expert'
  },
  'Enterprise Systems': {
    skills: ['Guidewire Suite', 'Siebel CRM', 'NetSuite', 'System Integration'],
    level: 'Expert'
  },
  'Project Management': {
    skills: ['JIRA/Confluence', 'Agile/Scrum', 'MS Project', 'Roadmapping'],
    level: 'Expert'
  },
  'Tools & Analytics': {
    skills: ['PowerBI', 'Tableau', 'Git', 'REST/SOAP APIs', 'Monitoring Tools'],
    level: 'Advanced'
  }
}

const TechnicalExpertise = () => {
  return (
    <section className="technical-expertise">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Deep technical foundation enabling effective technical leadership
        </p>
        <div className="expertise-note">
          <div className="note-icon">💡</div>
          <div className="note-content">
            <strong>Polyglot Technical Leader:</strong> Years of hands-on experience as database developer, web developer, and system integrator. Fast learner with proven ability to quickly master new technologies and translate technical concepts for business stakeholders.
          </div>
        </div>
        <div className="expertise-grid">
          {Object.entries(expertise).map(([category, data], index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-header">
                <h3 className="expertise-category">{category}</h3>
                <span className={`level-badge level-${data.level.toLowerCase()}`}>
                  {data.level}
                </span>
              </div>
              <div className="skills-container">
                {data.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="certifications">
          <h3 className="cert-title">Certifications & Education</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon">🎓</div>
              <div className="cert-details">
                <div className="cert-name">AWS Certified Cloud Practitioner</div>
                <div className="cert-org">Amazon Web Services</div>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🎓</div>
              <div className="cert-details">
                <div className="cert-name">M.Sc. Database Development & Administration</div>
                <div className="cert-org">Golden Gate University</div>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🎓</div>
              <div className="cert-details">
                <div className="cert-name">B.A. Economics</div>
                <div className="cert-org">Parahyangan Catholic University</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalExpertise
