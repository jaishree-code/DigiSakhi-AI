import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  ExternalLink,
  RotateCcw,
  Home,
  CheckCircle2,
  AlertCircle,
  Volume2,
  VolumeX,
  Mic,
  ArrowRight,
  Shield,
  HelpCircle,
  Lock,
} from 'lucide-react';
import { Language } from '../data/languages';
import { PRACTICE_DATA, PracticeData } from '../data/practiceAndSafetyData';
import { voiceManager, isSpeechRecognitionSupported } from '../utils/speech';
import { getUITranslation } from '../data/uiTranslations';

interface PracticeModeProps {
  currentLanguage: Language;
  onNavigateHome: () => void;
  onOpenDigiLockerGuide: () => void;
  highContrast: boolean;
  largeText: boolean;
  slowVoice: boolean;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({
  currentLanguage,
  onNavigateHome,
  onOpenDigiLockerGuide,
  highContrast,
  largeText,
  slowVoice,
}) => {
  const pData: PracticeData = PRACTICE_DATA[currentLanguage.id] || PRACTICE_DATA.en;
  const ui = getUITranslation(currentLanguage.id);

  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isPlayingVoice, setIsPlayingVoice] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);

  const currentStep = pData.steps[currentStepIdx];
  const speechSupported = isSpeechRecognitionSupported();

  // Reset answer states on step change
  useEffect(() => {
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsCorrect(false);
    setVoiceNotice(null);
    voiceManager.stopSpeaking();
    setIsPlayingVoice(false);
  }, [currentStepIdx, currentLanguage.id]);

  const handleReadAloud = (textToRead?: string) => {
    if (isPlayingVoice) {
      voiceManager.stopSpeaking();
      setIsPlayingVoice(false);
      return;
    }

    const text =
      textToRead ||
      (isCompleted
        ? `${pData.completedTitle}. ${pData.completedMessage}`
        : `${currentStep.question}. ${currentStep.instructionText}. Options are: ${currentStep.options
            .map((o) => o.text)
            .join(', ')}`);

    voiceManager.speak(
      text,
      currentLanguage.voiceCode,
      slowVoice,
      () => setIsPlayingVoice(true),
      () => setIsPlayingVoice(false)
    );
  };

  const handleVoiceAnswer = () => {
    if (!speechSupported) {
      setVoiceNotice(pData.voiceUnavailableNote);
      return;
    }

    setIsListening(true);
    setVoiceNotice(null);

    const started = voiceManager.startListening(
      currentLanguage.voiceCode,
      (transcript: string, isFinal: boolean) => {
        if (isFinal && transcript) {
          setIsListening(false);
          // Try to match speech with an option
          const lower = transcript.toLowerCase();
          const matchedOpt = currentStep.options.find(
            (opt) =>
              lower.includes(opt.text.toLowerCase()) ||
              (opt.text.includes('Sign') && (lower.includes('sign') || lower.includes('உள்நுழை') || lower.includes('साइन'))) ||
              (opt.text.includes('OTP') && (lower.includes('otp') || lower.includes('ఓటీపీ') || lower.includes('ওটিপি'))) ||
              (opt.text.includes('Document') && (lower.includes('doc') || lower.includes('ஆவண') || lower.includes('दस्तावेज़'))) ||
              (opt.text.includes('DigiSakhi') && (lower.includes('sakhi') || lower.includes('explain') || lower.includes('சகி')))
          );

          if (matchedOpt) {
            handleSelectOption(matchedOpt.id, matchedOpt.isCorrect);
          } else {
            setVoiceNotice(`Heard: "${transcript}". Please tap an option below.`);
          }
        }
      },
      (err: string) => {
        setIsListening(false);
        setVoiceNotice(pData.voiceUnavailableNote);
      },
      () => setIsListening(false)
    );

    if (!started) {
      setIsListening(false);
      setVoiceNotice(pData.voiceUnavailableNote);
    }
  };

  const handleSelectOption = (optionId: string, correct: boolean) => {
    setSelectedOptionId(optionId);
    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      handleReadAloud(currentStep.correctFeedback);
    } else {
      handleReadAloud(currentStep.tryAgainText);
    }
  };

  const handleNextStep = () => {
    if (currentStepIdx < pData.steps.length - 1) {
      setCurrentStepIdx((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestartPractice = () => {
    setCurrentStepIdx(0);
    setIsCompleted(false);
    setSelectedOptionId(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const handleOpenOfficial = () => {
    window.open('https://www.digilocker.gov.in/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`rounded-3xl border-2 transition-all p-5 sm:p-8 max-w-4xl mx-auto ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-xl'
          : 'bg-white border-amber-200/90 shadow-md ring-4 ring-amber-100/50'
      }`}
    >
      {/* MANDATORY DEMO DISCLAIMER BANNER ON EVERY SCREEN */}
      <div className="mb-6 p-3 rounded-2xl bg-amber-500/15 border-2 border-amber-500/40 text-center flex items-center justify-center gap-2">
        <Shield className="w-5 h-5 text-amber-700 shrink-0" />
        <span className="font-mono text-xs sm:text-sm font-black tracking-wider text-amber-900 uppercase">
          {pData.demoDisclaimer}
        </span>
      </div>

      {/* Header with Title & Voice Read Aloud */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </span>
            <h2
              className={`font-black tracking-tight ${
                largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {pData.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 font-medium mt-0.5">
            {pData.subtitle}
          </p>
        </div>

        {/* Voice Audio & Mic Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleReadAloud()}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
              isPlayingVoice
                ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                : highContrast
                ? 'bg-amber-400 text-black border border-amber-300 hover:bg-amber-300'
                : 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
            }`}
            title="Read instruction aloud"
          >
            {isPlayingVoice ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>{ui.guidedFlow.stop}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-amber-700" />
                <span>{ui.guidedFlow.readAloud}</span>
              </>
            )}
          </button>

          {!isCompleted && (
            <button
              onClick={handleVoiceAnswer}
              disabled={isListening}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all min-h-[44px] ${
                isListening
                  ? 'bg-amber-500 text-white animate-pulse border-amber-600'
                  : highContrast
                  ? 'bg-stone-900 text-stone-200 border-stone-700 hover:bg-stone-800'
                  : 'bg-stone-50 text-stone-800 border-stone-300 hover:bg-stone-100'
              }`}
              title="Speak your answer"
            >
              <Mic className="w-4 h-4 text-amber-600" />
              <span>{isListening ? ui.practiceMode.listening : ui.practiceMode.speakAnswer}</span>
            </button>
          )}
        </div>
      </div>

      {voiceNotice && (
        <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-700" />
          <span>{voiceNotice}</span>
        </div>
      )}

      {/* PRACTICE IN PROGRESS */}
      {!isCompleted ? (
        <div className="space-y-6">
          {/* Reassuring Safe intro notice */}
          <div
            className={`p-4 rounded-2xl border transition-all ${
              highContrast
                ? 'bg-stone-900 border-stone-800 text-stone-200'
                : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-sm mb-1 text-emerald-800">
              <Lock className="w-4 h-4" />
              <span>{pData.introHeading}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 font-medium">
              {pData.introText}
            </p>
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-stone-500">
              <span>{ui.practiceMode.progressLabel(currentStepIdx + 1, pData.steps.length)}</span>
              <span>{Math.round(((currentStepIdx + 1) / pData.steps.length) * 100)}%</span>
            </div>
            <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300"
                style={{ width: `${((currentStepIdx + 1) / pData.steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Simulated DigiLocker App Container (Interactive Training Frame) */}
          <div
            className={`p-6 rounded-2xl border-2 shadow-inner transition-all ${
              highContrast
                ? 'bg-stone-900 border-amber-400/80 text-stone-100'
                : 'bg-stone-50/80 border-stone-300'
            }`}
          >
            {/* Simulated mock top bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200 text-xs text-stone-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>simulated-digilocker.demo</span>
              </span>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                {ui.practiceMode.simulationBadge}
              </span>
            </div>

            {/* Question */}
            <h3
              className={`font-black tracking-tight mb-2 ${
                largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {currentStep.question}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 font-medium">
              {currentStep.instructionText}
            </p>

            {/* Simulated Big Interactive Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {currentStep.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                let btnStyle = highContrast
                  ? 'bg-stone-850 border-stone-700 text-stone-100 hover:border-amber-400'
                  : 'bg-white border-stone-300 text-stone-900 hover:border-amber-400 hover:shadow-xs';

                if (isSelected) {
                  if (option.isCorrect) {
                    btnStyle = 'bg-emerald-600 text-white border-emerald-700 shadow-md';
                  } else {
                    btnStyle = 'bg-amber-100 text-amber-900 border-amber-400';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id, option.isCorrect)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all active:scale-[0.98] min-h-[80px] flex flex-col justify-between ${btnStyle}`}
                  >
                    <div className="flex items-center justify-between w-full">
                      {option.icon && (
                        <span className="text-2xl block mb-1">{option.icon}</span>
                      )}
                      {isSelected && option.isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <span
                      className={`font-bold leading-tight ${
                        largeText ? 'text-base' : 'text-sm'
                      }`}
                    >
                      {option.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Supportive Educational Feedback Box */}
          {isAnswered && (
            <div
              className={`p-4 rounded-2xl border-2 animate-fade-in flex items-start gap-3.5 ${
                isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <HelpCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="font-bold text-sm sm:text-base">
                  {isCorrect ? ui.practiceMode.correctTitle : currentStep.tryAgainText}
                </p>
                <p className="text-xs sm:text-sm font-medium mt-0.5">
                  {isCorrect ? currentStep.correctFeedback : ui.practiceMode.tryAgainAdvice}
                </p>
              </div>

              {isCorrect && (
                <button
                  onClick={handleNextStep}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-sm shrink-0 ${
                    highContrast
                      ? 'bg-amber-400 text-black hover:bg-amber-300'
                      : 'bg-emerald-700 text-white hover:bg-emerald-800'
                  }`}
                >
                  <span>{ui.practiceMode.next}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

          {/* Bottom control row */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>{pData.btnHome}</span>
            </button>

            <button
              onClick={() => handleReadAloud()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-amber-800 hover:bg-amber-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{ui.practiceMode.explainAgain}</span>
            </button>
          </div>
        </div>
      ) : (
        /* COMPLETION SCREEN */
        <div className="text-center py-6 max-w-lg mx-auto space-y-6 animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="w-10 h-10" />
          </div>

          <div>
            <h3
              className={`font-black tracking-tight mb-2 ${
                largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {pData.completedTitle}
            </h3>
            <p
              className={`font-medium leading-relaxed ${
                largeText ? 'text-lg' : 'text-base'
              } ${highContrast ? 'text-stone-300' : 'text-stone-600'}`}
            >
              {pData.completedMessage}
            </p>
          </div>

          {/* Buttons: Open Official DigiLocker, Practice Again, Home */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={handleOpenOfficial}
              className={`w-full sm:w-auto min-h-[52px] px-6 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md ${
                highContrast
                  ? 'bg-amber-400 text-black hover:bg-amber-300'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800'
              }`}
            >
              <span>{pData.btnOpenOfficial}</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={handleRestartPractice}
              className={`w-full sm:w-auto min-h-[52px] px-5 py-3 rounded-2xl font-bold text-sm border flex items-center justify-center gap-2 transition-all ${
                highContrast
                  ? 'bg-stone-900 text-stone-200 border-stone-700 hover:bg-stone-800'
                  : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              <span>{pData.btnPracticeAgain}</span>
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
              <span>{pData.btnHome}</span>
            </button>
          </div>

          <p className="text-[11px] text-stone-500 font-mono mt-4">
            {ui.practiceMode.officialUrlNote}
          </p>
        </div>
      )}
    </div>
  );
};
