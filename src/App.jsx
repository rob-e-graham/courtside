import { useState } from 'react'
import { australianStages, australianLegalTerms } from './data/stages'
import { australia, countryServices } from './data/countries'
import DisclaimerScreen from './components/DisclaimerScreen'
import CrisisBanner from './components/CrisisBanner'
import StageSelector from './components/StageSelector'
import StageDetail from './components/StageDetail'
import SupportScreen from './components/SupportScreen'
import GlossaryScreen from './components/GlossaryScreen'
import CommunityScreen from './components/CommunityScreen'
import YouthScreen from './components/YouthScreen'
import './App.css'

function App() {
  const [hasAccepted, setHasAccepted] = useState(() => localStorage.getItem('courtside_accepted') === 'true')
  const [screen, setScreen] = useState('home')
  const [selectedStage, setSelectedStage] = useState(null)
  const selectedCountry = australia

  const handleAcceptDisclaimer = () => {
    setHasAccepted(true)
  }

  const handleStageSelect = (stage) => {
    setSelectedStage(stage)
    setScreen('stage')
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setScreen('home')
    setSelectedStage(null)
    window.scrollTo(0, 0)
  }

  const handleNav = (target) => {
    setScreen(target)
    window.scrollTo(0, 0)
  }

  const services = countryServices[selectedCountry.code]

  // Step 1: Disclaimer agreement
  if (!hasAccepted) {
    return <DisclaimerScreen onAccept={handleAcceptDisclaimer} />
  }

  return (
    <div className="app">
      <CrisisBanner services={services} />

      {screen === 'home' && (
        <>
          <header className="app-header">
            <div className="header-top">
              <h1>Courtside</h1>
              <span className="country-chip" aria-label="Australia guide">
                {selectedCountry.flag} Australia
              </span>
            </div>
            <p className="app-subtitle">Free Australian family court information &amp; support</p>
          </header>

          <div className="info-badge-bar">
            <span className="info-badge">ℹ️ Information resource — not legal advice</span>
          </div>

          <section className="stage-prompt">
            <h2>Where are you at?</h2>
            <p>Tap your situation for general information</p>
          </section>

          <StageSelector stages={australianStages} onSelect={handleStageSelect} />

          <button
            className="youth-card"
            onClick={() => handleNav('youth')}
          >
            <span className="youth-card-icon">💙</span>
            <div className="youth-card-text">
              <span className="youth-card-title">Are you a young person?</span>
              <span className="youth-card-sub">Information and support for children &amp; teens whose parents are separating</span>
            </div>
            <span className="stage-arrow">&rsaquo;</span>
          </button>

          <nav className="bottom-nav">
            <button className="nav-btn" onClick={() => handleNav('support')}>
              <span className="nav-icon">📞</span>
              <span>Get Help</span>
            </button>
            <button className="nav-btn" onClick={() => handleNav('community')}>
              <span className="nav-icon">💬</span>
              <span>Community</span>
            </button>
            <button className="nav-btn" onClick={() => handleNav('glossary')}>
              <span className="nav-icon">📖</span>
              <span>Terms</span>
            </button>
          </nav>

          <footer className="app-footer">
            <div className="footer-disclaimer">
              <p><strong>Important:</strong> This app provides general Australian information only, not legal advice. Every situation is unique. Always seek advice from a qualified Australian family lawyer before making decisions about your case.</p>
            </div>
            <p className="footer-credit">Built by people who've been through it.</p>
            <button className="footer-link" onClick={() => {
              localStorage.removeItem('courtside_accepted')
              setHasAccepted(false)
            }}>
              Review disclaimer &amp; terms
            </button>
          </footer>
        </>
      )}

      {screen === 'stage' && selectedStage && (
        <StageDetail
          stage={selectedStage}
          onBack={handleBack}
          onGetHelp={() => handleNav('support')}
        />
      )}

      {screen === 'support' && (
          <SupportScreen
            services={services}
            country={selectedCountry}
            onBack={handleBack}
          />
      )}

      {screen === 'glossary' && (
        <GlossaryScreen
          terms={australianLegalTerms}
          onBack={handleBack}
        />
      )}

      {screen === 'community' && (
        <CommunityScreen
          country={selectedCountry}
          onBack={handleBack}
        />
      )}

      {screen === 'youth' && (
        <YouthScreen
          country={selectedCountry}
          onBack={handleBack}
        />
      )}
    </div>
  )
}

export default App
