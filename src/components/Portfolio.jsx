import React from 'react'
import '../styles/Portfolio.css'

const Portfolio = () => {
  const yearsOfExperience = new Date().getFullYear() - 2002;

  return (
    <div className="portfolio">
      <div className="container">

        {/* Header */}
        <header className="header">
          <div className="header-content">
            <h1>Roy Effendie, BA., MSc.</h1>
            <p className="title">Senior Technical Program Manager</p>
          </div>
        </header>

        {/* Summary */}
        <section className="summary">
          <p>
            Technical Program Manager with <strong>{yearsOfExperience}+ years</strong> delivering complex, cross-functional programs in fintech, AI, and enterprise systems.
            Proven track record managing <strong>$100M+ programs</strong>, leading global teams of <strong>50+ members</strong>, and driving measurable business impact
            through strategic technical leadership. Expert at bridging business and engineering teams while orchestrating multiple high-stakes initiatives simultaneously.
          </p>
        </section>

        {/* Two Column Layout */}
        <div className="two-column">

          {/* Left Column */}
          <div className="left-column">

            {/* Experience */}
            <section className="section">
              <h2>Experience Highlights</h2>

              <div className="experience-item">
                <div className="exp-header">
                  <strong>Sr. Director of DevOps/Platform Engineering</strong>
                  <span className="year">2025-Present</span>
                </div>
                <div className="company">Uniphore, Palo Alto, CA</div>
                <ul>
                  <li>Led post-acquisition infrastructure consolidation of two companies, standardizing CI/CD pipelines and platform tooling across the organization</li>
                  <li>Partnered cross-functionally with Product, Sales, Delivery, and Infosec to scale deployments across 3 global regions (US, UK, Middle East)</li>
                  <li>Drove adoption of standard KPIs and tools, improving schedule predictability and accelerating release velocity by 20%</li>
                  <li>Facilitated collaborative planning sessions across business and technical stakeholders, reducing cross-team dependencies and improving milestone accuracy by 25%</li>
                  <li>Optimized cloud spend by identifying inefficiencies, reducing AWS costs by $400K annually while cutting operational costs by 15%</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="exp-header">
                  <strong>Sr. Director of Customer Solutions</strong>
                  <span className="year">2022-2025</span>
                </div>
                <div className="company">Infoworks (Acquired by Uniphore)</div>
                <ul>
                  <li>Directed development of SaaS AI solutions leveraging OpenAI LLMs to automate SQL generation from natural language, transforming enterprise data workflows</li>
                  <li>Collaborated with Fortune 500 customers to design and deliver data ingestion and pipeline automation solutions, accelerating development by 80% and increasing adoption by 40%</li>
                  <li>Led Customer Engineering team in building Python SDKs and automation scripts, accelerating customer onboarding by 2x</li>
                  <li>Established KPIs and operational processes for Customer Engineering, Professional Services, and Field-Testing, improving issue resolution times by 35%</li>
                  <li>Managed vendor selection and contracts, achieving 95% customer renewal rate worth $15M while cutting third-party costs by 20%</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="exp-header">
                  <strong>Sr. Technical Program Manager</strong>
                  <span className="year">2021-2022</span>
                </div>
                <div className="company">Velo Labs, San Francisco, CA</div>
                <ul>
                  <li>Owned end-to-end program management of cross-border payments platform leveraging blockchain technology, enabling faster, lower-cost transactions across 4+ countries</li>
                  <li>Defined and executed product roadmap in partnership with C-level executives, aligning engineering, compliance, and business teams to deliver strategic goals</li>
                  <li>Scaled and led global team of 30+ engineers and product managers, establishing agile practices and improving on-time delivery of key releases by 50%</li>
                  <li>Drove partner integrations by defining technical scope and leading automation initiatives that reduced settlement times by 70% and increased partner adoption by 25%</li>
                  <li>Designed and led migration of financial partners to Stellar blockchain ecosystem, cutting integration timelines from 8 months to 4 weeks</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="exp-header">
                  <strong>Senior Manager</strong>
                  <span className="year">2010-2021</span>
                </div>
                <div className="company">Ernst & Young, Seattle, WA</div>
                <ul>
                  <li>Led successful implementation of the largest personal auto policy transformation program in Canada worth $70M, overseeing 300+ integrations across auto insurance platforms, vehicle registration and licensing systems</li>
                  <li>Program success resulted in additional scope to transform commercial auto, generating $32M of new consulting revenue for EY</li>
                  <li>Directed claims data conversion and batch integration projects at large US insurers, enabling seamless migration of millions of customer records and managing $15M of consulting revenue</li>
                  <li>Developed EY's Guidewire Global Delivery Methodology, training hundreds of consultants worldwide and establishing scalable standard for implementations</li>
                  <li>Pioneered solutions leveraging blockchain, IoT, and microservices to support innovation initiatives across insurance clients, generating $5M new consulting revenue in first year</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="exp-header">
                  <strong>Technical Architect & Consultant</strong>
                  <span className="year">2002-2010</span>
                </div>
                <div className="company">Sezmi, Accenture, BearingPoint</div>
                <ul>
                  <li>Architected and delivered enterprise CRM, billing, and video-on-demand platforms supporting 100K+ subscribers</li>
                  <li>Designed and built middleware systems to provision digital keys for movie purchases, reducing provisioning errors by 80%</li>
                  <li>Led integration of Siebel CRM with Citrix legacy systems, improving customer data visibility across 20+ business units</li>
                  <li>Directed multiple data migration projects, consolidating legacy systems and saving clients $8M+ in IT costs while reducing project timelines by 30%</li>
                </ul>
              </div>
            </section>

            {/* Education */}
            <section className="section">
              <h2>Education & Certifications</h2>
              <div className="education-item">
                <div className="exp-header">
                  <strong>M.Sc. Database Development & Administration</strong>
                  <span className="year">2002</span>
                </div>
                <div className="company">Golden Gate University</div>
              </div>
              <div className="education-item">
                <div className="exp-header">
                  <strong>B.A. Economics</strong>
                  <span className="year">2000</span>
                </div>
                <div className="company">Parahyangan Catholic University</div>
              </div>
              <div className="education-item">
                <div className="exp-header">
                  <strong>AWS Certified Cloud Practitioner</strong>
                </div>
                <div className="company">Amazon Web Services</div>
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="right-column">

            {/* Core Strengths */}
            <section className="section">
              <h2>Core Strengths</h2>
              <div className="strength-item">
                <strong>🎯 Multi-Project Orchestration</strong>
                <p>Successfully managed 300+ concurrent integrations across enterprise platforms</p>
              </div>
              <div className="strength-item">
                <strong>🤖 AI-Driven Innovation</strong>
                <p>Leveraged OpenAI/LLMs to accelerate development by 80% and improve productivity</p>
              </div>
              <div className="strength-item">
                <strong>🌉 Business-Tech Bridge</strong>
                <p>Partner across Product, Engineering, Sales, and C-suite to align strategic initiatives</p>
              </div>
              <div className="strength-item">
                <strong>⚡ Fast Learner</strong>
                <p>Diverse background in database, web dev, and system integration. Quickly master new technologies</p>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="section">
              <h2>Technical Skills</h2>

              <div className="skill-group">
                <strong>Cloud & Infrastructure:</strong>
                <p>AWS, Azure, GCP, Kubernetes, Docker, CI/CD</p>
              </div>

              <div className="skill-group">
                <strong>AI & Data:</strong>
                <p>OpenAI/LLMs, Snowflake, Databricks, Kafka, Spark</p>
              </div>

              <div className="skill-group">
                <strong>Blockchain:</strong>
                <p>Stellar, BSC, Web3, Smart Contracts</p>
              </div>

              <div className="skill-group">
                <strong>Development:</strong>
                <p>Python, JavaScript, React, Node.js, Golang, SQL</p>
              </div>

              <div className="skill-group">
                <strong>Databases:</strong>
                <p>Oracle, SQL Server, PostgreSQL, NoSQL</p>
              </div>

              <div className="skill-group">
                <strong>PM Tools:</strong>
                <p>JIRA, Confluence, Agile/Scrum, MS Project</p>
              </div>
            </section>

            {/* Target Role */}
            <section className="section target-role">
              <h2>Seeking</h2>
              <p>
                <strong>Senior TPM roles at $225K+</strong> in tech companies where I can drive strategic
                technical initiatives, orchestrate complex cross-functional programs, and deliver
                measurable business impact at scale.
              </p>
              <div className="cta-buttons">
                <a href="mailto:reffendie@outlook.com" className="btn-primary">Email Me</a>
                <a href="https://www.linkedin.com/in/reffendie/" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
