import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { LESSONS } from '../data/course';
import { speak } from '../utils/speech';

export default function LessonView({ lessonId, navigate, state, completeLesson, addXP, showToast, speechRate }) {
  const lesson = LESSONS[lessonId];
  const [showAnswers, setShowAnswers] = useState(false);
  const done = state.completedLessons[lessonId];

  if (!lesson) {
    return (
      <div className="view-pad">
        <button className="back-btn" onClick={() => navigate('unit')}><ArrowLeft size={15} /> Back</button>
        <h2 className="view-title">Coming soon</h2>
        <p>This lesson is not ready yet. Try another!</p>
      </div>
    );
  }

  const handleComplete = () => {
    if (done) { showToast('Already completed!', 'info'); return; }
    completeLesson(lessonId);
    showToast('+20 XP · Lesson complete!', 'xp');
  };

  return (
    <div className="view-pad">
      <div className="lesson-topbar">
        <button className="back-btn" onClick={() => navigate('unit')}><ArrowLeft size={15} /> Back to unit</button>
        <span className="lesson-badge">{lesson.level} lesson</span>
      </div>

      <h1 className="view-title">{lesson.title}</h1>
      <p className="view-sub">{lesson.summary}</p>

      {/* Objectives */}
      <Section title="Objectives">
        <ul className="obj-list">
          {lesson.objectives.map((o, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
              <span className="obj-dot" />
              {o}
            </motion.li>
          ))}
        </ul>
      </Section>

      {/* Vocabulary */}
      <Section title="Vocabulary">
        <div className="vocab-table">
          <div className="vocab-head">
            <span>French</span><span>English</span><span>Pronunciation</span><span>Example</span><span></span>
          </div>
          {lesson.vocab.map((v, i) => (
            <motion.div key={i} className="vocab-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              <strong className="vocab-fr">{v.fr}</strong>
              <span className="vocab-en">{v.en}</span>
              <span className="vocab-phon">/{v.phon}/</span>
              <span className="vocab-ex">{v.example}</span>
              <button className="play-btn" onClick={() => speak(v.fr, speechRate)} title="Play"><Volume2 size={14} /></button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Grammar */}
      {lesson.grammar && (
        <Section title={lesson.grammar.title}>
          <div className="rule-box">
            <ul className="rule-list">
              {lesson.grammar.rules.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
          <div className="example-grid">
            {lesson.grammar.examples.map((ex, i) => (
              <div key={i} className="example-row">
                <div className="ex-fr">{ex.fr}</div>
                <div className="ex-en">{ex.en}</div>
                <button className="play-btn small" onClick={() => speak(ex.fr, speechRate)}><Volume2 size={12} /></button>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Dialogue */}
      {lesson.dialogue?.length > 0 && (
        <Section title="Dialogue">
          <div className="dialog-box">
            {lesson.dialogue.map((line, i) => (
              <motion.div key={i} className={`dialog-row ${line.who === 'B' ? 'right' : ''}`} initial={{ opacity: 0, x: line.who === 'B' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }}>
                <div className="dialog-bubble">
                  <div className="dialog-who">{line.who}</div>
                  <div className="dialog-fr">{line.fr}</div>
                  <div className="dialog-en">{line.en}</div>
                </div>
                <button className="play-btn small" onClick={() => speak(line.fr, speechRate)}><Volume2 size={12} /></button>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Exercises */}
      {lesson.exercises?.length > 0 && (
        <Section title="Exercises" action={
          <button className="btn-ghost small" onClick={() => setShowAnswers(p => !p)}>
            {showAnswers ? <><EyeOff size={13} /> Hide answers</> : <><Eye size={13} /> Show answers</>}
          </button>
        }>
          <ol className="exercise-list">
            {lesson.exercises.map((ex, i) => (
              <li key={i} className="exercise-item">
                <span className="ex-prompt">{ex.prompt}</span>
                <AnimatePresence>
                  {showAnswers && (
                    <motion.span className="ex-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                      {ex.answer}
                    </motion.span>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {/* Actions */}
      <div className="lesson-actions">
        <motion.button className={`btn-primary ${done ? 'done' : ''}`} onClick={handleComplete} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          {done ? <><CheckCircle size={16} /> Completed</> : 'Mark complete · +20 XP'}
        </motion.button>
        <button className="btn-ghost" onClick={() => navigate('quiz')}>Quick quiz</button>
        <button className="btn-ghost" onClick={() => navigate('flashcards')}>Flashcards</button>
      </div>
    </div>
  );
}

function Section({ title, children, action }) {
  return (
    <motion.div className="lesson-section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
      <div className="section-head">
        <h3>{title}</h3>
        {action}
      </div>
      {children}
    </motion.div>
  );
}
