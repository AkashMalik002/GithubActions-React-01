import MainContent from './MainContent.jsx';

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" role="img" aria-label="Actions Lab logo">
      <rect x="2" y="2" width="36" height="36" rx="12" fill="currentColor" opacity=".12" />
      <path d="M13 27.5 20 12l7 15.5M15.3 22h9.4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="29.5" cy="13" r="3" fill="#24b47e" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Actions Lab home">
          <BrandMark />
          <span>actions<span className="brand-light">lab</span></span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          <a className="nav-active" href="#guides">Learn</a>
          <a href="#pipeline">The pipeline</a>
        </nav>
        <a className="github-link" href="https://github.com/features/actions" target="_blank" rel="noreferrer">
          <span className="github-mark" aria-hidden="true">◉</span> GitHub Actions <span className="external-arrow" aria-hidden="true">↗</span>
        </a>
      </header>

      <div className="hero-wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-badge"><span className="badge-spark">✳</span> A FRIENDLY GUIDE TO AUTOMATION</div>
            <h1 id="hero-title">Good code.<br /><span>On repeat.</span></h1>
            <p>Meet the little workflows that take your app from a code change to a confident release, every single time.</p>
            <a href="#pipeline" className="hero-cta">See how it works <span aria-hidden="true">↓</span></a>
            <div className="hero-footnote"><span className="avatar-stack"><i>J</i><i>A</i><i>M</i></span><span>Built for curious builders <b>·</b> No DevOps degree needed</span></div>
          </div>
          <div className="hero-visual" aria-label="Two platform builds completed successfully">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="hero-spark spark-a">✦</div><div className="hero-spark spark-b">·</div>
            <div className="build-card">
              <div className="build-card-head"><span className="build-label">MATRIX BUILD</span><span className="live-indicator"><i /> ALL SYSTEMS GO</span></div>
              <div className="build-commit"><span className="commit-mark">↗</span><div><strong>Ship with confidence</strong><small>run #184 · push to master</small></div><span className="commit-check">✓</span></div>
              <div className="runner-row"><span className="runner-icon ubuntu">◉</span><span className="runner-name">Ubuntu</span><span className="runner-bar"><i /></span><span className="runner-time">1m 24s</span><span className="runner-check">✓</span></div>
              <div className="runner-row"><span className="runner-icon windows">▦</span><span className="runner-name">Windows</span><span className="runner-bar windows-bar"><i /></span><span className="runner-time">1m 38s</span><span className="runner-check">✓</span></div>
              <div className="build-result"><span className="result-icon">↗</span><div><strong>Build artifacts ready</strong><small>dist/ · 2.4 MB · saved just now</small></div><span className="result-arrow">→</span></div>
            </div>
            <div className="float-tag tag-left"><span className="tag-check">✓</span> tests passed</div>
            <div className="float-tag tag-right"><span className="tag-git">⑂</span> one workflow, two OS</div>
          </div>
          <div className="hero-index"><span>001</span><i /> BUILT TO SHIP</div>
        </section>
      </div>

      <div id="guides" className="content-wrap"><MainContent /></div>
      <footer className="footer"><a className="footer-brand" href="#top">actions<span>lab</span></a><span>A tiny CI/CD learning playground</span><span className="footer-right">MADE TO MAKE SENSE <b>✳</b></span></footer>
    </div>
  );
}
