import { useState, useCallback, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import {
  STORAGE_KEY,
  XP_LESSON,
  XP_CARD,
  XP_QUIZ,
  LEVEL_XP_THRESHOLD,
  SPEECH_RATE_NORMAL,
  SPEECH_RATE_MIN,
  SPEECH_RATE_MAX,
} from '../lib/constants';

const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastDay: null,
  completedLessons: {},
  cardsLearned: 0,
  skills: { vocab: 10, grammar: 8, listening: 6, reading: 7, pronunciation: 5 },
  speechRate: SPEECH_RATE_NORMAL,
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
    supabase.from('progress').select('*').eq('id', userId).single().then(({ data, error }) => {
      if (error && error.code !== 'PGRST116') console.error('Progress load error:', error);
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
      supabase.from('progress').upsert(toRow(userId, newState)).then(({ error }) => {
        if (error) console.error('Progress sync error:', error);
      });
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
      return { ...prev, xp: prev.xp + XP_LESSON, completedLessons: { ...prev.completedLessons, [id]: true }, streak: newStreak, lastDay: today };
    });
  }, [persist]);

  const learnCard = useCallback(() => {
    persist(prev => ({
      ...prev,
      cardsLearned: prev.cardsLearned + 1,
      xp: prev.xp + XP_CARD,
      skills: { ...prev.skills, vocab: Math.min(100, prev.skills.vocab + 1) },
    }));
  }, [persist]);

  const answerQuiz = useCallback((correct) => {
    if (!correct) return;
    persist(prev => ({
      ...prev,
      xp: prev.xp + XP_QUIZ,
      skills: { ...prev.skills, grammar: Math.min(100, prev.skills.grammar + 1) },
    }));
  }, [persist]);

  const setSpeechRate = useCallback((rate) => {
    const nextRate = Math.min(SPEECH_RATE_MAX, Math.max(SPEECH_RATE_MIN, rate));
    persist(prev => ({ ...prev, speechRate: nextRate }));
  }, [persist]);

  const level = Math.floor(state.xp / LEVEL_XP_THRESHOLD) + 1;
  const levelXP = state.xp % LEVEL_XP_THRESHOLD;
  const levelPct = (levelXP / LEVEL_XP_THRESHOLD) * 100;

  return { state, addXP, completeLesson, learnCard, answerQuiz, setSpeechRate, level, levelXP, levelPct };
}
