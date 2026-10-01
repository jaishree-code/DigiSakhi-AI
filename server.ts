import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with telemetry header
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Language names mapping
const LANGUAGE_NAMES: Record<string, string> = {
  'en': 'English',
  'ta': 'Tamil (தமிழ்)',
  'hi': 'Hindi (हिन्दी)',
  'te': 'Telugu (తెలుగు)',
  'bn': 'Bengali (বাংলা)',
  'mr': 'Marathi (मराठी)',
  'kn': 'Kannada (ಕನ್ನಡ)',
  'ml': 'Malayalam (മലയാളം)',
  'gu': 'Gujarati (ગુજરાતી)',
  'pa': 'Punjabi (ਪੰਜਾਬੀ)',
  'as': 'Assamese (অসমীয়া)',
  'or': 'Odia (ଓଡ଼ିଆ)',
};

// Fallback response engine for all 12 languages if Gemini is unavailable
const LOCAL_FALLBACKS: Record<string, {
  simpleExplanation: string;
  whatToDoNow: string;
  suggestedAction: string;
  stepIndex?: number;
}> = {
  en: {
    simpleExplanation: "DigiLocker is an official Government of India service to keep and get your official certificates digitally.",
    whatToDoNow: "Follow our 4 simple steps to open the official DigiLocker website and get your documents safely.",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  ta: {
    simpleExplanation: "டிஜிலாக்கர் (DigiLocker) என்பது உங்கள் அரசு ஆவணங்களை பாதுகாப்பாக இணையத்தில் பெற இந்திய அரசால் வழங்கப்படும் அதிகாரப்பூர்வ சேவையாகும்.",
    whatToDoNow: "அதிகாரப்பூர்வ டிஜிலாக்கர் இணையதளத்தைத் திறந்து எளிதாக உங்கள் ஆவணங்களைப் பெற 4 எளிய வழிகளைப் பின்பற்றுங்கள்.",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  hi: {
    simpleExplanation: "डिजिलॉकर (DigiLocker) भारत सरकार की एक सुरक्षित सेवा है जहाँ आप अपने सभी सरकारी दस्तावेज़ सीधे फ़ोन में पा सकते हैं।",
    whatToDoNow: "आधिकारिक डिजिलॉकर वेबसाइट खोलने और अपने प्रमाणपत्र सुरक्षित पाने के लिए हमारे 4 आसान चरण देखें।",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  te: {
    simpleExplanation: "డిజిలాకర్ (DigiLocker) అనేది మీ ప్రభుత్వ ధృవీకరణ పత్రాలను డిజిటల్ రూపంలో సురక్షితంగా పొందడానికి భారత ప్రభుత్వం అందించే సేవ.",
    whatToDoNow: "అధికారిక డిజిలాకర్ వెబ్‌సైట్ తెరవడానికి మరియు మీ పత్రాలను సురక్షితంగా పొందడానికి 4 సాధారణ దశలను అనుసరించండి.",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  bn: {
    simpleExplanation: "ডিজিলকার (DigiLocker) হল ভারত সরকারের একটি পরিষেবা যার মাধ্যমে আপনি আপনার সরকারি নথি ও সার্টিফিকেট নিরাপদে ফোনে পেতে পারেন।",
    whatToDoNow: "সরকারি ডিজিলকার ওয়েবসাইট খোলার এবং আপনার নথি পাওয়ার জন্য আমাদের ৪টি সহজ ধাপ অনুসরণ করুন।",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  mr: {
    simpleExplanation: "डिजीलॉकर (DigiLocker) ही भारत सरकारची एक अधिकृत सेवा आहे जिथून तुम्ही तुमची सर्व सरकारी कागदपत्रे डिजिटल पद्धतीने मिळवू शकता.",
    whatToDoNow: "अधिकृत डिजीलॉकर संकेतस्थळ उघडण्यासाठी आणि सुरक्षितपणे कागदपत्रे मिळवण्यासाठी 4 सोप्या पायऱ्या पाहा.",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  kn: {
    simpleExplanation: "ಡಿಜಿಲಾಕರ್ (DigiLocker) ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಸೇವೆಯಾಗಿದ್ದು, ನಿಮ್ಮ ಸರ್ಕಾರಿ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಡಿಜಿಟಲ್ ರೂಪದಲ್ಲಿ ಪಡೆಯಬಹುದು.",
    whatToDoNow: "ಅಧಿಕೃತ ಡಿಜಿಲಾಕರ್ ವೆಬ್‌ಸೈಟ್ ತೆರೆಯಲು ಮತ್ತು ನಿಮ್ಮ ದಾಖಲೆಗಳನ್ನು ಪಡೆಯಲು ನಮ್ಮ 4 ಸುಲಭ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  ml: {
    simpleExplanation: "ഡിജിലോക്കർ (DigiLocker) എന്നത് നിങ്ങളുടെ ഔദ്യോഗിക സർട്ടിഫിക്കറ്റുകൾ സുരക്ഷിതമായി ഫോണിൽ ലഭ്യമാക്കുന്നതിനുള്ള ഇന്ത്യാ ഗവൺമെന്റിന്റെ സേവനമാണ്.",
    whatToDoNow: "ഔദ്യോഗിക ഡിജിലോക്കർ വെബ്സൈറ്റ് തുറക്കുന്നതിനും രേഖകൾ കണ്ടെത്തുന്നതിനും ഞങ്ങളുടെ 4 ലളിതമായ ഘട്ടങ്ങൾ കാണുക.",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  gu: {
    simpleExplanation: "ડિજીલોકર (DigiLocker) એ ભારત સરકારની અધિકૃત સેવા છે જ્યાંથી તમે તમારા સરકારી દસ્તાવેજો અને પ્રમાણપત્રો સુરક્ષિત રીતે મેળવી શકો છો.",
    whatToDoNow: "સરકારી ડિજીલોકર વેબસાઇટ ખોલવા અને દસ્તાવેજો મેળવવા માટે 4 સરળ પગલાં અનુસરો.",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  pa: {
    simpleExplanation: "ਡਿਜੀਲਾਕਰ (DigiLocker) ਭਾਰਤ ਸਰਕਾਰ ਦੀ ਇੱਕ ਸੁਰੱਖਿਅਤ ਸੇਵਾ ਹੈ ਜਿੱਥੇ ਤੁਸੀਂ ਆਪਣੇ ਸਾਰੇ ਸਰਕਾਰੀ ਦਸਤਾਵੇਜ਼ ਫ਼ੋਨ ਵਿੱਚ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ।",
    whatToDoNow: "ਸਰਕਾਰੀ ਡਿਜੀਲਾਕਰ ਵੈੱਬਸਾਈਟ ਖੋਲ੍ਹਣ ਅਤੇ ਆਪਣੇ ਸਰਟੀਫਿਕੇਟ ਲੈਣ ਲਈ ਸਾਡੇ 4 ਸੌਖੇ ਕਦਮ ਦੇਖੋ।",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  as: {
    simpleExplanation: "ডিজিলকাৰ (DigiLocker) হ'ল ভাৰত চৰকাৰৰ এক সেৱা যাৰ জৰিয়তে আপুনি আপোনাৰ চৰকাৰী নথি-পত্ৰসমূহ ডিজিটেল ৰূপত লাভ কৰিব পাৰে।",
    whatToDoNow: "চৰকাৰী ডিজিলকাৰ ৱেবছাইট খুলিবলৈ আৰু নথি-পত্ৰ সংগ্ৰহ কৰিবলৈ ৪টা সহজ পদক্ষেপ অনুসৰণ কৰক।",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
  or: {
    simpleExplanation: "ଡିଜିଲକର (DigiLocker) ଭାରତ ସରକାରଙ୍କ ଏକ ସୁରକ୍ଷିତ ସେବା ଯେଉଁଠାରେ ଆପଣ ନିଜର ସରକਾਰୀ ପ୍ରମାଣପତ୍ର ସହଜରେ ଫୋନରେ ପାଇପାରିବେ।",
    whatToDoNow: "ସରକਾਰୀ ଡିଜିଲକର ୱେବସାଇଟ୍ ଖୋଲିବା ଏବଂ କାଗଜପତ୍ର ପାଇବା ପାଇଁ ଆମର ୪ଟି ସରଳ ପଦକ୍ଷେପ ଅନୁସରଣ କରନ୍ତୁ।",
    suggestedAction: "open_step_1",
    stepIndex: 1,
  },
};

// API Endpoint: /api/assistant
app.post('/api/assistant', async (req: Request, res: Response) => {
  const { query, language = 'en', currentStep } = req.body;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query is required' });
  }

  const langKey = (language || 'en').toLowerCase().slice(0, 2);
  const targetLanguageName = LANGUAGE_NAMES[langKey] || 'English';

  // If Gemini is not configured, reply using local fallback
  if (!aiClient) {
    const fallback = LOCAL_FALLBACKS[langKey] || LOCAL_FALLBACKS['en'];
    return res.json({
      simpleExplanation: fallback.simpleExplanation,
      whatToDoNow: fallback.whatToDoNow,
      suggestedAction: fallback.suggestedAction,
      stepIndex: fallback.stepIndex,
      detectedLanguage: targetLanguageName,
      fallbackUsed: true,
    });
  }

  try {
    const systemInstruction = `
You are DigiSakhi AI (डिजीसखी AI / டிஜிசகி AI), an exceptionally gentle, respectful, and supportive digital companion and guide designed for first-time smartphone women users in rural India who have no technical knowledge and may not speak English.

Your sole mission is to guide them step-by-step on how to access DigiLocker (https://www.digilocker.gov.in/), the official Government of India document service.

CRITICAL CONSTRAINTS:
1. NEVER ask for Aadhaar number, OTP, phone number, password, or any personal details. Warn against sharing OTPs if the user mentions passwords.
2. DigiSakhi AI NEVER performs government transactions directly. You only instruct the user on what to see and click on the official DigiLocker website.
3. Language constraint: You MUST respond strictly in ${targetLanguageName}. Use natural, warm, everyday conversational rural phrasing in the native script. Do NOT use dry machine translations or hard Sanskritized/formal technical words.
4. Avoid technical jargon completely. Instead of "authentication" say "entering your details to enter"; instead of "repository" say "safe digital locker"; instead of "credentials" say "your mobile number and secret pin".
5. Structure your response as JSON matching the schema provided.
6. The user query may be in English, transliterated, or native script. Understand the true intent and guide them to the right step:
   - If they want to start or open DigiLocker: stepIndex 1 (Open DigiLocker)
   - If they ask about sign up, registration, login, OTP safety: stepIndex 2 (Sign in or create account)
   - If they ask about finding marksheets, driving license, ration card, certificates: stepIndex 3 (Find your document)
   - If they ask about viewing, sharing or downloading documents: stepIndex 4 (Use your document)
   - If they are confused or say "I don't know": reassure them and point to step 1.
`;

    const prompt = `The user says: "${query}". Current step context: ${currentStep || 'Home'}.
Respond in ${targetLanguageName} with a warm, simple explanation and the next step to do.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            simpleExplanation: {
              type: Type.STRING,
              description: '1 to 2 warm, very simple sentences explaining the answer without technical words in the target language.',
            },
            whatToDoNow: {
              type: Type.STRING,
              description: '1 clear, easy instruction on what button to press or what to do next in the target language.',
            },
            suggestedAction: {
              type: Type.STRING,
              description: 'One of: open_step_1, open_step_2, open_step_3, open_step_4, open_official_digilocker, general_guide',
            },
            stepIndex: {
              type: Type.INTEGER,
              description: 'Step number between 1 and 4 if applicable, or null.',
            },
            safetyReminder: {
              type: Type.STRING,
              description: 'A brief 1-sentence reminder never to share OTPs or passwords if relevant.',
            },
          },
          required: ['simpleExplanation', 'whatToDoNow', 'suggestedAction'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({
      simpleExplanation: parsed.simpleExplanation,
      whatToDoNow: parsed.whatToDoNow,
      suggestedAction: parsed.suggestedAction || 'open_step_1',
      stepIndex: parsed.stepIndex || 1,
      safetyReminder: parsed.safetyReminder,
      detectedLanguage: targetLanguageName,
      fallbackUsed: false,
    });
  } catch (err: any) {
    console.error('Gemini API query error:', err?.message || err);
    // Graceful fallback on any API error
    const fallback = LOCAL_FALLBACKS[langKey] || LOCAL_FALLBACKS['en'];
    return res.json({
      simpleExplanation: fallback.simpleExplanation,
      whatToDoNow: fallback.whatToDoNow,
      suggestedAction: fallback.suggestedAction,
      stepIndex: fallback.stepIndex,
      detectedLanguage: targetLanguageName,
      fallbackUsed: true,
      errorDetail: err?.message,
    });
  }
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    geminiConfigured: !!aiClient,
    service: 'DigiSakhi AI DigiLocker Voice Guide',
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`DigiSakhi AI server running at http://localhost:${PORT}`);
  });
}

startServer();
