import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  Key,
  Smartphone,
  Globe,
  ExternalLink,
  AlertOctagon,
  CheckCircle2,
  HelpCircle,
  Volume2,
  VolumeX,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Language } from '../data/languages';
import { SAFETY_DATA, SafetyData } from '../data/practiceAndSafetyData';
import { voiceManager } from '../utils/speech';
import { getUITranslation } from '../data/uiTranslations';

interface StaySafeSectionProps {
  currentLanguage: Language;
  highContrast: boolean;
  largeText: boolean;
  slowVoice: boolean;
  initiallyOpenQuickCheck?: boolean;
}

export const StaySafeSection: React.FC<StaySafeSectionProps> = ({
  currentLanguage,
  highContrast,
  largeText,
  slowVoice,
  initiallyOpenQuickCheck = false,
}) => {
  const sData: SafetyData = SAFETY_DATA[currentLanguage.id] || SAFETY_DATA.en;
  const ui = getUITranslation(currentLanguage.id);

  const [showHowToCheck, setShowHowToCheck] = useState<boolean>(false);
  const [showQuickCheck, setShowQuickCheck] = useState<boolean>(initiallyOpenQuickCheck);
  const [checklistAnswers, setChecklistAnswers] = useState<Record<string, boolean | null>>({});
  const [isPlayingVoice, setIsPlayingVoice] = useState<boolean>(false);

  const handleReadAloud = (textToRead: string) => {
    if (isPlayingVoice) {
      voiceManager.stopSpeaking();
      setIsPlayingVoice(false);
      return;
    }

    voiceManager.speak(
      textToRead,
      currentLanguage.voiceCode,
      slowVoice,
      () => setIsPlayingVoice(true),
      () => setIsPlayingVoice(false)
    );
  };

  const handleOpenOfficial = () => {
    window.open('https://www.digilocker.gov.in/', '_blank', 'noopener,noreferrer');
  };

  const handleToggleChecklist = (id: string, isYes: boolean) => {
    setChecklistAnswers((prev) => ({
      ...prev,
      [id]: isYes,
    }));
  };

  // Check if any danger item was answered with "Yes"
  // (q2: asked OTP? q3: asked password? q4: asked to send personal info?)
  const isDangerDetected =
    checklistAnswers['q2'] === true ||
    checklistAnswers['q3'] === true ||
    checklistAnswers['q4'] === true;

  const isOfficialSiteNo = checklistAnswers['q1'] === false;

  const allAnswered =
    checklistAnswers['q1'] !== undefined &&
    checklistAnswers['q2'] !== undefined &&
    checklistAnswers['q3'] !== undefined &&
    checklistAnswers['q4'] !== undefined;

  const fullRulesSpeech = `${sData.title}. ${sData.subtitle}. ${sData.rules
    .map((r) => `${r.rule}. ${r.detail}`)
    .join('. ')}`;

  return (
    <section
      id="stay-safe-section"
      aria-label="Digital Safety and Scam Protection"
      className={`rounded-3xl border-2 transition-all p-6 sm:p-8 my-8 ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-xl'
          : 'bg-white border-amber-200/90 shadow-sm'
      }`}
    >
      {/* Header with Title & Read Aloud */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-stone-200">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-xs">
            🛡️
          </span>
          <div>
            <h3
              className={`font-black tracking-tight ${
                largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {sData.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 font-medium">
              {sData.subtitle}
            </p>
          </div>
        </div>

        {/* Read aloud & Quick check toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleReadAloud(fullRulesSpeech)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
              isPlayingVoice
                ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                : highContrast
                ? 'bg-amber-400 text-black border border-amber-300 hover:bg-amber-300'
                : 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
            }`}
            title="Read 4 rules aloud"
          >
            {isPlayingVoice ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>{ui.safetySection.stopBtn}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-700" />
                <span>{ui.safetySection.readAloudBtn}</span>
              </>
            )}
          </button>

          <button
            onClick={() => setShowQuickCheck(!showQuickCheck)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all border min-h-[44px] ${
              showQuickCheck
                ? 'bg-stone-900 text-white border-stone-900'
                : highContrast
                ? 'bg-stone-900 text-amber-300 border-amber-400'
                : 'bg-stone-50 text-stone-800 border-stone-300 hover:bg-stone-100'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>{sData.isThisSafeTitle}</span>
            {showQuickCheck ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* 4 Essential Rules Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {sData.rules.map((rule, idx) => (
          <div
            key={idx}
            className={`p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${
              highContrast
                ? 'bg-stone-900 border-stone-800 text-stone-200'
                : 'bg-amber-50/40 border-amber-200/80 hover:bg-white hover:border-amber-300'
            }`}
          >
            <span className="text-2xl p-2 rounded-xl bg-white shadow-xs shrink-0">
              {rule.icon}
            </span>
            <div>
              <h4
                className={`font-black mb-1 ${
                  largeText ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
              >
                {rule.rule}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                {rule.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* "Show me how to check" Action Trigger */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200">
        <button
          onClick={() => setShowHowToCheck(!showHowToCheck)}
          className={`min-h-[50px] px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 border-2 transition-all active:scale-[0.98] ${
            showHowToCheck
              ? 'bg-stone-900 text-white border-stone-900'
              : highContrast
              ? 'bg-amber-400 text-black border-amber-300 hover:bg-amber-300'
              : 'bg-white text-stone-800 border-amber-400 hover:bg-amber-50'
          }`}
        >
          <Globe className="w-4 h-4 text-amber-600" />
          <span>{sData.btnHowToCheck}</span>
          {showHowToCheck ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <button
          onClick={handleOpenOfficial}
          className={`min-h-[50px] px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm ${
            highContrast
              ? 'bg-stone-900 text-stone-200 border border-stone-700 hover:bg-stone-800'
              : 'bg-emerald-700 text-white hover:bg-emerald-800'
          }`}
        >
          <span>{sData.btnOpenOfficial}</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {/* "HOW TO CHECK" EXPANDED PANEL */}
      {showHowToCheck && (
        <div
          className={`mt-6 p-6 rounded-2xl border-2 animate-fade-in ${
            highContrast
              ? 'bg-stone-900 border-amber-400 text-stone-200'
              : 'bg-gradient-to-br from-emerald-50/60 to-white border-emerald-300'
          }`}
        >
          <div className="flex items-center gap-2 mb-2 font-bold text-base text-emerald-900">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{sData.howToCheckTitle}</span>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 mb-4 leading-relaxed font-medium">
            {sData.howToCheckExplanation}
          </p>

          {/* Official address verification box */}
          <div className="p-4 rounded-xl bg-white border border-stone-300 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                {sData.officialSiteLabel}
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-stone-900">
                {sData.officialSiteUrl}
              </span>
            </div>
            <button
              onClick={handleOpenOfficial}
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 hover:bg-emerald-800 transition-colors"
            >
              <span>{ui.safetySection.verifyAndOpen}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* “IS THIS SAFE?” QUICK CHECK INTERACTIVE TOOL */}
      {showQuickCheck && (
        <div
          className={`mt-6 p-6 rounded-2xl border-2 animate-fade-in ${
            highContrast
              ? 'bg-stone-900 border-amber-400 text-stone-200'
              : 'bg-stone-50 border-stone-300'
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <h4
              className={`font-black ${
                largeText ? 'text-xl' : 'text-lg'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {sData.isThisSafeTitle}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mb-5 font-medium">
            {sData.isThisSafeSubtitle}
          </p>

          {/* Checklist items with Yes / No toggles */}
          <div className="space-y-3 mb-6">
            {sData.checklist.map((item) => {
              const currentVal = checklistAnswers[item.id];
              return (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                >
                  <span
                    className={`font-semibold text-xs sm:text-sm ${
                      highContrast ? 'text-stone-900' : 'text-stone-800'
                    }`}
                  >
                    {item.question}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleToggleChecklist(item.id, true)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                        currentVal === true
                          ? item.dangerIfYes
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {ui.safetySection.yes}
                    </button>
                    <button
                      onClick={() => handleToggleChecklist(item.id, false)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                        currentVal === false
                          ? !item.dangerIfYes
                            ? 'bg-rose-600 text-white shadow-xs'
                            : 'bg-stone-800 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {ui.safetySection.no}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DANGER WARNING: STOP */}
          {(isDangerDetected || isOfficialSiteNo) && (
            <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-400 text-rose-950 animate-fade-in">
              <div className="flex items-center gap-2.5 mb-2">
                <AlertOctagon className="w-8 h-8 text-rose-600 shrink-0" />
                <span className="font-black text-2xl tracking-widest text-rose-700 uppercase">
                  {sData.stopWarningTitle}
                </span>
              </div>
              <p className="font-black text-sm sm:text-base text-rose-900 mb-1">
                {sData.stopWarningMessage}
              </p>
              <p className="text-xs sm:text-sm text-rose-800 leading-relaxed font-medium">
                {sData.stopAdvice}
              </p>

              <div className="mt-4 pt-3 border-t border-rose-200 flex flex-wrap gap-2">
                <button
                  onClick={handleOpenOfficial}
                  className="px-4 py-2 rounded-xl bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 hover:bg-rose-800 transition-colors"
                >
                  <span>{ui.safetySection.officialOnlyBtn}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* ALL SAFE BANNER */}
          {allAnswered && !isDangerDetected && !isOfficialSiteNo && (
            <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 animate-fade-in flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm sm:text-base text-emerald-900">
                  {sData.allSafeTitle}
                </p>
                <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-0.5">
                  {sData.allSafeMessage}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
