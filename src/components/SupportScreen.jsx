export default function SupportScreen({ services, country, onBack }) {
  const hasServices = services && (services.crisis?.length || services.mental?.length || services.legal?.length)

  return (
    <div className="support-screen">
      <button className="back-btn" onClick={onBack}>
        &lsaquo; Back
      </button>

      <h2>Get Help Now</h2>
      <p className="support-intro">
        You don't have to do this alone. These services understand what you're going through.
      </p>

      {hasServices ? (
        <>
          {services.crisis?.length > 0 && (
            <section className="service-section">
              <h3 className="section-label crisis-label">Crisis — Call Now</h3>
              {services.crisis.map((s, i) => (
                <ServiceCard key={i} service={s} />
              ))}
            </section>
          )}

          {services.mental?.length > 0 && (
            <section className="service-section">
              <h3 className="section-label">Mental Health & Support</h3>
              {services.mental.map((s, i) => (
                <ServiceCard key={i} service={s} />
              ))}
            </section>
          )}

          {services.legal?.length > 0 && (
            <section className="service-section">
              <h3 className="section-label">Legal Help</h3>
              {services.legal.map((s, i) => (
                <ServiceCard key={i} service={s} />
              ))}
            </section>
          )}

          {services.legalByRegion?.length > 0 && (
            <section className="service-section">
              <h3 className="section-label">Legal Aid by Region</h3>
              <div className="state-grid">
                {services.legalByRegion.map((s) => (
                  <a
                    key={s.region}
                    href={`tel:${s.phone.replace(/\s/g, '')}`}
                    className="state-card"
                  >
                    <span className="state-name">{s.region}</span>
                    <span className="state-phone">{s.phone}</span>
                  </a>
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="no-services">
          <p>We're still building the support directory for {country.name}.</p>
          <p>In the meantime, these international resources can help:</p>
        </div>
      )}
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div className="service-info">
        <span className="service-name">{service.name}</span>
        <span className="service-desc">{service.description}</span>
        {service.available && (
          <span className="service-available">{service.available}</span>
        )}
      </div>
      <div className="service-actions">
        {service.phone && (
          <a
            href={`tel:${service.phone.replace(/\s/g, '')}`}
            className="call-btn"
          >
            Call {service.phone}
          </a>
        )}
        {service.website && (
          <a
            href={service.website}
            target="_blank"
            rel="noopener noreferrer"
            className="web-btn"
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  )
}
