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
          <p>In many countries, courts consider what young people think and feel when making decisions about where they live and how they spend time with each parent. How much weight your views carry often depends on your age and maturity. You may be able to speak with a family consultant or a lawyer appointed to represent your interests.</p>
        </div>

        <div className="youth-info-card">
          <h3>You don't have to choose sides</h3>
          <p>You're allowed to love both your parents. You don't have to pick one over the other, carry messages between them, or feel guilty about spending time with either of them.</p>
        </div>

        <div className="youth-info-card">
          <h3>You can ask for help</h3>
          <p>If you feel unsafe, scared, or overwhelmed, tell a trusted adult — a teacher, relative, coach, or counsellor. If you're in danger, call your local emergency number. You can also contact the helplines below — they're free and confidential.</p>
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

      <section className="youth-services">
        <h3 className="section-label">International</h3>
        <div className="service-card">
          <div className="service-info">
            <span className="service-name">Child Helpline International</span>
            <span className="service-desc">Find a free helpline for children and young people in your country</span>
          </div>
          <div className="service-actions">
            <a href="https://childhelplineinternational.org" target="_blank" rel="noopener noreferrer" className="web-btn">
              Find Your Helpline
            </a>
          </div>
        </div>
      </section>

      <div className="youth-safety-note">
        <p><strong>If you are in danger right now,</strong> call your local emergency number (000 in Australia, 111 in NZ, 999 in UK, 911 in US) or tell a trusted adult immediately.</p>
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
    ],
    NZ: [
      { name: 'Youthline', phone: '0800 376 633', available: '24/7', ages: 'Under 25', description: 'Free counselling and support — call, text, or chat', website: 'https://youthline.co.nz' },
      { name: 'What\'s Up', phone: '0800 942 8787', available: '1pm-11pm', ages: '5-19', description: 'Free phone counselling for children and teens', website: 'https://whatsup.co.nz' },
      { name: 'Kidsline', phone: '0800 543 754', available: '4pm-6pm weekdays', ages: '5-18', description: 'Volunteers trained to talk with young people' },
    ],
    GB: [
      { name: 'Childline', phone: '0800 1111', available: '24/7', ages: 'Under 19', description: 'Free confidential counselling for children and young people', website: 'https://childline.org.uk' },
      { name: 'Young Minds', description: 'Mental health support for young people', website: 'https://youngminds.org.uk' },
      { name: 'The Mix', phone: '0808 808 4994', available: '3pm-midnight', ages: 'Under 25', description: 'Support for under 25s', website: 'https://themix.org.uk' },
    ],
    US: [
      { name: 'Crisis Text Line', phone: 'Text HOME to 741741', available: '24/7', description: 'Free crisis counselling via text' },
      { name: 'Boys Town Hotline', phone: '1-800-448-3000', available: '24/7', description: 'Help for kids and teens with any issue', website: 'https://boystown.org' },
      { name: 'Teen Line', phone: '1-310-855-4673', available: '6pm-10pm PT', ages: '12-19', description: 'Teens helping teens — call or text', website: 'https://teenline.org' },
    ],
    CA: [
      { name: 'Kids Help Phone', phone: '1-800-668-6868', available: '24/7', description: 'Free counselling for young people — call, text, or chat', website: 'https://kidshelpphone.ca' },
    ],
    IE: [
      { name: 'Childline Ireland', phone: '1800 66 66 66', available: '24/7', ages: 'Under 18', description: 'Free confidential support for children', website: 'https://childline.ie' },
      { name: 'SpunOut', description: 'Youth information and support', website: 'https://spunout.ie' },
    ],
    ZA: [
      { name: 'Childline South Africa', phone: '116', available: '24/7', description: 'Free counselling for children', website: 'https://childlinesa.org.za' },
    ],
    IN: [
      { name: 'Childline India', phone: '1098', available: '24/7', description: 'Free helpline for children in distress' },
    ],
    SG: [
      { name: 'Tinkle Friend', phone: '1800 274 4788', available: 'Mon-Fri 2:30pm-5pm', ages: '7-12', description: 'Helpline for primary school children' },
    ],
    PH: [
      { name: 'Bantay Bata', phone: '163', available: '24/7', description: 'Child welfare helpline', website: 'https://bantaybata163.com' },
    ],
  }

  return services[countryCode] || []
}
