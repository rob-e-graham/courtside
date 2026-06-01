import { useState, useEffect } from 'react'
import { stages, legalTerms } from './data/stages'
import { countries, countryServices, globalCrisis } from './data/countries'
import DisclaimerScreen from './components/DisclaimerScreen'
import CrisisBanner from './components/CrisisBanner'
import CountrySelector from './components/CountrySelector'
import StageSelector from './components/StageSelector'
import StageDetail from './components/StageDetail'
import SupportScreen from './components/SupportScreen'
import GlossaryScreen from './components/GlossaryScreen'
import CommunityScreen from './components/CommunityScreen'
import YouthScreen from './components/YouthScreen'
import './App.css'

function App() {
  const [hasAccepted, setHasAccepted] = useState(false)
  const [screen, setScreen] = useState('home')
  const [selectedStage, setSelectedStage] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [showCountryPicker, setShowCountryPicker] = useState(false)

  // Check for saved state on mount
  useEffect(() => {
    const accepted = localStorage.getItem('courtside_accepted')
    if (accepted === 'true') setHasAccepted(true)

    const savedCountry = localStorage.getItem('courtside_country')
    if (savedCountry) {
      const found = countries.find(c => c.code === savedCountry)
      if (found) setSelectedCountry(found)
    }
  }, [])

  const handleAcceptDisclaimer = () => {
    setHasAccepted(true)
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    localStorage.setItem('courtside_country', country.code)
    setShowCountryPicker(false)
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

  const services = selectedCountry ? countryServices[selectedCountry.code] : null

  // Step 1: Disclaimer agreement
  if (!hasAccepted) {
    return <DisclaimerScreen onAccept={handleAcceptDisclaimer} />
  }

  // Step 2: Country selection
  if (!selectedCountry) {
    return (
      <div className="app">
        <div className="onboarding">
          <h1>Courtside</h1>
          <p className="onboarding-sub">Free family court information &amp; support</p>
          <p className="onboarding-desc">General legal information, support services, and a community of people who understand what you're going through. Not legal advice.</p>
          <h2 className="onboarding-prompt">Where are you located?</h2>
          <CountrySelector
            countries={countries}
            onSelect={handleCountrySelect}
          />
          <p className="onboarding-note">This helps us show you relevant information and support services in your area. Your selection is stored on your device only.</p>
        </div>
      </div>
    )
  }

  // Step 3: Main app
  return (
    <div className="app">
      <CrisisBanner country={selectedCountry} services={services} />

      {screen === 'home' && (
        <>
          <header className="app-header">
            <div className="header-top">
              <h1>Courtside</h1>
              <button
                className="country-chip"
                onClick={() => setShowCountryPicker(!showCountryPicker)}
              >
                {selectedCountry.flag} {selectedCountry.code}
              </button>
            </div>
            <p className="app-subtitle">Free family court information &amp; support</p>

            {showCountryPicker && (
              <div className="country-dropdown">
                <CountrySelector
                  countries={countries}
                  onSelect={handleCountrySelect}
                  compact
                />
              </div>
            )}
          </header>

          <div className="info-badge-bar">
            <span className="info-badge">ℹ️ Information resource — not legal advice</span>
          </div>

          {!selectedCountry.hasFullGuide && (
            <div className="community-notice">
              <p><strong>Guide in progress</strong> — We're building the legal information guide for {selectedCountry.name}. The stages below contain general information that applies in most countries. Community members can help us add local details.</p>
            </div>
          )}

          <section className="stage-prompt">
            <h2>Where are you at?</h2>
            <p>Tap your situation for general information</p>
          </section>

          <StageSelector stages={stages} onSelect={handleStageSelect} />

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
              <p><strong>Important:</strong> This app provides general information only, not legal advice. Every situation is unique. Always seek advice from a qualified family lawyer in your jurisdiction before making decisions about your case.</p>
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
          country={selectedCountry}
          onBack={handleBack}
          onGetHelp={() => handleNav('support')}
        />
      )}

      {screen === 'support' && (
        <SupportScreen
          services={services}
          country={selectedCountry}
          globalCrisis={globalCrisis}
          onBack={handleBack}
        />
      )}

      {screen === 'glossary' && (
        <GlossaryScreen
          terms={legalTerms}
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
