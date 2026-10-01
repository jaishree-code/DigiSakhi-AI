// Speech Recognition and Synthesis utility for Indian languages

export interface SpeechRecognitionResultState {
  transcript: string;
  isFinal: boolean;
}

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
}

export function isSpeechSynthesisSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window;
}

export class VoiceManager {
  private recognition: any = null;
  private isListening: boolean = false;
  private onResultCallback?: (text: string, isFinal: boolean) => void;
  private onErrorCallback?: (err: string) => void;
  private onEndCallback?: () => void;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.maxAlternatives = 1;

        this.recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            const piece = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += piece;
            } else {
              interimTranscript += piece;
            }
          }

          const text = finalTranscript || interimTranscript;
          if (this.onResultCallback && text) {
            this.onResultCallback(text, Boolean(finalTranscript));
          }
        };

        this.recognition.onerror = (event: any) => {
          this.isListening = false;
          if (this.onErrorCallback) {
            this.onErrorCallback(event.error || 'Speech recognition error');
          }
        };

        this.recognition.onend = () => {
          this.isListening = false;
          if (this.onEndCallback) {
            this.onEndCallback();
          }
        };
      }
    }
  }

  public startListening(
    langCode: string,
    onResult: (text: string, isFinal: boolean) => void,
    onError: (err: string) => void,
    onEnd: () => void
  ): boolean {
    if (!this.recognition) {
      onError('Speech recognition not supported in this browser');
      return false;
    }

    try {
      if (this.isListening) {
        this.recognition.stop();
      }
      this.recognition.lang = langCode;
      this.onResultCallback = onResult;
      this.onErrorCallback = onError;
      this.onEndCallback = onEnd;
      this.recognition.start();
      this.isListening = true;
      return true;
    } catch (err: any) {
      this.isListening = false;
      onError(err?.message || 'Could not start microphone');
      return false;
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // ignore
      }
      this.isListening = false;
    }
  }

  public speak(
    text: string,
    langCode: string,
    slowRate: boolean = false,
    onStart?: () => void,
    onEnd?: () => void
  ) {
    if (!isSpeechSynthesisSupported()) return;

    try {
      window.speechSynthesis.cancel(); // Stop any ongoing speech

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = langCode;
      utterance.rate = slowRate ? 0.78 : 0.95; // Clear natural Indian speech cadence
      utterance.pitch = 1.05; // Gentle, warm tone

      // Try to find matching voice for target language
      const voices = window.speechSynthesis.getVoices();
      const langPrefix = langCode.split('-')[0].toLowerCase();
      const matchingVoice = voices.find(
        (v) =>
          v.lang.toLowerCase() === langCode.toLowerCase() ||
          v.lang.toLowerCase().startsWith(langPrefix)
      );

      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      if (onStart) utterance.onstart = onStart;
      if (onEnd) utterance.onend = onEnd;
      utterance.onerror = () => {
        if (onEnd) onEnd();
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis error:', err);
      if (onEnd) onEnd();
    }
  }

  public stopSpeaking() {
    if (isSpeechSynthesisSupported()) {
      window.speechSynthesis.cancel();
    }
  }
}

export const voiceManager = new VoiceManager();
