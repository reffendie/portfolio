import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Portfolio from './components/Portfolio'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <Portfolio />
      <Analytics />
    </div>
  )
}

export default App
