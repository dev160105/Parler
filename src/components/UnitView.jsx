import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, BookOpen, BookMarked } from 'lucide-react';
import { LESSONS, STORIES } from '../data/course';

const container = { animate: { transition: { staggerChildren: 0.07 } } };

export default function UnitView({ unit, navigate, state }) {
  if (!unit) { navigate('home'); return null; }

  return (
    <div className="view-pad">
      <button className="back-btn" onClick={() => navigate('home')}>
        <ArrowLeft size={15} /> Course map
      </button>

      <div className="unit-hero">
        <div>
          <div className="unit-badge">{unit.level} · Unit {unit.id}</div>
          <h1 className="view-title">{unit.title}</h1>
          <p className="view-sub">{unit.desc}</p>
        </div>
      </div>

      <div className="section-head"><h2>Lessons</h2></div>
      <motion.div className="lesson-grid" variants={container} initial="initial" animate="animate">
        {unit.lessons.map((id, i) => {
          const lesson = LESSONS[id];
          const done = state.completedLessons[id];
          return (
            <motion.div key={id} className={`lesson-card ${done ? 'done' : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }} whileHover={{ scale: 1.02, borderColor: '#3a3a3a' }}>
              <div className="lcard-top">
                <div className="lcard-num">L{i + 1}</div>
                {done && <CheckCircle2 size={16} className="done-icon" />}
              </div>
              <h4>{lesson ? lesson.title : 'Coming soon'}</h4>
              <p>{lesson ? lesson.summary : 'Content is being built.'}</p>
              <button className="btn-ghost" onClick={() => navigate('lesson', { lesson: id })}>
                <BookOpen size={14} /> Open lesson
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      {unit.stories.length > 0 && (
        <>
          <div className="section-head"><h2>Stories</h2></div>
          <motion.div className="lesson-grid" variants={container} initial="initial" animate="animate">
            {unit.stories.map(id => {
              const story = STORIES[id];
              if (!story) return null;
              return (
                <motion.div key={id} className="story-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} whileHover={{ scale: 1.02, borderColor: '#3a3a3a' }}>
                  <div className="story-icon"><BookMarked size={18} /></div>
                  <div className="unit-badge">{story.level} story</div>
                  <h4>{story.title}</h4>
                  <p>{story.summary}</p>
                  <button className="btn-ghost" onClick={() => navigate('stories', { story: id })}>Read story</button>
                </motion.div>
              );
            })}
          </motion.div>
        </>
      )}
    </div>
  );
}
