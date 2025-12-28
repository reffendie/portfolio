import React from 'react'
import './KeyHighlights.css'

const highlights = [
  {
    title: 'Multi-Project Orchestration',
    description: 'Led 300+ integrations simultaneously across the largest personal auto policy transformation in Canada ($70M program)',
    icon: '🎯',
    metric: '300+',
    label: 'Concurrent Integrations'
  },
  {
    title: 'AI-Driven Innovation',
    description: 'Pioneered OpenAI LLM solutions that reduced SQL query creation from days to minutes, accelerating development by 80%',
    icon: '🤖',
    metric: '80%',
    label: 'Faster Development'
  },
  {
    title: 'Business-Tech Bridge',
    description: 'Partner cross-functionally with Product, Sales, Delivery, and Engineering across 3 global regions supporting multi-million dollar initiatives',
    icon: '🌉',
    metric: '3',
    label: 'Global Regions'
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Identified inefficiencies and optimized cloud spend, reducing AWS costs by $400K annually while improving performance',
    icon: '☁️',
    metric: '$400K',
    label: 'Annual Savings'
  },
  {
    title: 'Rapid Execution',
    description: 'Accelerated customer onboarding by designing blockchain migration strategy, cutting timelines from 8 months to 4 weeks',
    icon: '⚡',
    metric: '50x',
    label: 'Faster Onboarding'
  },
  {
    title: 'Global Team Leadership',
    description: 'Scaled and led global teams of 30+ engineers and product managers, improving on-time delivery by 50%',
    icon: '👥',
    metric: '30+',
    label: 'Team Members'
  }
]

const KeyHighlights = () => {
  return (
    <section className="key-highlights">
      <div className="container">
        <h2 className="section-title">Impact & Achievements</h2>
        <p className="section-subtitle">
          Strategic technical leadership delivering measurable business value
        </p>
        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <div className="highlight-metric">
                <span className="metric-value">{highlight.metric}</span>
                <span className="metric-label">{highlight.label}</span>
              </div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyHighlights
