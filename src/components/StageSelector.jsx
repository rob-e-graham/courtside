export default function StageSelector({ stages, onSelect }) {
  return (
    <div className="stage-list">
      {stages.map((stage) => (
        <button
          key={stage.id}
          className="stage-card"
          onClick={() => onSelect(stage)}
        >
          <span className="stage-icon">{stage.icon}</span>
          <div className="stage-text">
            <span className="stage-title">{stage.title}</span>
            <span className="stage-subtitle">{stage.subtitle}</span>
          </div>
          <span className="stage-arrow">&rsaquo;</span>
        </button>
      ))}
    </div>
  )
}
