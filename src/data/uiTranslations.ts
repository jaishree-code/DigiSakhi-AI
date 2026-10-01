/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Comprehensive Multilingual UI Dictionary for DigiSakhi AI
 * Guarantees 100% translation of all user-facing strings across English, Tamil, Hindi, and all 12 supported Indian languages.
 */

export interface UITranslation {
  nav: {
    home: string;
    practice: string;
    safety: string;
    guide: string;
    about: string;
    stopVoice: string;
    largerText: string;
    highContrast: string;
    selectLanguageTitle: string;
  };
  languageSelector: {
    heading: string;
    subtitle: string;
    voiceReady: string;
  };
  actionGrid: {
    sectionTitle: string;
    sectionSubtitle: string;
    openGuide: string;
  };
  coreJourney: {
    title: string;
    subtitle: string;
    practiceBadge: string;
    practiceNote: string;
    practiceBtn: string;
    safetyBadge: string;
    safetyNote: string;
    safetyBtn: string;
    guideBadge: string;
    guideTitle: string;
    guideDesc: string;
    guideNote: string;
    guideBtn: string;
  };
  hero: {
    officialAssistance: string;
    civicQuote: string;
    pillars: string[];
    practiceBtn: string;
    guideBtn: string;
    voiceBtn: string;
  };
  guidedFlow: {
    letsDoThis: string;
    stop: string;
    readAloud: string;
    stepNames: [string, string, string, string];
    back: string;
    nextStep: (step: number) => string;
    home: string;
    whatToLookFor: string;
    signUpTitle: string;
    signUpDesc: string;
    signInTitle: string;
    signInDesc: string;
    neverAskWarning: string;
    returnHome: string;
    guidingIn: string;
    practicingIn: string;
  };
  voiceInput: {
    permissionError: string;
    hearError: string;
    unsupportedError: string;
    tryAsking: string;
    finishAndAsk: string;
    listening: string;
  };
  practiceMode: {
    disclaimer: string;
    progressLabel: (current: number, total: number) => string;
    simulationBadge: string;
    speakAnswer: string;
    listening: string;
    correctTitle: string;
    tryAgainAdvice: string;
    next: string;
    explainAgain: string;
    officialUrlNote: string;
    voiceHeardNotice?: (transcript: string) => string;
  };
  safetySection: {
    readAloudRules: string;
    stopBtn: string;
    readAloudBtn: string;
    verifyAndOpen: string;
    yes: string;
    no: string;
    officialOnlyBtn: string;
  };
  trustCard: {
    badge: string;
    disclaimer: string;
    distinctionTitle: string;
    guideTitle: string;
    guidePoints: [string, string, string, string];
    officialTitle: string;
    officialPoints: [string, string, string, string];
  };
  demoHelper: {
    title: string;
    hideOptions: string;
    showTests: string;
    desc: string;
  };
  aboutFooter: {
    empathyQuote: string;
    resourcesTitle: string;
    officialDigiLocker: string;
    faqTitle: string;
    nationalPortal: string;
    civicIntegrityTitle: string;
    zeroStorageTitle: string;
    zeroStorageDesc: string;
    civicDisclaimer: string;
    builtWithCare: string;
  };
}

