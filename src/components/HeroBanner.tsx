import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Mic } from 'lucide-react';
import { Language, TranslationData } from '../data/languages';
import { HERO_GUIDE_IMAGE } from '../assets/images';
import { getUITranslation } from '../data/uiTranslations';

interface HeroBannerProps {
  currentLanguage: Language;
  t: TranslationData;
  onStartGuide: () => void;
  onStartPractice: () => void;
  onScrollToVoice: () => void;
  highContrast: boolean;
  largeText: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentLanguage,
  t,
  onStartGuide,
  onStartPractice,
  onScrollToVoice,
  highContrast,
  largeText,
}) => {
  const ui = getUITranslation(currentLanguage.id);

  return (
    <section
      aria-label="Welcome to DigiSakhi AI"
      className={`relative overflow-hidden rounded-3xl border-2 transition-all p-6 sm:p-10 mb-8 ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-xl'
          : 'bg-gradient-to-br from-amber-500/10 via-amber-100/30 to-amber-50/10 border-amber-200 shadow-sm'
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Mission, Title & Subtitles */}
        <div className="lg:col-span-7 space-y-4">
          {/* Feature Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              {t.heroKicker}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {ui.hero.officialAssistance}
            </span>
          </div>

          <div>
            <h1
              className={`font-black tracking-tight leading-tight ${
                largeText ? 'text-3xl sm:text-5xl' : 'text-xl sm:text-4xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {t.appName}
            </h1>
            <p
              className={`font-serif italic mt-1 font-bold text-amber-800 ${
                largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              }`}
            >
              “{t.tagline}”
            </p>
          </div>

          <p
            className={`font-medium leading-relaxed ${
              largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            } ${highContrast ? 'text-stone-200' : 'text-stone-700'}`}
          >
            {t.subtitle}
          </p>

          {/* Core Philosophy Banner */}
          <div
            className={`p-4 rounded-2xl border-l-4 ${
              highContrast
                ? 'bg-stone-900 border-amber-400 text-stone-300'
                : 'bg-white/80 border-amber-600 text-stone-800 shadow-xs'
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold italic text-stone-800">
              {ui.hero.civicQuote}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-bold text-amber-700 mt-2">
              {ui.hero.pillars.map((pillar, idx) => (
                <React.Fragment key={idx}>
                  <span>{pillar}</span>
                  {idx < ui.hero.pillars.length - 1 && <span>·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onStartPractice}
              className={`min-h-[52px] px-6 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2.5 transition-all active:scale-[0.98] shadow-md ${
                highContrast
                  ? 'bg-amber-400 text-black border-2 border-amber-300 hover:bg-amber-300'
                  : 'bg-amber-600 text-white hover:bg-amber-700 shadow-amber-600/20'
              }`}
            >
              <span>{ui.hero.practiceBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onStartGuide}
              className={`min-h-[52px] px-6 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm ${
                highContrast
                  ? 'bg-stone-900 text-stone-200 border-stone-700 hover:border-amber-400'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <span>{ui.hero.guideBtn}</span>
            </button>

            <button
              onClick={onScrollToVoice}
              className={`min-h-[52px] px-5 py-3.5 rounded-2xl font-bold text-base border-2 flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                highContrast
                  ? 'bg-stone-900 text-stone-200 border-stone-700 hover:border-amber-400'
                  : 'bg-white text-stone-800 border-stone-300 hover:bg-amber-50'
              }`}
            >
              <Mic className="w-4 h-4 text-amber-600" />
              <span>{ui.hero.voiceBtn}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Hero Illustration Asset */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-4/3 rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-lg bg-amber-100 flex items-center justify-center group">
            <img
              src={HERO_GUIDE_IMAGE}
              alt="Rural Indian woman using smartphone for digital government documents with dignity and independence"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Styled CSS fallback
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Fallback container with icon if image fails to render */}
            <div className="absolute inset-0 -z-1 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-tr from-amber-200 to-amber-100">
              <HeartHandshake className="w-12 h-12 text-amber-800 mb-2" />
              <p className="font-bold text-stone-800 text-sm">
                Empowering first-time digital citizens
              </p>
            </div>
            {/* Soft subtle scrim */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent text-white text-[11px] font-medium text-center">
              100% Free · Voice-Guided · Zero Technical Jargon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
