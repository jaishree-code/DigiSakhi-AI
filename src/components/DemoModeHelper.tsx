import React from 'react';
import { PlayCircle, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { LANGUAGES, Language } from '../data/languages';

interface DemoModeHelperProps {
  onSimulateVoiceQuery: (query: string, languageId: string) => void;
  onOpenStep: (step: number) => void;
  onOpenPractice: () => void;
  onOpenSafetyCheck: () => void;
  highContrast: boolean;
}

export const DemoModeHelper: React.FC<DemoModeHelperProps> = ({
  onSimulateVoiceQuery,
  onOpenStep,
  onOpenPractice,
  onOpenSafetyCheck,
  highContrast,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all p-4 mb-6 ${
        highContrast
          ? 'bg-stone-900 border-amber-400 text-stone-100'
          : 'bg-amber-50/80 border-amber-300 text-stone-900'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Quick Trial & Evaluation Mode
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xs font-bold text-amber-800 underline hover:text-amber-950 p-1"
        >
          {isOpen ? 'Hide Options' : 'Show 1-Click Tests'}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-3 border-t border-amber-200/80 space-y-3">
          <p className="text-xs text-stone-600">
            Instantly test DigiSakhi AI's multilingual natural language pipeline without needing a microphone:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Simulation 1: Tamil */}
            <button
              onClick={() =>
                onSimulateVoiceQuery('எனக்கு டிஜிலாக்கர் பயன்படுத்த வேண்டும்', 'ta')
              }
              className="p-3 rounded-xl bg-white border border-amber-200 text-left hover:border-amber-400 hover:shadow-xs transition-all active:scale-[0.98]"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-800 mb-1">
                <span>1. Tamil Voice Query</span>
                <span>தமிழ்</span>
              </div>
              <p className="text-xs text-stone-700 italic truncate">
                "எனக்கு டிஜிலாக்கர் பயன்படுத்த வேண்டும்"
              </p>
              <span className="text-[10px] text-stone-500 block mt-1">
                → Intent understood → Responds in Tamil
              </span>
            </button>

            {/* Simulation 2: Hindi */}
            <button
              onClick={() =>
                onSimulateVoiceQuery('मेरा 10वीं का सर्टिफिकेट कैसे मिलेगा?', 'hi')
              }
              className="p-3 rounded-xl bg-white border border-amber-200 text-left hover:border-amber-400 hover:shadow-xs transition-all active:scale-[0.98]"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-800 mb-1">
                <span>2. Hindi Query</span>
                <span>हिन्दी</span>
              </div>
              <p className="text-xs text-stone-700 italic truncate">
                "मेरा 10वीं का सर्टिफिकेट कैसे मिलेगा?"
              </p>
              <span className="text-[10px] text-stone-500 block mt-1">
                → Responds in Hindi → Step 3
              </span>
            </button>

            {/* Simulation 3: Practice First Feature */}
            <button
              onClick={onOpenPractice}
              className="p-3 rounded-xl bg-white border border-amber-300 text-left hover:border-amber-500 hover:shadow-xs transition-all active:scale-[0.98]"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-1">
                <span>3. Practice First</span>
                <span>🎓 Demo</span>
              </div>
              <p className="text-xs text-stone-700 font-medium truncate">
                Safe Simulated DigiLocker
              </p>
              <span className="text-[10px] text-stone-500 block mt-1">
                → 4-Step Interactive Training
              </span>
            </button>

            {/* Simulation 4: Stay Safe Quick Check */}
            <button
              onClick={onOpenSafetyCheck}
              className="p-3 rounded-xl bg-white border border-emerald-300 text-left hover:border-emerald-500 hover:shadow-xs transition-all active:scale-[0.98]"
            >
              <div className="flex items-center justify-between text-xs font-bold text-emerald-800 mb-1">
                <span>4. Scam Protection</span>
                <span>🛡️ Safety</span>
              </div>
              <p className="text-xs text-stone-700 font-medium truncate">
                “Is this safe?” Quick Check
              </p>
              <span className="text-[10px] text-stone-500 block mt-1">
                → 4 Golden Rules & OTP warning
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
