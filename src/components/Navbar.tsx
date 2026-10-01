import React from 'react';
import { Volume2, VolumeX, Eye, Globe, ShieldCheck } from 'lucide-react';
import { LANGUAGES, Language, TranslationData } from '../data/languages';
import { getUITranslation } from '../data/uiTranslations';

interface NavbarProps {
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  isSpeaking: boolean;
  onStopSpeaking: () => void;
  highContrast: boolean;
  onToggleHighContrast: () => void;
  largeText: boolean;
  onToggleLargeText: () => void;
  onNavigateHome: () => void;
  onOpenPractice: () => void;
  onOpenDigiLockerGuide: () => void;
  onScrollToSection: (id: string) => void;
  t: TranslationData;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onSelectLanguage,
  isSpeaking,
  onStopSpeaking,
  highContrast,
  onToggleHighContrast,
  largeText,
  onToggleLargeText,
  onNavigateHome,
  onOpenPractice,
  onOpenDigiLockerGuide,
  onScrollToSection,
  t,
}) => {
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  const ui = getUITranslation(currentLanguage.id);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors border-b ${
        highContrast
          ? 'bg-black text-amber-300 border-amber-400'
          : 'bg-white/95 backdrop-blur-md text-stone-900 border-stone-200 shadow-xs'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Zone 1: Single Wordmark */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 group"
          aria-label="DigiSakhi AI Home"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-500 flex items-center justify-center text-white font-bold text-base shadow-sm">
            D
          </span>
          <div className="flex flex-col">
            <span
              className={`font-black tracking-tight leading-none ${
                largeText ? 'text-2xl' : 'text-xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              DigiSakhi AI
            </span>
            <span
              className={`text-[10px] font-semibold tracking-wider uppercase ${
                highContrast ? 'text-amber-400' : 'text-amber-700'
              }`}
            >
              {currentLanguage.nativeName}
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
          <button
            onClick={onNavigateHome}
            className={`hover:text-amber-600 transition-colors ${
              highContrast ? 'text-stone-200 hover:text-amber-300' : 'text-stone-700'
            }`}
          >
            {ui.nav.home}
          </button>
          <button
            onClick={onOpenPractice}
            className={`hover:text-amber-600 transition-colors flex items-center gap-1.5 ${
              highContrast ? 'text-stone-200 hover:text-amber-300' : 'text-stone-700'
            }`}
          >
            <span>🎓</span>
            <span>{ui.nav.practice}</span>
          </button>
          <button
            onClick={() => onScrollToSection('stay-safe-section')}
            className={`hover:text-amber-600 transition-colors flex items-center gap-1.5 ${
              highContrast ? 'text-stone-200 hover:text-amber-300' : 'text-stone-700'
            }`}
          >
            <span>🛡️</span>
            <span>{ui.nav.safety}</span>
          </button>
          <button
            onClick={onOpenDigiLockerGuide}
            className={`hover:text-amber-600 transition-colors flex items-center gap-1.5 ${
              highContrast ? 'text-stone-200 hover:text-amber-300' : 'text-stone-700'
            }`}
          >
            {ui.nav.guide}
          </button>
          <button
            onClick={() => onScrollToSection('about-section')}
            className={`hover:text-amber-600 transition-colors ${
              highContrast ? 'text-stone-200 hover:text-amber-300' : 'text-stone-700'
            }`}
          >
            {ui.nav.about}
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Voice Stop + Language Quick Switch + Accessibility) */}
        <div className="flex items-center gap-2">
          {/* Active Voice Player indicator & stop button */}
          {isSpeaking && (
            <button
              onClick={onStopSpeaking}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 hover:bg-rose-200 animate-pulse border border-rose-300 focus:outline-none"
              title={ui.nav.stopVoice}
            >
              <VolumeX className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{ui.nav.stopVoice}</span>
            </button>
          )}

          {/* Large text toggle */}
          <button
            onClick={onToggleLargeText}
            className={`p-2 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center min-w-[36px] min-h-[36px] ${
              largeText
                ? 'bg-amber-600 text-white border-amber-700'
                : highContrast
                ? 'bg-stone-900 text-amber-300 border-amber-400 hover:bg-stone-800'
                : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
            title={ui.nav.largerText}
            aria-label={ui.nav.largerText}
          >
            A<span className="text-[10px]">A</span>
          </button>

          {/* High contrast toggle */}
          <button
            onClick={onToggleHighContrast}
            className={`p-2 rounded-lg text-xs border transition-colors flex items-center justify-center min-w-[36px] min-h-[36px] ${
              highContrast
                ? 'bg-amber-400 text-black border-amber-300 font-bold'
                : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
            title={ui.nav.highContrast}
            aria-label={ui.nav.highContrast}
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Language Selector Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-semibold transition-all shadow-xs ${
                highContrast
                  ? 'bg-amber-400 text-black border-amber-500 font-bold'
                  : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
              }`}
              aria-expanded={langMenuOpen}
              aria-label={ui.nav.selectLanguageTitle}
            >
              <Globe className="w-4 h-4 text-amber-700" />
              <span className="truncate max-w-[90px]">{currentLanguage.nativeName}</span>
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangMenuOpen(false)}
                />
                <div
                  className={`absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto rounded-xl shadow-xl z-50 p-2 border ${
                    highContrast
                      ? 'bg-stone-950 border-amber-400 text-stone-100'
                      : 'bg-white border-stone-200 text-stone-900'
                  }`}
                >
                  <div className="px-2 py-1 text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                    {ui.nav.selectLanguageTitle}
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => {
                          onSelectLanguage(lang);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-colors ${
                          currentLanguage.id === lang.id
                            ? highContrast
                              ? 'bg-amber-400 text-black font-bold'
                              : 'bg-amber-500 text-white font-semibold'
                            : highContrast
                            ? 'hover:bg-stone-900 text-stone-200'
                            : 'hover:bg-stone-100 text-stone-800'
                        }`}
                      >
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="text-xs opacity-75">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
