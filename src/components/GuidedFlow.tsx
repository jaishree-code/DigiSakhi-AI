import React, { useEffect, useState } from 'react';
import {
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Home,
  ShieldCheck,
  Award,
  FileText,
  Search,
  Share2,
  Download,
  Eye,
  Lock,
} from 'lucide-react';
import { Language, TranslationData } from '../data/languages';
import { voiceManager } from '../utils/speech';
import { DIGILOCKER_VAULT_IMAGE } from '../assets/images';
import { getUITranslation } from '../data/uiTranslations';

interface GuidedFlowProps {
  currentLanguage: Language;
  t: TranslationData;
  activeStep: number;
  onStepChange: (step: number) => void;
  onComplete: () => void;
  onNavigateHome: () => void;
  highContrast: boolean;
  largeText: boolean;
  readAloudAll: boolean;
  slowVoice: boolean;
}

export const GuidedFlow: React.FC<GuidedFlowProps> = ({
  currentLanguage,
  t,
  activeStep,
  onStepChange,
  onComplete,
  onNavigateHome,
  highContrast,
  largeText,
  readAloudAll,
  slowVoice,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ui = getUITranslation(currentLanguage.id);

  // If readAloudAll is active, read the current step automatically when step changes
  useEffect(() => {
    if (readAloudAll) {
      handleReadCurrentStep();
    }
    return () => {
      voiceManager.stopSpeaking();
      setIsPlaying(false);
    };
  }, [activeStep, currentLanguage.id]);

  const getCurrentStepSpeechText = (): string => {
    if (activeStep === 1) {
      return `${t.steps.step1.title}. ${t.steps.step1.desc}. ${t.steps.step1.note}`;
    }
    if (activeStep === 2) {
      return `${t.steps.step2.title}. ${t.steps.step2.desc}. Warning: ${t.steps.step2.warning}`;
    }
    if (activeStep === 3) {
      return `${t.steps.step3.title}. ${t.steps.step3.desc}. ${t.steps.step3.disclaimer}`;
    }
    if (activeStep === 4) {
      return `${t.steps.step4.title}. ${t.steps.step4.desc}. ${t.steps.step4.note}`;
    }
    if (activeStep === 5) {
      return `${t.steps.completed.title}. ${t.steps.completed.message}`;
    }
    return '';
  };

  const handleReadCurrentStep = () => {
    if (isPlaying) {
      voiceManager.stopSpeaking();
      setIsPlaying(false);
      return;
    }

    const text = getCurrentStepSpeechText();
    if (!text) return;

    voiceManager.speak(
      text,
      currentLanguage.voiceCode,
      slowVoice,
      () => setIsPlaying(true),
      () => setIsPlaying(false)
    );
  };

  const openOfficialDigiLocker = () => {
    window.open('https://www.digilocker.gov.in/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`rounded-3xl border-2 p-6 sm:p-8 transition-all shadow-md ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-xl'
          : 'bg-white border-stone-200'
      }`}
    >
      {/* Top Banner: "Let's do this together" & Step Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-stone-200">
        <div>
          <span
            className={`text-xs font-bold uppercase tracking-wider ${
              highContrast ? 'text-amber-400' : 'text-amber-700'
            }`}
          >
            {t.letsDoThis}
          </span>
          <h2
            className={`font-black tracking-tight ${
              largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
          >
            {activeStep <= 4 ? t.stepIndicator(activeStep, 4) : t.steps.completed.title}
          </h2>
        </div>

        {/* Voice Read Aloud Button for Step */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReadCurrentStep}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all min-h-[44px] ${
              isPlaying
                ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                : highContrast
                ? 'bg-amber-400 text-black border border-amber-300 hover:bg-amber-300'
                : 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
            }`}
            aria-label={isPlaying ? 'Stop voice' : t.readAloud}
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
        </div>
      </div>

      {/* Visual Step Progress Bar */}
      {activeStep <= 4 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {[1, 2, 3, 4].map((stepNum) => {
              const isPast = stepNum < activeStep;
              const isCurrent = stepNum === activeStep;
              return (
                <button
                  key={stepNum}
                  onClick={() => onStepChange(stepNum)}
                  className={`flex items-center gap-1.5 text-xs font-bold transition-all focus:outline-none ${
                    isCurrent
                      ? highContrast
                        ? 'text-amber-400 scale-105'
                        : 'text-amber-700 scale-105'
                      : isPast
                      ? 'text-emerald-600'
                      : 'text-stone-400'
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      isCurrent
                        ? highContrast
                          ? 'bg-amber-400 text-black ring-2 ring-amber-300'
                          : 'bg-amber-600 text-white ring-4 ring-amber-100'
                        : isPast
                        ? 'bg-emerald-500 text-white'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {isPast ? '✓' : stepNum}
                  </span>
                  <span className="hidden sm:inline">
                    {ui.guidedFlow.stepNames[stepNum - 1]}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Progress track */}
          <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
              style={{ width: `${(activeStep / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP 1: Open DigiLocker */}
      {activeStep === 1 && (
        <div className="animate-fade-in space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl shrink-0">
              1
            </div>
            <div>
              <h3
                className={`font-black tracking-tight mb-2 ${
                  largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
              >
                {t.steps.step1.title}
              </h3>
              <p
                className={`font-medium leading-relaxed ${
                  largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                } ${highContrast ? 'text-stone-200' : 'text-stone-700'}`}
              >
                {t.steps.step1.desc}
              </p>
            </div>
          </div>

          {/* Official Website Action Card */}
          <div
            className={`p-6 rounded-2xl border-2 transition-all ${
              highContrast
                ? 'bg-stone-900 border-amber-400'
                : 'bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 border-amber-200'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                {t.officialDigiLockerBadge}
              </span>
            </div>

            <p
              className={`text-sm mb-4 font-medium ${
                highContrast ? 'text-stone-300' : 'text-stone-600'
              }`}
            >
              {t.steps.step1.note}
            </p>

            <button
              onClick={openOfficialDigiLocker}
              className={`w-full sm:w-auto min-h-[54px] px-8 py-3.5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-md ${
                highContrast
                  ? 'bg-amber-400 text-black border-2 border-amber-300 hover:bg-amber-300'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-emerald-700/20'
              }`}
            >
              <span>{t.steps.step1.btn}</span>
              <ExternalLink className="w-5 h-5" />
            </button>
            <span className="block mt-2 text-[11px] text-stone-500 font-mono">
              https://www.digilocker.gov.in/
            </span>
          </div>

          {/* Step Navigation Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>{ui.guidedFlow.home}</span>
            </button>
            <button
              onClick={() => onStepChange(2)}
              className={`min-h-[50px] px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm ${
                highContrast
                  ? 'bg-amber-400 text-black hover:bg-amber-300'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <span>{ui.guidedFlow.nextStep(2)}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Sign In or Create Account */}
      {activeStep === 2 && (
        <div className="animate-fade-in space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl shrink-0">
              2
            </div>
            <div>
              <h3
                className={`font-black tracking-tight mb-2 ${
                  largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
              >
                {t.steps.step2.title}
              </h3>
              <p
                className={`font-medium leading-relaxed ${
                  largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                } ${highContrast ? 'text-stone-200' : 'text-stone-700'}`}
              >
                {t.steps.step2.desc}
              </p>
            </div>
          </div>

          {/* CRITICAL WARNING CARD: Never tell OTP or password */}
          <div className="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 flex items-start gap-4 shadow-xs">
            <AlertTriangle className="w-7 h-7 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-black text-base text-rose-900 mb-1">
                ⚠️ {t.steps.step2.warning}
              </h4>
              <p className="text-xs sm:text-sm text-rose-800 leading-relaxed font-medium">
                {ui.guidedFlow.neverAskWarning}
              </p>
            </div>
          </div>

          {/* Educational Visual Aid */}
          <div
            className={`p-4 rounded-2xl border ${
              highContrast ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
            }`}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              {ui.guidedFlow.whatToLookFor}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                  A
                </span>
                <div>
                  <p className="font-bold text-stone-900">{ui.guidedFlow.signUpTitle}</p>
                  <p className="text-xs text-stone-500">{ui.guidedFlow.signUpDesc}</p>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-stone-200 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  B
                </span>
                <div>
                  <p className="font-bold text-stone-900">{ui.guidedFlow.signInTitle}</p>
                  <p className="text-xs text-stone-500">{ui.guidedFlow.signInDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={() => onStepChange(1)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{ui.guidedFlow.back}</span>
            </button>
            <button
              onClick={() => onStepChange(3)}
              className={`min-h-[50px] px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm ${
                highContrast
                  ? 'bg-amber-400 text-black hover:bg-amber-300'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <span>{t.steps.step2.btn}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Find Your Document */}
      {activeStep === 3 && (
        <div className="animate-fade-in space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl shrink-0">
              3
            </div>
            <div>
              <h3
                className={`font-black tracking-tight mb-2 ${
                  largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
              >
                {t.steps.step3.title}
              </h3>
              <p
                className={`font-medium leading-relaxed ${
                  largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                } ${highContrast ? 'text-stone-200' : 'text-stone-700'}`}
              >
                {t.steps.step3.desc}
              </p>
            </div>
          </div>

          {/* 4 Document Type Example Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {t.steps.step3.types.map((docType, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${
                  highContrast
                    ? 'bg-stone-900 border-stone-800 text-stone-200'
                    : 'bg-stone-50/80 border-stone-200 hover:border-amber-400 hover:bg-white'
                }`}
              >
                <span className="text-3xl shrink-0 p-1.5 rounded-xl bg-white shadow-xs">
                  {docType.icon}
                </span>
                <div>
                  <h4
                    className={`font-bold ${
                      largeText ? 'text-base' : 'text-sm'
                    } ${highContrast ? 'text-white' : 'text-stone-900'}`}
                  >
                    {docType.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">{docType.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Realism Disclaimer: Available documents depend on issuing authority */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-2">
            <Search className="w-4 h-4 shrink-0 text-amber-700" />
            <span>{t.steps.step3.disclaimer}</span>
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={() => onStepChange(2)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{ui.guidedFlow.back}</span>
            </button>
            <button
              onClick={() => onStepChange(4)}
              className={`min-h-[50px] px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm ${
                highContrast
                  ? 'bg-amber-400 text-black hover:bg-amber-300'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <span>{t.steps.step3.btn}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Use Your Document */}
      {activeStep === 4 && (
        <div className="animate-fade-in space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl shrink-0">
              4
            </div>
            <div>
              <h3
                className={`font-black tracking-tight mb-2 ${
                  largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
              >
                {t.steps.step4.title}
              </h3>
              <p
                className={`font-medium leading-relaxed ${
                  largeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                } ${highContrast ? 'text-stone-200' : 'text-stone-700'}`}
              >
                {t.steps.step4.desc}
              </p>
            </div>
          </div>

          {/* 3 Simple Action Cards: View, Share, Download */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {t.steps.step4.options.map((opt, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                  highContrast
                    ? 'bg-stone-900 border-stone-800 text-stone-200'
                    : 'bg-stone-50/80 border-stone-200 hover:border-amber-400 hover:bg-white shadow-xs'
                }`}
              >
                <div>
                  <span className="text-3xl block mb-2">{opt.icon}</span>
                  <h4
                    className={`font-bold ${
                      largeText ? 'text-lg' : 'text-base'
                    } ${highContrast ? 'text-white' : 'text-stone-900'}`}
                  >
                    {opt.title}
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold">
            {t.steps.step4.note}
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={() => onStepChange(3)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{ui.guidedFlow.back}</span>
            </button>
            <button
              onClick={() => onStepChange(5)}
              className={`min-h-[52px] px-8 py-3.5 rounded-2xl font-bold text-base flex items-center gap-2 transition-all active:scale-[0.98] shadow-md ${
                highContrast
                  ? 'bg-emerald-400 text-black hover:bg-emerald-300'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'
              }`}
            >
              <span>{t.steps.step4.btn}</span>
              <CheckCircle2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* COMPLETION SCREEN: Step 5 */}
      {activeStep === 5 && (
        <div className="animate-fade-in text-center py-6 max-w-lg mx-auto space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-3xl block mb-2">🎉</span>
            <h3
              className={`font-black tracking-tight mb-2 ${
                largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {t.steps.completed.title}
            </h3>
            <p
              className={`font-medium ${
                largeText ? 'text-lg' : 'text-base'
              } ${highContrast ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {t.steps.completed.message}
            </p>
          </div>

          {/* Action Buttons on Completion */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={openOfficialDigiLocker}
              className={`w-full sm:w-auto min-h-[52px] px-6 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md ${
                highContrast
                  ? 'bg-amber-400 text-black hover:bg-amber-300'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800'
              }`}
            >
              <span>{t.steps.completed.openDigilocker}</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={() => onStepChange(1)}
              className={`w-full sm:w-auto min-h-[52px] px-5 py-3 rounded-2xl font-bold text-sm border flex items-center justify-center gap-2 transition-all ${
                highContrast
                  ? 'bg-stone-900 text-stone-200 border-stone-700 hover:bg-stone-800'
                  : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t.steps.completed.startAgain}</span>
            </button>

            <button
              onClick={onNavigateHome}
              className={`w-full sm:w-auto min-h-[52px] px-5 py-3 rounded-2xl font-bold text-sm border flex items-center justify-center gap-2 transition-all ${
                highContrast
                  ? 'bg-stone-900 text-stone-200 border-stone-700 hover:bg-stone-800'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>{t.steps.completed.home}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
