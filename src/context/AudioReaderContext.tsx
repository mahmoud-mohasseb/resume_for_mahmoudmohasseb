"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useLanguage, Language } from "./LanguageContext";

export interface NarrationSection {
  id: string;
  title: string;
  displayTitle: string;
  text: string;
  speechText: string; // Phonetically optimized for articulate, natural speech
}

interface AudioReaderContextType {
  isReading: boolean;
  isPaused: boolean;
  currentSectionIndex: number;
  totalSections: number;
  currentSection: NarrationSection | null;
  rate: number;
  setRate: (rate: number) => void;
  voiceName: string;
  startReading: (fromIndex?: number) => void;
  pauseReading: () => void;
  resumeReading: () => void;
  stopReading: () => void;
  toggleReading: () => void;
  nextSection: () => void;
  prevSection: () => void;
  isSupported: boolean;
}

const AudioReaderContext = createContext<AudioReaderContextType | undefined>(
  undefined
);

// High-fidelity speech scripts with pauses and phonetic clarity
const NARRATION_DATA: Record<Language, NarrationSection[]> = {
  en: [
    {
      id: "intro",
      title: "Executive Profile & Overview",
      displayTitle: "Executive Summary & Background",
      text: "Mahmoud Mohasseb. Technical Support Specialist and AI Vibe Coding Pioneer based in Bucharest, Romania. Combining over 5 years of enterprise IT support operations, cloud application diagnostics, and cutting-edge autonomous AI development workflows.",
      speechText:
        "Mahmoud Mohasseb. Technical Support Specialist, and A. I. Vibe Coding Pioneer, based in Bucharest, Romania. Combining over 5 years of enterprise I. T. support operations, cloud application diagnostics, and cutting-edge autonomous A. I. development workflows.",
    },
    {
      id: "metrics",
      title: "Key Performance & Impact",
      displayTitle: "Key Metrics & Track Record",
      text: "Delivered 99.4% SLA adherence across enterprise engagements. Saved 75% reporting cycle time by engineering Google Apps Script automation hubs. Reduced incident volume by 40% through deep API diagnostics, and achieved 10x development velocity with AI Vibe Coding.",
      speechText:
        "Key operational impact. Delivered 99.4 percent S. L. A. adherence across enterprise service engagements. Saved 75 percent reporting cycle time by engineering Google Apps Script automation hubs. Reduced incident volume by 40 percent through deep A. P. I. diagnostics, and achieved 10x development velocity with A. I. Vibe Coding.",
    },
    {
      id: "vibe",
      title: "AI Vibe Coding & Toolchain",
      displayTitle: "Vibe Coding & Next-Gen AI",
      text: "Certified in Anthropic AI and Lean Digital Transformation. Pioneering Vibe Coding using Claude 3.7 Sonnet extended thinking, Cursor AI Composer, and Google Antigravity to build, test, and debug high-performance full-stack web applications at unprecedented velocity.",
      speechText:
        "Next-generation engineering. Certified in Anthropic A. I. and Lean Digital Transformation. Pioneering Vibe Coding using Claude 3.7 Sonnet extended thinking, Cursor A. I. Composer, and Google Antigravity, to architect, test, and debug high-performance full-stack web applications at unprecedented velocity.",
    },
    {
      id: "experience",
      title: "Enterprise Experience",
      displayTitle: "Enterprise Career Track",
      text: "Experience spanning Genpact as a Lean Transformation and Technical Support Specialist, Majorel supporting Microsoft EMEA Tier 2 and Tier 3 cloud services, Arvato supporting high-volume Bolt platforms, and independent full-stack web engineering.",
      speechText:
        "Enterprise career history. Proven experience spanning Genpact as a Lean Transformation and Technical Support Specialist; Majorel supporting Microsoft E. M. E. A. Tier 2 and Tier 3 cloud services; Arvato supporting high-volume Bolt ride-hailing platforms; and independent full-stack web engineering.",
    },
    {
      id: "skills",
      title: "Technical Stack & Methodologies",
      displayTitle: "Technical Stack & Tools",
      text: "Proficient in JavaScript, TypeScript, React, Next.js, Node.js, REST and GraphQL APIs, Tailwind CSS, Postman, SQL, Git, and systematic 5-Why root cause analysis.",
      speechText:
        "Core competencies. Proficient in Java Script, Type Script, React, Next dot J. S., Node dot J. S., REST and Graph Q. L. A. P. I.s, Tailwind C. S. S., Postman, S. Q. L., Git, and systematic Five-Why Root Cause Analysis.",
    },
    {
      id: "contact",
      title: "Credentials & Contact",
      displayTitle: "Verified Credentials & Connect",
      text: "Lean Certified with Genpact, Anthropic AI Certified 2026, holding a Bachelor's Degree in Commerce. Available for remote and on-site high-impact engineering and technical support roles. Connect directly on WhatsApp at +40 752 331 545.",
      speechText:
        "Verified credentials and contact. Lean Certified with Genpact, Anthropic A. I. Certified 2026, and holding a Bachelor's Degree in Commerce. Available for remote and on-site high-impact roles. Connect directly on WhatsApp at +40 752 331 545, or email Ghareb 4 at gmail dot com.",
    },
  ],
  ro: [
    {
      id: "intro",
      title: "Profil Executiv și Prezentare",
      displayTitle: "Rezumat Executiv & Prezentare",
      text: "Mahmoud Mohasseb. Specialist în Suport Tehnic și Pionier în AI Vibe Coding cu sediul în București, România. Peste cinci ani de experiență în operațiuni IT enterprise, diagnosticare aplicații cloud și fluxuri avansate de dezvoltare asistată de inteligență artificială.",
      speechText:
        "Mahmoud Mohasseb. Specialist în Suport Tehnic și Pionier în A. I. Vibe Coding, cu sediul în București, România. Peste 5 ani de experiență în operațiuni I. T. enterprise, diagnosticare aplicații cloud, și dezvoltare asistată de inteligență artificială.",
    },
    {
      id: "metrics",
      title: "Performanță și Rezultate Cheie",
      displayTitle: "Indicatori & Rezultate Cheie",
      text: "Aderență de 99,4% la indicatorii SLA enterprise. Reducere de 75% a timpului de raportare prin automatizări Google Apps Script și scădere cu 40% a incidentelor prin depanare avansată la nivel de API.",
      speechText:
        "Rezultate operaționale. Aderență de 99,4 la sută la indicatorii S. L. A. enterprise. Reducere de 75 la sută a timpului de raportare prin automatizări Google Apps Script, și scădere cu 40 la sută a incidentelor prin depanare avansată la nivel de A. P. I.",
    },
    {
      id: "vibe",
      title: "Vibe Coding și Tehnologii AI",
      displayTitle: "Dezvoltare Accelerată cu AI",
      text: "Certificat Anthropic AI și Specialist Lean Genpact. Utilizare avansată a modelelor Claude 3.7 Sonnet, Cursor AI Composer și Google Antigravity pentru dezvoltare full-stack accelerată de zece ori.",
      speechText:
        "Dezvoltare accelerată. Certificat Anthropic A. I. și Specialist Lean Genpact. Utilizare avansată a modelelor Claude 3.7 Sonnet, Cursor A. I. Composer și Google Antigravity, pentru dezvoltare full-stack de zece ori mai rapidă.",
    },
    {
      id: "experience",
      title: "Experiență Profesională",
      displayTitle: "Traseu Profesional Enterprise",
      text: "Experiență solidă la Genpact, Majorel în sprijinul serviciilor Microsoft EMEA Tier 2 și 3, Arvato pentru platformele de mare volum Bolt și proiecte full-stack independente.",
      speechText:
        "Experiență profesională. Experiență solidă la Genpact, Majorel în sprijinul serviciilor Microsoft E. M. E. A. Tier 2 și 3, Arvato pentru platformele de mare volum Bolt, și proiecte software full-stack independente.",
    },
    {
      id: "skills",
      title: "Competențe Tehnice",
      displayTitle: "Competențe și Tehnologii",
      text: "Expertiză în JavaScript, TypeScript, React, Next.js, Node.js, API-uri REST și GraphQL, SQL, instrumente de diagnosticare enterprise și metodologii Lean 5-Why.",
      speechText:
        "Competențe cheie. Expertiză în Java Script, Type Script, React, Next dot J. S., Node dot J. S., A. P. I.-uri REST și Graph Q. L., S. Q. L., și analiza cauzelor rădăcină 5-Why.",
    },
    {
      id: "contact",
      title: "Contact și Disponibilitate",
      displayTitle: "Contact Direct & WhatsApp",
      text: "Disponibil pentru roluri de mare impact remote sau on-site. Contactați-l direct pe WhatsApp la numărul +40 752 331 545.",
      speechText:
        "Contact și disponibilitate. Disponibil pentru oportunități de mare impact remote sau on-site. Contactați-l direct pe WhatsApp la numărul +40 752 331 545.",
    },
  ],
  de: [
    {
      id: "intro",
      title: "Führungsprofil & Übersicht",
      displayTitle: "Executive Zusammenfassung",
      text: "Mahmoud Mohasseb. Spezialist für technischen Support und Pionier im Bereich AI Vibe Coding mit Sitz in Bukarest, Rumänien. Über fünf Jahre Erfahrung im Enterprise-IT-Support, in der Cloud-Anwendungsdiagnose und in modernen KI-gestützten Entwicklungsworkflows.",
      speechText:
        "Mahmoud Mohasseb. Spezialist für technischen Support und Pionier im Bereich A. I. Vibe Coding mit Sitz in Bukarest, Rumänien. Über 5 Jahre Erfahrung im Enterprise I. T. Support, in der Cloud-Anwendungsdiagnose und in modernen K. I.-gestützten Entwicklungsworkflows.",
    },
    {
      id: "metrics",
      title: "Wichtige Kennzahlen & Wirkung",
      displayTitle: "Leistungskennzahlen & Wirkung",
      text: "99,4 % SLA-Einhaltung im Enterprise-Bereich. 75 % Zeitersparnis bei Berichtszyklen durch Google Apps Script Automatisierung und 40 % Reduzierung des Ticketvolumens durch tiefgreifende API-Diagnostik.",
      speechText:
        "Operative Ergebnisse. 99,4 Prozent S. L. A.-Einhaltung im Enterprise-Bereich. 75 Prozent Zeitersparnis bei Berichtszyklen durch Google Apps Script Automatisierung, und 40 Prozent Reduzierung des Ticketvolumens durch tiefgreifende A. P. I.-Diagnostik.",
    },
    {
      id: "vibe",
      title: "AI Vibe Coding & Toolchain",
      displayTitle: "Next-Gen KI-Entwicklung",
      text: "Zertifiziert in Anthropic AI und Lean Digital Transformation. Einsatz von Claude 3.7 Sonnet, Cursor AI Composer und Google Antigravity für zehnfache Entwicklungsgeschwindigkeit.",
      speechText:
        "Next-Gen Entwicklung. Zertifiziert in Anthropic A. I. und Lean Digital Transformation. Einsatz von Claude 3.7 Sonnet, Cursor A. I. Composer und Google Antigravity für zehnfache Entwicklungsgeschwindigkeit.",
    },
    {
      id: "experience",
      title: "Berufserfahrung",
      displayTitle: "Berufliche Stationen",
      text: "Nachgewiesene Erfolge bei Genpact, Majorel für Microsoft EMEA Tier 2 und 3 Cloud-Dienste, Arvato für hochvolumige Bolt-Plattformen und unabhängige Full-Stack-Softwareentwicklung.",
      speechText:
        "Berufserfahrung. Nachgewiesene Erfolge bei Genpact, Majorel für Microsoft E. M. E. A. Tier 2 und 3 Cloud-Dienste, Arvato für hochvolumige Bolt-Plattformen und unabhängige Full-Stack-Softwareentwicklung.",
    },
    {
      id: "skills",
      title: "Technologiestack",
      displayTitle: "Technologien & Werkzeuge",
      text: "Fundierte Kenntnisse in JavaScript, TypeScript, React, Next.js, Node.js, REST-APIs, SQL, Git und systematischer 5-Why-Ursachenanalyse.",
      speechText:
        "Kernkompetenzen. Fundierte Kenntnisse in Java Script, Type Script, React, Next dot J. S., Node dot J. S., REST-A. P. I.s, S. Q. L., Git und systematischer Five-Why-Ursachenanalyse.",
    },
    {
      id: "contact",
      title: "Kontakt & Verfügbarkeit",
      displayTitle: "Direkter Kontakt",
      text: "Verfügbar für anspruchsvolle Positionen remote oder vor Ort. Direkte Kontaktaufnahme über WhatsApp unter +40 752 331 545.",
      speechText:
        "Kontakt und Verfügbarkeit. Verfügbar für anspruchsvolle Positionen remote oder vor Ort. Direkte Kontaktaufnahme über WhatsApp unter +40 752 331 545.",
    },
  ],
  ar: [
    {
      id: "intro",
      title: "الملف المهني والنظرة العامة",
      displayTitle: "الملف المهني والنظرة العامة",
      text: "Mahmoud Mohasseb. أخصائي الدعم الفني ورائد برمجة الذكاء الاصطناعي Vibe Coding في بوخارست، رومانيا. يجمع بين أكثر من خمس سنوات من الخبرة في عمليات الدعم الفني المؤسسي، وتشخيص تطبيقات السحابة، وتطوير الويب الحديث المدعوم بالذكاء الاصطناعي.",
      speechText:
        "Mahmoud Mohasseb. أخصائي الدعم الفني ورائد برمجة الذكاء الاصطناعي فايب كودينج في بوخارست، رومانيا. يجمع بين أكثر من خمس سنوات من الخبرة في عمليات الدعم الفني المؤسسي، وتشخيص تطبيقات السحابة، وتطوير الويب الحديث المدعوم بالذكاء الاصطناعي.",
    },
    {
      id: "metrics",
      title: "المؤشرات والإنجازات الرئيسية",
      displayTitle: "أبرز المؤشرات والإنجازات",
      text: "تحقيق نسبة التزام 99.4% باتفاقيات مستوى الخدمة SLA. توفير 75% من وقت إعداد التقارير عبر أتمتة Google Apps Script، وخفض تذاكر المشكلات بنسبة 40%، ومضاعفة سرعة التطوير 10 مرات باستخدام الذكاء الاصطناعي.",
      speechText:
        "أبرز الإنجازات التشغيلية. تحقيق نسبة التزام تسعة وتسعين فاصل أربعة بالمئة باتفاقيات مستوى الخدمة إس إل إيه. توفير خمسة وسبعين بالمئة من وقت إعداد التقارير عبر أتمتة جوجل آبس سكريبت، وخفض تذاكر المشكلات بنسبة أربعين بالمئة، ومضاعفة سرعة التطوير عشر مرات باستخدام الذكاء الاصطناعي.",
    },
    {
      id: "vibe",
      title: "برمجة الذكاء الاصطناعي Vibe Coding",
      displayTitle: "الجيل الجديد من هندسة البرمجيات",
      text: "حاصل على شهادات معتمدة في Anthropic AI والتحول الرقمي الرشيق Lean. قيادة أحدث مسارات التطوير باستخدام نماذج Claude 3.7 Sonnet وCursor AI Composer وGoogle Antigravity.",
      speechText:
        "الجيل الجديد من هندسة البرمجيات. حاصل على شهادات معتمدة في أنثروبيك إيه آي والتحول الرقمي الرشيق لين. قيادة أحدث مسارات التطوير باستخدام نماذج كلود 3.7 سونيت، وكيرسور إيه آي كومبوزر، وجوجل أنتي جرافيتي.",
    },
    {
      id: "experience",
      title: "الخبرات العملية المؤسسية",
      displayTitle: "المسار المهني المؤسسي",
      text: "سجل حافل بالنجاح لدى Genpact وMajorel لدعم خدمات Microsoft EMEA السحابية للمستوى الثاني والثالث، وArvato لمنصات Bolt ذات الحجم العالي، وتطوير برمجيات الويب المتكاملة.",
      speechText:
        "الخبرات العملية المؤسسية. سجل حافل بالنجاح لدى جينباكت، وماجوريل لدعم خدمات مايكروسوفت إيميا السحابية للمستوى الثاني والثالث، وأرفاتو لمنصات بولت ذات الحجم العالي، وتطوير برمجيات الويب المتكاملة.",
    },
    {
      id: "skills",
      title: "المهارات والتقنيات البرمجية",
      displayTitle: "التقنيات والأدوات الأساسية",
      text: "إتقان كامل للغات JavaScript وTypeScript وReact وNext.js وNode.js والواجهات البرمجية REST وGraphQL وتحليل الأسباب الجذرية 5-Why.",
      speechText:
        "المهارات والتقنيات البرمجية. إتقان كامل للغات جافا سكريبت، تايب سكريبت، رياكت، نكست دوت جي إس، نود دوت جي إس، وواجهات ريست وجراف كيو إل، وتحليل الأسباب الجذرية فايف واي.",
    },
    {
      id: "contact",
      title: "الشهادات والتواصل المباشر",
      displayTitle: "الشهادات والتواصل المباشر",
      text: "معتمد من Genpact Lean وAnthropic AI، وحاصل على بكالوريوس التجارة. متاح للفرص الوظيفية والاستشارات عن بعد أو في الموقع. تواصل مباشرة عبر واتساب على الرقم +40 752 331 545.",
      speechText:
        "الشهادات والتواصل المباشر. معتمد من جينباكت لين وأنثروبيك إيه آي، وحاصل على بكالوريوس التجارة. متاح للفرص الوظيفية والاستشارات عن بعد أو في الموقع. تواصل مباشرة عبر واتساب على الرقم +40 752 331 545.",
    },
  ],
};

