import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Keyboard, Send, Sparkles, Volume2, AlertCircle, RefreshCw } from 'lucide-react';
import { Language, TranslationData } from '../data/languages';
import { isSpeechRecognitionSupported, voiceManager } from '../utils/speech';
import { getUITranslation } from '../data/uiTranslations';

interface VoiceAssistantInputProps {
  currentLanguage: Language;
  t: TranslationData;
  onSubmitQuery: (query: string) => void;
  isLoading: boolean;
  highContrast: boolean;
  largeText: boolean;
  readAloudAll: boolean;
  slowVoice: boolean;
  onSelectStepIndex?: (index: number) => void;
}

export const VoiceAssistantInput: React.FC<VoiceAssistantInputProps> = ({
  currentLanguage,
  t,
  onSubmitQuery,
  isLoading,
  highContrast,
  largeText,
  readAloudAll,
  slowVoice,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [liveTranscript, setLiveTranscript] = useState('');

  const ui = getUITranslation(currentLanguage.id);
  const speechSupported = isSpeechRecognitionSupported();

  // If SpeechRecognition is unsupported in this environment, default to text input cleanly
  useEffect(() => {
    if (!speechSupported) {
      setShowTextInput(true);
    }
  }, [speechSupported]);

  const handleStartListening = () => {
    setSpeechError(null);
    setLiveTranscript('');

    if (!speechSupported) {
      setSpeechError(ui.voiceInput.unsupportedError);
      setShowTextInput(true);
      return;
    }

    const started = voiceManager.startListening(
      currentLanguage.voiceCode,
      (text: string, isFinal: boolean) => {
        setLiveTranscript(text);
        if (isFinal && text.trim()) {
          setIsListening(false);
          onSubmitQuery(text.trim());
        }
      },
      (err: string) => {
        setIsListening(false);
        // Show friendly fallback in selected language
        if (err.includes('not-allowed') || err.includes('permission')) {
          setSpeechError(ui.voiceInput.permissionError);
        } else {
          setSpeechError(ui.voiceInput.hearError);
        }
        setShowTextInput(true);
      },
      () => {
        setIsListening(false);
      }
    );

    if (started) {
      setIsListening(true);
    }
  };

  const handleStopListening = () => {
    voiceManager.stopListening();
    setIsListening(false);
    if (liveTranscript.trim()) {
      onSubmitQuery(liveTranscript.trim());
    }
  };

  const handleTextSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (textInput.trim() && !isLoading) {
      onSubmitQuery(textInput.trim());
      setTextInput('');
    }
  };

  const handleExampleClick = (example: string) => {
    onSubmitQuery(example);
    if (readAloudAll) {
      voiceManager.speak(example, currentLanguage.voiceCode, slowVoice);
    }
  };

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 border transition-all ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-xl'
          : 'bg-gradient-to-b from-white to-amber-50/40 border-stone-200/90 shadow-sm'
      }`}
    >
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2
          className={`font-black tracking-tight mb-2 ${
            largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
        >
          {t.mainQuestion}
        </h2>
        <p
          className={`text-stone-600 font-medium ${
            largeText ? 'text-base' : 'text-sm'
          } ${highContrast ? 'text-stone-300' : 'text-stone-600'}`}
        >
          {t.speakPrompt}
        </p>
      </div>

      {/* Main Interaction Area: Voice Hero Button & Toggle */}
      <div className="flex flex-col items-center justify-center my-6">
        {isListening ? (
          <div className="flex flex-col items-center animate-fade-in">
            {/* Animated Listening Pulse Orb */}
            <div className="relative flex items-center justify-center mb-4">
              <div className="absolute w-28 h-28 rounded-full bg-amber-500/20 animate-ping" />
              <div className="absolute w-24 h-24 rounded-full bg-amber-500/30 animate-pulse" />
              <button
                onClick={handleStopListening}
                className="relative z-10 w-20 h-20 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-lg hover:bg-amber-700 active:scale-95 transition-all"
                aria-label="Stop listening"
              >
                <Mic className="w-9 h-9 animate-bounce" />
              </button>
            </div>
            <p className="font-bold text-amber-600 animate-pulse text-base mb-1">
              {t.listening}
            </p>
            {liveTranscript && (
              <p
                className={`text-center font-medium italic mt-2 px-4 py-2 rounded-xl bg-amber-100/70 text-amber-900 max-w-md ${
                  largeText ? 'text-base' : 'text-sm'
                }`}
              >
                "{liveTranscript}"
              </p>
            )}
            <button
              onClick={handleStopListening}
              className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-stone-200 hover:bg-stone-300 text-stone-800 transition-colors"
            >
              {ui.voiceInput.finishAndAsk}
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Large primary Action Buttons: Speak & Type */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
              <button
                onClick={handleStartListening}
                disabled={isLoading}
                className={`flex-1 min-w-[150px] min-h-[58px] py-3.5 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-md ${
                  highContrast
                    ? 'bg-amber-400 text-black border-2 border-amber-300 hover:bg-amber-300'
                    : 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/20'
                }`}
              >
                <Mic className="w-6 h-6 stroke-[2.5]" />
                <span>{t.speakButton}</span>
              </button>

              <button
                onClick={() => setShowTextInput(!showTextInput)}
                className={`min-w-[130px] min-h-[58px] py-3.5 px-5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 border-2 transition-all active:scale-[0.98] ${
                  showTextInput
                    ? highContrast
                      ? 'bg-stone-800 text-amber-300 border-amber-400'
                      : 'bg-stone-100 text-stone-900 border-stone-400'
                    : highContrast
                    ? 'bg-stone-900 text-stone-200 border-stone-700 hover:border-amber-400'
                    : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                <Keyboard className="w-5 h-5 text-stone-500" />
                <span>{t.typeButton}</span>
              </button>
            </div>

            {/* Speech error indicator with gentle text fallback */}
            {speechError && (
              <div className="flex items-center gap-2 text-xs font-medium text-amber-800 bg-amber-100/90 border border-amber-300 px-3 py-2 rounded-xl mt-2 max-w-md">
                <AlertCircle className="w-4 h-4 shrink-0 text-amber-700" />
                <span>{speechError}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Friendly Text Input Fallback */}
      {showTextInput && (
        <form
          onSubmit={handleTextSubmit}
          className="max-w-xl mx-auto mt-4 mb-6 transition-all"
        >
          <div
            className={`flex items-center gap-2 p-1.5 rounded-2xl border-2 shadow-xs ${
              highContrast
                ? 'bg-stone-900 border-amber-400'
                : 'bg-white border-amber-300 focus-within:border-amber-500'
            }`}
          >
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={t.typePromptPlaceholder}
              className={`w-full px-4 py-3 bg-transparent outline-none font-medium ${
                largeText ? 'text-lg' : 'text-base'
              } ${highContrast ? 'text-white placeholder:text-stone-400' : 'text-stone-900 placeholder:text-stone-400'}`}
            />
            <button
              type="submit"
              disabled={isLoading || !textInput.trim()}
              className={`px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-all active:scale-95 shrink-0 ${
                textInput.trim() && !isLoading
                  ? highContrast
                    ? 'bg-amber-400 text-black hover:bg-amber-300'
                    : 'bg-amber-600 text-white hover:bg-amber-700 shadow-xs'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <span>{t.askButton}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {/* Example Prompt Chips in Selected Language */}
      <div className="mt-6 pt-5 border-t border-stone-200/80">
        <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{ui.voiceInput.tryAsking} ({currentLanguage.nativeName}):</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {t.exampleQueries.map((example, idx) => (
            <button
              key={idx}
              onClick={() => handleExampleClick(example)}
              disabled={isLoading}
              className={`text-left px-3.5 py-2.5 rounded-xl border text-sm font-semibold transition-all active:scale-[0.98] ${
                highContrast
                  ? 'bg-stone-900 border-stone-700 text-stone-200 hover:border-amber-400 hover:bg-stone-800'
                  : 'bg-stone-50/80 border-stone-200 text-stone-800 hover:border-amber-400 hover:bg-amber-50/50'
              } ${largeText ? 'text-base' : 'text-sm'}`}
            >
              "{example}"
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
