import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, Brain, Trophy, BookMarked, Volume2, TrendingUp, Flame } from 'lucide-react';

const NAV = [
  { id: 'home', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pronunciation', label: 'Pronunciation', icon: Volume2 },
  { id: 'pronunciation-rater', label: 'Pronunciation Rater', icon: Volume2 },
  { id: 'flashcards', label: 'Flashcards', icon: Brain },
  { id: 'quiz', label: 'Quiz', icon: Trophy },
  { id: 'stories', label: 'Stories', icon: BookMarked },
  { id: 'progress', label: 'Progress', icon: TrendingUp },
];

export default function Sidebar({ view, navigate, state, level, levelXP, levelPct, speechRate, setSpeechRate }) {
  const isSlow = speechRate < 1;

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-logo">P</div>
        <div>
          <div className="brand-name">PARLER</div>
          <div className="brand-tagline">A1–A2 French Studio</div>
        </div>
      </div>

      <div className="xp-block">
        <div className="xp-header">
          <span className="xp-level-label">Level</span>
          <motion.span key={level} className="xp-level-num" initial={{ scale: 1.4 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>{level}</motion.span>
        </div>
        <div className="xp-bar-track">
          <motion.div className="xp-bar-fill" animate={{ width: `${levelPct}%` }} transition={{ duration: 0.6, ease: 'easeOut' }} />
        </div>
        <div className="xp-sub">{levelXP} / 200 XP</div>
      </div>

      <nav className="sidebar-nav">
        {NAV.map(({ id, label, icon: Icon }) => (
          <motion.button key={id} className={`nav-btn ${view === id ? 'active' : ''}`} onClick={() => navigate(id)} whileHover={{ x: 4 }} whileTap={{ scale: 0.97 }}>
            <Icon size={16} strokeWidth={view === id ? 2.2 : 1.8} />
            <span>{label}</span>
            {view === id && <motion.div className="nav-indicator" layoutId="nav-indicator" />}
          </motion.button>
        ))}
      </nav>

      <div className="speech-toggle">
        <div className="speech-label">Speech speed</div>
        <div className="speech-segment">
          <button className={`speech-seg ${!isSlow ? 'active' : ''}`} onClick={() => setSpeechRate(1)} aria-pressed={!isSlow}>Normal</button>
          <button className={`speech-seg ${isSlow ? 'active' : ''}`} onClick={() => setSpeechRate(0.8)} aria-pressed={isSlow}>Slow</button>
        </div>
      </div>

      <div className="streak-card">
        <motion.div className="streak-flame" animate={{ rotate: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <Flame size={22} />
        </motion.div>
        <div>
          <motion.div key={state.streak} className="streak-count" initial={{ scale: 1.3 }} animate={{ scale: 1 }}>{state.streak}</motion.div>
          <div className="streak-label">day streak</div>
        </div>
      </div>
    </aside>
  );
}
