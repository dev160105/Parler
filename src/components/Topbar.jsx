import { motion } from 'framer-motion';

const NAV = [
  { id: 'home', label: 'Dashboard' },
  { id: 'pronunciation', label: 'Pronunciation' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'stories', label: 'Stories' },
  { id: 'progress', label: 'Progress' },
];

export default function Topbar({ view, navigate, level, levelXP, levelPct }) {
  return (
    <header className="topbar">
      <button className="topbar-brand" onClick={() => navigate('home')}>
        <span className="brand-mark">P</span>
        <span className="brand-text">
          <span className="brand-name">PARLER</span>
          <span className="brand-tagline">A1–A2 French Studio</span>
        </span>
      </button>

      <nav className="topbar-nav">
        {NAV.map((item) => (
          <button key={item.id} className={`topbar-link ${view === item.id ? 'active' : ''}`} onClick={() => navigate(item.id)}>
            {item.label}
            {view === item.id && <motion.span className="topbar-indicator" layoutId="topbar-indicator" />}
          </button>
        ))}
      </nav>

      <div className="topbar-actions">
        <div className="topbar-level">
          <div className="level-meta">
            <span className="level-label">Level</span>
            <span className="level-value">{level}</span>
          </div>
          <div className="level-track">
            <motion.span className="level-fill" animate={{ width: `${levelPct}%` }} transition={{ duration: 0.6, ease: 'easeOut' }} />
          </div>
          <span className="level-xp">{levelXP} / 200 XP</span>
        </div>
        <button className="cta-btn" onClick={() => navigate('home')}>Start learning</button>
      </div>
    </header>
  );
}
