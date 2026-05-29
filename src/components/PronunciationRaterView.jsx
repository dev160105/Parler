import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic, Square, Volume2 } from 'lucide-react';
import { PRONUNCIATION_DAILY_LIMIT as DAILY_LIMIT, PRONUNCIATION_USAGE_KEY as USAGE_KEY } from '../lib/constants';

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

export default function PronunciationRater() {
  const [usage, setUsageState] = useState(getUsage());
  const [status, setStatus] = useState('Ready to record.');
  const [remaining, setRemaining] = useState(DAILY_LIMIT - usage.count);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [frenchText, setFrenchText] = useState('Bonjour, comment vous appelez-vous ? Je m\'appelle Marie et j\'habite à Paris depuis cinq ans.');
  const [audioBlob, setAudioBlob] = useState(null);
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
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="section-head-hero">
        <h1 className="view-title">Pronunciation Rater</h1>
        <p className="view-sub">Record yourself speaking French and get instant AI-powered feedback.</p>
      </motion.section>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="rater-toolbar">
        <div className="rater-meta">
          <span className="rater-meta-label">Uses left today</span>
          <span className="rater-meta-value">{remaining} / {DAILY_LIMIT}</span>
          <span className="rater-meta-label rater-meta-token">Token</span>
          <span className={`rater-meta-value ${tokenConfigured ? 'is-ok' : 'is-missing'}`}>
            {tokenConfigured ? 'configured' : 'not set'}
          </span>
        </div>
        <div className="rater-actions">
          <button onClick={handleSetToken} className="btn-primary small">Set token</button>
          <button onClick={handleClearToken} className="btn-ghost small">Clear</button>
        </div>
      </motion.div>

      <div className="rater-grid">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rater-col">
          <div className="rater-card">
            <div className="rater-card-header">
              <span className="rater-card-label">French text to practise</span>
            </div>
            <textarea
              value={frenchText}
              onChange={(e) => setFrenchText(e.target.value)}
              className="rater-textarea"
              placeholder="Enter French text..."
            />
          </div>

          <div className="rater-card">
            <div className="rater-card-header">
              <span className="rater-card-label">Your recording</span>
            </div>
            <div className="rater-record-row">
              <button
                onClick={isRecording ? stopRecord : startRecord}
                disabled={isLoading || remaining <= 0}
                className={`rater-record-btn ${isRecording ? 'is-recording' : ''}`}
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
              <div className="rater-audio">
                <audio controls src={URL.createObjectURL(audioBlob)} className="rater-audio-player" />
              </div>
            )}
          </div>

          <button
            onClick={analyseIt}
            disabled={isLoading || !audioBlob || remaining <= 0 || !tokenConfigured}
            className="btn-primary rater-analyse"
          >
            {isLoading ? 'Analysing...' : 'Analyse Pronunciation'}
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="rater-side">
          {!feedback && (
            <div className="rater-card rater-placeholder">
              <Volume2 size={40} className="rater-placeholder-icon" />
              <p className="rater-status">{status}</p>
            </div>
          )}

          {feedback && (
            <>
              <div className="rater-score-grid">
                {[
                  { label: 'Pronunciation', key: 'pronunciation' },
                  { label: 'Fluency', key: 'fluency' },
                  { label: 'Rhythm', key: 'rhythm' },
                ].map((item) => (
                  <div key={item.key} className="rater-score-card">
                    <div className="rater-score-value">{scores[item.key]}</div>
                    <div className="rater-score-label">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="rater-card">
                <div className="rater-card-label">Feedback</div>
                <p className="rater-feedback">{feedback}</p>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
