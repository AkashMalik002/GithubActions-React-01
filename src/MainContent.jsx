import { useState } from 'react';
import HelpArea from './HelpArea.jsx';
import { PIPELINE_STEPS } from './data.js';

export default function MainContent() {
  const [activeCard, setActiveCard] = useState(null);
  const [helpVisible, setHelpVisible] = useState(true);

  function toggleCard(id) {
    setActiveCard((current) => (current === id ? null : id));
  }

  return (
    <main>
      <section className="intro-section" aria-labelledby="intro-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker"><span className="kicker-dot" /> THE BUILDING BLOCKS</p>
            <h2 id="intro-title">A few ideas, <span>made simple.</span></h2>
            <p className="section-copy">Start with the tools. Then let automation take the busywork off your hands.</p>
          </div>
          <button
            className="visibility-toggle"
            type="button"
            aria-expanded={helpVisible}
            data-testid="help-toggle"
            onClick={() => setHelpVisible((visible) => !visible)}
          >
            <span aria-hidden="true">{helpVisible ? '⌃' : '⌄'}</span>
            {helpVisible ? 'Hide guides' : 'Show guides'}
          </button>
        </div>
        {helpVisible ? (
          <HelpArea activeCard={activeCard} onToggle={toggleCard} />
        ) : (
          <div className="guides-hidden" data-testid="guides-hidden">Guides tucked away. Bring them back when you’re ready.</div>
        )}
      </section>

      <section className="pipeline-section" aria-labelledby="pipeline-title">
        <div className="pipeline-heading">
          <div>
            <p className="section-kicker"><span className="kicker-dot green" /> FROM COMMIT TO BUNDLE</p>
            <h2 id="pipeline-title">Your pipeline, <span>at a glance.</span></h2>
          </div>
          <span className="trigger-chip"><span className="trigger-pulse" /> triggered on push</span>
        </div>
        <div className="pipeline-track" aria-label="Build pipeline steps">
          {PIPELINE_STEPS.map((step, index) => (
            <div className="pipeline-step" key={step.label}>
              <div className={`step-icon ${index === 3 ? 'test-step' : ''}`} aria-hidden="true">{step.icon}</div>
              <div className="step-meta"><span className="step-index">0{index + 1}</span><strong>{step.label}</strong></div>
              <code>{step.command}</code>
            </div>
          ))}
        </div>
        <div className="pipeline-note"><span className="note-check">✓</span><p>Tests run before every build. If one fails, the pipeline stops before it can ship a broken bundle.</p></div>
      </section>
    </main>
  );
}
