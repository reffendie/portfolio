import React from 'react'
import './MajorPrograms.css'

const programs = [
  {
    title: 'Canada Auto Insurance Transformation',
    company: 'Ernst & Young',
    value: '$70M',
    description: 'Led the largest personal auto policy transformation program in Canada, overseeing 300+ integrations across auto insurance platforms, vehicle registration, and licensing systems',
    outcomes: [
      'Managed 300+ concurrent system integrations',
      'Generated $32M additional consulting revenue',
      'Enabled seamless migration of millions of customer records',
      'Established scalable delivery methodology'
    ],
    tags: ['Insurance', 'System Integration', 'Multi-Project']
  },
  {
    title: 'AI-Powered Data Platform',
    company: 'Infoworks (Uniphore)',
    value: '$15M+ ARR',
    description: 'Directed development of SaaS AI solutions based on OpenAI LLMs to automate SQL generation from natural language, transforming enterprise data workflows',
    outcomes: [
      'Reduced query creation from days to minutes',
      'Accelerated development speed by 80%',
      'Increased customer adoption by 40%',
      '95% customer renewal rate',
      'Secured $10M+ multi-year contracts'
    ],
    tags: ['AI/ML', 'SaaS', 'Innovation']
  },
  {
    title: 'Blockchain Payments Platform',
    company: 'Velo Labs',
    value: '4+ Countries',
    description: 'Owned end-to-end program management of cross-border payments platform leveraging Stellar blockchain, enabling faster, lower-cost international transactions',
    outcomes: [
      'Led global team of 30+ engineers',
      'Reduced settlement times by 70%',
      'Cut integration timelines from 8 months to 4 weeks',
      'Improved on-time delivery by 50%',
      'Increased partner adoption by 25%'
    ],
    tags: ['Blockchain', 'Fintech', 'Global']
  },
  {
    title: 'Cloud Infrastructure Consolidation',
    company: 'Uniphore',
    value: '$400K Savings',
    description: 'Led infrastructure consolidation of two acquired companies, standardizing CI/CD pipelines and platform tooling across 3 global regions',
    outcomes: [
      'Reduced deployment errors by 20%',
      'Cut operational costs by 15%',
      'Improved release velocity by 20%',
      'Saved $400K annually in AWS costs',
      'Enhanced schedule predictability by 25%'
    ],
    tags: ['DevOps', 'Cloud', 'M&A Integration']
  }
]

const MajorPrograms = () => {
  return (
    <section className="major-programs">
      <div className="container">
        <h2 className="section-title">Flagship Programs</h2>
        <p className="section-subtitle">
          Strategic initiatives delivering transformative business value
        </p>
        <div className="programs-container">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-header">
                <div>
                  <h3 className="program-title">{program.title}</h3>
                  <div className="program-company">{program.company}</div>
                </div>
                <div className="program-value">{program.value}</div>
              </div>
              <p className="program-description">{program.description}</p>
              <div className="program-outcomes">
                <h4 className="outcomes-title">Key Outcomes:</h4>
                <ul className="outcomes-list">
                  {program.outcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ul>
              </div>
              <div className="program-tags">
                {program.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MajorPrograms
