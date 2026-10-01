import React from 'react';
import { Check, Globe, Volume2 } from 'lucide-react';
import { LANGUAGES, Language } from '../data/languages';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  highContrast: boolean;
  largeText: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onSelectLanguage,
  highContrast,
  largeText,
}) => {
  const isTa = currentLanguage.id === 'ta';
  const isHi = currentLanguage.id === 'hi';

  const headingText = isTa
    ? 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்'
    : isHi
    ? 'अपनी भाषा चुनें'
    : 'Choose your language';

  const subtitleText = isTa
    ? '12 இந்திய மொழிகளில் குரல் மற்றும் எளிய வழிகாட்டல்'
    : isHi
    ? '12 भारतीय भाषाओं में आवाज़ और सरल मार्गदर्शन'
    : '12 Indian languages supported with voice & step-by-step guidance';

  const voiceReadyText = isTa
    ? 'குரல் தயார்'
    : isHi
    ? 'आवाज़ तैयार'
    : 'Voice Ready';

  return (
    <section
      aria-label="Language selection"
      className={`rounded-2xl p-5 border transition-all ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-md'
          : 'bg-white border-amber-200/80 shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h2
              className={`font-bold tracking-tight ${
                largeText ? 'text-lg' : 'text-base'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {headingText}
            </h2>
            <p className="text-xs text-stone-500 font-medium">
              {subtitleText}
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 font-semibold border border-amber-200">
          <Volume2 className="w-3.5 h-3.5 text-amber-600" />
          {voiceReadyText}
        </span>
      </div>

      {/* Grid of 12 Language Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {LANGUAGES.map((lang) => {
          const isSelected = currentLanguage.id === lang.id;
          return (
            <button
              key={lang.id}
              onClick={() => onSelectLanguage(lang)}
              className={`group relative text-left p-3 rounded-xl border-2 transition-all flex flex-col justify-between min-h-[64px] active:scale-[0.98] ${
                isSelected
                  ? highContrast
                    ? 'bg-amber-400 text-black border-amber-300 font-bold shadow-md'
                    : 'bg-amber-500 text-white border-amber-600 shadow-md'
                  : highContrast
                  ? 'bg-stone-900 text-stone-200 border-stone-800 hover:border-amber-400/60 hover:bg-stone-800'
                  : 'bg-stone-50/70 text-stone-800 border-stone-200 hover:border-amber-400 hover:bg-amber-50/40'
              }`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between w-full">
                <span
                  className={`font-bold leading-tight ${
                    largeText ? 'text-lg' : 'text-base'
                  }`}
                >
                  {lang.nativeName}
                </span>
                {isSelected && (
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      highContrast
                        ? 'bg-black text-amber-400'
                        : 'bg-white text-amber-700'
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                )}
              </div>
              <span
                className={`text-[11px] font-medium tracking-wide ${
                  isSelected
                    ? highContrast
                      ? 'text-black/80'
                      : 'text-amber-100'
                    : 'text-stone-500'
                }`}
              >
                {lang.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
