/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { LanguageSelector } from './components/LanguageSelector';
import { HeroBanner } from './components/HeroBanner';
import { CoreJourneyCards } from './components/CoreJourneyCards';
import { VoiceAssistantInput } from './components/VoiceAssistantInput';
import { AssistantResponseCard, AssistantResponseData } from './components/AssistantResponseCard';
import { GuidedFlow } from './components/GuidedFlow';
import { PracticeMode } from './components/PracticeMode';
import { StaySafeSection } from './components/StaySafeSection';
import { VisualActionGrid } from './components/VisualActionGrid';
import { AccessibilityPanel } from './components/AccessibilityPanel';
import { TrustSafetyCard } from './components/TrustSafetyCard';
import { DemoModeHelper } from './components/DemoModeHelper';
import { AboutAndFooter } from './components/AboutAndFooter';
import { LANGUAGES, TRANSLATIONS, Language } from './data/languages';
import { voiceManager } from './utils/speech';
import { getUITranslation } from './data/uiTranslations';

export default function App() {
  // Default to Tamil (ta) as highlighted in initial setup
  const [currentLanguage, setCurrentLanguage] = useState<Language>(LANGUAGES[0]);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [readAloudAll, setReadAloudAll] = useState(false);
  const [slowVoice, setSlowVoice] = useState(false);

  // App navigation state
  const [viewMode, setViewMode] = useState<'home' | 'guide' | 'practice'>('home');
  const [activeStep, setActiveStep] = useState(1);

  // Assistant response & voice state
  const [isLoading, setIsLoading] = useState(false);
  const [assistantResponse, setAssistantResponse] = useState<AssistantResponseData | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const voiceSectionRef = useRef<HTMLDivElement>(null);
  const guideSectionRef = useRef<HTMLDivElement>(null);

  // Current language translations
  const t = TRANSLATIONS[currentLanguage.id] || TRANSLATIONS['en'];
  const ui = getUITranslation(currentLanguage.id);

  // Handle switching language
  const handleSelectLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    voiceManager.stopSpeaking();
    setIsSpeaking(false);
    // If there's an active assistant response, reset or re-translate fallback
    if (assistantResponse) {
      setAssistantResponse(null);
    }
  };

  // Submit user query to server-side Gemini API with instant fallback
  const handleSubmitQuery = async (queryText: string) => {
    if (!queryText.trim()) return;

    setIsLoading(true);
    voiceManager.stopSpeaking();
    setIsSpeaking(false);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryText,
          language: currentLanguage.id,
          currentStep: viewMode === 'guide' ? `Step ${activeStep}` : 'Home',
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned status: ${res.status}`);
      }

      const data: AssistantResponseData = await res.json();
      data.query = queryText;
      setAssistantResponse(data);

      // Scroll to response card
      setTimeout(() => {
        voiceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

      // If user enabled auto-read aloud, speak response
      if (readAloudAll) {
        const speechText = `${data.simpleExplanation}. ${data.whatToDoNow}.`;
        voiceManager.speak(
          speechText,
          currentLanguage.voiceCode,
          slowVoice,
          () => setIsSpeaking(true),
          () => setIsSpeaking(false)
        );
      }
    } catch (err) {
      console.warn('Backend API request error, utilizing client-side fallback:', err);
      // Client-side fallback so demo NEVER breaks!
      const fallbackExplanation =
        currentLanguage.id === 'ta'
          ? 'டிஜிலாக்கர் (DigiLocker) என்பது உங்கள் அரசு ஆவணங்களை பாதுகாப்பாகப் பெற இந்திய அரசால் வழங்கப்படும் அதிகாரப்பூர்வ சேவையாகும்.'
          : currentLanguage.id === 'hi'
          ? 'डिजिलॉकर (DigiLocker) भारत सरकार की एक सुरक्षित सेवा है जहाँ आप अपने सभी सरकारी दस्तावेज़ पा सकते हैं।'
          : 'DigiLocker is an official Government of India service where you can access digital documents safely.';

      const fallbackWhatToDo =
        currentLanguage.id === 'ta'
          ? 'அதிகாரப்பூர்வ டிஜிலாக்கர் இணையதளத்தைத் திறந்து எளிதாக உங்கள் ஆவணங்களைப் பெற 4 எளிய வழிகளைப் பின்பற்றுங்கள்.'
          : currentLanguage.id === 'hi'
          ? 'आधिकारिक वेबसाइट खोलने और अपने प्रमाणपत्र सुरक्षित पाने के लिए हमारे 4 आसान चरण देखें।'
          : 'Follow our 4 simple steps to open the official DigiLocker website and get your documents safely.';

      setAssistantResponse({
        simpleExplanation: fallbackExplanation,
        whatToDoNow: fallbackWhatToDo,
        suggestedAction: 'open_step_1',
        stepIndex: 1,
        query: queryText,
        fallbackUsed: true,
      });

      setTimeout(() => {
        voiceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  // Quick demo test simulation
  const handleSimulateVoiceQuery = (query: string, languageId: string) => {
    const targetLang = LANGUAGES.find((l) => l.id === languageId) || LANGUAGES[0];
    setCurrentLanguage(targetLang);
    handleSubmitQuery(query);
  };

  // Open guided flow directly
  const handleStartGuide = (stepIndex: number = 1) => {
    setActiveStep(stepIndex);
    setViewMode('guide');
    setTimeout(() => {
      guideSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleStartPractice = () => {
    setViewMode('practice');
    voiceManager.stopSpeaking();
    setIsSpeaking(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenSafetyCheck = () => {
    setViewMode('home');
    setTimeout(() => {
      const el = document.getElementById('stay-safe-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleStopSpeaking = () => {
    voiceManager.stopSpeaking();
    setIsSpeaking(false);
  };

  const handleOpenOfficialWebsite = () => {
    window.open('https://www.digilocker.gov.in/', '_blank', 'noopener,noreferrer');
  };

  const handleScrollToSection = (sectionId: string) => {
    if (viewMode !== 'home') {
      setViewMode('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
        highContrast
          ? 'bg-black text-white'
          : 'bg-stone-50/60 text-stone-900'
      } ${largeText ? 'text-lg' : 'text-base'}`}
    >
      {/* Navigation Top Bar Contract */}
      <Navbar
        currentLanguage={currentLanguage}
        onSelectLanguage={handleSelectLanguage}
        isSpeaking={isSpeaking}
        onStopSpeaking={handleStopSpeaking}
        highContrast={highContrast}
        onToggleHighContrast={() => setHighContrast(!highContrast)}
        largeText={largeText}
        onToggleLargeText={() => setLargeText(!largeText)}
        onNavigateHome={() => setViewMode('home')}
        onOpenPractice={handleStartPractice}
        onOpenDigiLockerGuide={() => handleStartGuide(1)}
        onScrollToSection={handleScrollToSection}
        t={t}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 sm:py-8 space-y-6">
        {/* Judge Fast-Track Demo Simulation Helper */}
        <DemoModeHelper
          onSimulateVoiceQuery={handleSimulateVoiceQuery}
          onOpenStep={handleStartGuide}
          onOpenPractice={handleStartPractice}
          onOpenSafetyCheck={handleOpenSafetyCheck}
          highContrast={highContrast}
        />

        {/* Home Screen View */}
        {viewMode === 'home' && (
          <div className="space-y-8 animate-fade-in">
            {/* 1. Extremely visible Language Selector on First Screen */}
            <LanguageSelector
              currentLanguage={currentLanguage}
              onSelectLanguage={handleSelectLanguage}
              highContrast={highContrast}
              largeText={largeText}
            />

            {/* 2. Hero Banner with Cultural Civic Visual */}
            <HeroBanner
              currentLanguage={currentLanguage}
              t={t}
              onStartGuide={() => handleStartGuide(1)}
              onStartPractice={handleStartPractice}
              onScrollToVoice={() => {
                voiceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              highContrast={highContrast}
              largeText={largeText}
            />

            {/* 2b. Core Journey Choice Cards: Practice First | Stay Safe | DigiLocker */}
            <CoreJourneyCards
              languageId={currentLanguage.id}
              onSelectPractice={handleStartPractice}
              onSelectSafety={() => handleScrollToSection('stay-safe-section')}
              onSelectDigiLocker={() => handleStartGuide(1)}
              highContrast={highContrast}
              largeText={largeText}
            />

            {/* 3. Voice & Text Assistant Input */}
            <div ref={voiceSectionRef}>
              <VoiceAssistantInput
                currentLanguage={currentLanguage}
                t={t}
                onSubmitQuery={handleSubmitQuery}
                isLoading={isLoading}
                highContrast={highContrast}
                largeText={largeText}
                readAloudAll={readAloudAll}
                slowVoice={slowVoice}
              />
            </div>

            {/* 4. Assistant Response Card (when queried) */}
            {assistantResponse && (
              <AssistantResponseCard
                response={assistantResponse}
                currentLanguage={currentLanguage}
                t={t}
                onNavigateToStep={handleStartGuide}
                onOpenOfficialWebsite={handleOpenOfficialWebsite}
                onExplainAgain={() => {
                  if (assistantResponse.query) {
                    handleSubmitQuery(assistantResponse.query);
                  }
                }}
                highContrast={highContrast}
                largeText={largeText}
                slowVoice={slowVoice}
              />
            )}

            {/* 5. 4 Large Visual Action Buttons */}
            <VisualActionGrid
              currentLanguage={currentLanguage}
              t={t}
              onSelectAction={(actionKey) => {
                if (actionKey === 'getDoc') handleStartGuide(3);
                else if (actionKey === 'createAccount') handleStartGuide(2);
                else if (actionKey === 'shareDoc') handleStartGuide(4);
                else handleStartGuide(1);
              }}
              highContrast={highContrast}
              largeText={largeText}
            />

            {/* 6. Accessibility Controls Bar */}
            <AccessibilityPanel
              t={t}
              largeText={largeText}
              onToggleLargeText={() => setLargeText(!largeText)}
              highContrast={highContrast}
              onToggleHighContrast={() => setHighContrast(!highContrast)}
              readAloudAll={readAloudAll}
              onToggleReadAloudAll={() => setReadAloudAll(!readAloudAll)}
              slowVoice={slowVoice}
              onToggleSlowVoice={() => setSlowVoice(!slowVoice)}
            />

            {/* 7. Comprehensive Digital Safety / Scam Protection Section */}
            <StaySafeSection
              currentLanguage={currentLanguage}
              highContrast={highContrast}
              largeText={largeText}
              slowVoice={slowVoice}
            />

            {/* 8. Trust & Safety Section */}
            <TrustSafetyCard
              t={t}
              highContrast={highContrast}
              largeText={largeText}
            />
          </div>
        )}

        {/* Practice First Mode (Safe Simulation) */}
        {viewMode === 'practice' && (
          <div className="space-y-6 animate-fade-in">
            {/* Quick Language & Return Bar */}
            <div className="flex items-center justify-between pb-2">
              <button
                onClick={() => setViewMode('home')}
                className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 p-1 hover:underline"
              >
                {ui.guidedFlow.returnHome}
              </button>
              <span className="text-xs font-semibold text-stone-500">
                {ui.guidedFlow.practicingIn} <strong className="text-stone-800">{currentLanguage.nativeName} ({currentLanguage.name})</strong>
              </span>
            </div>

            <PracticeMode
              currentLanguage={currentLanguage}
              onNavigateHome={() => setViewMode('home')}
              onOpenDigiLockerGuide={() => handleStartGuide(1)}
              highContrast={highContrast}
              largeText={largeText}
              slowVoice={slowVoice}
            />
          </div>
        )}

        {/* Guided Flow View (4 Steps + Completion Screen) */}
        {viewMode === 'guide' && (
          <div ref={guideSectionRef} className="space-y-6 animate-fade-in">
            {/* Quick Language Toggle Bar in Guide Mode */}
            <div className="flex items-center justify-between pb-2">
              <button
                onClick={() => setViewMode('home')}
                className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 p-1"
              >
                {ui.guidedFlow.returnHome}
              </button>
              <span className="text-xs font-semibold text-stone-500">
                {ui.guidedFlow.guidingIn} <strong className="text-stone-800">{currentLanguage.nativeName} ({currentLanguage.name})</strong>
              </span>
            </div>

            <GuidedFlow
              currentLanguage={currentLanguage}
              t={t}
              activeStep={activeStep}
              onStepChange={(step) => setActiveStep(step)}
              onComplete={() => setActiveStep(5)}
              onNavigateHome={() => setViewMode('home')}
              highContrast={highContrast}
              largeText={largeText}
              readAloudAll={readAloudAll}
              slowVoice={slowVoice}
            />

            {/* Trust and Safety reminder visible in guided mode too */}
            <TrustSafetyCard
              t={t}
              highContrast={highContrast}
              largeText={largeText}
            />
          </div>
        )}
      </main>

      {/* Footer and About Section */}
      <AboutAndFooter
        currentLanguage={currentLanguage}
        t={t}
        highContrast={highContrast}
        largeText={largeText}
      />
    </div>
  );
}
