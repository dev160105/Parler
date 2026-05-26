import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, RotateCcw, ThumbsUp, ThumbsDown } from 'lucide-react';
import { COURSE, LESSONS } from '../data/course';

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'fr-FR'; speechSynthesis.cancel(); speechSynthesis.speak(u);
}

export default function FlashcardsView({ state, learnCard, addXP }) {
  const [unitId, setUnitId] = useState(1);
  const [deck, setDeck] = useState([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const unit = COURSE.units.find(u => u.id === unitId);
    if (!unit) return;
    const cards = unit.lessons.flatMap(id => LESSONS[id]?.vocab || []);
    setDeck(cards);
    setIdx(0);
    setFlipped(false);
  }, [unitId]);

  const card = deck[idx];

  const next = (ok) => {
    if (ok) { learnCard(); addXP(5, 'Card learned'); }
    setDir(ok ? 1 : -1);
    setFlipped(false);
    setTimeout(() => setIdx(i => (i + 1) % deck.length), 50);
  };

  return (
    <div className="view-pad">
      <div className="section-head-hero">
        <h1 className="view-title">Flashcards</h1>
        <p className="view-sub">Flip the card, then rate yourself.</p>
      </div>

      <div className="deck-selector">
        {COURSE.units.map(u => (
          <button key={u.id} className={`deck-btn ${u.id === unitId ? 'active' : ''}`} onClick={() => setUnitId(u.id)}>
            Unit {u.id}
          </button>
        ))}
      </div>

      {!card ? (
        <div className="empty-state">No cards for this unit yet.</div>
      ) : (
        <>
          <div className="card-area">
            <AnimatePresence mode="wait">
              <motion.div key={idx + '-' + flipped} className={`flash-card ${flipped ? 'back' : ''}`} onClick={() => setFlipped(p => !p)} initial={{ opacity: 0, rotateY: flipped ? -90 : 90, scale: 0.95 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} whileHover={{ scale: 1.02 }} style={{ cursor: 'pointer' }}>
                {!flipped ? (
                  <>
                    <div className="card-side-label">Français</div>
                    <div className="card-main-text">{card.fr}</div>
                    <div className="card-phon">/{card.phon}/</div>
                    <button className="play-btn card-play" onClick={e => { e.stopPropagation(); speak(card.fr); }}><Volume2 size={14} /></button>
                    <div className="card-hint">Tap to reveal</div>
                  </>
                ) : (
                  <>
                    <div className="card-side-label">English</div>
                    <div className="card-main-text">{card.en}</div>
                    <div className="card-example">{card.example}</div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="card-progress-dots">
              {deck.slice(Math.max(0, idx - 3), idx + 5).map((_, i) => {
                const realIdx = Math.max(0, idx - 3) + i;
                return <div key={realIdx} className={`dot ${realIdx === idx ? 'active' : realIdx < idx ? 'done' : ''}`} />;
              })}
            </div>
          </div>

          <div className="card-actions">
            <motion.button className="card-btn again" onClick={() => next(false)} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
              <ThumbsDown size={18} /> Again
            </motion.button>
            <motion.button className="card-btn got-it" onClick={() => next(true)} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
              <ThumbsUp size={18} /> Got it
            </motion.button>
          </div>

          <div className="card-counter">{idx + 1} / {deck.length}</div>
        </>
      )}
    </div>
  );
}
