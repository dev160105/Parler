export function speak(text, rate = 1, lang = 'fr-FR') {
  if (!('speechSynthesis' in window)) return;
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}
