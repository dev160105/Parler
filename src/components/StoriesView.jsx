import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, BookMarked, ChevronRight } from 'lucide-react';
import { STORIES } from '../data/course';
import { speak } from '../utils/speech';
import { XP_STORY } from '../lib/constants';

export default function StoriesView({ storyId, navigate, addXP, speechRate }) {
  const [activeId, setActiveId] = useState(storyId || null);
  const [revealed, setRevealed] = useState({});

  const story = activeId ? STORIES[activeId] : null;

  if (story) {
    return (
      <div className="view-pad">
        <button className="back-btn" onClick={() => setActiveId(null)}><ArrowLeft size={15} /> All stories</button>
        <div className="story-hero">
          <div>
            <span className="unit-badge">{story.level} story</span>
            <h1 className="view-title">{story.title}</h1>
            <p className="view-sub">{story.summary}</p>
          </div>
        </div>

        <div className="story-body">
          {story.paragraphs.map((p, i) => (
            <motion.div key={i} className="story-para" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
              <p>{p}</p>
              <button className="play-btn" onClick={() => speak(p, speechRate)}><Volume2 size={14} /></button>
            </motion.div>
          ))}
        </div>

        <div className="section-head"><h3>Comprehension</h3><p>Check your understanding.</p></div>
        <div className="question-list">
          {story.questions.map((q, i) => (
            <div key={i} className="q-card">
              <div className="q-row">
                <span className="q-text">{q.q}</span>
                <button className="btn-ghost small" onClick={() => setRevealed(p => ({ ...p, [i]: !p[i] }))}>
                  {revealed[i] ? 'Hide' : 'Show answer'}
                </button>
              </div>
              <AnimatePresence>
                {revealed[i] && (
                  <motion.div className="q-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    {q.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="lesson-actions">
          <motion.button className="btn-primary" onClick={() => addXP(XP_STORY, 'Story read')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            Mark story read · +{XP_STORY} XP
          </motion.button>
          <button className="btn-ghost" onClick={() => speak(story.paragraphs.join(' '), speechRate)}>
            <Volume2 size={14} /> Play full story
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="view-pad">
      <div className="section-head-hero">
        <h1 className="view-title">Stories</h1>
        <p className="view-sub">Short A1–A2 stories with comprehension checks.</p>
      </div>
      <div className="stories-grid">
        {Object.entries(STORIES).map(([id, s], i) => (
          <motion.div key={id} className="story-list-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }} onClick={() => setActiveId(id)}>
            <div className="story-icon"><BookMarked size={18} /></div>
            <div className="story-meta">
              <span className="unit-badge">{s.level}</span>
              <h4>{s.title}</h4>
              <p>{s.summary}</p>
            </div>
            <ChevronRight size={16} className="story-chevron" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
