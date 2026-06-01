import { useState } from 'react'

export default function DisclaimerScreen({ onAccept }) {
  const [agreed, setAgreed] = useState(false)
  const [scrolledToBottom, setScrolledToBottom] = useState(false)

  const handleScroll = (e) => {
    const el = e.target
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 30
    if (atBottom) setScrolledToBottom(true)
  }

  const handleAccept = () => {
    if (agreed) {
      localStorage.setItem('courtside_accepted', 'true')
      localStorage.setItem('courtside_accepted_date', new Date().toISOString())
      onAccept()
    }
  }

  return (
    <div className="disclaimer-screen">
      <div className="disclaimer-header">
        <h1>Courtside</h1>
        <p className="disclaimer-tagline">Your guide through the family court system</p>
      </div>

      <div className="disclaimer-content" onScroll={handleScroll}>
        <h2>Before you continue</h2>
        <p className="disclaimer-intro">
          Please read and accept the following before using Courtside. This protects both you and our community.
        </p>

        <section className="disclaimer-section">
          <h3>This is information, not legal advice</h3>
          <p>
            Courtside provides <strong>general legal information and educational resources</strong> about
            family court systems. It does not provide legal advice, professional recommendations,
            or guidance tailored to your specific circumstances.
          </p>
          <p>
            No lawyer-client or professional-client relationship is created through your use of
            this app. The information here is not a substitute for qualified legal counsel.
          </p>
          <p>
            <strong>You should always seek independent legal advice from a qualified family lawyer
            in your jurisdiction before making decisions about your case.</strong> Laws change frequently
            and vary by location. What applies in one state or country may not apply in yours.
          </p>
        </section>

        <section className="disclaimer-section">
          <h3>Not a crisis service</h3>
          <p>
            Courtside is not a crisis service, counselling service, or emergency service.
            If you or someone you know is in immediate danger, call your local emergency
            number (000 in Australia, 111 in New Zealand, 999 in UK, 911 in US).
          </p>
          <p>
            We provide links to crisis services and helplines, but we are not affiliated with
            them and cannot guarantee their availability. If you are experiencing thoughts of
            self-harm or suicide, please contact a crisis service immediately.
          </p>
        </section>

        <section className="disclaimer-section">
          <h3>Your responsibility</h3>
          <ul>
            <li>You are responsible for independently verifying any information before relying on it</li>
            <li>You assume all risk for decisions made based on information found in this app</li>
            <li>You understand that legal processes, laws, and services may have changed since this content was written</li>
            <li>You will not use information from this app in place of professional legal advice</li>
          </ul>
        </section>

        <section className="disclaimer-section">
          <h3>Community conduct</h3>
          <p>By using the Courtside community features, you agree to:</p>
          <ul>
            <li><strong>Be respectful</strong> — Everyone here is going through something difficult. Treat others with empathy and kindness.</li>
            <li><strong>No legal advice</strong> — Share your experiences, not opinions on someone else's legal case. You are not their lawyer.</li>
            <li><strong>Protect privacy</strong> — Never share identifying details about your ex-partner, children, judges, lawyers, or your case that could identify individuals.</li>
            <li><strong>No harassment or abuse</strong> — Discrimination, threats, bullying, or abuse of any kind will result in removal.</li>
            <li><strong>No hate speech</strong> — This is a support community for everyone regardless of gender, race, sexuality, religion, or background.</li>
            <li><strong>Keep it constructive</strong> — This is a place for support, not a platform for revenge or venting about individuals.</li>
            <li><strong>Respect the law</strong> — Do not share content that could constitute contempt of court or breach of any court orders, suppression orders, or confidentiality requirements.</li>
          </ul>
        </section>

        <section className="disclaimer-section">
          <h3>Community-contributed content</h3>
          <p>
            Some legal information in this app may be contributed by community members.
            While we make reasonable efforts to review contributed content, we cannot guarantee
            its accuracy, completeness, or currency. Community-contributed content is clearly
            marked and should be verified with a qualified legal professional.
          </p>
        </section>

        <section className="disclaimer-section">
          <h3>Your privacy</h3>
          <p>
            Courtside does not collect personal information, require accounts, or track your
            activity. Your country selection is stored locally on your device only and is never
            transmitted to any server.
          </p>
          <p>
            If you use external services linked from this app (helplines, legal services,
            Discord), those services have their own privacy policies which you should review.
          </p>
        </section>

        <section className="disclaimer-section">
          <h3>Limitation of liability</h3>
          <p>
            To the maximum extent permitted by law, Courtside and its contributors accept no
            liability for any loss, damage, or consequence arising from the use of, or reliance
            on, any information provided through this app. This includes but is not limited to
            any legal, financial, emotional, or other outcomes.
          </p>
          <p>
            Nothing in this disclaimer excludes or limits any consumer guarantees, warranties,
            or rights that cannot be excluded or limited under applicable law, including the
            Australian Consumer Law.
          </p>
        </section>
      </div>

      <div className="disclaimer-footer">
        <label className="disclaimer-checkbox">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>I understand this is general information, not legal advice. I agree to treat others with respect and seek professional help for my specific situation.</span>
        </label>
        <button
          className="disclaimer-accept-btn"
          disabled={!agreed}
          onClick={handleAccept}
        >
          I Understand — Continue
        </button>
      </div>
    </div>
  )
}
