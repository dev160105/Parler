import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, RefreshCw, Trophy } from 'lucide-react';
import { LESSONS } from '../data/course';
import { XP_QUIZ } from '../lib/constants';

function buildQuiz() {
  const vocab = Object.values(LESSONS).flatMap(l => l.vocab || []);
  const shuffled = vocab.sort(() => Math.random() - 0.5).slice(0, 20);
  return shuffled.map(item => {
    const wrong = vocab.filter(v => v.en !== item.en).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [...wrong.map(v => v.en), item.en].sort(() => Math.random() - 0.5);
    return { fr: item.fr, answer: item.en, options };
  }).slice(0, 8);
}

export default function QuizView({ answerQuiz, addXP, navigate }) {
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [done, setDone] = useState(false);

  const init = useCallback(() => {
    setItems(buildQuiz());
    setIdx(0); setScore(0); setChosen(null); setDone(false);
  }, []);

  useEffect(() => { init(); }, [init]);

  const item = items[idx];

  const pick = (opt) => {
    if (chosen !== null) return;
    setChosen(opt);
    const correct = opt === item.answer;
    if (correct) { setScore(s => s + 1); answerQuiz(true); addXP(XP_QUIZ, 'Correct!'); }
    setTimeout(() => {
      if (idx + 1 >= items.length) { setDone(true); }
      else { setIdx(i => i + 1); setChosen(null); }
    }, 1100);
  };

  if (!items.length) return <div className="view-pad"><p>Loading quiz…</p></div>;

  if (done) {
    const pct = Math.round((score / items.length) * 100);
    return (
      <div className="view-pad">
        <motion.div className="quiz-done" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
          <Trophy size={48} className="quiz-trophy" />
          <h2>Quiz Complete!</h2>
          <div className="quiz-score-big">{pct}%</div>
          <p>{score} / {items.length} correct</p>
          <p className="quiz-msg">{pct === 100 ? 'Parfait!' : pct >= 75 ? 'Très bien!' : pct >= 50 ? 'Pas mal!' : 'Keep practising!'}</p>
          <motion.button className="btn-primary" onClick={init} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <RefreshCw size={15} /> Try again
          </motion.button>
          <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '12px', marginBottom: '24px' }}>Keep the momentum going</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-ghost" onClick={() => navigate('flashcards')}>Go to Flashcards</button>
            <button className="btn-ghost" onClick={() => navigate('home')}>Back to Dashboard</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="view-pad">
      <div className="section-head-hero">
        <h1 className="view-title">Quiz</h1>
        <p className="view-sub">Choose the correct English translation.</p>
      </div>

      <div className="quiz-progress">
        <div className="quiz-prog-bar"><motion.div className="quiz-prog-fill" animate={{ width: `${((idx) / items.length) * 100}%` }} /></div>
        <span className="quiz-counter">{idx + 1} / {items.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={idx} className="quiz-card" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
          <div className="quiz-prompt">
            <span className="quiz-fr">{item?.fr}</span>
            <span className="quiz-instruction">means…</span>
          </div>
          <div className="quiz-options">
            {item?.options.map((opt, i) => {
              let cls = 'quiz-opt';
              if (chosen !== null) {
                if (opt === item.answer) cls += ' correct';
                else if (opt === chosen) cls += ' wrong';
              }
              return (
                <motion.button key={i} className={cls} onClick={() => pick(opt)} disabled={chosen !== null} whileHover={chosen === null ? { scale: 1.02 } : {}} whileTap={chosen === null ? { scale: 0.98 } : {}}>
                  {chosen !== null && opt === item.answer && <CheckCircle size={15} />}
                  {chosen !== null && opt === chosen && opt !== item.answer && <XCircle size={15} />}
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="quiz-score-line">Score: {score}</div>
    </div>
  );
}
