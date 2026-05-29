import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Square, Volume2 } from 'lucide-react';

const DAILY_LIMIT = 10;
const USAGE_KEY = 'pronunciation_rater_usage';

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function getUsage() {
  const raw = localStorage.getItem(USAGE_KEY);
  if (!raw) return { date: getToday(), count: 0 };
  try {
    const parsed = JSON.parse(raw);
    if (parsed.date === getToday()) return parsed;
    return { date: getToday(), count: 0 };
  } catch {
    return { date: getToday(), count: 0 };
  }
}

function setUsage(count) {
  localStorage.setItem(USAGE_KEY, JSON.stringify({ date: getToday(), count }));
}

// Token helpers (runtime-only; do NOT commit tokens)
function getToken() {
  try {
    if (typeof window !== 'undefined' && window.__HF_TOKEN) return window.__HF_TOKEN;
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_HF_TOKEN) {
      return import.meta.env.VITE_HF_TOKEN;
    }
    const s = sessionStorage.getItem('PR_HF_TOKEN');
    if (s) return s;
    const l = localStorage.getItem('PR_HF_TOKEN');
    if (l) return l;
  } catch (e) {
    // ignore
  }
  return null;
}

function setTokenRuntime(token, persistent = false) {
  try {
    sessionStorage.setItem('PR_HF_TOKEN', token);
    if (persistent) localStorage.setItem('PR_HF_TOKEN', token);
    return true;
  } catch (e) {
    return false;
  }
}

function clearTokenRuntime() {
  try {
    sessionStorage.removeItem('PR_HF_TOKEN');
    localStorage.removeItem('PR_HF_TOKEN');
    if (typeof window !== 'undefined') delete window.__HF_TOKEN;
  } catch (e) {}
}

