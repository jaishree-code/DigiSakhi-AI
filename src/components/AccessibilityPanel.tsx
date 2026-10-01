import React from 'react';
import { Type, Eye, Volume2, Turtle, Sliders, Check } from 'lucide-react';
import { TranslationData } from '../data/languages';

interface AccessibilityPanelProps {
  t: TranslationData;
  largeText: boolean;
  onToggleLargeText: () => void;
  highContrast: boolean;
  onToggleHighContrast: () => void;
  readAloudAll: boolean;
  onToggleReadAloudAll: () => void;
  slowVoice: boolean;
  onToggleSlowVoice: () => void;
}

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  t,
  largeText,
  onToggleLargeText,
  highContrast,
  onToggleHighContrast,
  readAloudAll,
  onToggleReadAloudAll,
  slowVoice,
  onToggleSlowVoice,
}) => {
  return (
    <div
      aria-label="Accessibility settings"
      className={`rounded-2xl p-4 sm:p-5 border transition-all ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100'
          : 'bg-stone-50 border-stone-200'
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Sliders className="w-4 h-4 text-amber-600" />
        <h3
          className={`font-bold text-sm tracking-tight ${
            highContrast ? 'text-amber-300' : 'text-stone-900'
          }`}
        >
          {t.accessibility.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {/* Toggle 1: Larger Text */}
        <button
          onClick={onToggleLargeText}
          className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all active:scale-[0.98] min-h-[48px] ${
            largeText
              ? highContrast
                ? 'bg-amber-400 text-black border-amber-300 font-bold'
                : 'bg-amber-500 text-white border-amber-600 font-semibold'
              : highContrast
              ? 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
              : 'bg-white border-stone-200 text-stone-800 hover:border-amber-300'
          }`}
          aria-pressed={largeText}
        >
          <div className="flex items-center gap-2">
            <span className="font-serif font-black text-base">A+</span>
            <span className="text-xs font-semibold">{t.accessibility.largeText}</span>
          </div>
          {largeText && <Check className="w-4 h-4" />}
        </button>

        {/* Toggle 2: High Contrast */}
        <button
          onClick={onToggleHighContrast}
          className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all active:scale-[0.98] min-h-[48px] ${
            highContrast
              ? 'bg-amber-400 text-black border-amber-300 font-bold'
              : 'bg-white border-stone-200 text-stone-800 hover:border-amber-300'
          }`}
          aria-pressed={highContrast}
        >
          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-semibold">{t.accessibility.highContrast}</span>
          </div>
          {highContrast && <Check className="w-4 h-4" />}
        </button>

        {/* Toggle 3: Read Everything Aloud */}
        <button
          onClick={onToggleReadAloudAll}
          className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all active:scale-[0.98] min-h-[48px] ${
            readAloudAll
              ? highContrast
                ? 'bg-amber-400 text-black border-amber-300 font-bold'
                : 'bg-amber-500 text-white border-amber-600 font-semibold'
              : highContrast
              ? 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
              : 'bg-white border-stone-200 text-stone-800 hover:border-amber-300'
          }`}
          aria-pressed={readAloudAll}
        >
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-semibold">{t.accessibility.readAloudAll}</span>
          </div>
          {readAloudAll && <Check className="w-4 h-4" />}
        </button>

        {/* Toggle 4: Slow Voice Rate */}
        <button
          onClick={onToggleSlowVoice}
          className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all active:scale-[0.98] min-h-[48px] ${
            slowVoice
              ? highContrast
                ? 'bg-amber-400 text-black border-amber-300 font-bold'
                : 'bg-amber-500 text-white border-amber-600 font-semibold'
              : highContrast
              ? 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
              : 'bg-white border-stone-200 text-stone-800 hover:border-amber-300'
          }`}
          aria-pressed={slowVoice}
        >
          <div className="flex items-center gap-2">
            <Turtle className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-semibold">{t.accessibility.slowVoice}</span>
          </div>
          {slowVoice && <Check className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
