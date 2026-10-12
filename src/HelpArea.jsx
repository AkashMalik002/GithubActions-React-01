import { HELP_ITEMS } from './data.js';

function HelpBox({ item, expanded, onToggle }) {
  return (
    <article className={`help-card ${item.color} ${expanded ? 'is-open' : ''}`}>
      <button
        className="card-trigger"
        type="button"
        aria-expanded={expanded}
        aria-controls={`detail-${item.id}`}
        onClick={onToggle}
      >
        <span className="card-topline">
          <span className="card-icon" aria-hidden="true">{item.icon}</span>
          <span className="card-number">{item.number}</span>
        </span>
        <span className="card-eyebrow">{item.eyebrow}</span>
        <span className="card-title">{item.title}</span>
        <span className="card-description">{item.description}</span>
        <span className="card-footer">
          <span>{expanded ? 'Close note' : 'Explore concept'}</span>
          <span className="card-arrow" aria-hidden="true">{expanded ? '−' : '↗'}</span>
        </span>
      </button>
      {expanded && <p className="card-detail" id={`detail-${item.id}`}>{item.detail}</p>}
    </article>
  );
}

export default function HelpArea({ activeCard, onToggle }) {
  return (
    <div className="help-grid">
      {HELP_ITEMS.map((item) => (
        <HelpBox
          key={item.id}
          item={item}
          expanded={activeCard === item.id}
          onToggle={() => onToggle(item.id)}
        />
      ))}
    </div>
  );
}
