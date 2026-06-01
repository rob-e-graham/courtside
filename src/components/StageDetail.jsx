export default function StageDetail({ stage, country, onBack, onGetHelp }) {
  return (
    <div className="stage-detail">
      <button className="back-btn" onClick={onBack}>
        &lsaquo; Back
      </button>

      <div className="stage-detail-header">
        <span className="stage-detail-icon">{stage.icon}</span>
        <h2>{stage.title}</h2>
        <p className="stage-detail-subtitle">{stage.subtitle}</p>
      </div>

      <div className="advice-list">
        {stage.info.map((item, i) => (
          <div key={i} className="advice-card">
            <h3>{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {stage.keyPoints && stage.keyPoints.length > 0 && (
        <div className="key-tips">
          <h3>Key Points</h3>
          <ul>
            {stage.keyPoints.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="stage-disclaimer">
        <p>This is general information only and may not apply to your specific situation or jurisdiction. Laws and processes vary by location and change over time. <strong>Please seek professional legal advice before acting on any of this information.</strong></p>
      </div>

      <button className="help-btn" onClick={onGetHelp}>
        📞 Get Help Now
      </button>
    </div>
  )
}
