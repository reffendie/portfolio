import React from 'react'
import './CoreCompetencies.css'

const competencies = [
  {
    category: 'Strategic Leadership',
    skills: [
      'Cross-functional program management',
      'Multi-project orchestration',
      'Stakeholder alignment (C-level to Engineering)',
      'Vendor management & cost optimization',
      'OKR/KPI definition & tracking'
    ]
  },
  {
    category: 'Technical Depth',
    skills: [
      'Cloud architecture (AWS, Azure, GCP)',
      'AI/ML integration (OpenAI, LLMs)',
      'Blockchain & distributed systems',
      'Database systems & data pipelines',
      'Full-stack development background'
    ]
  },
  {
    category: 'Delivery Excellence',
    skills: [
      'Agile/Scrum at scale',
      'CI/CD pipeline optimization',
      'Risk mitigation & dependency management',
      'Resource planning & team scaling',
      'Quality assurance & compliance'
    ]
  },
  {
    category: 'Business Impact',
    skills: [
      'P&L ownership & budget management',
      'Revenue generation through innovation',
      'Customer success & retention',
      'Process improvement & automation',
      'Change management & adoption'
    ]
  }
]

const CoreCompetencies = () => {
  return (
    <section className="core-competencies">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <p className="section-subtitle">
          The bridge between business strategy and technical execution
        </p>
        <div className="competencies-grid">
          {competencies.map((comp, index) => (
            <div key={index} className="competency-card">
              <h3 className="competency-category">{comp.category}</h3>
              <ul className="competency-list">
                {comp.skills.map((skill, idx) => (
                  <li key={idx} className="competency-item">
                    <span className="check-icon">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreCompetencies
