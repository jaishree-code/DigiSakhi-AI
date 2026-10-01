import React from 'react';
import { GraduationCap, ShieldCheck, FileText, ArrowRight, Sparkles } from 'lucide-react';
import { PRACTICE_DATA, SAFETY_DATA } from '../data/practiceAndSafetyData';
import { getUITranslation } from '../data/uiTranslations';

interface CoreJourneyCardsProps {
  languageId: string;
  onSelectPractice: () => void;
  onSelectSafety: () => void;
  onSelectDigiLocker: () => void;
  highContrast: boolean;
  largeText: boolean;
}

export const CoreJourneyCards: React.FC<CoreJourneyCardsProps> = ({
  languageId,
  onSelectPractice,
  onSelectSafety,
  onSelectDigiLocker,
  highContrast,
  largeText,
}) => {
  const pData = PRACTICE_DATA[languageId] || PRACTICE_DATA.en;
  const sData = SAFETY_DATA[languageId] || SAFETY_DATA.en;
  const ui = getUITranslation(languageId);

  return (
    <section
      aria-label="Core Navigation Paths"
      className="my-8"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3
            className={`font-black tracking-tight ${
              largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
          >
            {ui.coreJourney.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 font-medium">
            {ui.coreJourney.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. 🎓 Practice First */}
        <button
          onClick={onSelectPractice}
          className={`p-6 rounded-3xl border-2 text-left transition-all flex flex-col justify-between group active:scale-[0.98] relative overflow-hidden ${
            highContrast
              ? 'bg-stone-900 border-amber-400 text-stone-100 hover:bg-stone-850'
              : 'bg-gradient-to-b from-amber-50/80 to-white border-amber-300 hover:border-amber-500 hover:shadow-lg ring-2 ring-amber-100'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-2xl shadow-sm group-hover:scale-105 transition-transform">
                🎓
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                {ui.coreJourney.practiceBadge}
              </span>
            </div>

            <div>
              <h4
                className={`font-black tracking-tight mb-1 ${
                  largeText ? 'text-xl' : 'text-lg'
                } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
              >
                {pData.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                {pData.subtitle}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-amber-100/60 border border-amber-200/80 text-[11px] text-amber-900 font-semibold">
              {ui.coreJourney.practiceNote}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mt-5 pt-3 border-t border-amber-200/60 group-hover:translate-x-1 transition-transform">
            <span>{ui.coreJourney.practiceBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>

        {/* 2. 🛡️ Stay Safe */}
        <button
          onClick={onSelectSafety}
          className={`p-6 rounded-3xl border-2 text-left transition-all flex flex-col justify-between group active:scale-[0.98] ${
            highContrast
              ? 'bg-stone-900 border-stone-700 text-stone-100 hover:border-amber-400 hover:bg-stone-850'
              : 'bg-gradient-to-b from-emerald-50/60 to-white border-emerald-300 hover:border-emerald-500 hover:shadow-lg'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm group-hover:scale-105 transition-transform">
                🛡️
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                {ui.coreJourney.safetyBadge}
              </span>
            </div>

            <div>
              <h4
                className={`font-black tracking-tight mb-1 ${
                  largeText ? 'text-xl' : 'text-lg'
                } ${highContrast ? 'text-emerald-300' : 'text-stone-900'}`}
              >
                {sData.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                {sData.subtitle}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-100/60 border border-emerald-200/80 text-[11px] text-emerald-900 font-semibold">
              {ui.coreJourney.safetyNote}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mt-5 pt-3 border-t border-emerald-200/60 group-hover:translate-x-1 transition-transform">
            <span>{ui.coreJourney.safetyBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>

        {/* 3. 📄 Use DigiLocker */}
        <button
          onClick={onSelectDigiLocker}
          className={`p-6 rounded-3xl border-2 text-left transition-all flex flex-col justify-between group active:scale-[0.98] ${
            highContrast
              ? 'bg-stone-900 border-stone-700 text-stone-100 hover:border-amber-400 hover:bg-stone-850'
              : 'bg-gradient-to-b from-stone-50 to-white border-stone-300 hover:border-stone-500 hover:shadow-lg'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="w-12 h-12 rounded-2xl bg-stone-800 text-white flex items-center justify-center font-bold text-2xl shadow-sm group-hover:scale-105 transition-transform">
                📄
              </span>
              <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-300">
                {ui.coreJourney.guideBadge}
              </span>
            </div>

            <div>
              <h4
                className={`font-black tracking-tight mb-1 ${
                  largeText ? 'text-xl' : 'text-lg'
                } ${highContrast ? 'text-white' : 'text-stone-900'}`}
              >
                {ui.coreJourney.guideTitle}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
                {ui.coreJourney.guideDesc}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200 text-[11px] text-stone-800 font-semibold">
              {ui.coreJourney.guideNote}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-stone-800 mt-5 pt-3 border-t border-stone-200 group-hover:translate-x-1 transition-transform">
            <span>{ui.coreJourney.guideBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    </section>
  );
};
