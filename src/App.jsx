import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppState } from './hooks/useAppState';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UnitView from './components/UnitView';
import LessonView from './components/LessonView';
import StoriesView from './components/StoriesView';
import PronunciationView from './components/PronunciationView';
import FlashcardsView from './components/FlashcardsView';
import QuizView from './components/QuizView';
import ProgressView from './components/ProgressView';
import Toast from './components/Toast';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
};

export default function App() {
  const appState = useAppState();
  const [view, setView] = useState('home');
  const [currentUnit, setCurrentUnit] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [currentStory, setCurrentStory] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((msg, type = 'xp') => {
    setToast({ msg, type, id: Date.now() });
    setTimeout(() => setToast(null), 2200);
  }, []);

  const handleAddXP = useCallback((amount, label) => {
    appState.addXP(amount);
    showToast(`+${amount} XP${label ? ` · ${label}` : ''}`, 'xp');
  }, [appState, showToast]);

  const navigate = useCallback((v, data = {}) => {
    setView(v);
    if (data.unit !== undefined) setCurrentUnit(data.unit);
    if (data.lesson !== undefined) setCurrentLesson(data.lesson);
    if (data.story !== undefined) setCurrentStory(data.story);
  }, []);

  const renderView = () => {
    switch (view) {
      case 'home': return <Dashboard navigate={navigate} state={appState.state} level={appState.level} />;
      case 'unit': return <UnitView unit={currentUnit} navigate={navigate} state={appState.state} />;
      case 'lesson': return <LessonView lessonId={currentLesson} navigate={navigate} state={appState.state} completeLesson={appState.completeLesson} addXP={handleAddXP} showToast={showToast} />;
      case 'stories': return <StoriesView storyId={currentStory} navigate={navigate} addXP={handleAddXP} />;
      case 'pronunciation': return <PronunciationView />;
      case 'flashcards': return <FlashcardsView state={appState.state} learnCard={appState.learnCard} addXP={handleAddXP} />;
      case 'quiz': return <QuizView answerQuiz={appState.answerQuiz} addXP={handleAddXP} navigate={navigate} />;
      case 'progress': return <ProgressView state={appState.state} level={appState.level} levelXP={appState.levelXP} levelPct={appState.levelPct} />;
      default: return <Dashboard navigate={navigate} state={appState.state} level={appState.level} />;
    }
  };

  return (
    <div className="app-shell">
      <Sidebar view={view} navigate={navigate} state={appState.state} level={appState.level} levelXP={appState.levelXP} levelPct={appState.levelPct} />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div key={view + (currentLesson || '') + (currentUnit?.id || '')} variants={pageVariants} initial="initial" animate="animate" exit="exit" style={{ minHeight: '100%' }}>
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
      <AnimatePresence>
        {toast && <Toast key={toast.id} msg={toast.msg} type={toast.type} />}
      </AnimatePresence>
    </div>
  );
}
