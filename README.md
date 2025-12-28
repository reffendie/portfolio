# Roy Effendie - Professional Portfolio

A modern, professional portfolio website built with React, showcasing 23+ years of technical program management excellence.

## Features

- **Hero Section**: Eye-catching introduction with key metrics
- **Impact & Achievements**: 6 key highlights demonstrating value delivery
- **Core Competencies**: Strategic leadership, technical depth, delivery excellence, and business impact
- **Flagship Programs**: Detailed showcase of major initiatives ($70M+ programs)
- **Career Journey**: Visual timeline of progressive technical leadership
- **Technical Expertise**: Comprehensive skills across cloud, AI, blockchain, and enterprise systems
- **Contact Section**: Multiple ways to connect

## Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with responsive design
- **Google Fonts (Inter)** - Professional typography

## Getting Started

### Prerequisites

- Node.js (v21.6.1 or compatible)
- npm (v8.19.3 or compatible)

### Installation

Clone the repository:

```bash
git clone https://github.com/reffendie/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Testing

Run Playwright tests:

```bash
npm test              # Run all tests
npm run test:ui       # Run tests with Playwright UI
npm run test:headed   # Run tests in headed mode (visible browser)
```

## Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub (triggers automatic Vercel deployment)
git push
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx & Hero.css
│   │   ├── KeyHighlights.jsx & KeyHighlights.css
│   │   ├── CoreCompetencies.jsx & CoreCompetencies.css
│   │   ├── MajorPrograms.jsx & MajorPrograms.css
│   │   ├── Experience.jsx & Experience.css
│   │   ├── TechnicalExpertise.jsx & TechnicalExpertise.css
│   │   └── Contact.jsx & Contact.css
│   ├── styles/
│   │   ├── index.css (global styles)
│   │   └── App.css (shared component styles)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Key Highlights from Resume

### Recent Accomplishments
- **AI Innovation**: Directed OpenAI LLM solutions reducing query creation from days to minutes
- **Cost Optimization**: Saved $400K annually in AWS costs
- **Team Leadership**: Scaled teams of 30+ engineers globally
- **Program Scale**: Led $70M+ transformation programs

### Technical Expertise
- **Cloud Platforms**: AWS, Azure, GCP
- **AI/ML**: OpenAI, LLMs, Snowflake, Databricks
- **Blockchain**: Stellar, Web3, Smart Contracts
- **Development**: Python, JavaScript, React, Node.js, Golang
- **Databases**: Oracle, SQL Server, PostgreSQL, NoSQL
- **Tools**: JIRA, Confluence, Agile/Scrum, CI/CD

### Target Role
Senior Technical Program Manager at $225K+ in tech industry, focusing on:
- Multi-project orchestration
- Business-technical bridge leadership
- Strategic technical initiatives at scale
- AI-driven innovation and productivity

## Live Deployment

**Live Site:** https://portfolio-iota-six-38.vercel.app

**GitHub Repository:** https://github.com/reffendie/portfolio

The portfolio is deployed on Vercel with automatic deployments from GitHub. Every push to the `main` branch automatically deploys to production.

## Deployment

### Deploy to Vercel (Recommended)

**Using Vercel CLI:**

```bash
# 1. Login to Vercel (first time only)
npx vercel login

# 2. Deploy to preview environment
npx vercel

# 3. Deploy to production
npx vercel --prod
```

**Using Vercel Dashboard:**

1. Visit [vercel.com](https://vercel.com) and sign in
2. Click "Import Project"
3. Import the GitHub repository: `https://github.com/reffendie/portfolio`
4. Vercel will auto-detect settings:
   - Framework: Vite
   - Build Command: `vite build`
   - Output Directory: `dist`
5. Click "Deploy"

**Automatic Deployments:**
- Push to `main` branch → automatic production deployment
- Pull requests → automatic preview deployments

### Other Deployment Options

**Netlify:**
1. Connect GitHub repository at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

**AWS S3 + CloudFront:**
1. Run `npm run build`
2. Upload `dist/` folder to S3 bucket
3. Configure CloudFront distribution
4. Update DNS settings

## Customization

### Update Content
- Edit component files in `src/components/` to update text, metrics, and achievements
- Modify `src/styles/*.css` for styling changes

### Color Scheme
Update CSS variables in `src/styles/index.css`:
```css
:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  /* ... other variables */
}
```

### Contact Information
Update contact details in `src/components/Contact.jsx`

## Performance

- Fast initial load with Vite optimization
- Responsive design for all devices
- Smooth animations and transitions
- SEO-friendly meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

ISC

## Contact

**Roy Effendie, BA., MSc.**
- Email: reffendie@outlook.com
- LinkedIn: [linkedin.com/in/reffendie](https://www.linkedin.com/in/reffendie/)
- Location: Bothell, WA

---

*Built with React and positioned for TPM roles at $225K+ based on market research of FAANG and top tech companies.*
