import { motion } from 'framer-motion';
import { Flame, Star, BookOpen, Brain } from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function ProgressView({ state, level, levelXP, levelPct }) {
  const today = (new Date().getDay() + 6) % 7;

  const stats = [
    { icon: Star, label: 'Total XP', value: state.xp },
    { icon: BookOpen, label: 'Lessons done', value: Object.keys(state.completedLessons).length },
    { icon: Brain, label: 'Cards learned', value: state.cardsLearned },
    { icon: Flame, label: 'Day streak', value: state.streak },
  ];

  return (
    <div className="view-pad">
      <div className="section-head-hero">
        <h1 className="view-title">Progress</h1>
        <p className="view-sub">Watch your skills grow. Keep the streak alive.</p>
      </div>

      {/* Level card */}
      <motion.div className="level-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="level-num">Level {level}</div>
        <div className="level-bar-track">
          <motion.div className="level-bar-fill" initial={{ width: '0%' }} whileInView={{ width: `${levelPct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }} />
        </div>
        <div className="level-sub">{levelXP} / 200 XP to next level</div>
      </motion.div>

      {/* Stats grid */}
      <div className="progress-stats">
        {stats.map(({ icon: Icon, label, value }, i) => (
          <motion.div key={label} className="progress-stat" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <Icon size={20} />
            <div className="ps-value">{value}</div>
            <div className="ps-label">{label}</div>
          </motion.div>
        ))}
      </div>

      {/* Skill bars */}
      <div className="section-head"><h2>Skills</h2></div>
      <div className="skill-bars">
        {Object.entries(state.skills).map(([key, val], i) => (
          <motion.div key={key} className="skill-bar" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
            <div className="skill-bar-header">
              <span className="skill-name">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              <span className="skill-pct">{val}%</span>
            </div>
            <div className="skill-track">
              <motion.div className="skill-fill" initial={{ width: '0%' }} whileInView={{ width: `${val}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: 'easeOut' }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Week row */}
      <div className="section-head"><h2>This week</h2></div>
      <div className="week-row">
        {DAYS.map((d, i) => (
          <motion.div key={d} className={`week-cell ${i === today ? 'today' : i < today ? 'past' : ''}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
            {i < today ? <div className="week-dot active" /> : i === today ? <Flame size={16} /> : <div className="week-dot" />}
            <span>{d}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
