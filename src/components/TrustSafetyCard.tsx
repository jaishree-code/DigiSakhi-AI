import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, ExternalLink, CheckCircle } from 'lucide-react';
import { TranslationData } from '../data/languages';
import { TRUST_SHIELD_IMAGE } from '../assets/images';

interface TrustSafetyCardProps {
  t: TranslationData;
  highContrast: boolean;
  largeText: boolean;
}

export const TrustSafetyCard: React.FC<TrustSafetyCardProps> = ({
  t,
  highContrast,
  largeText,
}) => {
  return (
    <section
      id="trust-section"
      aria-label="Trust and Safety Rules"
      className={`rounded-3xl border-2 p-6 sm:p-8 transition-all my-8 ${
        highContrast
          ? 'bg-stone-950 border-amber-400 text-stone-100 shadow-xl'
          : 'bg-white border-stone-200 shadow-sm'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200">
        <div className="flex items-center gap-4">
          {/* Trust Shield Visual Asset with styled fallback */}
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-amber-100 border border-amber-300 flex items-center justify-center">
            <img
              src={TRUST_SHIELD_IMAGE}
              alt="DigiSakhi AI safety shield"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // styled CSS/SVG fallback
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <ShieldCheck className="w-8 h-8 text-amber-700 absolute" />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <Lock className="w-3.5 h-3.5" />
              100% Non-Custodial & Safe
            </span>
            <h3
              className={`font-black tracking-tight ${
                largeText ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
              } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
            >
              {t.safetyTitle}
            </h3>
          </div>
        </div>

        {/* Clear boundary reminder badge */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
          <span>DigiSakhi AI is an independent educational guide, not a government portal.</span>
        </div>
      </div>

      {/* 5 Ironclad Safety Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-6">
        {t.safetyRules.map((rule, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
              highContrast
                ? 'bg-stone-900 border-stone-800 text-stone-200'
                : 'bg-emerald-50/50 border-emerald-200/80 text-stone-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <CheckCircle className="w-3.5 h-3.5" />
            </div>
            <p
              className={`font-medium ${
                largeText ? 'text-base' : 'text-sm'
              } ${highContrast ? 'text-stone-200' : 'text-stone-800'}`}
            >
              {rule}
            </p>
          </div>
        ))}
      </div>

      {/* Comparison: DigiSakhi AI Guide vs Official DigiLocker */}
      <div className="mt-8 pt-6 border-t border-stone-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">
          Clear distinction: What happens here vs. What happens on DigiLocker
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            className={`p-4 rounded-2xl border ${
              highContrast ? 'bg-stone-900 border-stone-800' : 'bg-amber-50/60 border-amber-200'
            }`}
          >
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-1.5">
              <span>📖 DigiSakhi AI Digital Guide</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
              <li>Explains what to do in your mother tongue</li>
              <li>Teaches step-by-step with voice guidance</li>
              <li>Answers your questions without technical words</li>
              <li>Does NOT ask for phone numbers, passwords or OTPs</li>
            </ul>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              highContrast ? 'bg-stone-900 border-stone-800' : 'bg-emerald-50/60 border-emerald-200'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-emerald-900 text-sm mb-1.5">
              <span>🏛️ Official DigiLocker Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
            </div>
            <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
              <li>Hosted on <code className="font-mono text-[11px] font-semibold">digilocker.gov.in</code></li>
              <li>Enter your mobile number and Aadhaar OTP ONLY here</li>
              <li>Official certificates issued directly by government bodies</li>
              <li>View, download and share your official documents</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
