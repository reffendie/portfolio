import React from 'react'
import '../styles/Experience.css'

const experiences = [
  {
    title: 'Sr. Director of DevOps / Platform Engineering',
    company: 'Uniphore',
    location: 'Palo Alto, CA',
    period: 'February 2025 – Present',
    highlights: [
      'Led infrastructure consolidation reducing deployment errors by 20%',
      'Optimized cloud spend reducing AWS costs by $400K annually',
      'Scaled deployments across 3 global regions'
    ]
  },
  {
    title: 'Sr. Director of Customer Solutions',
    company: 'Infoworks (Acquired by Uniphore)',
    location: 'Palo Alto, CA',
    period: 'July 2022 – January 2025',
    highlights: [
      'Directed OpenAI LLM solutions reducing query creation from days to minutes',
      'Accelerated development by 80%, increased adoption by 40%',
      'Achieved 95% customer renewal rate worth $15M'
    ]
  },
  {
    title: 'Sr. Technical Program Manager',
    company: 'Velo Labs',
    location: 'San Francisco, CA',
    period: 'July 2021 – June 2022',
    highlights: [
      'Owned blockchain payments platform across 4+ countries',
      'Led global team of 30+ engineers',
      'Reduced settlement times by 70%, integration timelines from 8 months to 4 weeks'
    ]
  },
  {
    title: 'Senior Manager',
    company: 'Ernst and Young LLP',
    location: 'Seattle, WA',
    period: '2010 – 2021 (11 years)',
    highlights: [
      'Led $70M auto insurance transformation (largest in Canada)',
      'Managed 300+ integrations, generated $32M new revenue',
      'Pioneered blockchain and IoT solutions generating $5M revenue'
    ]
  },
  {
    title: 'Technical Architect & Consultant',
    company: 'Earlier Career (Sezmi, Accenture, BearingPoint)',
    location: 'San Francisco Bay Area',
    period: '2002 – 2010',
    highlights: [
      'Architected enterprise CRM, billing, and video platforms',
      'Led data migrations saving clients $8M+ in IT costs',
      'Administered enterprise databases with 99.9% uptime'
    ]
  }
]

const Experience = () => {
  const yearsOfExperience = new Date().getFullYear() - 2002;

  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">Career Journey</h2>
        <p className="section-subtitle">
          {yearsOfExperience}+ years of progressive technical leadership
        </p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-location">{exp.location}</div>
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
