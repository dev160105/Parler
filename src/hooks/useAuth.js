import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [needsUsername, setNeedsUsername] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) loadProfile(u.id);
      else setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) loadProfile(u.id);
      else { setProfile(null); setNeedsUsername(false); setLoading(false); }
    });

    return () => subscription.unsubscribe();
  }, []);

  async function loadProfile(userId) {
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single();
    if (data) { setProfile(data); setNeedsUsername(false); }
    else setNeedsUsername(true);
    setLoading(false);
  }

  async function signUp(email, password, username) {
    const { data: existing } = await supabase
      .from('profiles').select('id').eq('username', username).single();
    if (existing) throw new Error('Username already taken');

    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;

    const { error: profileError } = await supabase
      .from('profiles').insert({ id: data.user.id, username });
    if (profileError) throw profileError;

    setProfile({ id: data.user.id, username });
    setNeedsUsername(false);
  }

  async function signIn(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    if (error) throw error;
  }

  async function setUsername(username) {
    if (!user) return;
    const { data: existing } = await supabase
      .from('profiles').select('id').eq('username', username).single();
    if (existing) throw new Error('Username already taken');

    const { error } = await supabase
      .from('profiles').insert({ id: user.id, username });
    if (error) throw error;

    setProfile({ id: user.id, username });
    setNeedsUsername(false);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }

  return { user, profile, loading, needsUsername, signUp, signIn, signInWithGoogle, setUsername, signOut };
}
