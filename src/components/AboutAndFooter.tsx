import React from 'react';
import { ExternalLink, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { Language, TranslationData } from '../data/languages';
import { getUITranslation } from '../data/uiTranslations';

interface AboutAndFooterProps {
  currentLanguage: Language;
  t: TranslationData;
  highContrast: boolean;
  largeText: boolean;
}

export const AboutAndFooter: React.FC<AboutAndFooterProps> = ({
  currentLanguage,
  t,
  highContrast,
  largeText,
}) => {
  const ui = getUITranslation(currentLanguage.id);

  return (
    <footer
      id="about-section"
      className={`border-t transition-colors mt-16 pt-12 pb-16 ${
        highContrast
          ? 'bg-black text-stone-300 border-stone-800'
          : 'bg-stone-900 text-stone-300 border-stone-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {/* About DigiSakhi AI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                D
              </span>
              <span className="font-bold text-lg text-white tracking-tight">
                DigiSakhi AI
              </span>
            </div>
            <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
              {t.heroKicker}
            </p>
            <p className="text-sm text-stone-300 leading-relaxed font-normal">
              {t.aboutText}
            </p>
            <p className="text-xs text-stone-400 italic">
              {ui.aboutFooter.empathyQuote}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {ui.aboutFooter.resourcesTitle}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.digilocker.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>{ui.aboutFooter.officialDigiLocker}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.digilocker.gov.in/about/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>{ui.aboutFooter.faqTitle}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.india.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>{ui.aboutFooter.nationalPortal}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {ui.aboutFooter.civicIntegrityTitle}
            </h4>
            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 text-xs text-stone-300 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{ui.aboutFooter.zeroStorageTitle}</span>
              </div>
              <p>
                {ui.aboutFooter.zeroStorageDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Civic Disclaimer & Independence */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-stone-400">
          <div>
            <p className="font-semibold text-stone-200">
              {t.footerNote}
            </p>
            <p className="mt-1 text-[11px] text-stone-400">
              {ui.aboutFooter.civicDisclaimer}
            </p>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-stone-400">
            <span>{ui.aboutFooter.builtWithCare}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
