import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, BookMarked, Users, MapPin, Coffee, Clock, History, Rocket, Briefcase, Plane, Film } from 'lucide-react';
import { COURSE, STORIES } from '../data/course';

const container = { animate: { transition: { staggerChildren: 0.07 } } };
const item = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

const LEVEL_LABELS = ['', 'Débutant', 'Apprenti', 'Intermédiaire', 'Avancé', 'Expert', 'Maître'];

const UNIT_ICONS = {
  1: BookOpen,
  2: Users,
  3: MapPin,
  4: Coffee,
  5: Clock,
  6: History,
  7: Rocket,
  8: Briefcase,
  9: Plane,
  10: Film,
};

export default function Dashboard({ navigate, state, level }) {
  const startUnit = COURSE.units[0];
  const [activeSection, setActiveSection] = useState('overview');
  const overviewRef = useRef(null);
  const unitsRef = useRef(null);
  const storiesRef = useRef(null);
  const progressRef = useRef(null);
  const sections = useMemo(() => ([
    { id: 'overview', label: 'Overview', ref: overviewRef },
    { id: 'units', label: 'Units', ref: unitsRef },
    { id: 'stories', label: 'Stories', ref: storiesRef },
    { id: 'progress', label: 'Progress', ref: progressRef },
  ]), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.dataset.section);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => observer.disconnect();
  }, [sections]);

  const heroWords = ['Learn', 'French,', 'the', 'right', 'way.'];
  return (
    <div className="view-pad">
      <section className="hero-card" ref={overviewRef} data-section="overview">
        <motion.div className="hero-orb orb-1" style={{ zIndex: 0 }} animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }} />
        <motion.div className="hero-orb orb-2" style={{ zIndex: 0 }} animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} />
        <motion.div className="hero-orb orb-3" style={{ zIndex: 0 }} animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }} />

        <div className="hero-tag">· Your A1–A2 pathway</div>
        <h1 className="hero-title">
          {heroWords.map((word, idx) => (
            <motion.span key={word + idx} style={{ display: 'inline-block', marginRight: '0.25em' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              {word}
            </motion.span>
          ))}
        </h1>
        <p className="hero-sub">Structured lessons, immersive stories, and real progress tracking designed for focused daily practice.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('unit', { unit: startUnit })}>
            Start Unit 1
            <span className="btn-arrow">→</span>
          </button>
          <a className="btn-ghost" href="#course-map">View course map</a>
        </div>
        <motion.div className="hero-stats" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <div className="h-stat">
            <span>{Object.keys(state.completedLessons).length}</span>
            <label>Lessons done</label>
          </div>
          <div className="h-stat">
            <span>{state.cardsLearned}</span>
            <label>Cards learned</label>
          </div>
          <div className="h-stat">
            <span>{state.xp}</span>
            <label>Total XP</label>
          </div>
          <div className="h-stat accent">
            <span>{LEVEL_LABELS[Math.min(level, LEVEL_LABELS.length - 1)]}</span>
            <label>Title</label>
          </div>
        </motion.div>
      </section>

      <div className="section-head" id="course-map" ref={unitsRef} data-section="units">
        <h2>Course Map</h2>
        <p>Tap a unit to begin.</p>
      </div>

      <motion.div className="unit-grid" variants={container} initial="initial" animate="animate">
        {COURSE.units.map((unit, unitIdx) => {
          const total = unit.lessons.length;
          const completed = unit.lessons.filter(id => state.completedLessons[id]).length;
          const pct = total ? Math.round((completed / total) * 100) : 0;
          const Icon = UNIT_ICONS[unit.id];
          return (
            <motion.div key={unit.id} variants={item} className="unit-card" onClick={() => navigate('unit', { unit })} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: unitIdx * 0.06 }} whileHover={{ scale: 1.02, borderColor: '#3a3a3a' }}>
              <div className="unit-top">
                <div className="unit-icon">{Icon ? <Icon size={20} /> : null}</div>
                <div className="unit-badge">· {unit.level} · Unit {unit.id}</div>
                {unit.level === 'A2' && <span className="unit-a2">· A2</span>}
              </div>
              <h3 className="unit-title">{unit.title}</h3>
              <p className="unit-desc">{unit.desc}</p>
              <div className="unit-footer">
                <span className="unit-pct">{pct}%</span>
                <div className="unit-bar">
                  <motion.div className="unit-bar-fill" whileInView={{ width: `${pct}%` }} initial={{ width: '0%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="section-head" ref={storiesRef} data-section="stories">
        <h2>Stories</h2>
        <p>Short reads to build confidence.</p>
      </div>
      <div className="stories-grid">
        {Object.entries(STORIES).slice(0, 3).map(([id, story]) => (
          <motion.div key={id} className="story-list-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} onClick={() => navigate('stories', { story: id })}>
            <div className="story-icon">{<BookMarked size={18} />}</div>
            <div className="story-meta">
              <span className="unit-badge">{story.level}</span>
              <h4>{story.title}</h4>
              <p>{story.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="section-head" ref={progressRef} data-section="progress">
        <h2>Progress</h2>
        <p>Keep the streak alive.</p>
      </div>
      <div className="progress-preview">
        <div className="progress-card">
          <div className="progress-label">Current level</div>
          <div className="progress-value">{level}</div>
          <div className="progress-sub">{LEVEL_LABELS[Math.min(level, LEVEL_LABELS.length - 1)]}</div>
        </div>
        <div className="progress-card">
          <div className="progress-label">Total XP</div>
          <div className="progress-value">{state.xp}</div>
          <div className="progress-sub">Keep practicing daily</div>
        </div>
      </div>

      <div className="scroll-nav">
        {sections.map((section) => (
          <button key={section.id} className={`scroll-nav-item ${activeSection === section.id ? 'active' : ''}`} onClick={() => section.ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <span>{section.label}</span>
            {activeSection === section.id && <span className="scroll-nav-indicator">→</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
