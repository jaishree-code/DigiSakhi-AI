import React from 'react';
import { FileText, Lock, Share2, HelpCircle, ChevronRight } from 'lucide-react';
import { Language, TranslationData } from '../data/languages';

interface VisualActionGridProps {
  currentLanguage: Language;
  t: TranslationData;
  onSelectAction: (actionKey: 'getDoc' | 'createAccount' | 'shareDoc' | 'startHelp') => void;
  highContrast: boolean;
  largeText: boolean;
}

export const VisualActionGrid: React.FC<VisualActionGridProps> = ({
  currentLanguage,
  t,
  onSelectAction,
  highContrast,
  largeText,
}) => {
  const isTa = currentLanguage.id === 'ta';
  const isHi = currentLanguage.id === 'hi';

  const sectionTitle = isTa
    ? 'நேரடி வழிகாட்டிகள்'
    : isHi
    ? 'त्वरित कार्य विकल्प'
    : 'Quick Action Guides';

  const sectionSubtitle = isTa
    ? 'விரும்பும் படியைத் தொடவும்'
    : isHi
    ? 'आवश्यक चरण चुनने के लिए टैप करें'
    : 'Tap to open the specific step';

  const openGuideText = isTa
    ? 'வழிகாட்டியைத் திறக்க'
    : isHi
    ? 'चरण गाइड खोलें'
    : 'Open Step Guide';

  const cards = [
    {
      key: 'getDoc' as const,
      icon: '📄',
      title: t.actionCards.getDoc.title,
      desc: t.actionCards.getDoc.desc,
      stepTarget: 3,
      badge: `${t.stepIndicator(3, 4)}: ${t.actionCards.getDoc.title}`,
    },
    {
      key: 'createAccount' as const,
      icon: '🔐',
      title: t.actionCards.createAccount.title,
      desc: t.actionCards.createAccount.desc,
      stepTarget: 2,
      badge: `${t.stepIndicator(2, 4)}: ${t.actionCards.createAccount.title}`,
    },
    {
      key: 'shareDoc' as const,
      icon: '📤',
      title: t.actionCards.shareDoc.title,
      desc: t.actionCards.shareDoc.desc,
      stepTarget: 4,
      badge: `${t.stepIndicator(4, 4)}: ${t.actionCards.shareDoc.title}`,
    },
    {
      key: 'startHelp' as const,
      icon: '❓',
      title: t.actionCards.startHelp.title,
      desc: t.actionCards.startHelp.desc,
      stepTarget: 1,
      badge: `${t.stepIndicator(1, 4)}: ${t.steps.step1.title}`,
    },
  ];

  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h3
          className={`font-black tracking-tight ${
            largeText ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
        >
          {sectionTitle}
        </h3>
        <span className="text-xs text-stone-500 font-medium hidden sm:inline">
          {sectionSubtitle}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {cards.map((card) => (
          <button
            key={card.key}
            onClick={() => onSelectAction(card.key)}
            className={`text-left p-5 rounded-2xl border-2 transition-all flex flex-col justify-between min-h-[140px] group active:scale-[0.98] ${
              highContrast
                ? 'bg-stone-900 border-stone-800 text-stone-100 hover:border-amber-400 hover:bg-stone-850'
                : 'bg-white border-stone-200/90 hover:border-amber-400 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl p-1.5 rounded-xl bg-amber-50 group-hover:scale-110 transition-transform">
                  {card.icon}
                </span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 truncate max-w-[140px]">
                  {card.badge}
                </span>
              </div>
              <h4
                className={`font-bold tracking-tight mb-1 ${
                  largeText ? 'text-lg' : 'text-base'
                } ${highContrast ? 'text-amber-300' : 'text-stone-900'}`}
              >
                {card.title}
              </h4>
              <p className="text-xs text-stone-500 leading-snug">{card.desc}</p>
            </div>

            <div className="flex items-center gap-1 text-xs font-bold text-amber-700 mt-3 pt-2 border-t border-stone-100 group-hover:translate-x-1 transition-transform">
              <span>{openGuideText}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