export const UI_TRANSLATIONS: Record<string, UITranslation> = {
  // 1. TAMIL (தமிழ்)
  ta: {
    nav: {
      home: "முகப்பு",
      practice: "முதலில் பழகுங்கள்",
      safety: "பாதுகாப்பாக இருங்கள்",
      guide: "டிஜிலாக்கர் வழிகாட்டி",
      about: "பற்றி",
      stopVoice: "குரலை நிறுத்து",
      largerText: "பெரிய எழுத்துகள்",
      highContrast: "அதிக தெளிவு முறை",
      selectLanguageTitle: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும் (12)",
    },
    coreJourney: {
      title: "நீங்கள் எப்படி தொடங்க விரும்புகிறீர்கள்?",
      subtitle: "கற்பித்தல் → பயிற்சி → பாதுகாப்பு → எளிய வழிகாட்டல்",
      practiceBadge: "பரிந்துரைக்கப்படுகிறது",
      practiceNote: "🔒 பாதுகாப்பான மாதிரிப் பயிற்சி · தனிப்பட்ட விவரங்கள் தேவையில்லை",
      practiceBtn: "மாதிரிப் பயிற்சியைத் தொடங்கு",
      safetyBadge: "பாதுகாப்பு & விழிப்புணர்வு",
      safetyNote: "✓ 4 அத்தியாவசிய விதிகள் & “இது பாதுகாப்பானதா?” சரிபார்ப்பு",
      safetyBtn: "பாதுகாப்பு விதிகளைப் பார்க்கவும்",
      guideBadge: "அதிகாரப்பூர்வ வழிகாட்டி",
      guideTitle: "டிஜிலாக்கரைப் பயன்படுத்துங்கள்",
      guideDesc: "அரசு ஆவணங்களை எடுக்க படி படியான எளிய வழிகாட்டல்.",
      guideNote: "🏛️ 4 எளிய படிகள் · அதிகாரப்பூர்வ இணைப்பு",
      guideBtn: "வழிகாட்டியைத் தொடங்கு",
    },
    hero: {
      officialAssistance: "அதிகாரப்பூர்வ டிஜிலாக்கர் உதவி",
      civicQuote: "“சுட்டியைத் தொடத் தெரிந்திருப்பது மட்டுமே அரசு சேவைகளைத் தீர்மானிக்கக் கூடாது.”",
      pillars: ["குரல் வழி", "தாய்மொழி", "படி படியாக", "தற்சார்பு"],
      practiceBtn: "🎓 முதலில் பழகுங்கள் (மாதிரி செயல்முறை)",
      guideBtn: "டிஜிலாக்கர் வழிகாட்டி",
      voiceBtn: "குரலில் கேளுங்கள்",
    },
    guidedFlow: {
      letsDoThis: "இணைந்து செய்வோம் வாருங்கள்",
      stop: "நிறுத்து",
      readAloud: "படித்துக் காட்டு",
      stepNames: ["திறக்கவும்", "கணக்கு", "ஆவணம்", "பயன்படுத்து"],
      back: "பின்செல்",
      nextStep: (s) => `அடுத்தது: படி ${s}`,
      home: "முகப்பு",
      whatToLookFor: "அதிகாரப்பூர்வ இணையதளத்தில் கவனிக்க வேண்டியவை:",
      signUpTitle: "Sign Up (புதிய பயனர்)",
      signUpDesc: "நீங்கள் முதல் முறையாகப் பயன்படுத்துபவர் என்றால்",
      signInTitle: "Sign In (ஏற்கனவே உள்ள கணக்கு)",
      signInDesc: "உங்கள் கைபேசி எண் மற்றும் ரகசிய பின் மூலம்",
      neverAskWarning: "DigiSakhi AI ஒருபோதும் உங்கள் OTP அல்லது கடவுச்சொல்லைக் கேட்காது. உள்நுழைவு விவரங்களை அதிகாரப்பூர்வ டிஜிலாக்கர் இணையதளத்திற்குள் மட்டுமே உள்ளிடவும்.",
      returnHome: "← முகப்புக்குத் திரும்பு",
      guidingIn: "வழிகாட்டும் மொழி:",
      practicingIn: "பயிற்சி மொழி:",
    },
    voiceInput: {
      permissionError: "மைக் அனுமதி தேவை. கீழே உள்ள உரைப்பெட்டியிலும் தட்டச்சு செய்யலாம்!",
      hearError: "தெளிவாகக் கேட்கவில்லை. மீண்டும் முயற்சிக்கவும் அல்லது கீழே எழுதவும்.",
      unsupportedError: "இந்த உலாவியில் அல்லது சாதனத்தில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை. கீழேயுள்ள பெட்டியைப் பயன்படுத்தவும்.",
      tryAsking: "இப்படிக் கேட்டுப் பாருங்கள்:",
      finishAndAsk: "முடிந்தது, கேள்",
      listening: "கேட்கிறது... தயவுசெய்து பேசுங்கள்",
    },
    practiceMode: {
      disclaimer: "மாதிரி / பயிற்சி — இது உண்மையான அரசு இணையதளம் அல்ல",
      progressLabel: (c, t) => `பயிற்சிப் படி ${c} / ${t}`,
      simulationBadge: "மாதிரித் திரை",
      speakAnswer: "குரலில் பதில் சொல்லுங்கள்",
      listening: "கேட்கிறது...",
      correctTitle: "✓ மிகச் சரி!",
      tryAgainAdvice: "மேலே உள்ள மற்றொரு விருப்பத்தைத் தேர்ந்தெடுக்கவும். அவசரம் ஏதுமில்லை.",
      next: "அடுத்து",
      explainAgain: "மீண்டும் சொல்",
      officialUrlNote: "அதிகாரப்பூர்வ அரசு இணையதளம்: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "4 பாதுகாப்பு விதிகளைப் படித்துக் காட்டு",
      stopBtn: "நிறுத்து",
      readAloudBtn: "படித்துக் காட்டு",
      verifyAndOpen: "சரிபார்த்துத் திறக்கவும்",
      yes: "ஆம்",
      no: "இல்லை",
      officialOnlyBtn: "அதிகாரப்பூர்வ டிஜிலாக்கருக்கு மட்டும் செல்க",
    },
    aboutFooter: {
      empathyQuote: "ஆங்கில அறிவு இல்லாமலும், தொழில்நுட்பப் பின்னணி இல்லாமலும், வழிகாட்ட அருகில் எவரும் இல்லாத கிராமப்புற முதல் முறை பெண்களுக்காக அன்புடன் உருவாக்கப்பட்டது.",
      resourcesTitle: "அத்தியாவசிய இணைப்புகள்",
      officialDigiLocker: "அதிகாரப்பூர்வ டிஜிலாக்கர்",
      faqTitle: "அதிகாரப்பூர்வ பொதுவான கேள்விகள்",
      nationalPortal: "இந்திய அரசு தேசிய போர்டல்",
      civicIntegrityTitle: "நம்பகத்தன்மை மற்றும் பாதுகாப்பு",
      zeroStorageTitle: "தகவல் சேமிப்பு இல்லை (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI எந்தவொரு ஆவணங்களையும், கடவுச்சொற்களையும் அல்லது எண்களையும் சேமிப்பதில்லை.",
      civicDisclaimer: "DigiSakhi AI ஒரு வழிகாட்டி மட்டுமே. உண்மையான அரசு சேவைகளுக்கு எப்போதும் அதிகாரப்பூர்வ இணையதளத்தைப் பயன்படுத்தவும்.",
      builtWithCare: "முதல் முறை டிஜிட்டல் குடிமக்களுக்காக கவனத்துடன் உருவாக்கப்பட்டது",
    },
  },

  // 2. HINDI (हिन्दी)
  hi: {
    nav: {
      home: "होम",
      practice: "पहले अभ्यास करें",
      safety: "सुरक्षित रहें",
      guide: "डिजीलॉकर गाइड",
      about: "के बारे में",
      stopVoice: "आवाज़ रोकें",
      largerText: "बड़ा पाठ",
      highContrast: "उच्च कंट्रास्ट",
      selectLanguageTitle: "अपनी भाषा चुनें (12)",
    },
    coreJourney: {
      title: "आप कैसे शुरुआत करना चाहते हैं?",
      subtitle: "सिखाना → अभ्यास → सुरक्षा → सरल मार्गदर्शन",
      practiceBadge: "पहले यह करें",
      practiceNote: "🔒 सुरक्षित सिम्युलेटेड डेमो · किसी व्यक्तिगत जानकारी की आवश्यकता नहीं",
      practiceBtn: "सुरक्षित अभ्यास शुरू करें",
      safetyBadge: "धोखाधड़ी से सुरक्षा",
      safetyNote: "✓ 4 अनिवार्य नियम और “क्या यह सुरक्षित है?” त्वरित जाँच",
      safetyBtn: "सुरक्षा नियम देखें",
      guideBadge: "आधिकारिक गाइड",
      guideTitle: "डिजीलॉकर का उपयोग करें",
      guideDesc: "सरकारी दस्तावेज़ पाने के लिए चरण-दर-चरण सरल निर्देश।",
      guideNote: "🏛️ 4 आसान चरण · आधिकारिक लिंक",
      guideBtn: "गाइड शुरू करें",
    },
    hero: {
      officialAssistance: "आधिकारिक डिजीलॉकर सहायता",
      civicQuote: "“क्लिक करना जानने की कमी कभी किसी के अधिकार में बाधा नहीं बननी चाहिए।”",
      pillars: ["आवाज़", "अपनी भाषा", "कदम-दर-कदम", "आत्मनिर्भर"],
      practiceBtn: "🎓 पहले अभ्यास करें (सुरक्षित डेमो)",
      guideBtn: "डिजीलॉकर गाइड",
      voiceBtn: "बोलकर पूछें",
    },
    guidedFlow: {
      letsDoThis: "आइए मिलकर करते हैं",
      stop: "रोकें",
      readAloud: "बोलकर सुनाएं",
      stepNames: ["खोलें", "खाता", "दस्तावेज़", "उपयोग"],
      back: "पीछे",
      nextStep: (s) => `अगला: चरण ${s}`,
      home: "होम",
      whatToLookFor: "आधिकारिक वेबसाइट पर क्या देखें:",
      signUpTitle: "Sign Up (नया खाता)",
      signUpDesc: "यदि आप पहली बार उपयोग कर रहे हैं",
      signInTitle: "Sign In (पुराना खाता)",
      signInDesc: "अपने मोबाइल नंबर और 6-अंकों के सुरक्षा पिन से",
      neverAskWarning: "DigiSakhi AI कभी भी आपका OTP या पासवर्ड नहीं माँगेगा। अपनी लॉगिन जानकारी केवल आधिकारिक डिजीलॉकर वेबसाइट पर ही दर्ज करें।",
      returnHome: "← होम पर वापस जाएँ",
      guidingIn: "मार्गदर्शन भाषा:",
      practicingIn: "अभ्यास भाषा:",
    },
    voiceInput: {
      permissionError: "माइक की अनुमति चाहिए। आप नीचे दिए गए बॉक्स में लिख भी सकते हैं!",
      hearError: "स्पष्ट सुनाई नहीं दिया। पुनः प्रयास करें या नीचे लिखें।",
      unsupportedError: "इस ब्राउज़र या डिवाइस पर आवाज़ पहचान समर्थित नहीं है। कृपया नीचे लिखे बॉक्स का उपयोग करें।",
      tryAsking: "ऐसे पूछकर देखें:",
      finishAndAsk: "पूरा हुआ, पूछें",
      listening: "सुन रहे हैं... कृपया बोलें",
    },
    practiceMode: {
      disclaimer: "डेमो / अभ्यास — यह वास्तविक सरकारी वेबसाइट नहीं है",
      progressLabel: (c, t) => `अभ्यास चरण ${c} / ${t}`,
      simulationBadge: "सिम्युलेशन",
      speakAnswer: "बोलकर उत्तर दें",
      listening: "सुन रहे हैं...",
      correctTitle: "✓ बिल्कुल सही!",
      tryAgainAdvice: "ऊपर दिए गए विकल्पों में से दूसरा चुनें। कोई जल्दी नहीं है।",
      next: "अगला",
      explainAgain: "फिर से समझाएँ",
      officialUrlNote: "आधिकारिक सरकारी वेबसाइट: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "4 सुरक्षा नियम बोलकर सुनाएं",
      stopBtn: "रोकें",
      readAloudBtn: "बोलकर सुनाएं",
      verifyAndOpen: "जाँचें और खोलें",
      yes: "हाँ",
      no: "नहीं",
      officialOnlyBtn: "केवल आधिकारिक डिजीलॉकर पर जाएँ",
    },
    aboutFooter: {
      empathyQuote: "ग्रामीण भारत की उन बहनों और माताओं के लिए सहानुभूति से निर्मित जिन्हें अंग्रेजी नहीं आती, कोई तकनीकी पृष्ठभूमि नहीं है और सिखाने वाला कोई पास नहीं है।",
      resourcesTitle: "आवश्यक संसाधन",
      officialDigiLocker: "आधिकारिक डिजीलॉकर",
      faqTitle: "आधिकारिक अक्सर पूछे जाने वाले सवाल",
      nationalPortal: "भारत का राष्ट्रीय पोर्टल",
      civicIntegrityTitle: "विश्वास और गोपनीयता",
      zeroStorageTitle: "शून्य डेटा भंडारण (Zero Data Storage)",
      zeroStorageDesc: "DigiSakhi AI कोई भी दस्तावेज़, पासवर्ड या निजी नंबर सहेज कर नहीं रखता।",
      civicDisclaimer: "DigiSakhi AI केवल एक स्वतंत्र मार्गदर्शन उपकरण है। वास्तविक सरकारी सेवाओं के लिए हमेशा आधिकारिक वेबसाइट का उपयोग करें।",
      builtWithCare: "पहली बार स्मार्टफोन चलाने वाले नागरिकों के लिए समर्पित",
    },
  },

  // 3. ENGLISH
  en: {
    nav: {
      home: "Home",
      practice: "Practice First",
      safety: "Stay Safe",
      guide: "DigiLocker Guide",
      about: "About",
      stopVoice: "Stop Voice",
      largerText: "Larger Text",
      highContrast: "High Contrast",
      selectLanguageTitle: "Select Your Language (12)",
    },
    coreJourney: {
      title: "How would you like to start?",
      subtitle: "Teach → Practice → Protect → Guide",
      practiceBadge: "Recommended First",
      practiceNote: "🔒 Safe simulated demo · No real data required",
      practiceBtn: "Start Safe Practice",
      safetyBadge: "Scam Protection",
      safetyNote: "✓ 4 Golden Rules & “Is this safe?” Quick Check",
      safetyBtn: "Review Safety & Quick Check",
      guideBadge: "Official Guide",
      guideTitle: "Use DigiLocker",
      guideDesc: "Step-by-step guided instructions to access official government documents.",
      guideNote: "🏛️ 4 Simple Steps · Official Link",
      guideBtn: "Start DigiLocker Guide",
    },
    hero: {
      officialAssistance: "Official DigiLocker Assistance",
      civicQuote: "“Because knowing how to click should never decide who gets access.”",
      pillars: ["Voice", "Local Language", "Step-by-Step", "Independent"],
      practiceBtn: "🎓 Practice First (Safe Demo)",
      guideBtn: "DigiLocker Guide",
      voiceBtn: "Ask with Voice",
    },
    guidedFlow: {
      letsDoThis: "Let's do this together",
      stop: "Stop",
      readAloud: "Read aloud",
      stepNames: ["Open", "Account", "Find Doc", "Use Doc"],
      back: "Back",
      nextStep: (s) => `Next: Step ${s}`,
      home: "Home",
      whatToLookFor: "What to look for on the official website:",
      signUpTitle: "Sign Up (New user)",
      signUpDesc: "If you are using it for the first time",
      signInTitle: "Sign In (Existing user)",
      signInDesc: "With your mobile number and secret PIN",
      neverAskWarning: "DigiSakhi AI will NEVER ask for your OTP or password. Enter your login details ONLY inside the official DigiLocker website.",
      returnHome: "← Return to Home",
      guidingIn: "Guiding in:",
      practicingIn: "Practicing in:",
    },
    voiceInput: {
      permissionError: "Microphone permission needed. You can also write below!",
      hearError: "Could not hear clearly. Try again or use the text box below.",
      unsupportedError: "Voice input is not supported in this browser. Please use the text box below.",
      tryAsking: "Try asking:",
      finishAndAsk: "Finish & Ask",
      listening: "Listening... please speak clearly",
    },
    practiceMode: {
      disclaimer: "DEMO / PRACTICE — NOT THE REAL GOVERNMENT WEBSITE",
      progressLabel: (c, t) => `Practice Step ${c} of ${t}`,
      simulationBadge: "SIMULATION",
      speakAnswer: "Speak your answer",
      listening: "Listening...",
      correctTitle: "✓ That's right!",
      tryAgainAdvice: "Try choosing another option above. There is no rush.",
      next: "Next",
      explainAgain: "Explain again",
      officialUrlNote: "Official government website: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "Read 4 rules aloud",
      stopBtn: "Stop",
      readAloudBtn: "Read aloud",
      verifyAndOpen: "Verify & Open",
      yes: "Yes",
      no: "No",
      officialOnlyBtn: "Go to Official DigiLocker Only",
    },
    aboutFooter: {
      empathyQuote: "Built with empathy for first-time women users in rural India who have no English knowledge, no technical background, and nobody nearby to guide them.",
      resourcesTitle: "Essential Resources",
      officialDigiLocker: "Official DigiLocker",
      faqTitle: "DigiLocker Official FAQs",
      nationalPortal: "National Portal of India",
      civicIntegrityTitle: "Trust & Civic Integrity",
      zeroStorageTitle: "Zero Data Storage",
      zeroStorageDesc: "DigiSakhi AI does not store documents, credentials, or personal numbers.",
      civicDisclaimer: "DigiSakhi AI does not claim to be an official Government of India application.",
      builtWithCare: "Built with care for first-time digital citizens",
    },
  },

  // 4. TELUGU (తెలుగు)
  te: {
    nav: {
      home: "హోమ్",
      practice: "ముందుగా ప్రాక్టీస్ చేయండి",
      safety: "సురక్షితంగా ఉండండి",
      guide: "డిజిలాకర్ గైడ్",
      about: "గురించి",
      stopVoice: "వాయిస్ ఆపండి",
      largerText: "పెద్ద అక్షరాలు",
      highContrast: "హై కాంట్రాస్ట్",
      selectLanguageTitle: "మీ భాషను ఎంచుకోండి (12)",
    },
    coreJourney: {
      title: "మీరు ఎలా ప్రారంభించాలనుకుంటున్నారు?",
      subtitle: "నేర్చుకోవడం → సాధన → భద్రత → మార్గదర్శకత్వం",
      practiceBadge: "ముందుగా చేయండి",
      practiceNote: "🔒 సురక్షిత డెమో · వ్యక్తిగత వివరాలు అవసరం లేదు",
      practiceBtn: "సురక్షిత సాధన ప్రారంభించండి",
      safetyBadge: "మోసాల నుండి రక్షణ",
      safetyNote: "✓ 4 ముఖ్య నియమాలు మరియు భద్రతా తనిఖీ",
      safetyBtn: "భద్రతా నియమాలు చూడండి",
      guideBadge: "అధికారిక గైడ్",
      guideTitle: "డిజిలాకర్ ఉపయోగించండి",
      guideDesc: "ప్రభుత్వ ధృవీకరణ పత్రాలు పొందడానికి సులభమైన సూచనలు.",
      guideNote: "🏛️ 4 సులభమైన దశలు · అధికారిక లింక్",
      guideBtn: "గైడ్ ప్రారంభించండి",
    },
    hero: {
      officialAssistance: "అధికారిక డిజిలాకర్ సహాయం",
      civicQuote: "“డిజిటల్ పరిజ్ఞానం లేకపోవడం ప్రభుత్వ సేవలకు అడ్డంకి కారాదు.”",
      pillars: ["వాయిస్", "స్వభాష", "దశలవారీగా", "స్వావలంబన"],
      practiceBtn: "🎓 ముందుగా సాధన చేయండి",
      guideBtn: "డిజిలాకర్ గైడ్",
      voiceBtn: "వాయిస్‌తో అడగండి",
    },
    guidedFlow: {
      letsDoThis: "కలిసి చేద్దాం రండి",
      stop: "ఆపండి",
      readAloud: "చదివి వినిపించు",
      stepNames: ["తెరవండి", "ఖాతా", "పత్రాలు", "వాడండి"],
      back: "వెనుకకు",
      nextStep: (s) => `తదుపరి: దశ ${s}`,
      home: "హోమ్",
      whatToLookFor: "అధికారిక వెబ్‌సైట్‌లో చూడవలసినవి:",
      signUpTitle: "Sign Up (కొత్త వినియోగదారు)",
      signUpDesc: "మీరు మొదటిసారి ఉపయోగిస్తుంటే",
      signInTitle: "Sign In (పాత ఖాతా)",
      signInDesc: "మీ మొబైల్ నంబర్ మరియు పిన్ ద్వారా",
      neverAskWarning: "DigiSakhi AI మీ OTP లేదా పాస్‌వర్డ్‌ను ఎప్పుడూ అడగదు. అధికారిక డిజిలాకర్ వెబ్‌సైట్‌లో మాత్రమే వివరాలు నమోదు చేయండి.",
      returnHome: "← హోమ్‌కి తిరిగి వెళ్లండి",
      guidingIn: "మార్గదర్శక భాష:",
      practicingIn: "సాధన భాష:",
    },
    voiceInput: {
      permissionError: "మైక్రోఫోన్ అనుమతి అవసరం. మీరు క్రింద టైప్ చేయవచ్చు!",
      hearError: "స్పష్టంగా వినపడలేదు. మళ్ళీ ప్రయత్నించండి లేదా క్రింద వ్రాయండి.",
      unsupportedError: "ఈ బ్రౌజర్‌లో వాయిస్ ఇన్పుట్ అందుబాటులో లేదు. దయచేసి క్రింద రాయండి.",
      tryAsking: "ఇలా అడిగి చూడండి:",
      finishAndAsk: "పూర్తయింది, అడగండి",
      listening: "వింటున్నాము... దయచేసి మాట్లాడండి",
    },
    practiceMode: {
      disclaimer: "డెమో / సాధన — ఇది అసలైన ప్రభుత్వ వెబ్‌సైట్ కాదు",
      progressLabel: (c, t) => `సాధన దశ ${c} / ${t}`,
      simulationBadge: "సిమ్యులేషన్",
      speakAnswer: "వాయిస్‌తో చెప్పండి",
      listening: "వింటున్నాము...",
      correctTitle: "✓ చాలా సరైనది!",
      tryAgainAdvice: "పై ఎంపికలలో మరొకటి ఎంచుకోండి. తొందరలేదు.",
      next: "తదుపరి",
      explainAgain: "మళ్ళీ వివరించండి",
      officialUrlNote: "అధికారిక ప్రభుత్వ వెబ్‌సైట్: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "4 భద్రతా నియమాలు చదివి వినిపించు",
      stopBtn: "ఆపండి",
      readAloudBtn: "చదివి వినిపించు",
      verifyAndOpen: "ధృవీకరించి తెరవండి",
      yes: "అవును",
      no: "కాదు",
      officialOnlyBtn: "అధికారిక డిజిలాకర్‌కి మాత్రమే వెళ్లండి",
    },
    aboutFooter: {
      empathyQuote: "ఇంగ్లీష్ రాకపోయినా, సాంకేతిక పరిజ్ఞానం లేకపోయినా గ్రామీణ మహిళలు సులభంగా ప్రభుత్వ సేవలు పొందేందుకు రూపొందించబడింది.",
      resourcesTitle: "ముఖ్యమైన లింకులు",
      officialDigiLocker: "అధికారిక డిజిలాకర్",
      faqTitle: "అధికారిక తరచుగా అడిగే ప్రశ్నలు",
      nationalPortal: "భారత జాతీయ పోర్టల్",
      civicIntegrityTitle: "భద్రత మరియు విశ్వసనీయత",
      zeroStorageTitle: "డేటా నిల్వ ఉండదు (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI ఏ పత్రాలు లేదా వ్యక్తిగత సమాచారాన్ని దాచదు.",
      civicDisclaimer: "DigiSakhi AI కేవలం సహాయకారి మాత్రమే. అసలైన సేవల కోసం ప్రభుత్వ వెబ్‌సైట్ వాడండి.",
      builtWithCare: "డిజిటల్ పౌరుల కోసం శ్రద్ధతో రూపొందించబడింది",
    },
  },

  // 5. BENGALI (বাংলা)
  bn: {
    nav: {
      home: "হোম",
      practice: "প্রথমে অনুশীলন করুন",
      safety: "নিরাপদে থাকুন",
      guide: "ডিজিলকার গাইড",
      about: "সম্পর্কে",
      stopVoice: "ভয়েস থামান",
      largerText: "বড় হরফ",
      highContrast: "উচ্চ বৈসাদৃশ্য",
      selectLanguageTitle: "আপনার ভাষা বেছে নিন (12)",
    },
    coreJourney: {
      title: "আপনি কীভাবে শুরু করতে চান?",
      subtitle: "শেখা → অনুশীলন → সুরক্ষা → সহজ গাইড",
      practiceBadge: "প্রথমে এটি করুন",
      practiceNote: "🔒 নিরাপদ ডেমো · কোনো ব্যক্তিগত তথ্যের প্রয়োজন নেই",
      practiceBtn: "নিরাপদ অনুশীলন শুরু করুন",
      safetyBadge: "প্রতারণা প্রতিরোধ",
      safetyNote: "✓ ৪টি মূল নিয়ম এবং নিরাপত্তা পরীক্ষা",
      safetyBtn: "সুরক্ষা নিয়ম দেখুন",
      guideBadge: "অফিসিয়াল গাইড",
      guideTitle: "ডিজিলকার ব্যবহার করুন",
      guideDesc: "সরকারি নথি নিরাপদে পাওয়ার সহজ পদক্ষেপ।",
      guideNote: "🏛️ ৪টি সহজ ধাপ · অফিসিয়াল লিঙ্ক",
      guideBtn: "গাইড শুরু করুন",
    },
    hero: {
      officialAssistance: "অফিসিয়াল ডিজিলকার সহায়তা",
      civicQuote: "“ডিজিটাল জ্ঞান না থাকা যেন সরকারি সেবা পাওয়ার বাধা না হয়।”",
      pillars: ["ভয়েস", "মাতৃভাষা", "ধাপে ধাপে", "স্বাবলম্বী"],
      practiceBtn: "🎓 প্রথমে অনুশীলন করুন (ডেমো)",
      guideBtn: "ডিজিলকার গাইড",
      voiceBtn: "ভয়েসে জিজ্ঞাসা করুন",
    },
    guidedFlow: {
      letsDoThis: "আসুন একসাথে করি",
      stop: "থামান",
      readAloud: "পড়ে শোনান",
      stepNames: ["খুলুন", "অ্যাকাউন্ট", "নথিপত্র", "ব্যবহার"],
      back: "পেছনে",
      nextStep: (s) => `পরবর্তী: ধাপ ${s}`,
      home: "হোম",
      whatToLookFor: "অফিসিয়াল ওয়েবসাইটে কী দেখবেন:",
      signUpTitle: "Sign Up (নতুন ব্যবহারকারী)",
      signUpDesc: "আপনি প্রথমবার ব্যবহার করলে",
      signInTitle: "Sign In (পুরনো অ্যাকাউন্ট)",
      signInDesc: "আপনার মোবাইল নম্বর ও পিন দিয়ে",
      neverAskWarning: "DigiSakhi AI কখনই আপনার OTP বা পাসওয়ার্ড চাইবে না। শুধুমাত্র অফিসিয়াল ডিজিলকার ওয়েবসাইটে তথ্য দিন।",
      returnHome: "← হোমে ফিরে যান",
      guidingIn: "মার্গদর্শন ভাষা:",
      practicingIn: "অনুশীলন ভাষা:",
    },
    voiceInput: {
      permissionError: "মাইক্রোফোনের অনুমতি প্রয়োজন। নিচে লিখতেও পারেন!",
      hearError: "স্পষ্ট শোনা যায়নি। আবার চেষ্টা করুন বা নিচে লিখুন।",
      unsupportedError: "এই ব্রাউজারে ভয়েস সমর্থিত নয়। অনুগ্রহ করে নিচে লিখুন।",
      tryAsking: "এভাবে জিজ্ঞাসা করুন:",
      finishAndAsk: "সম্পন্ন, জিজ্ঞাসা করুন",
      listening: "শুনছি... অনুগ্রহ করে বলুন",
    },
    practiceMode: {
      disclaimer: "ডেমো / অনুশীলন — এটি আসল সরকারি ওয়েবসাইট নয়",
      progressLabel: (c, t) => `অনুশীলন ধাপ ${c} / ${t}`,
      simulationBadge: "সিমুলেশন",
      speakAnswer: "ভয়েসে উত্তর দিন",
      listening: "শুনছি...",
      correctTitle: "✓ একদম ঠিক!",
      tryAgainAdvice: "উপরের অন্য বিকল্প বেছে নিন। কোনো তাড়া নেই।",
      next: "পরবর্তী",
      explainAgain: "আবার বোঝান",
      officialUrlNote: "অফিসিয়াল সরকারি ওয়েবসাইট: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "৪টি নিরাপত্তা নিয়ম পড়ে শোনান",
      stopBtn: "থামান",
      readAloudBtn: "পড়ে শোনান",
      verifyAndOpen: "যাচাই করে খুলুন",
      yes: "হ্যাঁ",
      no: "না",
      officialOnlyBtn: "শুধুমাত্র অফিসিয়াল ডিজিলকারে যান",
    },
    aboutFooter: {
      empathyQuote: "গ্রামীণ ভারতের প্রথমবার স্মার্টফোন ব্যবহারকারী নারীদের জন্য নির্মিত যাদের কোনো প্রযুক্তিগত জ্ঞান বা সাহায্যকারী নেই।",
      resourcesTitle: "প্রয়োজনীয় লিঙ্ক",
      officialDigiLocker: "অফিসিয়াল ডিজিলকার",
      faqTitle: "অফিসিয়াল সাধারণ প্রশ্নোত্তর",
      nationalPortal: "ভারতের জাতীয় পোর্টাল",
      civicIntegrityTitle: "বিশ্বাস ও নিরাপত্তা",
      zeroStorageTitle: "তথ্য সংরক্ষণহীন (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI কোনো নথি বা ব্যক্তিগত তথ্য সংরক্ষণ করে না।",
      civicDisclaimer: "DigiSakhi AI কেবল একটি নির্দেশিকা। আসল সেবার জন্য সরকারি সাইট ব্যবহার করুন।",
      builtWithCare: "ডিজিটাল নাগরিকদের জন্য যত্নের সাথে নির্মিত",
    },
  },

  // 6. MARATHI (मराठी)
  mr: {
    nav: {
      home: "होम",
      practice: "आधी सराव करा",
      safety: "सुरक्षित राहा",
      guide: "डिजिलॉकर मार्गदर्शक",
      about: "बद्दल",
      stopVoice: "आवाज थांबवा",
      largerText: "मोठे अक्षर",
      highContrast: "हाय कॉन्ट्रास्ट",
      selectLanguageTitle: "तुमची भाषा निवडा (12)",
    },
    coreJourney: {
      title: "तुम्हाला कशी सुरुवात करायची आहे?",
      subtitle: "शिकणे → सराव → सुरक्षितता → सोपे मार्गदर्शन",
      practiceBadge: "आधी हे करा",
      practiceNote: "🔒 सुरक्षित सिम्युलेटेड डेमो · वैयक्तिक माहितीची गरज नाही",
      practiceBtn: "सुरक्षित सराव सुरू करा",
      safetyBadge: "फसवणुकीपासून सुरक्षा",
      safetyNote: "✓ ४ सुवर्ण नियम आणि त्वरित सुरक्षा तपासणी",
      safetyBtn: "सुरक्षा नियम पहा",
      guideBadge: "अधिकृत मार्गदर्शक",
      guideTitle: "डिजिलॉकर वापरा",
      guideDesc: "सरकारी कागदपत्रे मिळवण्यासाठी टप्प्याटप्प्याने सोप्या सूचना.",
      guideNote: "🏛️ ४ सोपे टप्पे · अधिकृत लिंक",
      guideBtn: "मार्गदर्शक सुरू करा",
    },
    hero: {
      officialAssistance: "अधिकृत डिजिलॉकर सहाय्य",
      civicQuote: "“क्लिक करता न येणे हा सरकारी सेवा मिळण्यात अडथळा ठरू नये.”",
      pillars: ["आवाज", "मातृभाषा", "टप्प्याटप्प्याने", "स्वावलंबन"],
      practiceBtn: "🎓 आधी सराव करा (डेमो)",
      guideBtn: "डिजिलॉकर मार्गदर्शक",
      voiceBtn: "आवाजाने विचारा",
    },
    guidedFlow: {
      letsDoThis: "चला एकत्र करूया",
      stop: "थांबवा",
      readAloud: "वाचून दाखवा",
      stepNames: ["उघडा", "खाते", "कागदपत्रे", "वापरा"],
      back: "मागे",
      nextStep: (s) => `पुढील: टप्पा ${s}`,
      home: "होम",
      whatToLookFor: "अधिकृत संकेतस्थळावर काय पहावे:",
      signUpTitle: "Sign Up (नवीन वापरकर्ता)",
      signUpDesc: "तुम्ही पहिल्यांदा वापरत असाल तर",
      signInTitle: "Sign In (आधीचे खाते)",
      signInDesc: "तुमचा मोबाईल नंबर व पिन वापरून",
      neverAskWarning: "DigiSakhi AI कधीही तुमचा OTP किंवा पासवर्ड मागत नाही. अधिकृत डिजिलॉकर संकेतस्थळावरच माहिती भरा.",
      returnHome: "← होमवर परत जा",
      guidingIn: "मार्गदर्शन भाषा:",
      practicingIn: "सराव भाषा:",
    },
    voiceInput: {
      permissionError: "माईकची परवानगी हवी. खाली लिहू शकता!",
      hearError: "स्पष्ट ऐकू आले नाही. पुन्हा प्रयत्न करा किंवा खाली लिहा.",
      unsupportedError: "या ब्राऊझरवर आवाज इनपुट उपलब्ध नाही. कृपया खाली लिहा.",
      tryAsking: "असे विचारून पहा:",
      finishAndAsk: "झाले, विचारा",
      listening: "ऐकत आहे... कृपया बोला",
    },
    practiceMode: {
      disclaimer: "डेमो / सराव — हे खरे सरकारी संकेतस्थळ नाही",
      progressLabel: (c, t) => `सराव टप्पा ${c} / ${t}`,
      simulationBadge: "सिम्युलेशन",
      speakAnswer: "आवाजाने उत्तर द्या",
      listening: "ऐकत आहे...",
      correctTitle: "✓ अगदी बरोबर!",
      tryAgainAdvice: "वरील पर्यायांमधून दुसरा पर्याय निवडा. घाई नाही.",
      next: "पुढील",
      explainAgain: "पुन्हा समजावून सांगा",
      officialUrlNote: "अधिकृत सरकारी संकेतस्थळ: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "४ सुरक्षा नियम ऐका",
      stopBtn: "थांबवा",
      readAloudBtn: "वाचून दाखवा",
      verifyAndOpen: "तपासा आणि उघडा",
      yes: "होय",
      no: "नाही",
      officialOnlyBtn: "फक्त अधिकृत डिजिलॉकरवर जा",
    },
    aboutFooter: {
      empathyQuote: "ग्रामीण भागातील ज्या भगिनींना इंग्रजी येत नाही आणि शिकवायला कोणी नाही त्यांच्यासाठी आत्मीयतेने तयार केलेले.",
      resourcesTitle: "महत्त्वाचे दुवे",
      officialDigiLocker: "अधिकृत डिजिलॉकर",
      faqTitle: "वारंवार विचारले जाणारे प्रश्न",
      nationalPortal: "भारताचे राष्ट्रीय पोर्टल",
      civicIntegrityTitle: "विश्वास आणि सुरक्षितता",
      zeroStorageTitle: "माहिती संकलन शून्य (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI कोणतीही कागदपत्रे किंवा वैयक्तिक माहिती साठवून ठेवत नाही.",
      civicDisclaimer: "DigiSakhi AI केवळ एक मार्गदर्शक साधन आहे. खऱ्या सेवांसाठी सरकारी संकेतस्थळ वापरा.",
      builtWithCare: "डिजिटल नागरिकांसाठी काळजीपूर्वक तयार केलेले",
    },
  },

  // 7. KANNADA (ಕನ್ನಡ)
  kn: {
    nav: {
      home: "ಮುಖಪುಟ",
      practice: "ಮೊದಲು ಅಭ್ಯಾಸ ಮಾಡಿ",
      safety: "ಸುರಕ್ಷಿತವಾಗಿರಿ",
      guide: "ಡಿಜಿಲಾಕರ್ ಮಾರ್ಗದರ್ಶಿ",
      about: "ಬಗ್ಗೆ",
      stopVoice: "ಧ್ವನಿ ನಿಲ್ಲಿಸಿ",
      largerText: "ದೊಡ್ಡ ಅಕ್ಷರ",
      highContrast: "ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್",
      selectLanguageTitle: "ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ (12)",
    },
    coreJourney: {
      title: "ನೀವು ಹೇಗೆ ಪ್ರಾರಂಭಿಸಲು ಬಯಸುತ್ತೀರಿ?",
      subtitle: "ಕಲಿಯಿರಿ → ಅಭ್ಯಾಸ → ಸುರಕ್ಷತೆ → ಸರಳ ಮಾರ್ಗದರ್ಶನ",
      practiceBadge: "ಮೊದಲು ಇದನ್ನು ಮಾಡಿ",
      practiceNote: "🔒 ಸುರಕ್ಷಿತ ಡೆಮೊ · ವೈಯಕ್ತಿಕ ವಿವರ ಅಗತ್ಯವಿಲ್ಲ",
      practiceBtn: "ಸುರಕ್ಷಿತ ಅಭ್ಯಾಸ ಪ್ರಾರಂಭಿಸಿ",
      safetyBadge: "ವಂಚನೆ ತಡೆಗಟ್ಟುವಿಕೆ",
      safetyNote: "✓ 4 ಮುಖ್ಯ ನಿಯಮಗಳು ಮತ್ತು ತ್ವರಿತ ಭದ್ರತಾ ತಪಾಸಣೆ",
      safetyBtn: "ಸುರಕ್ಷತಾ ನಿಯಮಗಳನ್ನು ನೋಡಿ",
      guideBadge: "ಅಧಿಕೃತ ಮಾರ್ಗದರ್ಶಿ",
      guideTitle: "ಡಿಜಿಲಾಕರ್ ಬಳಸಿ",
      guideDesc: "ಸರ್ಕಾರಿ ದಾಖಲೆಗಳನ್ನು ಪಡೆಯಲು ಹಂತ-ಹಂತದ ಸರಳ ಮಾರ್ಗದರ್ಶನ.",
      guideNote: "🏛️ 4 ಸರಳ ಹಂತಗಳು · ಅಧಿಕೃತ ಲಿಂಕ್",
      guideBtn: "ಮಾರ್ಗದರ್ಶಿ ಪ್ರಾರಂಭಿಸಿ",
    },
    hero: {
      officialAssistance: "ಅಧಿಕೃತ ಡಿಜಿಲಾಕರ್ ಸಹಾಯ",
      civicQuote: "“ಕ್ಲಿಕ್ ಮಾಡಲು ಬಾರದಿರುವುದು ಸರ್ಕಾರದ ಸೇವೆ ಪಡೆಯಲು ಅಡ್ಡಿಯಾಗಬಾರದು.”",
      pillars: ["ಧ್ವನಿ", "ಸ್ವಭಾಷೆ", "ಹಂತ-ಹಂತವಾಗಿ", "ಸ್ವಾವಲಂಬನೆ"],
      practiceBtn: "🎓 ಮೊದಲು ಅಭ್ಯಾಸ ಮಾಡಿ",
      guideBtn: "ಡಿಜಿಲಾಕರ್ ಮಾರ್ಗದರ್ಶಿ",
      voiceBtn: "ಧ್ವನಿಯ ಮೂಲಕ ಕೇಳಿ",
    },
    guidedFlow: {
      letsDoThis: "ಒಟ್ಟಿಗೆ ಮಾಡೋಣ ಬನ್ನಿ",
      stop: "ನಿಲ್ಲಿಸಿ",
      readAloud: "ಓದಿ ಹೇಳಿ",
      stepNames: ["ತೆರೆಯಿರಿ", "ಖಾತೆ", "ದಾಖಲೆಗಳು", "ಬಳಸಿ"],
      back: "ಹಿಂದೆ",
      nextStep: (s) => `ಮುಂದಿನದು: ಹಂತ ${s}`,
      home: "ಮುಖಪುಟ",
      whatToLookFor: "ಅಧಿಕೃತ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಗಮನಿಸಬೇಕಾದ ಅಂಶಗಳು:",
      signUpTitle: "Sign Up (ಹೊಸ ಬಳಕೆದಾರ)",
      signUpDesc: "ನೀವು ಮೊದಲ ಬಾರಿಗೆ ಬಳಸುತ್ತಿದ್ದರೆ",
      signInTitle: "Sign In (ಹಳೆಯ ಖಾತೆ)",
      signInDesc: "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಪಿನ್ ಮೂಲಕ",
      neverAskWarning: "DigiSakhi AI ನಿಮ್ಮ OTP ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಡಿಜಿಲಾಕರ್ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಮಾತ್ರ ವಿವರಗಳನ್ನು ನೀಡಿ.",
      returnHome: "← ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
      guidingIn: "ಮಾರ್ಗದರ್ಶನ ಭಾಷೆ:",
      practicingIn: "ಅಭ್ಯಾಸ ಭಾಷೆ:",
    },
    voiceInput: {
      permissionError: "ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿ ಬೇಕು. ನೀವು ಕೆಳಗೆ ಬರೆಯಬಹುದು!",
      hearError: "ಸ್ಪಷ್ಟವಾಗಿ ಕೇಳಿಸಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ಕೆಳಗೆ ಬರೆಯಿರಿ.",
      unsupportedError: "ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು ಕೆಳಗೆ ಬರೆಯಿರಿ.",
      tryAsking: "ಹೀಗೆ ಕೇಳಿ ನೋಡಿ:",
      finishAndAsk: "ಆಯಿತು, ಕೇಳಿ",
      listening: "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ... ದಯವಿಟ್ಟು ಮಾತನಾಡಿ",
    },
    practiceMode: {
      disclaimer: "ಡೆಮೊ / ಅಭ್ಯಾಸ — ಇದು ನಿಜವಾದ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ",
      progressLabel: (c, t) => `ಅಭ್ಯಾಸ ಹಂತ ${c} / ${t}`,
      simulationBadge: "ಸಿಮ್ಯುಲೇಶನ್",
      speakAnswer: "ಧ್ವನಿಯ ಮೂಲಕ ಉತ್ತರಿಸಿ",
      listening: "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ...",
      correctTitle: "✓ ಸರಿಯಾಗಿದೆ!",
      tryAgainAdvice: "ಮೇಲಿನ ಆಯ್ಕೆಗಳಲ್ಲಿ ಇನ್ನೊಂದನ್ನು ಆರಿಸಿ. ಆತುರವಿಲ್ಲ.",
      next: "ಮುಂದೆ",
      explainAgain: "ಮತ್ತೆ ವಿವರಿಸಿ",
      officialUrlNote: "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "4 ನಿಯಮಗಳನ್ನು ಓದಿ ಹೇಳಿ",
      stopBtn: "ನಿಲ್ಲಿಸಿ",
      readAloudBtn: "ಓದಿ ಹೇಳಿ",
      verifyAndOpen: "ಪರಿಶೀಲಿಸಿ ತೆರೆಯಿರಿ",
      yes: "ಹೌದು",
      no: "ಇಲ್ಲ",
      officialOnlyBtn: "ಅಧಿಕೃತ ಡಿಜಿಲಾಕರ್‌ಗೆ ಮಾತ್ರ ಹೋಗಿ",
    },
    aboutFooter: {
      empathyQuote: "ತಂತ್ರಜ್ಞಾನದ ಜ್ಞಾನವಿಲ್ಲದ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ತಿಳಿಯದ ಗ್ರಾಮೀಣ ಮಹಿಳೆಯರಿಗೆ ಸ್ವತಂತ್ರವಾಗಿ ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡಲು ರೂಪಿಸಲಾಗಿದೆ.",
      resourcesTitle: "ಮುಖ್ಯ ಕೊಂಡಿಗಳು",
      officialDigiLocker: "ಅಧಿಕೃತ ಡಿಜಿಲಾಕರ್",
      faqTitle: "ಅಧಿಕೃತ ಪ್ರಶ್ನೋತ್ತರಗಳು",
      nationalPortal: "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಪೋರ್ಟಲ್",
      civicIntegrityTitle: "ನಂಬಿಕೆ ಮತ್ತು ಸುರಕ್ಷತೆ",
      zeroStorageTitle: "ಡೇಟಾ ಸಂಗ್ರಹವಿಲ್ಲ (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI ಯಾವುದೇ ದಾಖಲೆಗಳು ಅಥವಾ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.",
      civicDisclaimer: "DigiSakhi AI ಕೇವಲ ಮಾರ್ಗದರ್ಶಿ. ನೈಜ ಸೇವೆಗಳಿಗಾಗಿ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಬಳಸಿ.",
      builtWithCare: "ಡಿಜಿಟಲ್ ನಾಗರಿಕರಿಗಾಗಿ ಪ್ರೀತಿಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ",
    },
  },

  // 8. MALAYALAM (മലയാളം)
  ml: {
    nav: {
      home: "ഹോം",
      practice: "ആദ്യം പരിശീലിക്കുക",
      safety: "സുരക്ഷിതരായിരിക്കുക",
      guide: "ഡിജിലോക്കർ ഗൈഡ്",
      about: "കുറിച്ച്",
      stopVoice: "ശബ്ദം നിർത്തുക",
      largerText: "വലിയ അക്ഷരങ്ങൾ",
      highContrast: "ഹൈ കോൺട്രാസ്റ്റ്",
      selectLanguageTitle: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക (12)",
    },
    coreJourney: {
      title: "നിങ്ങൾ എങ്ങനെ ആരംഭിക്കാൻ ആഗ്രഹിക്കുന്നു?",
      subtitle: "പഠനം → പരിശീലനം → സുരക്ഷ → ലളിതമായ വഴികാട്ടി",
      practiceBadge: "ആദ്യം ഇത് ചെയ്യുക",
      practiceNote: "🔒 സുരക്ഷിതമായ ഡെമോ · വ്യക്തിഗത വിവരങ്ങൾ ആവശ്യമില്ല",
      practiceBtn: "സുരക്ഷിത പരിശീലനം തുടങ്ങുക",
      safetyBadge: "തട്ടിപ്പുകളിൽ നിന്നുള്ള സംരക്ഷണം",
      safetyNote: "✓ 4 സുവർണ്ണ നിയമങ്ങളും സുരക്ഷാ പരിശോധനയും",
      safetyBtn: "സുരക്ഷാ നിയമങ്ങൾ കാണുക",
      guideBadge: "ഔദ്യോഗിക ഗൈഡ്",
      guideTitle: "ഡിജിലോക്കർ ഉപയോഗിക്കുക",
      guideDesc: "സർക്കാർ രേഖകൾ ലഭിക്കുന്നതിനുള്ള ലളിതമായ ഘട്ടങ്ങൾ.",
      guideNote: "🏛️ 4 ലളിതമായ ഘട്ടങ്ങൾ · ഔദ്യോഗിക ലിങ്ക്",
      guideBtn: "ഗൈഡ് ആരംഭിക്കുക",
    },
    hero: {
      officialAssistance: "ഔദ്യോഗിക ഡിജിലോക്കർ സഹായം",
      civicQuote: "“ക്ലിക്ക് ചെയ്യാൻ അറിയാത്തത് സർക്കാർ സേവനങ്ങൾ ലഭിക്കുന്നതിന് തടസ്സമാകരുത്.”",
      pillars: ["ശബ്ദം", "മാതൃഭാഷ", "ഘട്ടം ഘട്ടമായി", "സ്വാശ്രയത്വം"],
      practiceBtn: "🎓 ആദ്യം പരിശീലിക്കുക (ഡെമോ)",
      guideBtn: "ഡിജിലോക്കർ ഗൈഡ്",
      voiceBtn: "ശബ്ദത്തിലൂടെ ചോദിക്കുക",
    },
    guidedFlow: {
      letsDoThis: "നമുക്ക് ഒരുമിച്ച് ചെയ്യാം",
      stop: "നിർത്തുക",
      readAloud: "വായിച്ചു കേൾപ്പിക്കുക",
      stepNames: ["തുറക്കുക", "അക്കൗണ്ട്", "രേഖകൾ", "ഉപയോഗിക്കുക"],
      back: "പിന്നോട്ട്",
      nextStep: (s) => `അടുത്തത്: ഘട്ടം ${s}`,
      home: "ഹോം",
      whatToLookFor: "ഔദ്യോഗിക വെബ്സൈറ്റിൽ ശ്രദ്ധിക്കേണ്ട കാര്യങ്ങൾ:",
      signUpTitle: "Sign Up (പുതിയ ഉപയോക്താവ്)",
      signUpDesc: "നിങ്ങൾ ആദ്യമായാണ് ഉപയോഗിക്കുന്നതെങ്കിൽ",
      signInTitle: "Sign In (പഴയ അക്കൗണ്ട്)",
      signInDesc: "നിങ്ങളുടെ മൊബൈൽ നമ്പറും പിന്നും ഉപയോഗിച്ച്",
      neverAskWarning: "DigiSakhi AI ഒരിക്കലും നിങ്ങളുടെ OTP അല്ലെങ്കിൽ പാസ്‌വേഡ് ചോദിക്കില്ല. ഔദ്യോഗിക ഡിജിലോക്കർ വെബ്സൈറ്റിൽ മാത്രം ലോഗിൻ ചെയ്യുക.",
      returnHome: "← ഹോമിലേക്ക് മടങ്ങുക",
      guidingIn: "മാർഗ്ഗനിർദ്ദേശ ഭാഷ:",
      practicingIn: "പരിശീലന ഭാഷ:",
    },
    voiceInput: {
      permissionError: "മൈക്രോഫോൺ അനുമതി ആവശ്യമാണ്. താഴെ ടൈപ്പ് ചെയ്യാം!",
      hearError: "വ്യക്തമായി കേൾക്കാൻ കഴിഞ്ഞില്ല. വീണ്ടും ശ്രമിക്കുക അല്ലെങ്കിൽ താഴെ എഴുതുക.",
      unsupportedError: "ഈ ബ്രൗസറിൽ വോയ്‌സ് ഇൻപുട്ട് ലഭ്യമല്ല. ദയവായി താഴെ എഴുതുക.",
      tryAsking: "ഇങ്ങനെ ചോദിച്ചു നോക്കൂ:",
      finishAndAsk: "പൂർത്തിയായി, ചോദിക്കുക",
      listening: "കേൾക്കുന്നു... ദയവായി സംസാരിക്കൂ",
    },
    practiceMode: {
      disclaimer: "ഡെമോ / പരിശീലനം — ഇത് യഥാർത്ഥ സർക്കാർ വെബ്സൈറ്റ് അല്ല",
      progressLabel: (c, t) => `പരിശീലന ഘട്ടം ${c} / ${t}`,
      simulationBadge: "സിമുലേഷൻ",
      speakAnswer: "ശബ്ദത്തിലൂടെ മറുപടി പറയുക",
      listening: "കേൾക്കുന്നു...",
      correctTitle: "✓ ശരിയാണ്!",
      tryAgainAdvice: "മുകളിലെ മറ്റ് ഓപ്ഷനുകളിൽ ഒന്ന് തിരഞ്ഞെടുക്കുക. തിടുക്കമില്ല.",
      next: "അടുത്തത്",
      explainAgain: "വീണ്ടും വിശദീകരിക്കുക",
      officialUrlNote: "ഔദ്യോഗിക സർക്കാർ വെബ്സൈറ്റ്: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "4 സുരക്ഷാ നിയമങ്ങൾ വായിച്ചു കേൾപ്പിക്കുക",
      stopBtn: "നിർത്തുക",
      readAloudBtn: "വായിച്ചു കേൾപ്പിക്കുക",
      verifyAndOpen: "പരിശോധിച്ച് തുറക്കുക",
      yes: "അതെ",
      no: "അല്ല",
      officialOnlyBtn: "ഔദ്യോഗിക ഡിജിലോക്കറിൽ മാത്രം പോകുക",
    },
    aboutFooter: {
      empathyQuote: "സാങ്കേതിക പരിജ്ഞാനമില്ലാത്ത ഗ്രാമീണ സ്ത്രീകൾക്ക് സർക്കാർ സേവനങ്ങൾ സ്വതന്ത്രമായി ലഭ്യമാക്കാൻ വിഭാവനം ചെയ്തത്.",
      resourcesTitle: "പ്രധാന ലിങ്കുകൾ",
      officialDigiLocker: "ഔദ്യോഗിക ഡിജിലോക്കർ",
      faqTitle: "ഔദ്യോഗിക ചോദ്യോത്തരങ്ങൾ",
      nationalPortal: "ഇന്ത്യൻ ദേശീയ പോർട്ടൽ",
      civicIntegrityTitle: "വിശ്വാസ്യതയും സുരക്ഷയും",
      zeroStorageTitle: "വിവരങ്ങൾ സൂക്ഷിക്കുന്നില്ല (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI രേഖകളോ സ്വകാര്യ വിവരങ്ങളോ സംഭരിക്കുന്നില്ല.",
      civicDisclaimer: "DigiSakhi AI ഒരു വഴികാട്ടി മാത്രമാണ്. യഥാർത്ഥ സേവനങ്ങൾക്കായി സർക്കാർ സൈറ്റ് ഉപയോഗിക്കുക.",
      builtWithCare: "ഡിജിറ്റൽ പൗരന്മാർക്കായി കരുതലോടു കൂടി നിർമ്മിച്ചത്",
    },
  },

  // 9. GUJARATI (ગુજરાતી)
  gu: {
    nav: {
      home: "હોમ",
      practice: "પહેલાં અભ્યાસ કરો",
      safety: "સુરક્ષિત રહો",
      guide: "ડિજીલોકર માર્ગદર્શિકા",
      about: "વિશે",
      stopVoice: "અવાજ રોકો",
      largerText: "મોટા અક્ષરો",
      highContrast: "હાઇ કોન્ટ્રાસ્ટ",
      selectLanguageTitle: "તમારી ભાષા પસંદ કરો (12)",
    },
    coreJourney: {
      title: "તમે કેવી રીતે શરૂઆત કરવા માંગો છો?",
      subtitle: "શીખવું → અભ્યાસ → સુરક્ષા → સરળ માર્ગદર્શન",
      practiceBadge: "પહેલાં આ કરો",
      practiceNote: "🔒 સુરક્ષિત સિમ્યુલેટેડ ડેમો · અંગત વિગતોની જરૂર નથી",
      practiceBtn: "સુરક્ષિત અભ્યાસ શરૂ કરો",
      safetyBadge: "છેતરપિંડીથી રક્ષણ",
      safetyNote: "✓ 4 સુવર્ણ નિયમો અને સુરક્ષા તપાસ",
      safetyBtn: "સુરક્ષા નિયમો જુઓ",
      guideBadge: "સત્તાવાર માર્ગદર્શિકા",
      guideTitle: "ડિજીલોકર વાપરો",
      guideDesc: "સરકારી દસ્તાવેજો મેળવવા માટે પગલાંવાર સરળ સૂચનાઓ.",
      guideNote: "🏛️ 4 સરળ પગલાં · સત્તાવાર લિંક",
      guideBtn: "માર્ગદર્શિકા શરૂ કરો",
    },
    hero: {
      officialAssistance: "સત્તાવાર ડિજીલોકર સહાય",
      civicQuote: "“ક્લિક કરતાં ન આવડવું એ સરકારી સેવાઓ મેળવવામાં અડચણ ન બનવું જોઈએ.”",
      pillars: ["અવાજ", "માતૃભાષા", "પગલાંવાર", "સ્વાવલંબન"],
      practiceBtn: "🎓 પહેલાં અભ્યાસ કરો (ડેમો)",
      guideBtn: "ડિજીલોકર માર્ગદર્શિકા",
      voiceBtn: "અવાજથી પૂછો",
    },
    guidedFlow: {
      letsDoThis: "ચાલો સાથે મળીને કરીએ",
      stop: "રોકો",
      readAloud: "વાંચીને સંભળાવો",
      stepNames: ["ખોલો", "ખાતું", "દસ્તાવેજ", "ઉપયોગ"],
      back: "પાછળ",
      nextStep: (s) => `આગળ: પગલું ${s}`,
      home: "હોમ",
      whatToLookFor: "સત્તાવાર વેબસાઇટ પર શું જોવું:",
      signUpTitle: "Sign Up (નવા વપરાશકર્તા)",
      signUpDesc: "જો તમે પહેલી વાર વાપરતા હોવ",
      signInTitle: "Sign In (જૂનું ખાતું)",
      signInDesc: "તમારા મોબાઇલ નંબર અને ગુપ્ત પિન સાથે",
      neverAskWarning: "DigiSakhi AI ક્યારેય તમારો OTP કે પાસવર્ડ માંગતું નથી. સત્તાવાર ડિજીલોકર પર જ વિગતો દાખલ કરો.",
      returnHome: "← હોમ પર પાછા જાઓ",
      guidingIn: "માર્ગદર્શન ભાષા:",
      practicingIn: "અભ્યાસ ભાષા:",
    },
    voiceInput: {
      permissionError: "માઇક્રોફોનની મંજૂરી જરૂરી છે. નીચે લખી પણ શકો છો!",
      hearError: "સ્પષ્ટ સંભળાયું નહીં. ફરી પ્રયાસ કરો અથવા નીચે લખો.",
      unsupportedError: "આ બ્રાઉઝરમાં અવાજ ઇનપુટ ઉપલબ્ધ નથી. કૃપા કરીને નીચે લખો.",
      tryAsking: "આમ પૂછી જુઓ:",
      finishAndAsk: "પૂર્ણ થયું, પૂછો",
      listening: "સાંભળી રહ્યા છીએ... કૃપા કરીને બોલો",
    },
    practiceMode: {
      disclaimer: "ડેમો / અભ્યાસ — આ અસલી સરકારી વેબસાઇટ નથી",
      progressLabel: (c, t) => `અભ્યાસ પગલું ${c} / ${t}`,
      simulationBadge: "સિમ્યુલેશન",
      speakAnswer: "અવાજથી જવાબ આપો",
      listening: "સાંભળી રહ્યા છીએ...",
      correctTitle: "✓ એકદમ સાચું!",
      tryAgainAdvice: "ઉપરના વિકલ્પોમાંથી બીજો પસંદ કરો. કોઈ ઉતાવળ નથી.",
      next: "આગળ",
      explainAgain: "ફરીથી સમજાવો",
      officialUrlNote: "સત્તાવાર સરકારી વેબસાઇટ: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "4 સુરક્ષા નિયમો સાંભળો",
      stopBtn: "રોકો",
      readAloudBtn: "વાંચીને સંભળાવો",
      verifyAndOpen: "ચકાસીને ખોલો",
      yes: "હા",
      no: "ના",
      officialOnlyBtn: "માત્ર સત્તાવાર ડિજીલોકર પર જાઓ",
    },
    aboutFooter: {
      empathyQuote: "ગામડાની એવી બહેનો માટે જેમને અંગ્રેજી નથી આવડતું અને મદદ કરનાર કોઈ નથી, તેમના માટે સમર્પિત.",
      resourcesTitle: "મહત્વપૂર્ણ લિંક્સ",
      officialDigiLocker: "સત્તાવાર ડિજીલોકર",
      faqTitle: "વારંવાર પૂછાતા પ્રશ્નો",
      nationalPortal: "ભારતનું રાષ્ટ્રીય પોર્ટલ",
      civicIntegrityTitle: "વિશ્વાસ અને સલામતી",
      zeroStorageTitle: "માહિતી સંગ્રહ શૂન્ય (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI કોઈ દસ્તાવેજ કે અંગત માહિતી સાચવતું નથી.",
      civicDisclaimer: "DigiSakhi AI માત્ર એક માર્ગદર્શક સાધન છે. સાચી સેવા માટે સરકારી વેબસાઇટ વાપરો.",
      builtWithCare: "ડિજિટલ નાગરિકો માટે કાળજીપૂર્વક બનાવેલ",
    },
  },

  // 10. PUNJABI (ਪੰਜਾਬੀ)
  pa: {
    nav: {
      home: "ਹੋਮ",
      practice: "ਪਹਿਲਾਂ ਅਭਿਆਸ ਕਰੋ",
      safety: "ਸੁਰੱਖਿਅਤ ਰਹੋ",
      guide: "ਡਿਜੀਲਾਕਰ ਗਾਈਡ",
      about: "ਬਾਰੇ",
      stopVoice: "ਆਵਾਜ਼ ਰੋਕੋ",
      largerText: "ਵੱਡਾ ਟੈਕਸਟ",
      highContrast: "ਹਾਈ ਕੰਟ੍ਰਾਸਟ",
      selectLanguageTitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ (12)",
    },
    coreJourney: {
      title: "ਤੁਸੀਂ ਕਿਵੇਂ ਸ਼ੁਰੂਆਤ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
      subtitle: "ਸਿੱਖਣਾ → ਅਭਿਆਸ → ਸੁਰੱਖਿਆ → ਸੌਖੀ ਗਾਈਡ",
      practiceBadge: "ਪਹਿਲਾਂ ਇਹ ਕਰੋ",
      practiceNote: "🔒 ਸੁਰੱਖਿਅਤ ਡੈਮੋ · ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਦੀ ਲੋੜ ਨਹੀਂ",
      practiceBtn: "ਸੁਰੱਖਿਅਤ ਅਭਿਆਸ ਸ਼ੁਰੂ ਕਰੋ",
      safetyBadge: "ਧੋਖਾਧੜੀ ਤੋਂ ਬਚਾਅ",
      safetyNote: "✓ 4 ਸੁਨਹਿਰੀ ਨਿਯਮ ਅਤੇ ਸੁਰੱਖਿਆ ਜਾਂਚ",
      safetyBtn: "ਸੁਰੱਖਿਆ ਨਿਯਮ ਦੇਖੋ",
      guideBadge: "ਅਧਿਕਾਰਤ ਗਾਈਡ",
      guideTitle: "ਡਿਜੀਲਾਕਰ ਵਰਤੋ",
      guideDesc: "ਸਰਕਾਰੀ ਦਸਤਾਵੇਜ਼ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਕਦਮ-ਦਰ-ਕਦਮ ਸੇਧ।",
      guideNote: "🏛️ 4 ਆਸਾਨ ਕਦਮ · ਅਧਿਕਾਰਤ ਲਿੰਕ",
      guideBtn: "ਗਾਈਡ ਸ਼ੁਰੂ ਕਰੋ",
    },
    hero: {
      officialAssistance: "ਅਧਿਕਾਰਤ ਡਿਜੀਲਾਕਰ ਸਹਾਇਤਾ",
      civicQuote: "“ਕਲਿੱਕ ਕਰਨਾ ਨਾ ਆਉਣਾ ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਵਿੱਚ ਰੁਕਾਵਟ ਨਹੀਂ ਬਣਨਾ ਚਾਹੀਦਾ।”",
      pillars: ["ਆਵਾਜ਼", "ਮਾਂ-ਬੋਲੀ", "ਕਦਮ-ਦਰ-ਕਦਮ", "ਆਤਮਨਿਰਭਰ"],
      practiceBtn: "🎓 ਪਹਿਲਾਂ ਅਭਿਆਸ ਕਰੋ (ਡੈਮੋ)",
      guideBtn: "ਡਿਜੀਲਾਕਰ ਗਾਈਡ",
      voiceBtn: "ਆਵਾਜ਼ ਨਾਲ ਪੁੱਛੋ",
    },
    guidedFlow: {
      letsDoThis: "ਆਓ ਮਿਲ ਕੇ ਕਰੀਏ",
      stop: "ਰੋਕੋ",
      readAloud: "ਬੋਲ ਕੇ ਸੁਣਾਓ",
      stepNames: ["ਖੋਲ੍ਹੋ", "ਖਾਤਾ", "ਦਸਤਾਵੇਜ਼", "ਵਰਤੋਂ"],
      back: "ਪਿੱਛੇ",
      nextStep: (s) => `ਅਗਲਾ: ਕਦਮ ${s}`,
      home: "ਹੋਮ",
      whatToLookFor: "ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ 'ਤੇ ਕੀ ਵੇਖਣਾ ਹੈ:",
      signUpTitle: "Sign Up (ਨਵਾਂ ਖਾਤਾ)",
      signUpDesc: "ਜੇਕਰ ਤੁਸੀਂ ਪਹਿਲੀ ਵਾਰ ਵਰਤ ਰਹੇ ਹੋ",
      signInTitle: "Sign In (ਪੁਰਾਣਾ ਖਾਤਾ)",
      signInDesc: "ਆਪਣੇ ਮੋਬਾਈਲ ਨੰਬਰ ਅਤੇ ਪਿੰਨ ਨਾਲ",
      neverAskWarning: "DigiSakhi AI ਕਦੇ ਵੀ ਤੁਹਾਡਾ OTP ਜਾਂ ਪਾਸਵਰਡ ਨਹੀਂ ਮੰਗਦਾ। ਵੇਰਵੇ ਸਿਰਫ਼ ਅਧਿਕਾਰਤ ਵੈੱਬਸਾਈਟ 'ਤੇ ਦਿਓ।",
      returnHome: "← ਹੋਮ 'ਤੇ ਵਾਪਸ ਜਾਓ",
      guidingIn: "ਸੇਧ ਭਾਸ਼ਾ:",
      practicingIn: "ਅਭਿਆਸ ਭਾਸ਼ਾ:",
    },
    voiceInput: {
      permissionError: "ਮਾਈਕ ਦੀ ਇਜਾਜ਼ਤ ਚਾਹੀਦੀ ਹੈ। ਹੇਠਾਂ ਲਿਖ ਵੀ ਸਕਦੇ ਹੋ!",
      hearError: "ਸਾਫ਼ ਸੁਣਾਈ ਨਹੀਂ ਦਿੱਤਾ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ਹੇਠਾਂ ਲਿਖੋ।",
      unsupportedError: "ਇਸ ਬ੍ਰਾਊਜ਼ਰ 'ਤੇ ਆਵਾਜ਼ ਉਪਲਬਧ ਨਹੀਂ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਲਿਖੋ।",
      tryAsking: "ਇੰਝ ਪੁੱਛ ਕੇ ਦੇਖੋ:",
      finishAndAsk: "ਮੁਕੰਮਲ, ਪੁੱਛੋ",
      listening: "ਸੁਣ ਰਹੇ ਹਾਂ... ਕਿਰਪਾ ਕਰਕੇ ਬੋਲੋ",
    },
    practiceMode: {
      disclaimer: "ਡੈਮੋ / ਅਭਿਆਸ — ਇਹ ਅਸਲ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟ ਨਹੀਂ ਹੈ",
      progressLabel: (c, t) => `ਅਭਿਆਸ ਕਦਮ ${c} / ${t}`,
      simulationBadge: "ਸਿਮੂਲੇਸ਼ਨ",
      speakAnswer: "ਆਵਾਜ਼ ਨਾਲ ਜਵਾਬ ਦਿਓ",
      listening: "ਸੁਣ ਰਹੇ ਹਾਂ...",
      correctTitle: "✓ ਬਿਲਕੁਲ ਸਹੀ!",
      tryAgainAdvice: "ਉੱਪਰ ਦਿੱਤੇ ਵਿਕਲਪਾਂ ਵਿੱਚੋਂ ਕੋਈ ਹੋਰ ਚੁਣੋ। ਕੋਈ ਕਾਹਲੀ ਨਹੀਂ।",
      next: "ਅਗਲਾ",
      explainAgain: "ਦੁਬਾਰਾ ਸਮਝਾਓ",
      officialUrlNote: "ਅਧਿਕਾਰਤ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟ: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "4 ਸੁਰੱਖਿਆ ਨਿਯਮ ਸੁਣੋ",
      stopBtn: "ਰੋਕੋ",
      readAloudBtn: "ਬੋਲ ਕੇ ਸੁਣਾਓ",
      verifyAndOpen: "ਜਾਂਚੋ ਅਤੇ ਖੋਲ੍ਹੋ",
      yes: "ਹਾਂ",
      no: "ਨਹੀਂ",
      officialOnlyBtn: "ਸਿਰਫ਼ ਅਧਿਕਾਰਤ ਡਿਜੀਲਾਕਰ 'ਤੇ ਜਾਓ",
    },
    aboutFooter: {
      empathyQuote: "ਪੇਂਡੂ ਭਾਰਤ ਦੀਆਂ ਉਨ੍ਹਾਂ ਭੈਣਾਂ ਲਈ ਜਿਨ੍ਹਾਂ ਨੂੰ ਅੰਗਰੇਜ਼ੀ ਨਹੀਂ ਆਉਂਦੀ ਅਤੇ ਮਦਦ ਕਰਨ ਵਾਲਾ ਕੋਈ ਨਹੀਂ ਹੈ।",
      resourcesTitle: "ਜ਼ਰੂਰੀ ਲਿੰਕ",
      officialDigiLocker: "ਅਧਿਕਾਰਤ ਡਿਜੀਲਾਕਰ",
      faqTitle: "ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
      nationalPortal: "ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰੀ ਪੋਰਟਲ",
      civicIntegrityTitle: "ਭਰੋਸਾ ਅਤੇ ਸੁਰੱਖਿਆ",
      zeroStorageTitle: "ਡੇਟਾ ਸਟੋਰੇਜ ਜ਼ੀਰੋ (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI ਕੋਈ ਦਸਤਾਵੇਜ਼ ਜਾਂ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਸਟੋਰ ਨਹੀਂ ਕਰਦਾ।",
      civicDisclaimer: "DigiSakhi AI ਸਿਰਫ਼ ਇੱਕ ਮਾਰਗਦਰਸ਼ਕ ਟੂਲ ਹੈ। ਅਸਲ ਸੇਵਾਵਾਂ ਲਈ ਸਰਕਾਰੀ ਸਾਈਟ ਵਰਤੋ।",
      builtWithCare: "ਡਿਜੀਟਲ ਨਾਗਰਿਕਾਂ ਲਈ ਪਿਆਰ ਨਾਲ ਬਣਾਇਆ ਗਿਆ",
    },
  },

  // 11. ASSAMESE (অসমীয়া)
  as: {
    nav: {
      home: "হোম",
      practice: "প্ৰথমে অনুশীলন কৰক",
      safety: "সুৰক্ষিত থাকক",
      guide: "ডিজিলেকাৰ গাইড",
      about: "বিষয়ে",
      stopVoice: "কণ্ঠ বন্ধ কৰক",
      largerText: "ডাঙৰ আখৰ",
      highContrast: "হাই কন্ট্ৰাষ্ট",
      selectLanguageTitle: "আপোনাৰ ভাষা বাছক (12)",
    },
    coreJourney: {
      title: "আপুনি কেনেকৈ আৰম্ভ কৰিব বিচাৰে?",
      subtitle: "শিকক → অনুশীলন → সুৰক্ষা → সহজ নিৰ্দেশনা",
      practiceBadge: "প্ৰথমে এইটো কৰক",
      practiceNote: "🔒 সুৰক্ষিত ডেমো · কোনো ব্যক্তিগত তথ্যৰ প্ৰয়োজন নাই",
      practiceBtn: "সুৰক্ষিত অনুশীলন আৰম্ভ কৰক",
      safetyBadge: "প্ৰৱঞ্চনা প্ৰতিৰোধ",
      safetyNote: "✓ ৪টা মূল নিয়ম আৰু সুৰক্ষা পৰীক্ষা",
      safetyBtn: "সুৰক্ষা নিয়ম চাওক",
      guideBadge: "অফিচিয়েল গাইড",
      guideTitle: "ডিজিলেকাৰ ব্যৱহাৰ কৰক",
      guideDesc: "চৰকাৰী নথি পাবলৈ খোজ-অনুসৰি নিৰ্দেশনা।",
      guideNote: "🏛️ ৪টা সহজ খোজ · অফিচিয়েল লিংক",
      guideBtn: "গাইড আৰম্ভ কৰক",
    },
    hero: {
      officialAssistance: "অফিচিয়েল ডিজিলেকাৰ সহায়",
      civicQuote: "“ক্লিক কৰিব নজনাটো চৰকাৰী সেৱা পোৱাৰ বাধা হ'ব নালাগে।”",
      pillars: ["কণ্ঠ", "মাতৃভাষা", "ধাপে ধাপে", "স্বাৱলম্বী"],
      practiceBtn: "🎓 প্ৰথমে অনুশীলন কৰক (ডেমো)",
      guideBtn: "ডিজিলেকাৰ গাইড",
      voiceBtn: "মাতেৰে সোধক",
    },
    guidedFlow: {
      letsDoThis: "আহক একেলগে কৰোঁ",
      stop: "বন্ধ কৰক",
      readAloud: "পঢ়ি শুনক",
      stepNames: ["খোলক", "একাউণ্ট", "নথিপত্ৰ", "ব্যৱহাৰ"],
      back: "পিছলৈ",
      nextStep: (s) => `পৰৱৰ্তী: খোজ ${s}`,
      home: "হোম",
      whatToLookFor: "অফিচিয়েল ৱেবছাইটত কি চাব:",
      signUpTitle: "Sign Up (নতুন একাউণ্ট)",
      signUpDesc: "যদি প্ৰথমবাৰ ব্যৱহাৰ কৰিছে",
      signInTitle: "Sign In (পুৰণি একাউণ্ট)",
      signInDesc: "ম'বাইল নম্বৰ আৰু পিন ব্যৱহাৰ কৰি",
      neverAskWarning: "DigiSakhi AI এ কেতিয়াও আপোনাৰ OTP বা পাছৱৰ্ড নিবিচাৰে। অফিচিয়েল ৱেবছাইটতহে তথ্য প্ৰদান কৰক।",
      returnHome: "← হোম পৃষ্ঠা লৈ উভতি যাওক",
      guidingIn: "নিৰ্দেশনাৰ ভাষা:",
      practicingIn: "অনুশীলনৰ ভাষা:",
    },
    voiceInput: {
      permissionError: "মাইক্ৰ'ফোনৰ অনুমতি প্ৰয়োজন। তলত লিখিবও পাৰে!",
      hearError: "স্পষ্টকৈ শুনা নগল। পুনৰ চেষ্টা কৰক বা তলত লিখক।",
      unsupportedError: "এই ব্ৰাউজাৰত ভইচ ইনপুট উপলব্ধ নহয়। অনুগ্ৰহ কৰি তলত লিখক।",
      tryAsking: "এনেকৈ সুধি চাওক:",
      finishAndAsk: "সম্পূৰ্ণ, সোধক",
      listening: "শুনি আছোঁ... কওক",
    },
    practiceMode: {
      disclaimer: "ডেমো / অনুশীলন — এইটো আচল চৰকাৰী ৱেবছাইট নহয়",
      progressLabel: (c, t) => `অনুশীলন খোজ ${c} / ${t}`,
      simulationBadge: "চিমুলেচন",
      speakAnswer: "কণ্ঠৰে উত্তৰ দিয়ক",
      listening: "শুনি আছোঁ...",
      correctTitle: "✓ একেবাৰে সঠিক!",
      tryAgainAdvice: "ওপৰৰ বিকল্পসমূহৰ পৰা আন এটা বাছক। কোনো খৰখেদা নাই।",
      next: "পৰৱৰ্তী",
      explainAgain: "পুনৰ বুজাওক",
      officialUrlNote: "অফিচিয়েল চৰকাৰী ৱেবছাইট: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "৪টা সুৰক্ষা নিয়ম পঢ়ি শুনক",
      stopBtn: "বন্ধ কৰক",
      readAloudBtn: "পঢ়ি শুনক",
      verifyAndOpen: "পৰীক্ষা কৰি খোলক",
      yes: "হয়",
      no: "নহয়",
      officialOnlyBtn: "কেৱল অফিচিয়েল ডিজিলেকাৰত যাওক",
    },
    aboutFooter: {
      empathyQuote: "যিসকল গ্ৰাম্য মহিলাই ইংৰাজী নাজানে আৰু সহায় কৰিবলৈ কোনো নাই, তেওঁলোকৰ বাবে যত্নৰে তৈয়াৰ কৰা।",
      resourcesTitle: "প্ৰয়োজনীয় লিংক",
      officialDigiLocker: "অফিচিয়েল ডিজিলেকাৰ",
      faqTitle: "সঘনাই সোধা প্ৰশ্নসমূহ",
      nationalPortal: "ভাৰতৰ ৰাষ্ট্ৰীয় পৰ্টেল",
      civicIntegrityTitle: "বিশ্বাস আৰু নিৰাপত্তা",
      zeroStorageTitle: "তথ্য সংগ্ৰহহীন (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI এ কোনো নথি বা ব্যক্তিগত তথ্য সংৰক্ষণ নকৰে।",
      civicDisclaimer: "DigiSakhi AI কেৱল এটা সহায়ক পথপ্ৰদৰ্শক। আচল সেৱাৰ বাবে চৰকাৰী ছাইট ব্যৱহাৰ কৰক।",
      builtWithCare: "ডিজিটেল নাগৰিকসকলৰ বাবে সযতনে নিৰ্মিত",
    },
  },

  // 12. ODIA (ଓଡ଼ିଆ)
  or: {
    nav: {
      home: "ହୋମ୍",
      practice: "ପ୍ରଥମେ ଅଭ୍ୟାସ କରନ୍ତୁ",
      safety: "ସୁରକ୍ଷିତ ରୁହନ୍ତୁ",
      guide: "ଡିଜିଲକର୍ ଗାଇଡ୍",
      about: "ବିଷୟରେ",
      stopVoice: "ଭଏସ୍ ବନ୍ଦ କରନ୍ତୁ",
      largerText: "ବଡ଼ ଅକ୍ଷର",
      highContrast: "ହାଇ କଣ୍ଟ୍ରାଷ୍ଟ",
      selectLanguageTitle: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ (12)",
    },
    coreJourney: {
      title: "ଆପଣ କିପରି ଆରମ୍ଭ କରିବାକୁ ଚାହାଁନ୍ତି?",
      subtitle: "ଶିଖିବା → ଅଭ୍ୟାସ → ସୁରକ୍ଷା → ସହଜ ମାର୍ଗଦର୍ଶନ",
      practiceBadge: "ପ୍ରଥମେ ଏହା କରନ୍ତୁ",
      practiceNote: "🔒 ସୁରକ୍ଷିତ ଡେମୋ · ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ଆବଶ୍ୟକ ନାହିଁ",
      practiceBtn: "ସୁରକ୍ଷିତ ଅଭ୍ୟାସ ଆରମ୍ଭ କରନ୍ତୁ",
      safetyBadge: "ଠକାମିରୁ ରକ୍ଷା",
      safetyNote: "✓ ୪ଟି ମୂଳ ନିୟମ ଏବଂ ସୁରକ୍ଷା ଯାଞ୍ଚ",
      safetyBtn: "ସୁରକ୍ଷା ନିୟମ ଦେଖନ୍ତୁ",
      guideBadge: "ଅଫିସିଆଲ୍ ଗାଇଡ୍",
      guideTitle: "ଡିଜିଲକର୍ ବ୍ୟବହାର କରନ୍ତୁ",
      guideDesc: "ସରକାରୀ ପ୍ରମାଣପତ୍ର ପାଇବା ପାଇଁ ସରଳ ନିର୍ଦ୍ଦେଶନା।",
      guideNote: "🏛️ ୪ଟି ସହଜ ପଦକ୍ଷେପ · ଅଫିସିଆଲ୍ ଲିଙ୍କ୍",
      guideBtn: "ଗାଇଡ୍ ଆରମ୍ଭ କରନ୍ତୁ",
    },
    hero: {
      officialAssistance: "ଅଫିସିଆଲ୍ ଡିଜିଲକର୍ ସହାୟତା",
      civicQuote: "“କ୍ଲିକ୍ କରିବା ନ ଜାଣିବା ସରକାରୀ ସେବା ପାଇବାରେ ବାଧା ହେବା ଉଚିତ୍ ନୁହେଁ।”",
      pillars: ["ସ୍ୱର", "ମାତୃଭାଷା", "ଧାଡ଼ି ଧାଡ଼ି କରି", "ଆତ୍ମନିର୍ଭର"],
      practiceBtn: "🎓 ପ୍ରଥମେ ଅଭ୍ୟାସ କରନ୍ତୁ (ଡେମୋ)",
      guideBtn: "ଡିଜିଲକର୍ ଗାଇଡ୍",
      voiceBtn: "ସ୍ୱରରେ ପଚାରନ୍ତୁ",
    },
    guidedFlow: {
      letsDoThis: "ଆସନ୍ତୁ ଏକାଠି କରିବା",
      stop: "ବନ୍ଦ କରନ୍ତୁ",
      readAloud: "ପଢ଼ି ଶୁଣାନ୍ତୁ",
      stepNames: ["ଖୋଲନ୍ତୁ", "ଖାତା", "କାଗଜପତ୍ର", "ବ୍ୟବହାର"],
      back: "ପଛକୁ",
      nextStep: (s) => `ପରବର୍ତ୍ତୀ: ପଦକ୍ଷେପ ${s}`,
      home: "ହୋମ୍",
      whatToLookFor: "ଅଫିସିଆଲ୍ ୱେବସାଇଟରେ କ'ଣ ଦେଖିବେ:",
      signUpTitle: "Sign Up (ନୂଆ ଖାତା)",
      signUpDesc: "ଯଦି ଆପଣ ପ୍ରଥମ ଥର ବ୍ୟବହାର କରୁଛନ୍ତି",
      signInTitle: "Sign In (ପୁରୁଣା ଖାତା)",
      signInDesc: "ଆପଣଙ୍କ ମୋବାଇଲ୍ ନମ୍ବର ଏବଂ ପିନ୍ ସହିତ",
      neverAskWarning: "DigiSakhi AI କେବେବି ଆପଣଙ୍କ OTP କିମ୍ବା ପାସୱାର୍ଡ ମାଗେ ନାହିଁ। କେବଳ ଅଫିସିଆଲ୍ ୱେବସାଇଟରେ ତଥ୍ୟ ଦିଅନ୍ତୁ।",
      returnHome: "← ହୋମ୍ କୁ ଫେରନ୍ତୁ",
      guidingIn: "ମାର୍ଗଦର୍ଶନ ଭାଷା:",
      practicingIn: "ଅଭ୍ୟାସ ଭାଷା:",
    },
    voiceInput: {
      permissionError: "ମାଇକ୍ରୋଫୋନ୍ ଅନୁମତି ଦରକାର। ତଳେ ଲେଖି ମଧ୍ୟ ପାରିବେ!",
      hearError: "ସ୍ପଷ୍ଟ ଶୁଣାଗଲା ନାହିଁ। ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ କିମ୍ବା ତଳେ ଲେଖନ୍ତୁ।",
      unsupportedError: "ଏହି ବ୍ରାଉଜରରେ ଭଏସ୍ ଉପଲବ୍ଧ ନାହିଁ। ଦୟାକରି ତଳେ ଲେଖନ୍ତୁ।",
      tryAsking: "ଏମିତି ପଚାରି ଦେଖନ୍ତୁ:",
      finishAndAsk: "ସରିଲା, ପଚାରନ୍ତୁ",
      listening: "ଶୁଣୁଛୁ... ଦୟାକରି କୁହନ୍ତୁ",
    },
    practiceMode: {
      disclaimer: "ଡେମୋ / ଅଭ୍ୟାସ — ଏହା ଅସଲ ସରକାରୀ ୱେବସାଇଟ୍ ନୁହେଁ",
      progressLabel: (c, t) => `ଅଭ୍ୟାସ ପଦକ୍ଷେପ ${c} / ${t}`,
      simulationBadge: "ସିମୁଲେସନ୍",
      speakAnswer: "ସ୍ୱରରେ ଉତ୍ତର ଦିଅନ୍ତୁ",
      listening: "ଶୁଣୁଛୁ...",
      correctTitle: "✓ ଏକଦମ୍ ଠିକ୍!",
      tryAgainAdvice: "ଉପର ବିକଳ୍ପରୁ ଅନ୍ୟଟି ବାଛନ୍ତୁ। କୌଣସି ବ୍ୟସ୍ତତା ନାହିଁ।",
      next: "ପରବର୍ତ୍ତୀ",
      explainAgain: "ପୁଣି ବୁଝାନ୍ତୁ",
      officialUrlNote: "ଅଫିସିଆଲ୍ ସରକାରୀ ୱେବସାଇଟ୍: https://www.digilocker.gov.in/",
    },
    safetySection: {
      readAloudRules: "୪ଟି ସୁରକ୍ଷା ନିୟମ ପଢ଼ି ଶୁଣାନ୍ତୁ",
      stopBtn: "ବନ୍ଦ କରନ୍ତୁ",
      readAloudBtn: "ପଢ଼ି ଶୁଣାନ୍ତୁ",
      verifyAndOpen: "ଯାଞ୍ଚ କରି ଖୋଲନ୍ତୁ",
      yes: "ହଁ",
      no: "ନାହିଁ",
      officialOnlyBtn: "କେବଳ ଅଫିସିଆଲ୍ ଡିଜିଲକରକୁ ଯାଆନ୍ତୁ",
    },
    aboutFooter: {
      empathyQuote: "ଇଂରାଜୀ ନ ଜାଣିଥିବା ଏବଂ ସାହାଯ୍ୟ କରିବାକୁ କେହି ନ ଥିବା ଗ୍ରାମୀଣ ମହିଳାମାନଙ୍କ ପାଇଁ ସହାନୁଭୂତିର ସହ ପ୍ରସ୍ତୁତ।",
      resourcesTitle: "ଆବଶ୍ୟକୀୟ ଲିଙ୍କ୍",
      officialDigiLocker: "ଅଫିସିଆଲ୍ ଡିଜିଲକର୍",
      faqTitle: "ସାଧାରଣ ପ୍ରଶ୍ନୋତ୍ତର",
      nationalPortal: "ଭାରତର ଜାତୀୟ ପୋର୍ଟାଲ୍",
      civicIntegrityTitle: "ବିଶ୍ୱାସ ଏବଂ ସୁରକ୍ଷା",
      zeroStorageTitle: "ତଥ୍ୟ ସଂଗ୍ରହ ଶୂନ (Zero Storage)",
      zeroStorageDesc: "DigiSakhi AI କୌଣସି କାଗଜପତ୍ର ବା ବ୍ୟକ୍ତିଗତ ତଥ୍ୟ ସାଇତି ରଖେ ନାହିଁ।",
      civicDisclaimer: "DigiSakhi AI କେବଳ ଏକ ସହାୟକ ଉପକରଣ। ଅସଲ ସେବା ପାଇଁ ସରକାରୀ ୱେବସାଇଟ୍ ବ୍ୟବହାର କରନ୍ତୁ।",
      builtWithCare: "ଡିଜିଟାଲ୍ ନାଗରିକଙ୍କ ପାଇଁ ଯତ୍ନର ସହିତ ନିର୍ମିତ",
    },
  },
};

