import { useState } from 'react'

export default function CountrySelector({ countries, onSelect, compact }) {
  const [search, setSearch] = useState('')

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={`country-selector ${compact ? 'compact' : ''}`}>
      <input
        type="text"
        className="country-search"
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus={!compact}
      />
      <div className="country-list">
        {filtered.map((country) => (
          <button
            key={country.code}
            className="country-option"
            onClick={() => onSelect(country)}
          >
            <span className="country-flag">{country.flag}</span>
            <span className="country-name">{country.name}</span>
            {country.hasFullGuide && (
              <span className="guide-badge">Full Guide</span>
            )}
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="country-empty">
            <p>Country not listed yet.</p>
            <p className="country-empty-sub">Join our community to help us add it.</p>
          </div>
        )}
      </div>
    </div>
  )
}
