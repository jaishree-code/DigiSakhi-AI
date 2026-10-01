import React from 'react';
import { Volume2, VolumeX, RotateCcw, ArrowRight, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language, TranslationData } from '../data/languages';
import { voiceManager } from '../utils/speech';
import { getUITranslation } from '../data/uiTranslations';

export interface AssistantResponseData {
  simpleExplanation: string;
  whatToDoNow: string;
  suggestedAction?: string;
  stepIndex?: number;
  safetyReminder?: string;
  detectedLanguage?: string;
  query?: string;
  fallbackUsed?: boolean;
}

interface AssistantResponseCardProps {
  response: AssistantResponseData;
  currentLanguage: Language;
  t: TranslationData;
  onNavigateToStep: (stepIndex: number) => void;
  onOpenOfficialWebsite: () => void;
  onExplainAgain: () => void;
  highContrast: boolean;
  largeText: boolean;
  slowVoice: boolean;
}

export const AssistantResponseCard: React.FC<AssistantResponseCardProps> = ({
  response,
  currentLanguage,
  t,
  onNavigateToStep,
  onOpenOfficialWebsite,
  onExplainAgain,
  highContrast,
  largeText,
  slowVoice,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const ui = getUITranslation(currentLanguage.id);

  const handleSpeak = () => {
    if (isPlaying) {
      voiceManager.stopSpeaking();
      setIsPlaying(false);
      return;
    }

    const fullTextToRead = `${response.simpleExplanation}. ${response.whatToDoNow}. ${
      response.safetyReminder || ''
    }`;

    voiceManager.speak(
      fullTextToRead,
      currentLanguage.voiceCode,
      slowVoice,
      () => setIsPlaying(true),
      () => setIsPlaying(false)
    );
  };

  const handleStepAction = () => {
    if (response.suggestedAction === 'open_official_digilocker') {
      onOpenOfficialWebsite();
    } else if (response.stepIndex && response.stepIndex >= 1 && response.stepIndex <= 4) {
      onNavigateToStep(response.stepIndex);
    } else {
      onNavigateToStep(1);
    }
  };

  return (
    <section
      aria-label="DigiSakhi AI Explanation"
      className={`rounded-3xl p-6 sm:p-8 border-2 transition-all my-6 ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-xl'
          : 'bg-white border-amber-300 shadow-lg ring-4 ring-amber-100/60'
      }`}
    >
      {/* Response Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-stone-200">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <h3
              className={`font-black tracking-tight ${
                largeText ? 'text-xl' : 'text-lg'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {t.digiSakhiGuideBadge}
            </h3>
            {response.query && (
              <p className="text-xs text-stone-500 italic">
                "{response.query}"
              </p>
            )}
          </div>
        </div>

        {/* Audio Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSpeak}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
              isPlaying
                ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                : highContrast
                ? 'bg-amber-400 text-black border border-amber-300 hover:bg-amber-300'
                : 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
            }`}
            aria-label={isPlaying ? 'Stop reading' : t.readAloud}
          >
            {isPlaying ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>{ui.guidedFlow.stop}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-700" />
                <span>{t.readAloud}</span>
              </>
            )}
          </button>

          <button
            onClick={onExplainAgain}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all min-h-[44px] ${
              highContrast
                ? 'bg-stone-900 text-stone-200 border-stone-700 hover:bg-stone-800'
                : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
            aria-label={t.explainAgain}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.explainAgain}</span>
            <span className="sm:hidden">{t.sayItAgain}</span>
          </button>
        </div>
      </div>

      {/* 💡 Simple explanation block */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-lg">💡</span>
          <span
            className={`font-bold uppercase tracking-wider text-xs ${
              highContrast ? 'text-amber-400' : 'text-amber-800'
            }`}
          >
            {t.simpleExplanation}
          </span>
        </div>
        <p
          className={`font-semibold leading-relaxed ${
            largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          } ${highContrast ? 'text-stone-100' : 'text-stone-900'}`}
        >
          {response.simpleExplanation}
        </p>
      </div>

      {/* 👉 What to do now block */}
      <div
        className={`p-4 rounded-2xl mb-5 border ${
          highContrast
            ? 'bg-stone-900 border-amber-400/80 text-stone-200'
            : 'bg-amber-50/70 border-amber-200 text-stone-900'
        }`}
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg">👉</span>
          <span
            className={`font-bold uppercase tracking-wider text-xs ${
              highContrast ? 'text-amber-300' : 'text-amber-900'
            }`}
          >
            {t.whatToDoNow}
          </span>
        </div>
        <p
          className={`font-medium ${
            largeText ? 'text-lg' : 'text-base'
          }`}
        >
          {response.whatToDoNow}
        </p>
      </div>

      {/* Optional Safety Reminder if mentioned */}
      {response.safetyReminder && (
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs font-semibold mb-5">
          <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
          <span>{response.safetyReminder}</span>
        </div>
      )}

      {/* CTA Button to jump into the guided step */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          onClick={handleStepAction}
          className={`flex-1 min-w-[220px] min-h-[52px] py-3 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md ${
            highContrast
              ? 'bg-amber-400 text-black border-2 border-amber-300 hover:bg-amber-300'
              : 'bg-stone-900 text-white hover:bg-stone-800'
          }`}
        >
          <span>
            {response.suggestedAction === 'open_official_digilocker'
              ? t.steps.step1.btn
              : `${ui.coreJourney.guideTitle}: ${t.stepIndicator(response.stepIndex || 1, 4)}`}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
