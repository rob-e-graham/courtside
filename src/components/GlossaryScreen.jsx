import { useState } from 'react'

export default function GlossaryScreen({ terms, onBack }) {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState(null)

  const filtered = terms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="glossary-screen">
      <button className="back-btn" onClick={onBack}>
        &lsaquo; Back
      </button>

      <h2>Legal Terms</h2>
      <p className="glossary-intro">
        The court system has its own language. Here's what it actually means.
      </p>

      <input
        type="text"
        className="glossary-search"
        placeholder="Search terms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="terms-list">
        {filtered.map((t, i) => (
          <button
            key={i}
            className={`term-card ${expanded === i ? 'expanded' : ''}`}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="term-header">
              <span className="term-name">{t.term}</span>
              <span className="term-toggle">{expanded === i ? '−' : '+'}</span>
            </div>
            {expanded === i && (
              <p className="term-definition">{t.definition}</p>
            )}
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="no-results">No matching terms found.</p>
        )}
      </div>
    </div>
  )
}