export function AudioReaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { language } = useLanguage();
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [rate, setRate] = useState(0.95); // Optimal 0.95 cadence for crisp articulation
  const [voiceName, setVoiceName] = useState("");
  const [isSupported, setIsSupported] = useState(true);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  const sections = NARRATION_DATA[language] || NARRATION_DATA.en;
  const totalSections = sections.length;
  const currentSection = sections[currentSectionIndex] || sections[0];

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const currentIndexRef = useRef(0);
  const isReadingRef = useRef(false);

  useEffect(() => {
    currentIndexRef.current = currentSectionIndex;
  }, [currentSectionIndex]);

  useEffect(() => {
    isReadingRef.current = isReading;
  }, [isReading]);

  // Load and cache voices when browser initializes
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsSupported(false);
      return;
    }

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        setAvailableVoices(voices);
      }
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Neural / High-Clarity Voice Selection Algorithm
  const getBestVoice = useCallback(
    (lang: Language): SpeechSynthesisVoice | null => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
      const voices =
        availableVoices.length > 0
          ? availableVoices
          : window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return null;

      const langCodeMap: Record<Language, string[]> = {
        en: ["en-US", "en-GB", "en-CA", "en-AU", "en"],
        ro: ["ro-RO", "ro"],
        de: ["de-DE", "de-AT", "de-CH", "de"],
        ar: ["ar-SA", "ar-EG", "ar-AE", "ar"],
      };

      const targetCodes = langCodeMap[lang] || ["en-US", "en"];
      const matchingVoices = voices.filter((v) =>
        targetCodes.some(
          (code) =>
            v.lang.toLowerCase().startsWith(code.toLowerCase()) ||
            v.lang.toLowerCase().replace("_", "-") === code.toLowerCase()
        )
      );

      if (matchingVoices.length === 0) {
        return voices[0] || null;
      }

      // Priority ranking: Enhanced / Premium / Natural / Neural / Siri / Google > Standard
      const scored = matchingVoices.map((voice) => {
        let score = 0;
        const name = voice.name.toLowerCase();
        if (name.includes("natural")) score += 25;
        if (name.includes("enhanced")) score += 20;
        if (name.includes("premium")) score += 18;
        if (name.includes("siri")) score += 15;
        if (name.includes("google")) score += 12;
        if (name.includes("samantha") || name.includes("alex") || name.includes("daniel")) score += 10;
        if (name.includes("ioana") || name.includes("marlene") || name.includes("tarik") || name.includes("laila") || name.includes("maged")) score += 10;
        if (voice.default) score += 5;
        if (voice.localService) score += 2;
        return { voice, score };
      });

      scored.sort((a, b) => b.score - a.score);
      const chosen = scored[0]?.voice || matchingVoices[0];
      setVoiceName(chosen.name);
      return chosen;
    },
    [availableVoices]
  );

  const speakSection = useCallback(
    (index: number) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

      window.speechSynthesis.cancel();

      const currentSections = NARRATION_DATA[language] || NARRATION_DATA.en;
      if (index >= currentSections.length) {
        setIsReading(false);
        setIsPaused(false);
        setCurrentSectionIndex(0);
        return;
      }

      const sec = currentSections[index];
      // Use articulate speechText with clear cadence
      const textToRead = `${sec.speechText}`;

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = rate; // Natural pacing (0.95 default)
      utterance.pitch = 1.0; // Clear natural pitch
      utterance.volume = 1.0; // Full clear audio volume

      const voice = getBestVoice(language);
      if (voice) {
        utterance.voice = voice;
      }

      const langMap: Record<Language, string> = {
        en: "en-US",
        ro: "ro-RO",
        de: "de-DE",
        ar: "ar-SA",
      };
      utterance.lang = langMap[language] || "en-US";

      utterance.onstart = () => {
        setIsReading(true);
        setIsPaused(false);
        setCurrentSectionIndex(index);
      };

      utterance.onend = () => {
        if (isReadingRef.current) {
          const nextIdx = index + 1;
          if (nextIdx < currentSections.length) {
            // Natural brief breath pause between resume sections
            setTimeout(() => {
              if (isReadingRef.current) {
                speakSection(nextIdx);
              }
            }, 700);
          } else {
            setIsReading(false);
            setIsPaused(false);
            setCurrentSectionIndex(0);
          }
        }
      };

      utterance.onerror = (e) => {
        if (e.error !== "canceled" && e.error !== "interrupted") {
          console.warn("Speech synthesis notice:", e);
        }
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [language, rate, getBestVoice]
  );

  const startReading = useCallback(
    (fromIndex = 0) => {
      if (!isSupported) return;
      setIsReading(true);
      setIsPaused(false);
      setCurrentSectionIndex(fromIndex);
      speakSection(fromIndex);
    },
    [isSupported, speakSection]
  );

  const pauseReading = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isReading && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isReading, isPaused]);

  const resumeReading = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (isReading && isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else if (!isReading) {
      startReading(currentSectionIndex);
    }
  }, [isReading, isPaused, currentSectionIndex, startReading]);

  const stopReading = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
  }, []);

  const toggleReading = useCallback(() => {
    if (isReading) {
      stopReading();
    } else {
      startReading(0);
    }
  }, [isReading, stopReading, startReading]);

  const nextSection = useCallback(() => {
    const nextIdx = currentSectionIndex + 1;
    if (nextIdx < totalSections) {
      setCurrentSectionIndex(nextIdx);
      if (isReading) {
        speakSection(nextIdx);
      }
    } else {
      stopReading();
    }
  }, [currentSectionIndex, totalSections, isReading, speakSection, stopReading]);

  const prevSection = useCallback(() => {
    const prevIdx = Math.max(0, currentSectionIndex - 1);
    setCurrentSectionIndex(prevIdx);
    if (isReading) {
      speakSection(prevIdx);
    }
  }, [currentSectionIndex, isReading, speakSection]);

  // If user switches language while reading, smoothly restart section in new language
  useEffect(() => {
    if (isReading) {
      speakSection(currentSectionIndex);
    }
  }, [language]);

  // Cleanup on unmount or navigation
  useEffect(() => {
    const handleUnload = () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      handleUnload();
    };
  }, []);

  return (
    <AudioReaderContext.Provider
      value={{
        isReading,
        isPaused,
        currentSectionIndex,
        totalSections,
        currentSection,
        rate,
        setRate,
        voiceName,
        startReading,
        pauseReading,
        resumeReading,
        stopReading,
        toggleReading,
        nextSection,
        prevSection,
        isSupported,
      }}
    >
      {children}
    </AudioReaderContext.Provider>
  );
}

export function useAudioReader() {
  const context = useContext(AudioReaderContext);
  if (!context) {
    throw new Error("useAudioReader must be used within an AudioReaderProvider");
  }
  return context;
}
