import { useState, useCallback } from 'react';

const STORAGE_KEY = 'parler_v2_state';

const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastDay: null,
  completedLessons: {},
  cardsLearned: 0,
  skills: { vocab: 10, grammar: 8, listening: 6, reading: 7, pronunciation: 5 },
  speechRate: 1,
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

export function useAppState() {
  const [state, setState] = useState(loadState);

  const save = useCallback((newState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    setState(newState);
  }, []);

  const addXP = useCallback((amount) => {
    setState(prev => {
      const today = new Date().toDateString();
      const newStreak = prev.lastDay !== today ? prev.streak + 1 : prev.streak;
      const next = { ...prev, xp: prev.xp + amount, streak: newStreak, lastDay: today };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const completeLesson = useCallback((id) => {
    setState(prev => {
      const today = new Date().toDateString();
      const newStreak = prev.lastDay !== today ? prev.streak + 1 : prev.streak;
      const next = { ...prev, xp: prev.xp + 20, completedLessons: { ...prev.completedLessons, [id]: true }, streak: newStreak, lastDay: today };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const learnCard = useCallback(() => {
    setState(prev => {
      const next = { ...prev, cardsLearned: prev.cardsLearned + 1, xp: prev.xp + 5, skills: { ...prev.skills, vocab: Math.min(100, prev.skills.vocab + 1) } };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const answerQuiz = useCallback((correct) => {
    if (!correct) return;
    setState(prev => {
      const next = { ...prev, xp: prev.xp + 8, skills: { ...prev.skills, grammar: Math.min(100, prev.skills.grammar + 1) } };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const setSpeechRate = useCallback((rate) => {
    const nextRate = Math.min(1.2, Math.max(0.6, rate));
    setState(prev => {
      const next = { ...prev, speechRate: nextRate };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const level = Math.floor(state.xp / 200) + 1;
  const levelXP = state.xp % 200;
  const levelPct = (levelXP / 200) * 100;

  return { state, addXP, completeLesson, learnCard, answerQuiz, setSpeechRate, level, levelXP, levelPct };
}
