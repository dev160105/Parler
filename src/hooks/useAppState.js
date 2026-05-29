import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';

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

function loadLocal() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATE };
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function toRow(userId, s) {
  return {
    id: userId,
    xp: s.xp,
    streak: s.streak,
    last_day: s.lastDay,
    completed_lessons: s.completedLessons,
    cards_learned: s.cardsLearned,
    skills: s.skills,
    speech_rate: s.speechRate,
    updated_at: new Date().toISOString(),
  };
}

function fromRow(data) {
  return {
    xp: data.xp,
    streak: data.streak,
    lastDay: data.last_day,
    completedLessons: data.completed_lessons,
    cardsLearned: data.cards_learned,
    skills: data.skills,
    speechRate: data.speech_rate,
  };
}

export function useAppState(userId) {
  const [state, setState] = useState(loadLocal);
  const debounceRef = useRef(null);

  // Load from Supabase when user logs in
  useEffect(() => {
    if (!userId) return;
    supabase.from('progress').select('*').eq('id', userId).single().then(({ data }) => {
      if (data) {
        const loaded = { ...DEFAULT_STATE, ...fromRow(data) };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(loaded));
        setState(loaded);
      }
    });
  }, [userId]);

  const syncToSupabase = useCallback((newState) => {
    if (!userId) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      supabase.from('progress').upsert(toRow(userId, newState));
    }, 1500);
  }, [userId]);

  const persist = useCallback((updater) => {
    setState(prev => {
      const next = updater(prev);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      syncToSupabase(next);
      return next;
    });
  }, [syncToSupabase]);

  const addXP = useCallback((amount) => {
    persist(prev => {
      const today = new Date().toDateString();
      const newStreak = prev.lastDay !== today ? prev.streak + 1 : prev.streak;
      return { ...prev, xp: prev.xp + amount, streak: newStreak, lastDay: today };
    });
  }, [persist]);

  const completeLesson = useCallback((id) => {
    persist(prev => {
      const today = new Date().toDateString();
      const newStreak = prev.lastDay !== today ? prev.streak + 1 : prev.streak;
      return { ...prev, xp: prev.xp + 20, completedLessons: { ...prev.completedLessons, [id]: true }, streak: newStreak, lastDay: today };
    });
  }, [persist]);

  const learnCard = useCallback(() => {
    persist(prev => ({
      ...prev,
      cardsLearned: prev.cardsLearned + 1,
      xp: prev.xp + 5,
      skills: { ...prev.skills, vocab: Math.min(100, prev.skills.vocab + 1) },
    }));
  }, [persist]);

  const answerQuiz = useCallback((correct) => {
    if (!correct) return;
    persist(prev => ({
      ...prev,
      xp: prev.xp + 8,
      skills: { ...prev.skills, grammar: Math.min(100, prev.skills.grammar + 1) },
    }));
  }, [persist]);

  const setSpeechRate = useCallback((rate) => {
    const nextRate = Math.min(1.2, Math.max(0.6, rate));
    persist(prev => ({ ...prev, speechRate: nextRate }));
  }, [persist]);

  const level = Math.floor(state.xp / 200) + 1;
  const levelXP = state.xp % 200;
  const levelPct = (levelXP / 200) * 100;

  return { state, addXP, completeLesson, learnCard, answerQuiz, setSpeechRate, level, levelXP, levelPct };
}
