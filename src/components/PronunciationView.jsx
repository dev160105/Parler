import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, X } from 'lucide-react';
import { SOUNDS } from '../data/course';
import { speak } from '../utils/speech';

export default function PronunciationView({ speechRate }) {
  const [active, setActive] = useState(null);

  return (
    <div className="view-pad">
      <div className="section-head-hero">
        <h1 className="view-title">Pronunciation Studio</h1>
        <p className="view-sub">Tap a sound to hear it in French and learn how it is formed.</p>
      </div>

      <div className="sounds-grid">
        {SOUNDS.map((s, i) => (
          <motion.div key={i} className={`sound-card ${active === i ? 'active' : ''}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => setActive(active === i ? null : i)}>
            <div className="sound-symbol">{s.label}</div>
            <div className="sound-sub">{s.symbol}</div>
            <div className="sound-example">{s.example}</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div className="sound-detail" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
            <div className="sound-detail-header">
              <div>
                <span className="sound-detail-symbol">{SOUNDS[active].label}</span>
                <span className="sound-detail-name">{SOUNDS[active].symbol}</span>
              </div>
              <button className="close-btn" onClick={() => setActive(null)}><X size={16} /></button>
            </div>
            <p className="sound-tip">{SOUNDS[active].tip}</p>
            <div className="sound-examples-row">
              {SOUNDS[active].example.split(', ').map((ex, i) => (
                <motion.button key={i} className="sound-play-btn" onClick={() => speak(ex, speechRate)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Volume2 size={14} />
                  <span>{ex}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