export const EXTRA_TRANSLATIONS: Record<string, {
  languageSelector: UITranslation['languageSelector'];
  actionGrid: UITranslation['actionGrid'];
  trustCard: UITranslation['trustCard'];
  demoHelper: UITranslation['demoHelper'];
  voiceHeardNotice: (transcript: string) => string;
}> = {
  // 1. TAMIL (தமிழ்)
  ta: {
    languageSelector: {
      heading: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
      subtitle: "12 இந்திய மொழிகளில் குரல் மற்றும் எளிய வழிகாட்டல்",
      voiceReady: "குரல் தயார்",
    },
    actionGrid: {
      sectionTitle: "நேரடி வழிகாட்டிகள்",
      sectionSubtitle: "விரும்பும் படியைத் தொடவும்",
      openGuide: "வழிகாட்டியைத் திறக்க",
    },
    trustCard: {
      badge: "100% பாதுகாப்பானது & சேமிப்பற்றது",
      disclaimer: "DigiSakhi AI ஒரு சுயாதீன கல்வி வழிகாட்டி, இது அரசு போர்டல் அல்ல.",
      distinctionTitle: "தெளிவான வேறுபாடு: இங்கு என்ன நடக்கிறது vs. டிஜிலாக்கரில் என்ன நடக்கிறது",
      guideTitle: "📖 DigiSakhi AI வழிகாட்டி",
      guidePoints: [
        "உங்கள் தாய்மொழியில் என்ன செய்ய வேண்டும் என்று விளக்குகிறது",
        "குரல் வழிகாட்டுதலுடன் படிப்படியாகக் கற்பிக்கிறது",
        "தொழில்நுட்ப சொற்கள் இன்றி உங்கள் கேள்விகளுக்குப் பதிலளிக்கிறது",
        "கைபேசி எண், கடவுச்சொல் அல்லது OTP ஒருபோதும் கேட்காது",
      ],
      officialTitle: "🏛️ அதிகாரப்பூர்வ டிஜிலாக்கர் இணையதளம்",
      officialPoints: [
        "digilocker.gov.in இல் மட்டுமே இயங்குகிறது",
        "உங்கள் கைபேசி எண் மற்றும் ஆதார் OTP-யை இங்கு மட்டுமே உள்ளிடவும்",
        "அரசு அமைப்புகளால் சான்றிதழ்கள் நேரடியாக வழங்கப்படுகின்றன",
        "உங்கள் அதிகாரப்பூர்வ ஆவணங்களைப் பார்க்கவும், பதிவிறக்கவும் மற்றும் பகிரவும்",
      ],
    },
    demoHelper: {
      title: "விரைவு சோதனை முறை",
      hideOptions: "மறைக்க",
      showTests: "1-கிளிக் சோதனைகள்",
      desc: "மைக் இல்லாமலேயே டிஜிசகி AI-யின் பலமொழி இயங்குமுறையை உடனே சோதிக்கவும்:",
    },
    voiceHeardNotice: (h: string) => `கேட்கப்பட்டது: "${h}". கீழே உள்ள விருப்பத்தைத் தொடவும்.`,
  },

  // 2. HINDI (हिन्दी)
  hi: {
    languageSelector: {
      heading: "अपनी भाषा चुनें",
      subtitle: "12 भारतीय भाषाओं में आवाज़ और सरल मार्गदर्शन",
      voiceReady: "आवाज़ तैयार",
    },
    actionGrid: {
      sectionTitle: "त्वरित कार्य विकल्प",
      sectionSubtitle: "आवश्यक चरण चुनने के लिए टैप करें",
      openGuide: "चरण गाइड खोलें",
    },
    trustCard: {
      badge: "100% सुरक्षित और डेटा-रहित",
      disclaimer: "DigiSakhi AI एक स्वतंत्र शैक्षिक मार्गदर्शक है, कोई सरकारी पोर्टल नहीं।",
      distinctionTitle: "स्पष्ट अंतर: यहाँ क्या होता है vs. डिजीलॉकर पर क्या होता है",
      guideTitle: "📖 DigiSakhi AI डिजिटल गाइड",
      guidePoints: [
        "आपकी मातृभाषा में क्या करना है यह समझाता है",
        "आवाज़ के मार्गदर्शन से कदम-दर-कदम सिखाता है",
        "कठिन तकनीकी शब्दों के बिना आपके सवालों के जवाब देता है",
        "मोबाइल नंबर, पासवर्ड या OTP कभी नहीं माँगता",
      ],
      officialTitle: "🏛️ आधिकारिक डिजीलॉकर वेबसाइट",
      officialPoints: [
        "केवल digilocker.gov.in पर संचालित होता है",
        "अपना मोबाइल नंबर और आधार OTP केवल यहीं दर्ज करें",
        "सरकारी निकायों द्वारा आधिकारिक प्रमाण पत्र सीधे जारी किए जाते हैं",
        "अपने आधिकारिक दस्तावेज़ देखें, डाउनलोड करें और साझा करें",
      ],
    },
    demoHelper: {
      title: "त्वरित परीक्षण मोड",
      hideOptions: "छिपाएँ",
      showTests: "1-क्लिक परीक्षण",
      desc: "बिना माइक के डिजीसखी AI के बहुभाषी प्रवाह का तुरंत परीक्षण करें:",
    },
    voiceHeardNotice: (h: string) => `सुनाई दिया: "${h}". कृपया नीचे दिए गए विकल्प पर टैप करें।`,
  },

  // 3. ENGLISH
  en: {
    languageSelector: {
      heading: "Choose your language",
      subtitle: "12 Indian languages supported with voice & step-by-step guidance",
      voiceReady: "Voice Ready",
    },
    actionGrid: {
      sectionTitle: "Quick Action Guides",
      sectionSubtitle: "Tap to open the specific step",
      openGuide: "Open Step Guide",
    },
    trustCard: {
      badge: "100% Non-Custodial & Safe",
      disclaimer: "DigiSakhi AI is an independent educational guide, not a government portal.",
      distinctionTitle: "Clear distinction: What happens here vs. What happens on DigiLocker",
      guideTitle: "📖 DigiSakhi AI Digital Guide",
      guidePoints: [
        "Explains what to do in your mother tongue",
        "Teaches step-by-step with voice guidance",
        "Answers your questions without technical words",
        "Does NOT ask for phone numbers, passwords or OTPs",
      ],
      officialTitle: "🏛️ Official DigiLocker Website",
      officialPoints: [
        "Hosted on digilocker.gov.in",
        "Enter your mobile number and Aadhaar OTP ONLY here",
        "Official certificates issued directly by government bodies",
        "View, download and share your official documents",
      ],
    },
    demoHelper: {
      title: "Quick Trial & Evaluation Mode",
      hideOptions: "Hide Options",
      showTests: "Show 1-Click Tests",
      desc: "Instantly test DigiSakhi AI's multilingual natural language pipeline without needing a microphone:",
    },
    voiceHeardNotice: (h: string) => `Heard: "${h}". Please tap an option below.`,
  },

  // 4. TELUGU (తెలుగు)
  te: {
    languageSelector: {
      heading: "మీ భాషను ఎంచుకోండి",
      subtitle: "12 భారతీయ భాషల్లో వాయిస్ మరియు సులభమైన మార్గదర్శకత్వం",
      voiceReady: "వాయిస్ సిద్ధం",
    },
    actionGrid: {
      sectionTitle: "త్వరిత కార్యాచరణ గైడ్లు",
      sectionSubtitle: "నిర్దిష్ట దశను తెరవడానికి నొక్కండి",
      openGuide: "దశల గైడ్ తెరవండి",
    },
    trustCard: {
      badge: "100% సురక్షితం & డేటా రహితం",
      disclaimer: "DigiSakhi AI ఒక స్వతంత్ర విద్యా గైడ్, ప్రభుత్వ పోర్టల్ కాదు.",
      distinctionTitle: "స్పష్టమైన వ్యత్యాసం: ఇక్కడ ఏమి జరుగుతుంది vs. డిజిలాకర్‌లో ఏమి జరుగుతుంది",
      guideTitle: "📖 DigiSakhi AI డిజిటల్ గైడ్",
      guidePoints: [
        "మీ మాతృభాషలో ఏమి చేయాలో వివరిస్తుంది",
        "వాయిస్ మార్గదర్శకత్వంతో దశలవారీగా నేర్పుతుంది",
        "కఠినమైన సాంకేతిక పదాలు లేకుండా ప్రశ్నలకు సమాధానమిస్తుంది",
        "ఫోన్ నంబర్లు, పాస్‌వర్డ్‌లు లేదా OTPలను ఎప్పుడూ అడగదు",
      ],
      officialTitle: "🏛️ అధికారిక డిజిలాకర్ వెబ్‌సైట్",
      officialPoints: [
        "digilocker.gov.in లో మాత్రమే అందుబాటులో ఉంటుంది",
        "మీ మొబైల్ నంబర్ మరియు ఆధార్ OTPని ఇక్కడ మాత్రమే నమోదు చేయండి",
        "ప్రభుత్వ సంస్థలు నేరుగా అధికారిక ధృవీకరణ పత్రాలను జారీ చేస్తాయి",
        "మీ అధికారిక పత్రాలను చూడండి, డౌన్‌లోడ్ చేయండి మరియు పంచుకోండి",
      ],
    },
    demoHelper: {
      title: "త్వరిత ట్రయల్ & మూల్యాంకనం",
      hideOptions: "దాచండి",
      showTests: "1-క్లిక్ పరీక్షలు",
      desc: "మైక్రోఫోన్ లేకుండా DigiSakhi AI సహజ భాషా ప్రవాహాన్ని వెంటనే పరీక్షించండి:",
    },
    voiceHeardNotice: (h: string) => `వినబడింది: "${h}". దయచేసి క్రింది ఎంపికను నొక్కండి.`,
  },

  // 5. BENGALI (বাংলা)
  bn: {
    languageSelector: {
      heading: "আপনার ভাষা নির্বাচন করুন",
      subtitle: "১২টি ভারতীয় ভাষায় ভয়েস এবং ধাপে ধাপে নির্দেশনা",
      voiceReady: "ভয়েস প্রস্তুত",
    },
    actionGrid: {
      sectionTitle: "দ্রুত কাজের গাইড",
      sectionSubtitle: "নির্দিষ্ট ধাপে যেতে ট্যাপ করুন",
      openGuide: "গাইড খুলুন",
    },
    trustCard: {
      badge: "১০০% নিরাপদ ও তথ্য-সংগ্রহহীন",
      disclaimer: "DigiSakhi AI একটি স্বতন্ত্র শিক্ষামূলক নির্দেশিকা, কোনও সরকারি পোর্টাল নয়।",
      distinctionTitle: "পরিষ্কার পার্থক্য: এখানে কী হয় বনাম ডিজিলকারে কী হয়",
      guideTitle: "📖 DigiSakhi AI ডিজিটাল গাইড",
      guidePoints: [
        "আপনার মাতৃভাষায় কী করতে হবে তা ব্যাখ্যা করে",
        "ভয়েস সহায়তায় ধাপে ধাপে শেখায়",
        "কঠিন প্রযুক্তিগত শব্দ ছাড়াই প্রশ্নের উত্তর দেয়",
        "ফোন নম্বর, পাসওয়ার্ড বা ওটিপি কখনোই চায় না",
      ],
      officialTitle: "🏛️ অফিশিয়াল ডিজিলকার ওয়েবসাইট",
      officialPoints: [
        "শুধুমাত্র digilocker.gov.in-এ পরিচালিত হয়",
        "আপনার মোবাইল নম্বর এবং আধার ওটিপি কেবল এখানেই লিখুন",
        "সরকারি দপ্তর সরাসরি আসল সার্টিফিকেট প্রদান করে",
        "আপনার আসল নথি দেখুন, ডাউনলোড করুন এবং শেয়ার করুন",
      ],
    },
    demoHelper: {
      title: "দ্রুত ট্রায়াল ও মূল্যায়ন",
      hideOptions: "লুকান",
      showTests: "১-ক্লিক টেস্ট",
      desc: "মাইক্রোফোন ছাড়াই DigiSakhi AI-এর বহুভাষিক ভয়েস মডেল পরীক্ষা করুন:",
    },
    voiceHeardNotice: (h: string) => `শোনা গেছে: "${h}"। অনুগ্রহ করে নিচের একটি বিকল্পে ট্যাপ করুন।`,
  },

  // 6. MARATHI (मराठी)
  mr: {
    languageSelector: {
      heading: "तुमची भाषा निवडा",
      subtitle: "१२ भारतीय भाषांमध्ये आवाज आणि सोपे मार्गदर्शन",
      voiceReady: "आवाज सज्ज",
    },
    actionGrid: {
      sectionTitle: "जलद कृती पर्याय",
      sectionSubtitle: "विशिष्ट पायरी उघडण्यासाठी टॅप करा",
      openGuide: "पायरी मार्गदर्शक उघडा",
    },
    trustCard: {
      badge: "१००% सुरक्षित आणि डेटा-रहित",
      disclaimer: "DigiSakhi AI हे एक स्वतंत्र शैक्षणिक मार्गदर्शक आहे, सरकारी पोर्टल नाही.",
      distinctionTitle: "स्पष्ट फरक: येथे काय होते vs. डिजीलॉकरवर काय होते",
      guideTitle: "📖 DigiSakhi AI डिजिटल मार्गदर्शक",
      guidePoints: [
        "तुमच्या मातृभाषेत काय करायचे ते समजावून सांगते",
        "आवाजाच्या साहाय्याने टप्प्याटप्प्याने शिकवते",
        "तांत्रिक शब्दांशिवाय सोप्या भाषेत उत्तरे देते",
        "मोबाईल नंबर, पासवर्ड किंवा OTP कधीही मागत नाही",
      ],
      officialTitle: "🏛️ अधिकृत डिजीलॉकर संकेतस्थळ",
      officialPoints: [
        "केवळ digilocker.gov.in वर उपलब्ध आहे",
        "तुमचा मोबाईल नंबर आणि आधार OTP फक्त येथेच टाका",
        "सरकारी विभागांकडून थेट अधिकृत प्रमाणपत्रे दिली जातात",
        "तुमची अधिकृत कागदपत्रे पहा, डाउनलोड करा आणि शेअर करा",
      ],
    },
    demoHelper: {
      title: "जलद चाचणी मोड",
      hideOptions: "लपवा",
      showTests: "१-क्लिक चाचणी",
      desc: "माईकशिवाय DigiSakhi AI च्या बहुभाषिक क्षमतेची त्वरित चाचणी घ्या:",
    },
    voiceHeardNotice: (h: string) => `ऐकले: "${h}". कृपया खालील पर्यायावर टॅप करा.`,
  },

  // 7. KANNADA (ಕನ್ನಡ)
  kn: {
    languageSelector: {
      heading: "ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      subtitle: "12 ಭಾರತೀಯ ಭಾಷೆಗಳಲ್ಲಿ ಧ್ವನಿ ಮತ್ತು ಸರಳ ಮಾರ್ಗದರ್ಶನ",
      voiceReady: "ಧ್ವನಿ ಸಿದ್ಧವಾಗಿದೆ",
    },
    actionGrid: {
      sectionTitle: "ತ್ವರಿತ ಕ್ರಿಯೆಗಳ ಮಾರ್ಗದರ್ಶಿ",
      sectionSubtitle: "ನಿರ್ದಿಷ್ಟ ಹಂತವನ್ನು ತೆರೆಯಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
      openGuide: "ಹಂತದ ಮಾರ್ಗದರ್ಶಿ ತೆರೆಯಿರಿ",
    },
    trustCard: {
      badge: "100% ಸುರಕ್ಷಿತ ಮತ್ತು ಡೇಟಾ ಸಂಗ್ರಹವಿಲ್ಲ",
      disclaimer: "DigiSakhi AI ಸ್ವತಂತ್ರ ಶೈಕ್ಷಣಿಕ ಮಾರ್ಗದರ್ಶಿಯಾಗಿದೆ, ಇದು ಸರ್ಕಾರದ ಪೋರ್ಟಲ್ ಅಲ್ಲ.",
      distinctionTitle: "ಸ್ಪಷ್ಟ ವ್ಯತ್ಯಾಸ: ಇಲ್ಲಿ ಏನು ನಡೆಯುತ್ತದೆ vs. ಡಿಜಿಲಾಕರ್‌ನಲ್ಲಿ ಏನು ನಡೆಯುತ್ತದೆ",
      guideTitle: "📖 DigiSakhi AI ಡಿಜಿಟಲ್ ಮಾರ್ಗದರ್ಶಿ",
      guidePoints: [
        "ನಿಮ್ಮ ಮಾತೃಭಾಷೆಯಲ್ಲಿ ಏನು ಮಾಡಬೇಕೆಂದು ವಿವರಿಸುತ್ತದೆ",
        "ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಹಂತ ಹಂತವಾಗಿ ಕಲಿಸುತ್ತದೆ",
        "ತಾಂತ್ರಿಕ ಪದಗಳಿಲ್ಲದೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತದೆ",
        "ಫೋನ್ ಸಂಖ್ಯೆ, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಒಟಿಪಿಯನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ",
      ],
      officialTitle: "🏛️ ಅಧಿಕೃತ ಡಿಜಿಲಾಕರ್ ವೆಬ್‌ಸೈಟ್",
      officialPoints: [
        "digilocker.gov.in ನಲ್ಲಿ ಮಾತ್ರ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ",
        "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಆಧಾರ್ ಒಟಿಪಿಯನ್ನು ಇಲ್ಲಿ ಮಾತ್ರ ನಮೂದಿಸಿ",
        "ಸರ್ಕಾರಿ ಇಲಾಖೆಗಳು ನೇರವಾಗಿ ಅಧಿಕೃತ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ನೀಡುತ್ತವೆ",
        "ನಿಮ್ಮ ಅಧಿಕೃತ ದಾಖಲೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ, ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಿ",
      ],
    },
    demoHelper: {
      title: "ತ್ವರಿತ ಪ್ರಯೋಗ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ",
      hideOptions: "ಮರೆಮಾಡಿ",
      showTests: "1-ಕ್ಲಿಕ್ ಪರೀಕ್ಷೆಗಳು",
      desc: "ಮೈಕ್ರೊಫೋನ್ ಇಲ್ಲದೆಯೇ DigiSakhi AI ನ ಬಹುಭಾಷಾ ಸಾಮರ್ಥ್ಯವನ್ನು ಪರೀಕ್ಷಿಸಿ:",
    },
    voiceHeardNotice: (h: string) => `ಕೇಳಿಸಿದೆ: "${h}". ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಆಯ್ಕೆಯನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.`,
  },

  // 8. MALAYALAM (മലയാളം)
  ml: {
    languageSelector: {
      heading: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
      subtitle: "12 ഇന്ത്യൻ ഭാഷകളിൽ ശബ്ദവും ലളിതമായ മാർഗ്ഗനിർദ്ദേശവും",
      voiceReady: "ശബ്ദം തയ്യാറാണ്",
    },
    actionGrid: {
      sectionTitle: "ദ്രുത പ്രവർത്തന സഹായി",
      sectionSubtitle: "ആവശ്യമായ ഘട്ടം തുറക്കാൻ ടാപ്പ് ചെയ്യുക",
      openGuide: "ഘട്ടം ഗൈഡ് തുറക്കുക",
    },
    trustCard: {
      badge: "100% സുരക്ഷിതം & ഡാറ്റ രഹിതം",
      disclaimer: "DigiSakhi AI ഒരു സ്വതന്ത്ര വിദ്യാഭ്യാസ സഹായിയാണ്, സർക്കാർ പോർട്ടലല്ല.",
      distinctionTitle: "വ്യക്തമായ വ്യത്യാസം: ഇവിടെ എന്താണ് നടക്കുന്നത് vs. ഡിജിലോക്കറിൽ എന്താണ് നടക്കുന്നത്",
      guideTitle: "📖 DigiSakhi AI ഡിജിറ്റൽ ഗൈഡ്",
      guidePoints: [
        "നിങ്ങളുടെ മാതൃഭാഷയിൽ എന്തുചെയ്യണമെന്ന് വിശദീകരിക്കുന്നു",
        "ശബ്ദ നിർദ്ദേശത്തോടെ പടിപടിയായി പഠിപ്പിക്കുന്നു",
        "സാങ്കേതിക പദങ്ങളില്ലാതെ സംശയങ്ങൾക്ക് ഉത്തരം നൽകുന്നു",
        "ഫോൺ നമ്പർ, പാസ്‌വേഡ് അല്ലെങ്കിൽ ഒടിപി ഒരിക്കലും ചോദിക്കില്ല",
      ],
      officialTitle: "🏛️ ഔദ്യോഗിക ഡിജിലോക്കർ വെബ്സൈറ്റ്",
      officialPoints: [
        "digilocker.gov.in ൽ മാത്രം പ്രവർത്തിക്കുന്നു",
        "മൊബൈൽ നമ്പറും ആധാർ ഒടിപിയും ഇവിടെ മാത്രം നൽകുക",
        "സർക്കാർ വകുപ്പുകൾ നേരിട്ട് സർട്ടിഫിക്കറ്റുകൾ നൽകുന്നു",
        "നിങ്ങളുടെ രേഖകൾ കാണുക, ഡൗൺലോഡ് ചെയ്യുക, പങ്കിടുക",
      ],
    },
    demoHelper: {
      title: "ദ്രുത പരീക്ഷണ മോഡ്",
      hideOptions: "മറയ്ക്കുക",
      showTests: "1-ക്ലിക്ക് പരീക്ഷണം",
      desc: "മൈക്ക് ഇല്ലാതെ തന്നെ DigiSakhi AI ബഹുഭാഷാ പ്രവർത്തനം പരിശോധിക്കുക:",
    },
    voiceHeardNotice: (h: string) => `കേട്ടത്: "${h}". ദയവായി താഴെയുള്ള ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക.`,
  },

  // 9. GUJARATI (ગુજરાતી)
  gu: {
    languageSelector: {
      heading: "તમારી ભાષા પસંદ કરો",
      subtitle: "12 ભારતીય ભાષાઓમાં અવાજ અને સરળ માર્ગદર્શન",
      voiceReady: "અવાજ તૈયાર",
    },
    actionGrid: {
      sectionTitle: "ઝડપી કાર્ય માર્ગદર્શિકા",
      sectionSubtitle: "વિશિષ્ટ પગલું ખોલવા માટે ટેપ કરો",
      openGuide: "માર્ગદર્શિકા ખોલો",
    },
    trustCard: {
      badge: "100% સુરક્ષિત અને ડેટા-મુક્ત",
      disclaimer: "DigiSakhi AI એક સ્વતંત્ર શૈક્ષણિક માર્ગદર્શિકા છે, સરકારી પોર્ટલ નથી.",
      distinctionTitle: "સ્પષ્ટ તફાવત: અહીં શું થાય છે vs. ડિઝિલૉકર પર શું થાય છે",
      guideTitle: "📖 DigiSakhi AI ડિજિટલ માર્ગદર્શિકા",
      guidePoints: [
        "તમારી માતૃભાષામાં શું કરવું તે સમજાવે છે",
        "અવાજના માર્ગદર્શન સાથે પગલું-દર-પગલું શીખવે છે",
        "તકનીકી શબ્દો વિના તમારા પ્રશ્નોના જવાબો આપે છે",
        "મોબાઇલ નંબર, પાસવર્ડ અથવા OTP ક્યારેય પૂછતું નથી",
      ],
      officialTitle: "🏛️ સત્તાવાર ડિઝિલૉકર વેબસાઇટ",
      officialPoints: [
        "માત્ર digilocker.gov.in પર કાર્ય કરે છે",
        "તમારો મોબાઇલ નંબર અને આધાર OTP માત્ર અહીં દાખલ કરો",
        "સરકારી કચેરીઓ સીધા પ્રમાણપત્રો જારી કરે છે",
        "તમારા દસ્તાવેજો જુઓ, ડાઉનલોડ કરો અને શેર કરો",
      ],
    },
    demoHelper: {
      title: "ઝડપી પરીક્ષણ મોડ",
      hideOptions: "છુપાવો",
      showTests: "1-ક્લિક પરીક્ષણ",
      desc: "માઇક્રોફોન વિના DigiSakhi AI ની ક્ષમતાનું પરીક્ષણ કરો:",
    },
    voiceHeardNotice: (h: string) => `સાંભળ્યું: "${h}". કૃપા કરીને નીચેના વિકલ્પ પર ટેપ કરો.`,
  },

  // 10. PUNJABI (ਪੰਜਾਬੀ)
  pa: {
    languageSelector: {
      heading: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
      subtitle: "12 ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਆਵਾਜ਼ ਅਤੇ ਆਸਾਨ ਅਗਵਾਈ",
      voiceReady: "ਆਵਾਜ਼ ਤਿਆਰ",
    },
    actionGrid: {
      sectionTitle: "ਤੇਜ਼ ਕਾਰਵਾਈ ਗਾਈਡ",
      sectionSubtitle: "ਲੋੜੀਂਦਾ ਕਦਮ ਖੋਲ੍ਹਣ ਲਈ ਟੈਪ ਕਰੋ",
      openGuide: "ਗਾਈਡ ਖੋਲ੍ਹੋ",
    },
    trustCard: {
      badge: "100% ਸੁਰੱਖਿਅਤ ਅਤੇ ਡੇਟਾ-ਮੁਕਤ",
      disclaimer: "DigiSakhi AI ਇੱਕ ਸੁਤੰਤਰ ਵਿਦਿਅਕ ਗਾਈਡ ਹੈ, ਕੋਈ ਸਰਕਾਰੀ ਪੋਰਟਲ ਨਹੀਂ।",
      distinctionTitle: "ਸਪੱਸ਼ਟ ਫ਼ਰਕ: ਇੱਥੇ ਕੀ ਹੁੰਦਾ ਹੈ vs. ਡਿਜੀਲੌਕਰ 'ਤੇ ਕੀ ਹੁੰਦਾ ਹੈ",
      guideTitle: "📖 DigiSakhi AI ਡਿਜੀਟਲ ਗਾਈਡ",
      guidePoints: [
        "ਤੁਹਾਡੀ ਮਾਤ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝਾਉਂਦਾ ਹੈ ਕਿ ਕੀ ਕਰਨਾ ਹੈ",
        "ਆਵਾਜ਼ ਦੀ ਅਗਵਾਈ ਨਾਲ ਕਦਮ-ਦਰ-ਕਦਮ ਸਿਖਾਉਂਦਾ ਹੈ",
        "ਬਿਨਾਂ ਤਕਨੀਕੀ ਸ਼ਬਦਾਂ ਦੇ ਤੁਹਾਡੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿੰਦਾ ਹੈ",
        "ਫ਼ੋਨ ਨੰਬਰ, ਪਾਸਵਰਡ ਜਾਂ OTP ਕਦੇ ਨਹੀਂ ਮੰਗਦਾ",
      ],
      officialTitle: "🏛️ ਅਧਿਕਾਰਤ ਡਿਜੀਲੌਕਰ ਵੈੱਬਸਾਈਟ",
      officialPoints: [
        "ਸਿਰਫ਼ digilocker.gov.in 'ਤੇ ਚੱਲਦਾ ਹੈ",
        "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਅਤੇ ਆਧਾਰ OTP ਸਿਰਫ਼ ਇੱਥੇ ਦਰਜ ਕਰੋ",
        "ਸਰਕਾਰੀ ਵਿਭਾਗਾਂ ਵੱਲੋਂ ਸਰਟੀਫਿਕੇਟ ਸਿੱਧੇ ਜਾਰੀ ਕੀਤੇ ਜਾਂਦੇ ਹਨ",
        "ਆਪਣੇ ਦਸਤਾਵੇਜ਼ ਦੇਖੋ, ਡਾਊਨਲੋਡ ਕਰੋ ਅਤੇ ਸਾਂਝੇ ਕਰੋ",
      ],
    },
    demoHelper: {
      title: "ਤੇਜ਼ ਟੈਸਟ ਮੋਡ",
      hideOptions: "ਛੁਪਾਓ",
      showTests: "1-ਕਲਿੱਕ ਟੈਸਟ",
      desc: "ਮਾਈਕ ਤੋਂ ਬਿਨਾਂ DigiSakhi AI ਦੀ ਭਾਸ਼ਾ ਪ੍ਰਣਾਲੀ ਦੀ ਜਾਂਚ ਕਰੋ:",
    },
    voiceHeardNotice: (h: string) => `ਸੁਣਿਆ: "${h}". ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੇ ਵਿਕਲਪ 'ਤੇ ਟੈਪ ਕਰੋ।`,
  },

  // 11. ASSAMESE (অসমীয়া)
  as: {
    languageSelector: {
      heading: "আপোনাৰ ভাষা বাছক",
      subtitle: "১২টা ভাৰতীয় ভাষাত কণ্ঠ আৰু সহজ নিৰ্দেশনা",
      voiceReady: "কণ্ঠ সাজু",
    },
    actionGrid: {
      sectionTitle: "দ্ৰুত কাৰ্য্যৰ নিৰ্দেশনা",
      sectionSubtitle: "নিৰ্দিষ্ট পদক্ষেপ খুলিবলৈ টেপ কৰক",
      openGuide: "পদক্ষেপ গাইড খোলক",
    },
    trustCard: {
      badge: "১০০% সুৰক্ষিত আৰু তথ্য-মুক্ত",
      disclaimer: "DigiSakhi AI এক স্বতন্ত্ৰ শিক্ষামূলক নিৰ্দেশনা, কোনো চৰকাৰী পৰ্টেল নহয়।",
      distinctionTitle: "স্পষ্ট পাৰ্থক্য: ইয়াত কি হয় বনাম ডিজিলকাৰত কি হয়",
      guideTitle: "📖 DigiSakhi AI ডিজিটেল গাইড",
      guidePoints: [
        "আপোনাৰ মাতৃভাষাত কি কৰিব লাগে বুজাই দিয়ে",
        "কণ্ঠৰ সহায়ত খোজ-কাঢ়ি শিকায়",
        "কঠিন কাৰিকৰী শব্দ নোহোৱাকৈ প্ৰশ্নৰ উত্তৰ দিয়ে",
        "ফোন নম্বৰ, পাছৱৰ্ড বা OTP কেতিয়াও নিবিচাৰে",
      ],
      officialTitle: "🏛️ আনুষ্ঠানিক ডিজিলকাৰ ৱেবছাইট",
      officialPoints: [
        "কেৱল digilocker.gov.in-ত উপলব্ধ",
        "আপোনাৰ মোবাইল নম্বৰ আৰু আধাৰ OTP কেৱল ইয়াতেই দিয়ক",
        "চৰকাৰী বিভাগসমূহে পোনপটীয়াকৈ প্ৰমাণপত্ৰ প্ৰদান কৰে",
        "আপোনাৰ আনুষ্ঠানিক নথিসমূহ চাওক, ডাউনলোড কৰক আৰু ভাগ কৰক",
      ],
    },
    demoHelper: {
      title: "দ্ৰুত পৰীক্ষণ ম'ড",
      hideOptions: "লুকাওক",
      showTests: "১-ক্লিক পৰীক্ষা",
      desc: "মাইক্ৰ'ফ'ন নোহোৱাকৈয়ে DigiSakhi AI-ৰ বহুভাষিক ক্ষমতা পৰীক্ষা কৰক:",
    },
    voiceHeardNotice: (h: string) => `শুনা গ'ল: "${h}"। অনুগ্ৰহ কৰি তলৰ বিকল্পত টেপ কৰক।`,
  },

  // 12. ODIA (ଓଡ଼ିଆ)
  or: {
    languageSelector: {
      heading: "ଆପଣଙ୍କ ଭାଷା ବାଛନ୍ତୁ",
      subtitle: "୧୨ଟି ଭାରତୀୟ ଭାଷାରେ ଭଏସ୍ ଏବଂ ସରଳ ମାର୍ଗଦର୍ଶନ",
      voiceReady: "ଭଏସ୍ ପ୍ରସ୍ତୁତ",
    },
    actionGrid: {
      sectionTitle: "ଦ୍ରୁତ କାର୍ଯ୍ୟ ବିକଳ୍ପ",
      sectionSubtitle: "ନିର୍ଦ୍ଦିଷ୍ଟ ପଦକ୍ଷେପ ଖୋଲିବାକୁ ଟ୍ୟାପ୍ କରନ୍ତୁ",
      openGuide: "ଗାଇଡ୍ ଖୋଲନ୍ତୁ",
    },
    trustCard: {
      badge: "୧୦୦% ସୁରକ୍ଷିତ ଏବଂ ତଥ୍ୟ-ସଂଗ୍ରହହୀନ",
      disclaimer: "DigiSakhi AI ଏକ ସ୍ୱତନ୍ତ୍ର ଶିକ୍ଷଣୀୟ ମାର୍ଗଦର୍ଶକ, କୌଣସି ସରକାରୀ ପୋର୍ଟାଲ୍ ନୁହେଁ।",
      distinctionTitle: "ସ୍ପଷ୍ଟ ପାର୍ଥକ୍ୟ: ଏଠାରେ କ'ଣ ହୁଏ ବନାମ ଡିଜିଲକରରେ କ'ଣ ହୁଏ",
      guideTitle: "📖 DigiSakhi AI ଡିଜିଟାଲ୍ ଗାଇଡ୍",
      guidePoints: [
        "ଆପଣଙ୍କ ମାତୃଭାଷାରେ କ'ଣ କରିବାକୁ ହେବ ତାହା ବୁଝାଏ",
        "ଭଏସ୍ ସହାୟତାରେ ପଦକ୍ଷେପ ଅନୁଯାୟୀ ଶିଖାଏ",
        "କୌଣସି କଠିନ ବୈଷୟିକ ଶବ୍ଦ ବିନା ପ୍ରଶ୍ନର ଉତ୍ତର ଦିଏ",
        "ଫୋନ୍ ନମ୍ବର, ପାସୱାର୍ଡ କିମ୍ବା OTP କେବେବି ମାଗେ ନାହିଁ",
      ],
      officialTitle: "🏛️ ଅଫିସିଆଲ୍ ଡିଜିଲକର୍ ୱେବସାଇଟ୍",
      officialPoints: [
        "କେବଳ digilocker.gov.in ରେ ଉପଲବ୍ଧ",
        "ଆପଣଙ୍କ ମୋବାଇଲ୍ ନମ୍ବର ଏବଂ ଆଧାର OTP କେବଳ ଏଠାରେ ଦିଅନ୍ତୁ",
        "ସରକାରୀ ସଂସ୍ଥା ଦ୍ୱାରା ପ୍ରମାଣପତ୍ର ସିଧାସଳଖ ଜାରି କରାଯାଏ",
        "ଆପଣଙ୍କ ଅଫିସିଆଲ୍ ଦଲିଲ ଦେଖନ୍ତୁ, ଡାଉନଲୋଡ୍ କରନ୍ତୁ ଏବଂ ସେୟାର୍ କରନ୍ତୁ",
      ],
    },
    demoHelper: {
      title: "ଦ୍ରୁତ ପରୀକ୍ଷଣ ମୋଡ୍",
      hideOptions: "ଲୁଚାନ୍ତୁ",
      showTests: "୧-କ୍ଲିକ୍ ପରୀକ୍ଷା",
      desc: "ମାଇକ୍ରୋଫୋନ୍ ବିନା DigiSakhi AI ର ବହୁଭାଷୀ ଦକ୍ଷତା ପରୀକ୍ଷା କରନ୍ତୁ:",
    },
    voiceHeardNotice: (h: string) => `ଶୁଣିଲୁ: "${h}". ଦୟାକରି ତଳ ବିକଳ୍ପ ଉପରେ ଟ୍ୟାପ୍ କରନ୍ତୁ।`,
  },
};

export function getUITranslation(languageId: string): UITranslation {
  const base = UI_TRANSLATIONS[languageId] || UI_TRANSLATIONS.en;
  const extra = EXTRA_TRANSLATIONS[languageId] || EXTRA_TRANSLATIONS.en;
  return {
    ...base,
    languageSelector: extra.languageSelector,
    actionGrid: extra.actionGrid,
    trustCard: extra.trustCard,
    demoHelper: extra.demoHelper,
    practiceMode: {
      ...base.practiceMode,
      voiceHeardNotice: extra.voiceHeardNotice,
    },
  };
}
