export default function YouthScreen({ country, onBack }) {
  const youthServices = getYouthServices(country?.code)

  return (
    <div className="youth-screen">
      <button className="back-btn" onClick={onBack}>
        &lsaquo; Back
      </button>

      <div className="youth-header">
        <span className="youth-header-icon">💙</span>
        <h2>For Young People</h2>
        <p className="youth-intro">
          If your parents are separating or going through court, it's normal to feel confused, scared, or upset. None of this is your fault.
        </p>
      </div>

      <div className="youth-card-list">
        <div className="youth-info-card">
          <h3>It's not your fault</h3>
          <p>When parents separate, children and young people sometimes wonder if they caused it. You didn't. This is something between your parents — it's not about you.</p>
        </div>

        <div className="youth-info-card">
          <h3>Your feelings are valid</h3>
          <p>It's completely normal to feel sad, angry, confused, relieved, or all of these at once. There's no "right" way to feel. Talking to someone you trust — a family member, school counsellor, or helpline — can help.</p>
        </div>

        <div className="youth-info-card">
          <h3>You have a voice</h3>
          <p>In Australia, courts can consider what young people think and feel when making decisions about where they live and how they spend time with each parent. How much weight your views carry often depends on your age and maturity. You may be able to speak with a family consultant or an Independent Children&apos;s Lawyer appointed to represent your best interests.</p>
        </div>

        <div className="youth-info-card">
          <h3>You don't have to choose sides</h3>
          <p>You're allowed to love both your parents. You don't have to pick one over the other, carry messages between them, or feel guilty about spending time with either of them.</p>
        </div>

        <div className="youth-info-card">
          <h3>You can ask for help</h3>
          <p>If you feel unsafe, scared, or overwhelmed, tell a trusted adult — a teacher, relative, coach, or counsellor. If you're in danger, call 000. You can also contact the helplines below — they're free and confidential.</p>
        </div>
      </div>

      {youthServices.length > 0 && (
        <section className="youth-services">
          <h3 className="section-label">Talk to Someone — Free &amp; Confidential</h3>
          {youthServices.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-info">
                <span className="service-name">{s.name}</span>
                <span className="service-desc">{s.description}</span>
                {s.available && (
                  <span className="service-available">{s.available}</span>
                )}
                {s.ages && (
                  <span className="youth-ages">Ages: {s.ages}</span>
                )}
              </div>
              <div className="service-actions">
                {s.phone && (
                  <a href={`tel:${s.phone.replace(/\s/g, '')}`} className="call-btn">
                    Call {s.phone}
                  </a>
                )}
                {s.website && (
                  <a href={s.website} target="_blank" rel="noopener noreferrer" className="web-btn">
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      <div className="youth-safety-note">
        <p><strong>If you are in danger right now,</strong> call 000 or tell a trusted adult immediately.</p>
      </div>
    </div>
  )
}

function getYouthServices(countryCode) {
  const services = {
    AU: [
      { name: 'Kids Helpline', phone: '1800 55 1800', available: '24/7', ages: '5-25', description: 'Free counselling for children and young people', website: 'https://kidshelpline.com.au' },
      { name: 'Headspace', phone: '1800 650 890', available: 'Business hours', ages: '12-25', description: 'Youth mental health support', website: 'https://headspace.org.au' },
      { name: 'eHeadspace', available: '9am-1am AEST', ages: '12-25', description: 'Free online and phone counselling', website: 'https://headspace.org.au/eheadspace' },
      { name: 'ReachOut', ages: 'Under 25', description: 'Online mental health resources for young people', website: 'https://reachout.com' },
    ]
  }

  return services[countryCode] || []
}