export default function PronunciationRater({}) {
  const [usage, setUsageState] = useState(getUsage());
  const [status, setStatus] = useState('Ready to record.');
  const [remaining, setRemaining] = useState(DAILY_LIMIT - usage.count);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [frenchText, setFrenchText] = useState('Bonjour, comment vous appelez-vous ? Je m\'appelle Marie et j\'habite à Paris depuis cinq ans.');
  const [audioBlob, setAudioBlob] = useState(null);
  const [transcript, setTranscript] = useState('');
  const [scores, setScores] = useState({ pronunciation: null, fluency: null, rhythm: null });
  const [tokenConfigured, setTokenConfigured] = useState(!!getToken());
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    setTokenConfigured(!!getToken());
  }, []);

  function incrementUsage() {
    const newCount = usage.count + 1;
    setUsage(newCount);
    setUsageState({ date: getToday(), count: newCount });
    setRemaining(DAILY_LIMIT - newCount);
  }

  async function startRecord() {
    setStatus('Requesting microphone...');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];
      setAudioBlob(null);
      setTranscript('');
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: mimeType });
        setAudioBlob(blob);
        stream.getTracks().forEach((t) => t.stop());
        setStatus('Recording saved. Ready to analyse.');
      };
      mediaRecorder.start();
      setIsRecording(true);
      setStatus('Recording... speak clearly.');
    } catch (e) {
      setStatus('Microphone access denied. Allow it in your browser settings.');
    }
  }

  function stopRecord() {
    setIsRecording(false);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  }

  async function analyseIt() {
    const token = getToken();
    if (!token) {
      setStatus('No HuggingFace token configured. Click "Set token" to paste it at runtime.');
      return;
    }
    if (!audioBlob) {
      setStatus('No recording found.');
      return;
    }
    if (remaining <= 0) {
      setStatus('Daily limit reached. Come back tomorrow!');
      return;
    }
    setIsLoading(true);
    setStatus('Sending audio to HuggingFace...');
    incrementUsage();
    // Simulated response for now
    setTimeout(() => {
      setScores({ pronunciation: 8, fluency: 7, rhythm: 6 });
      setFeedback('Great pronunciation! Try to improve your rhythm for a more natural flow.');
      setIsLoading(false);
      setStatus('Done! Record again to try once more.');
    }, 2000);
  }

  function handleSetToken() {
    const t = window.prompt('Paste your HuggingFace token (stored in sessionStorage at runtime only):');
    if (!t) return;
    const ok = setTokenRuntime(t.trim(), false);
    if (ok) {
      setTokenConfigured(true);
      setStatus('Token saved in session.');
    } else {
      setStatus('Failed to save token.');
    }
  }

  function handleClearToken() {
    clearTokenRuntime();
    setTokenConfigured(false);
    setStatus('Token cleared.');
  }

  return (
    <div className="view-pad">
      {/* Header */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
        <h1 className="text-5xl font-bold font-display mb-2">Pronunciation Rater</h1>
        <p className="text-lg text-text-muted">Record yourself speaking French and get instant AI-powered feedback.</p>
      </motion.section>

      {/* Token & Usage Bar */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-8 p-4 bg-surface rounded-lg border border-border flex items-center justify-between gap-4">
        <div>
          <span className="text-sm text-text-muted">Uses left today: </span>
          <span className="font-semibold text-accent ml-1">
            {remaining} / {DAILY_LIMIT}
          </span>
          <span className="text-sm text-text-muted ml-4">Token: </span>
          <span className={tokenConfigured ? 'font-semibold text-teal-light' : 'font-semibold text-red-500'}>
            {tokenConfigured ? 'configured' : 'not set'}
          </span>
        </div>
        <div className="flex gap-2">
          <button onClick={handleSetToken} className="px-4 py-2 text-sm bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors">
            Set token
          </button>
          <button onClick={handleClearToken} className="px-4 py-2 text-sm bg-surface-2 text-text border border-border rounded-lg hover:bg-border-hover transition-colors">
            Clear
          </button>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Input & Recording */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
          {/* French Text Card */}
          <div className="bg-surface rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold uppercase tracking-wide text-text-muted">French text to practise</label>
            </div>
            <textarea
              value={frenchText}
              onChange={(e) => setFrenchText(e.target.value)}
              className="w-full min-h-24 bg-surface-2 border border-border rounded-lg p-4 text-text placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
              placeholder="Enter French text..."
            />
          </div>

          {/* Recording Card */}
          <div className="bg-surface rounded-2xl border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold uppercase tracking-wide text-text-muted">Your recording</label>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={isRecording ? stopRecord : startRecord}
                disabled={isLoading || remaining <= 0}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-accent text-white hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                {isRecording ? (
                  <>
                    <Square size={18} />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic size={18} />
                    Start Recording
                  </>
                )}
              </button>
            </div>
            {audioBlob && (
              <div className="mt-4 p-4 bg-surface-2 rounded-lg border border-border">
                <audio controls src={URL.createObjectURL(audioBlob)} className="w-full" />
              </div>
            )}
          </div>

          {/* Analyse Button */}
          <button
            onClick={analyseIt}
            disabled={isLoading || !audioBlob || remaining <= 0 || !tokenConfigured}
            className="w-full px-6 py-4 bg-teal-light text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {isLoading ? 'Analysing...' : 'Analyse Pronunciation'}
          </button>
        </motion.div>

        {/* Right Column: Feedback & Results */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
          {/* Status / Placeholder */}
          {!feedback && (
            <div className="bg-surface rounded-2xl border border-border p-8 text-center">
              <Volume2 size={40} className="mx-auto mb-4 text-text-muted opacity-50" />
              <p className="text-text-muted text-sm leading-relaxed">{status}</p>
            </div>
          )}

          {/* Results */}
          {feedback && (
            <>
              {/* Scores Grid */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Pronunciation', key: 'pronunciation' },
                  { label: 'Fluency', key: 'fluency' },
                  { label: 'Rhythm', key: 'rhythm' },
                ].map((item) => (
                  <div key={item.key} className="bg-surface rounded-lg border border-border p-4 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{scores[item.key]}</div>
                    <div className="text-xs uppercase tracking-wide text-text-muted">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Feedback Text */}
              <div className="bg-surface rounded-2xl border border-border p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Feedback</div>
                <p className="text-text leading-relaxed">{feedback}</p>
              </div>

              {/* Transcript */}
              {transcript && (
                <div className="bg-surface rounded-2xl border border-border p-6">
                  <div className="text-sm font-semibold uppercase tracking-wide text-text-muted mb-3">Transcript</div>
                  <p className="text-text-muted text-sm">{transcript}</p>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
