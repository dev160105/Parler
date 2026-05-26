import { motion } from 'framer-motion';
import { Zap, Info } from 'lucide-react';

export default function Toast({ msg, type }) {
  return (
    <motion.div className={`toast toast-${type}`} initial={{ opacity: 0, y: 60, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.9 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
      {type === 'xp' ? <Zap size={15} /> : <Info size={15} />}
      {msg}
    </motion.div>
  );
}
