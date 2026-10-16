/* =========================================================
   Arabic Lessons — App Logic
   الإمام أحمد شيخ توري جميل | Imam Ahmad Sheikh Touray Jameel
   ========================================================= */

/* ---------------- i18n (interface strings) ---------------- */
const UI = {
  ar: {
    brand: "دروس العربية",
    brandSub: "للناطقين بغيرها",
    navHome: "الرئيسية",
    navLessons: "الدروس",
    navAbout: "عن المدرّب",
    navAboutUs: "من نحن",
    navHow: "كيف تدرس؟",
    heroBadge: "تطبيق تفاعلي مع ترجمة إنجليزية",
    heroTitle1: "تعلّم العربية بالمحادثات",
    heroTitle2: "الحقيقية",
    heroLead: "دروسٌ ممتعة للمواقف اليومية، مع ترجمة إنجليزية، ونُطق صوتي، واختبارات تفاعلية. من إعداد الإمام أحمد شيخ توري جميل.",
    heroCtaLessons: "ابدأ الدروس",
    heroCtaHow: "كيف يعمل؟",
    statLessons: "درس تفاعلي",
    statLevels: "مستويات",
    statFree: "مجاني %100",
    teacherRole: "إمام ومعلّم اللغة العربية",
    teacherBio: "نتعلّم مع الإمام أحمد شيخ توري جميل العربية بالفصحى المبسّطة مع تركيز على المحادثة والمواقف الحقيقية. وهو من غامبيا، تخرّج في معهد الإمام مالك الإسلامي وجامعة الإحسان، ويواصل دراسته في الجامعة الإسلامية بالمدينة المنورة.",
    tagFusha: "فصحى مبسّطة",
    tagConv: "محادثة",
    tagTrans: "ترجمة إنجليزية",
    featTitle: "لماذا هذا الموقع؟",
    featKicker: "مميزات التعلّم",
    feat1t: "نُطق صوتي",
    feat1d: "اضغط 🔊 لسماع كل جملة بالعربية الفصحى.",
    feat2t: "تبديل فوري للغة",
    feat2d: "انتقل بين الواجهة العربية والإنجليزية بضغطة زر.",
    feat3t: "ترجمة ونقل صوتي",
    feat3d: "إظهار أو إخفاء الترجمة الإنجليزية والنقل الصوتي.",
    feat4t: "اختبارات تفاعلية",
    feat4d: "اختبر فهمك واحصل على نتيجتك فوراً.",
    feat5t: "متابعة التقدّم",
    feat5d: "يُحفظ تقدّمك تلقائياً في متصفحك.",
    feat6t: "يعمل بلا إنترنت",
    feat6d: "كل الدروس محفوظة داخل الموقع.",
    lessonsKicker: "المواقف اليومية",
    lessonsTitle: "الدروس",
    lessonsDesc: "اختر موقفاً وابدأ التعلّم الآن.",
    searchPh: "ابحث عن درس…",
    allLevels: "الكل",
    start: "ابدأ الدرس",
    review: "مراجعة",
    done: "مكتمل",
    notStarted: "لم يبدأ",
    empty: "لا توجد دروس مطابقة لبحثك.",
    aboutKicker: "عن المدرّب",
    aboutTitle: "الإمام أحمد شيخ توري جميل",
    aboutP: "الإمام أحمد شيخ توري جميل، إمام ومعلّم للغة العربية من قرية بجغكندا في غامبيا. تخرّج في معهد الإمام مالك الإسلامي، ثم التحق بجامعة الإحسان في بانجولندن وتخرّج فيها عام 2021–2022، وعمل مدرّساً في معهد الإمام مالك (الذي تخرّج فيه) لمدة سنتين، ثم قُبِل في الجامعة الإسلامية بالمدينة المنورة عام 2024.",
    fCountry: "البلد", vCountry: "غامبيا",
    fVillage: "القرية", vVillage: "بجغكندا",
    fStudy: "الدراسة", vStudy: "معهد الإمام مالك الإسلامي، ثم جامعة الإحسان – بانجولندن (2021–2022)",
    fWork: "الخبرة", vWork: "مدرّس في معهد الإمام مالك الإسلامي لمدة سنتين",
    fAdmit: "القبول", vAdmit: "الجامعة الإسلامية بالمدينة المنورة (2024)",
    /* ---------- صفحة «من نحن» ---------- */
    auBadge: "تعرّف علينا",
    auTitle1: "رسالتنا أن نتعلّم العربية",
    auTitle2: "بسهولة ومتعة",
    auLead: "«دروس العربية للناطقين بغيرها» مشروع تعليمي مجاني، يقدّم دروساً مبسّطة في الفصحى داخل مواقف الحياة اليومية، مع ترجمة إنجليزية ونُطق صوتي واختبارات تفاعلية — بإشراف الإمام أحمد شيخ توري جميل.",
    auCtaStart: "ابدأ الدروس",
    auCtaFeatures: "أبرز المزايا",
    auStatLessons: "درس تفاعلي",
    auStatLevels: "مستويات",
    auStatFree: "مجاني %100",
    auWhoKicker: "من نحن",
    auWhoTitle: "مشروع تعليمي للغة العربية",
    auWhoP: "نؤمن أنّ تعلّم العربية يبدأ من موقفٍ حقيقي: في السوق، والمطار، والطبيب، والمدرسة. لذلك بنينا الموقع حول حواراتٍ قصيرة تُشبه حياة المتعلّم اليومية، بلغة فصحى مبسّطة بعيدة عن التعقيد.",
    auWhoP2: "الموقع مجاني بالكامل، ويعمل على الجوال والكمبيوتر، ويمكن تثبيته كتطبيق يعمل دون إنترنت.",
    auTeamKicker: "المدرّب",
    auTeamTitle: "الإمام أحمد شيخ توري جميل",
    auFeatKicker: "أبرز المزايا",
    auFeatTitle: "لماذا يتعلّم الناس معنا؟",
    auHowKicker: "منهجنا",
    auHowTitle: "كيف نتعلّم هنا؟",
    auContactKicker: "تواصل",
    auContactTitle: "تواصل معنا",
    auContactP: "سؤال، ملاحظة، أو تصحيح؟ شاركنا عبر GitHub — نطّلع على كل ملاحظة، ونوثّق ما نجح وما يحتاج إصلاحاً.",
    auContactBtn: "✉️ إرسال ملاحظة",
    auContactStatus: "📋 حالة المشروع",
    auContactIssues: "💬 كل الملاحظات",
    auNoteHint: "تُفتح الملاحظة في صفحة GitHub جاهزة للإرسال.",
    auBackHome: "← العودة للرئيسية",
    auIssueTitle: "ملاحظة على موقع دروس العربية",
    auIssueHow: "كيف وجدت الموقع؟ (يعمل جيداً / فيه خطأ)",
    auIssueWhat: "تفاصيل الملاحظة:",
    auIssuePage: "الصفحة أو الدرس:",
    auIssueDevice: "الجهاز والمتصفح:",
    howKicker: "طريقة الدراسة",
    howTitle: "كيف تدرس؟",
    step1t: "اختر الدرس",
    step1d: "ابدأ بموقف يشبه حياتك اليومية.",
    step2t: "استمع واقرأ",
    step2d: "اقرأ الحوار واستمع للنطق، وأظهر الترجمة عند الحاجة.",
    step3t: "تعلّم الكلمات",
    step3d: "راجع مفردات الدرس مع المعنى الإنجليزي.",
    step4t: "اختبر نفسك",
    step4d: "أجب عن الأسئلة واعرف نتيجتك فوراً.",
    back: "رجوع للدروس",
    tabDialogue: "الحوار",
    tabVocab: "المفردات",
    tabQuiz: "الاختبار",
    toggleTrans: "إظهار الترجمة",
    toggleTr: "إظهار النقل الصوتي",
    speakAll: "اسمع الحوار",
    speakModeLabel: "لغة النطق",
    speakBoth: "عربي + English",
    speakArOnly: "عربي فقط",
    speakEnOnly: "English فقط",
    toastSpeakBoth: "النطق بالعربية ثم الإنجليزية…",
    installBtn: "تثبيت التطبيق",
    installTitle: "ثبّت التطبيق على جوالك",
    installText: "أضف «دروس العربية» إلى الشاشة الرئيسية ليعمل كتطبيق كامل — حتى دون إنترنت.",
    installCta: "📲 تثبيت الآن",
    installIos: "iPhone / iPad (Safari): اضغط زر المشاركة ⬆️ ثم «إضافة إلى الشاشة الرئيسية» ← «إضافة».",
    installAndroid: "Android (Chrome): افتح القائمة ⋮ ثم «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية».",
    installDesktop: "افتح الموقع على الجوال في Chrome أو Safari ثم اختر «تثبيت التطبيق».",
    installDone: "تم تثبيت التطبيق على جهازك 👍",
    installAlready: "التطبيق مثبّت بالفعل 👍",
    installReady: "التطبيق يعمل دون إنترنت",
    errorGeneric: "حدث خطأ غير متوقع، أعد تحديث الصفحة.",
    stop: "إيقاف",
    quizScore: "النتيجة",
    quizQ: "السؤال",
    quizOf: "من",
    correct: "✓ إجابة صحيحة!",
    wrong: "✗ إجابة خاطئة، الصحيح هو: ",
    next: "التالي",
    prev: "السابق",
    finish: "إنهاء الاختبار",
    retake: "إعادة الاختبار",
    resultTitle: "نتيجتك",
    resultGreat: "ممتاز! أتقنت الدرس.",
    resultGood: "جيد جداً! أنت على الطريق.",
    resultOk: "لا بأس، راجع الدرس وحاول مرة أخرى.",
    resultFail: "راجع الدرس ثم أعد الاختبار.",
    footerAbout: "موقع تعليمي لتعليم العربية للناطقين بغيرها.",
    footerLinks: "روابط",
    footerContact: "تواصل",
    rights: "جميع الحقوق محفوظة",
    madeBy: "من إعداد",
    author: "الإمام أحمد شيخ توري جميل",
    toastTransOn: "الترجمة ظاهرة الآن",
    toastTransOff: "تم إخفاء الترجمة",
    toastTrOn: "النقل الصوتي ظاهر",
    toastTrOff: "تم إخفاء النقل الصوتي",
    toastNoSpeech: "المتصفح لا يدعم النُطق الصوتي",
    toastSpeakAr: "جاري النُطق بالعربية…",
    toastLang: "تم تغيير اللغة",
    accentChanged: "تم تغيير لون الواجهة",
    toastDone: "أحسنت! أكملت الدرس 🎉",
    savedHint: "يُحفظ تقدّمك تلقائياً",
    downloadPdf: "تحميل الكتاب PDF",
    dialogues: "جُمل",
    words: "كلمات"
  },
  en: {
    brand: "Arabic Lessons",
    brandSub: "for speakers of other languages",
    navHome: "Home",
    navLessons: "Lessons",
    navAbout: "Instructor",
    navAboutUs: "About us",
    navHow: "How to study",
    heroBadge: "Interactive app with English translation",
    heroTitle1: "Learn Arabic through real",
    heroTitle2: "conversations",
    heroLead: "Fun lessons for everyday situations, with English translation, audio pronunciation and interactive quizzes. By Imam Ahmad Sheikh Touray Jameel.",
    heroCtaLessons: "Start lessons",
    heroCtaHow: "How it works",
    statLessons: "interactive lessons",
    statLevels: "levels",
    statFree: "100% free",
    teacherRole: "Imam and Arabic language teacher",
    teacherBio: "With Imam Ahmad Sheikh Touray Jameel, we learn simplified Modern Standard Arabic with a focus on conversation and real situations. He is from The Gambia; he graduated from Al-Imam Malick Islamic Institute and Al Ihsan University, and is now studying at the Islamic University of Madinah.",
    tagFusha: "Simplified MSA",
    tagConv: "Conversation",
    tagTrans: "English translation",
    featTitle: "Why this site?",
    featKicker: "Learning features",
    feat1t: "Audio pronunciation",
    feat1d: "Tap 🔊 to hear every sentence in Arabic.",
    feat2t: "Instant language switch",
    feat2d: "Switch between Arabic and English UI with one button.",
    feat3t: "Translation & transliteration",
    feat3d: "Show or hide English translation and transliteration.",
    feat4t: "Interactive quizzes",
    feat4d: "Test your understanding and get an instant score.",
    feat5t: "Progress tracking",
    feat5d: "Your progress is saved automatically in your browser.",
    feat6t: "Works offline",
    feat6d: "All lessons are stored inside the website.",
    lessonsKicker: "Everyday situations",
    lessonsTitle: "Lessons",
    lessonsDesc: "Pick a situation and start learning now.",
    searchPh: "Search for a lesson…",
    allLevels: "All",
    start: "Start lesson",
    review: "Review",
    done: "Completed",
    notStarted: "Not started",
    empty: "No lessons match your search.",
    aboutKicker: "About the instructor",
    aboutTitle: "Imam Ahmad Sheikh Touray Jameel",
    aboutP: "Imam Ahmad Sheikh Touray Jameel is an imam and Arabic teacher from the village of Baja Kunda in The Gambia. He graduated from Al-Imam Malick Islamic Institute, then joined Al Ihsan University in Banjulinding and graduated in 2021–2022. He taught for two years at Al-Imam Malick Islamic Institute, and was admitted to the Islamic University of Madinah in 2024.",
    fCountry: "Country", vCountry: "The Gambia",
    fVillage: "Village", vVillage: "Baja Kunda",
    fStudy: "Education", vStudy: "Al-Imam Malick Islamic Institute, then Al Ihsan University – Banjulinding (2021–2022)",
    fWork: "Experience", vWork: "Two years teaching at Al-Imam Malick Islamic Institute",
    fAdmit: "Admission", vAdmit: "Islamic University of Madinah (2024)",
    /* ---------- “About us” page ---------- */
    auBadge: "Get to know us",
    auTitle1: "Our mission: learn Arabic",
    auTitle2: "with ease and joy",
    auLead: "“Arabic Lessons for speakers of other languages” is a free educational project offering simplified Modern Standard Arabic inside everyday situations, with English translation, audio pronunciation and interactive quizzes — supervised by Imam Ahmad Sheikh Touray Jameel.",
    auCtaStart: "Start lessons",
    auCtaFeatures: "Key features",
    auStatLessons: "interactive lessons",
    auStatLevels: "levels",
    auStatFree: "100% free",
    auWhoKicker: "Who we are",
    auWhoTitle: "An Arabic learning project",
    auWhoP: "We believe learning Arabic starts from a real situation: at the market, the airport, the clinic, the school. So we built the site around short dialogues that mirror the learner's daily life, in simplified Modern Standard Arabic with nothing complicated.",
    auWhoP2: "The site is completely free, works on phone and desktop, and can be installed as an app that keeps working offline.",
    auTeamKicker: "Instructor",
    auTeamTitle: "Imam Ahmad Sheikh Touray Jameel",
    auFeatKicker: "Key features",
    auFeatTitle: "Why do people learn with us?",
    auHowKicker: "Our method",
    auHowTitle: "How do we learn here?",
    auContactKicker: "Contact",
    auContactTitle: "Get in touch",
    auContactP: "A question, a note or a correction? Reach us on GitHub — we read every note, and we document what works and what needs fixing.",
    auContactBtn: "✉️ Send a note",
    auContactStatus: "📋 Project status",
    auContactIssues: "💬 All notes",
    auNoteHint: "The note opens in a ready-to-send GitHub page.",
    auBackHome: "← Back to home",
    auIssueTitle: "Feedback on the Arabic Lessons website",
    auIssueHow: "How did you find the site? (works well / has a problem)",
    auIssueWhat: "Details:",
    auIssuePage: "Page or lesson:",
    auIssueDevice: "Device and browser:",
    howKicker: "Study method",
    howTitle: "How to study",
    step1t: "Choose a lesson",
    step1d: "Start with a situation close to your daily life.",
    step2t: "Listen & read",
    step2d: "Read the dialogue, listen to the pronunciation and show translation when needed.",
    step3t: "Learn the words",
    step3d: "Review the lesson vocabulary with its English meaning.",
    step4t: "Test yourself",
    step4d: "Answer the quiz and see your score instantly.",
    back: "Back to lessons",
    tabDialogue: "Dialogue",
    tabVocab: "Vocabulary",
    tabQuiz: "Quiz",
    toggleTrans: "Show translation",
    toggleTr: "Show transliteration",
    speakAll: "Play dialogue",
    speakModeLabel: "Voice language",
    speakBoth: "Arabic + English",
    speakArOnly: "Arabic only",
    speakEnOnly: "English only",
    toastSpeakBoth: "Speaking Arabic then English…",
    installBtn: "Install app",
    installTitle: "Install the app on your phone",
    installText: "Add “Arabic Lessons” to your home screen and use it as a full app — even offline.",
    installCta: "📲 Install now",
    installIos: "iPhone / iPad (Safari): tap Share ⬆️, then “Add to Home Screen” → “Add”.",
    installAndroid: "Android (Chrome): open the ⋮ menu, then “Install app” or “Add to Home screen”.",
    installDesktop: "Open the site on your phone in Chrome or Safari, then choose “Install app”.",
    installDone: "The app is installed on your device 👍",
    installAlready: "The app is already installed 👍",
    installReady: "The app works offline",
    errorGeneric: "Something went wrong — please reload the page.",
    stop: "Stop",
    quizScore: "Score",
    quizQ: "Question",
    quizOf: "of",
    correct: "✓ Correct!",
    wrong: "✗ Wrong, the correct answer is: ",
    next: "Next",
    prev: "Previous",
    finish: "Finish quiz",
    retake: "Retake quiz",
    resultTitle: "Your result",
    resultGreat: "Excellent! You mastered the lesson.",
    resultGood: "Very good! You're on the right track.",
    resultOk: "Not bad, review the lesson and try again.",
    resultFail: "Review the lesson, then retake the quiz.",
    footerAbout: "An educational site for teaching Arabic to speakers of other languages.",
    footerLinks: "Links",
    footerContact: "Contact",
    rights: "All rights reserved",
    madeBy: "Created by",
    author: "Imam Ahmad Sheikh Touray Jameel",
    toastTransOn: "Translation shown",
    toastTransOff: "Translation hidden",
    toastTrOn: "Transliteration shown",
    toastTrOff: "Transliteration hidden",
    toastNoSpeech: "Your browser doesn't support speech",
    toastSpeakAr: "Speaking in Arabic…",
    toastLang: "Language changed",
    accentChanged: "Interface color changed",
    toastDone: "Well done! You completed the lesson 🎉",
    savedHint: "Your progress is saved automatically",
    downloadPdf: "Download PDF book",
    dialogues: "lines",
    words: "words"
  }
};

/* ---------------- State ---------------- */
const STORAGE_KEY = "arabic_lessons_v2";
const state = {
  lang: "ar",
  theme: "light",
  accent: "green",
  showTrans: true,
  showTr: true,
  speakMode: "both",      // "both" | "ar" | "en" — النطق بالعربية والإنجليزية معاً
  filterLevel: "all",
  search: "",
  completed: {},          // { lessonId: { best: 0..100, done: bool } }
  quiz: null              // runtime quiz state
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (s.lang) state.lang = s.lang;
      if (s.theme) state.theme = s.theme;
      if (s.accent) state.accent = s.accent;
      if (typeof s.showTrans === "boolean") state.showTrans = s.showTrans;
      if (typeof s.showTr === "boolean") state.showTr = s.showTr;
      if (s.speakMode) state.speakMode = s.speakMode;
      if (s.completed) state.completed = s.completed;
    }
  } catch (e) { /* ignore */ }
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      lang: state.lang, theme: state.theme, accent: state.accent,
      showTrans: state.showTrans, showTr: state.showTr,
      speakMode: state.speakMode,
      completed: state.completed
    }));
  } catch (e) { /* ignore */ }
}

/* ---------------- Helpers ---------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const t = (key) => (UI[state.lang] && UI[state.lang][key]) || key;
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const getLesson = (id) => LESSONS.find(l => l.id === id);

function toast(msg, ms) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), ms || 2200);
}

/* ---------------- Theme & Direction ---------------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const btn = $("#themeBtn");
  if (btn) btn.innerHTML = state.theme === "dark" ? "☀️" : "🌙";
}
function applyAccent() {
  document.documentElement.setAttribute("data-accent", state.accent || "green");
  $$("#accentMenu .swatch").forEach(s => s.classList.toggle("active", s.dataset.accent === state.accent));
}
function applyLang() {
  const dir = state.lang === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", state.lang);
  document.body.classList.toggle("show-trans", state.showTrans);
  document.body.classList.toggle("show-tr", state.showTr);

  // static text nodes
  $$("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    const v = t(k);
    if (v) el.textContent = v;
  });
  $$("[data-i18n-ph]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });

  const langBtn = $("#langBtn");
  if (langBtn) langBtn.innerHTML = `<span>🌐</span> ${state.lang === "ar" ? "English" : "العربية"}`;
}

/* ---------------- Speech (النطق: العربية + English معاً) ---------------- */
function speechSupported() {
  return typeof window !== "undefined" &&
    "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

let voices = [];
function initVoices() {
  if (!speechSupported()) return;
  try { voices = speechSynthesis.getVoices() || []; } catch (e) { voices = []; }
}
if (speechSupported()) {
  initVoices();
  try { speechSynthesis.onvoiceschanged = initVoices; } catch (e) { /* ignore */ }
}

/* Best installed voice for a language ("ar" / "en"). */
function pickVoice(prefix) {
  try {
    const re = new RegExp("^" + prefix, "i");
    const word = prefix === "ar" ? "arabic" : "english";
    return voices.find(v => v && re.test(v.lang || "")) ||
           voices.find(v => v && new RegExp(word, "i").test(v.name || "")) ||
           null;
  } catch (e) { return null; }
}

/* The label of the current pronunciation mode. */
function speakModeLabel() {
  const mode = state.speakMode || "both";
  return t(mode === "ar" ? "speakArOnly" : mode === "en" ? "speakEnOnly" : "speakBoth");
}

/* Which utterances to play for a word/phrase, according to the chosen mode. */
function speechItems(arText, enText) {
  const mode = state.speakMode || "both";
  const items = [];
  if (mode !== "en" && arText) items.push({ text: String(arText), lang: "ar-SA", rate: 0.82, prefix: "ar" });
  if (mode !== "ar" && enText) items.push({ text: String(enText), lang: "en-US", rate: 0.9, prefix: "en" });
  if (!items.length && arText) items.push({ text: String(arText), lang: "ar-SA", rate: 0.82, prefix: "ar" });
  return items;
}

/* Queue utterances so they play one after another (Arabic, then English). */
function queueSpeech(items, btn, done) {
  const list = (items || []).filter(x => x && x.text);
  const finish = () => {
    if (btn) btn.classList.remove("playing");
    if (typeof done === "function") done();
  };
  if (!list.length) { finish(); return; }
  let i = 0;
  const step = () => {
    if (i >= list.length) { finish(); return; }
    const item = list[i++];
    let u;
    try { u = new SpeechSynthesisUtterance(item.text); } catch (e) { step(); return; }
    u.lang = item.lang;
    u.rate = item.rate || 0.85;
    const v = pickVoice(item.prefix);
    if (v) u.voice = v;
    u.onend = step;
    u.onerror = step;
    try { speechSynthesis.speak(u); } catch (e) { step(); }
  };
  step();
}

/* One word/phrase → Arabic then English (both languages together). */
function speak(text, btn, enText) {
  if (!speechSupported()) { toast(t("toastNoSpeech")); return; }
  const items = speechItems(text, enText);
  try { speechSynthesis.cancel(); } catch (e) { /* ignore */ }
  if (btn) btn.classList.add("playing");
  queueSpeech(items, btn);
}

/* The whole dialogue → every line in Arabic then in English. */
function speakDialogue(lesson, btn) {
  if (!speechSupported()) { toast(t("toastNoSpeech")); return; }
  if (btn.classList.contains("playing")) {
    try { speechSynthesis.cancel(); } catch (e) { /* ignore */ }
    btn.classList.remove("playing");
    btn.innerHTML = btn.dataset.orig || btn.innerHTML;
    return;
  }
  try { speechSynthesis.cancel(); } catch (e) { /* ignore */ }
  btn.classList.add("playing");
  btn.dataset.orig = btn.dataset.orig || btn.innerHTML;
  btn.innerHTML = `⏹ ${t("stop")}`;
  const items = [];
  (lesson.dialogue || []).forEach(line => {
    speechItems(line.ar, line.en).forEach(x => items.push(x));
  });
  queueSpeech(items, btn, () => { btn.innerHTML = btn.dataset.orig; });
}

/* ---------------- Progress ---------------- */
function markProgress(id, score) {
  const cur = state.completed[id] || { best: 0, done: false };
  cur.best = Math.max(cur.best, score);
  if (score >= 60) cur.done = true;
  state.completed[id] = cur;
  saveState();
}
function isDone(id) { return state.completed[id] && state.completed[id].done; }

/* ---------------- GitHub (ملاحظات المشروع / التواصل) ---------------- */
const REPO_URL = "https://github.com/sheikhtouray13-crypto/sheikh-touri-arabic";

/* A ready-to-send GitHub issue: success, corrections and errors in one place. */
function issueUrl(kind) {
  const base = REPO_URL + "/issues/new";
  try {
    const title = t("auIssueTitle");
    const body = [
      "### " + t("auIssueHow"),
      "- [ ] يعمل جيداً / works well",
      "- [ ] فيه خطأ / has a problem",
      "",
      "### " + t("auIssuePage"),
      "`" + location.href + "`",
      "",
      "### " + t("auIssueDevice"),
      "`" + (navigator.userAgent || "") + "`",
      "",
      "### " + t("auIssueWhat"),
      "",
      ""
    ].join("\n");
    const label = kind === "status" ? "status" : "";
    return base + "?title=" + encodeURIComponent(title) +
      "&body=" + encodeURIComponent(body) +
      (label ? "&labels=" + encodeURIComponent(label) : "");
  } catch (e) {
    return base;
  }
}

/* ---------------- Router ---------------- */
function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  if (h.startsWith("lesson/")) return { view: "lesson", id: h.split("/")[1] };
  if (h === "about-us" || h === "aboutus") return { view: "about-us" };
  return { view: "home" };
}
function navigate(hash) { location.hash = hash; }

/* ---------------- Views ---------------- */
function renderHome() {
  const levels = [...new Set(LESSONS.map(l => l.level))].sort();
  const q = state.search.trim().toLowerCase();

  const filtered = LESSONS.filter(l => {
    const okLevel = state.filterLevel === "all" || l.level === state.filterLevel;
    const hay = (l.title.ar + " " + l.title.en + " " + l.summary.ar + " " + l.summary.en).toLowerCase();
    const okSearch = !q || hay.includes(q);
    return okLevel && okSearch;
  });

  const cards = filtered.map(l => {
    const prog = state.completed[l.id];
    const done = prog && prog.done;
    const status = done
      ? `<span class="progress-mini done"><span class="dot"></span> ${t("done")} ${prog.best}%</span>`
      : (prog ? `<span class="progress-mini"><span class="dot"></span> ${t("review")} ${prog.best}%</span>`
              : `<span class="progress-mini"><span class="dot"></span> ${t("notStarted")}</span>`);
    return `
      <article class="lesson-card reveal" style="--accent:${l.accent}">
        <div class="lesson-top">
          <div class="lesson-emoji">${l.icon}</div>
          <div>
            <h3>${esc(l.title[state.lang])}</h3>
            <div class="en-title">${esc(state.lang === "ar" ? l.title.en : l.title.ar)}</div>
          </div>
        </div>
        <div class="lesson-meta"><span class="badge">${l.level}</span></div>
        <p>${esc(l.summary[state.lang])}</p>
        <div class="lesson-foot">
          ${status}
          <span class="btn btn-ghost" data-go="lesson/${l.id}">${done ? t("review") : t("start")} →</span>
        </div>
      </article>`;
  }).join("");

  $("#app").innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <span class="eyebrow">✨ ${t("heroBadge")}</span>
          <h1>${t("heroTitle1")} <span class="grad">${t("heroTitle2")}</span></h1>
          <p class="lead">${t("heroLead")}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#lessons" data-go="lesson/${LESSONS[0].id}">📚 ${t("heroCtaLessons")}</a>
            <a class="btn btn-ghost" href="#how">${t("heroCtaHow")}</a>
          </div>
          <div class="hero-stats">
            <div><div class="num">${LESSONS.length}+</div><div class="lbl">${t("statLessons")}</div></div>
            <div><div class="num">${levels.length}</div><div class="lbl">${t("statLevels")}</div></div>
            <div><div class="num">${t("statFree")}</div><div class="lbl">${t("navLessons")}</div></div>
          </div>
        </div>
        <aside class="teacher-card reveal">
          <div class="teacher-avatar">أ</div>
          <h3>${t("aboutTitle")}</h3>
          <div class="role">${t("teacherRole")}</div>
          <p class="bio">${t("teacherBio")}</p>
          <div class="teacher-tags">
            <span class="tag">${t("tagFusha")}</span>
            <span class="tag">${t("tagConv")}</span>
            <span class="tag">${t("tagTrans")}</span>
          </div>
        </aside>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="kicker">${t("featKicker")}</div>
          <h2>${t("featTitle")}</h2>
        </div>
        <div class="features">
          ${[
            ["🔊", "feat1t", "feat1d"], ["🌐", "feat2t", "feat2d"], ["🔤", "feat3t", "feat3d"],
            ["✅", "feat4t", "feat4d"], ["📈", "feat5t", "feat5d"], ["📴", "feat6t", "feat6d"]
          ].map(([i, a, b]) => `
            <div class="feature reveal">
              <div class="fi">${i}</div>
              <h3>${t(a)}</h3>
              <p>${t(b)}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- INSTALL (PWA) — التثبيت على الجوال -->
    <section class="section install-section">
      <div class="wrap">
        <div class="install-card reveal">
          <div class="install-icon">📲</div>
          <div class="install-body">
            <h2>${t("installTitle")}</h2>
            <p>${t("installText")}</p>
            <div class="install-steps">
              <span>🍏 ${t("installIos")}</span>
              <span>🤖 ${t("installAndroid")}</span>
            </div>
          </div>
          <button class="btn btn-primary install-cta" type="button" data-install>${t("installCta")}</button>
        </div>
      </div>
    </section>

    <!-- LESSONS -->
    <section class="section" id="lessons">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="kicker">${t("lessonsKicker")}</div>
          <h2>${t("lessonsTitle")}</h2>
          <p>${t("lessonsDesc")}</p>
        </div>

        <div class="toolbar">
          <div class="search-box">
            <span>🔎</span>
            <input id="searchInput" type="search" placeholder="${t("searchPh")}" value="${esc(state.search)}" />
          </div>
          <div class="chip-row">
            <button class="chip ${state.filterLevel === "all" ? "active" : ""}" data-level="all">${t("allLevels")}</button>
            ${levels.map(v => `<button class="chip ${state.filterLevel === v ? "active" : ""}" data-level="${v}">${v}</button>`).join("")}
          </div>
        </div>

        <div class="lessons-grid">
          ${cards || `<p style="color:var(--text-soft)">${t("empty")}</p>`}
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="section" id="about">
      <div class="wrap">
        <div class="teacher-card reveal" style="max-width:760px;margin-inline:auto;text-align:start">
          <div class="teacher-avatar" style="margin-inline:0">أ</div>
          <h3>${t("aboutTitle")} <span class="role">— ${t("teacherRole")}</span></h3>
          <p class="bio" style="font-size:1rem">${t("aboutP")}</p>
          <ul class="bio-facts">
            <li><b>${t("fCountry")}:</b> <span>${t("vCountry")}</span></li>
            <li><b>${t("fVillage")}:</b> <span>${t("vVillage")}</span></li>
            <li><b>${t("fStudy")}:</b> <span>${t("vStudy")}</span></li>
            <li><b>${t("fWork")}:</b> <span>${t("vWork")}</span></li>
            <li><b>${t("fAdmit")}:</b> <span>${t("vAdmit")}</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- HOW -->
    <section class="section" id="how">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="kicker">${t("howKicker")}</div>
          <h2>${t("howTitle")}</h2>
        </div>
        <div class="features">
          ${[
            ["1️⃣", "step1t", "step1d"], ["2️⃣", "step2t", "step2d"],
            ["3️⃣", "step3t", "step3d"], ["4️⃣", "step4t", "step4d"]
          ].map(([i, a, b]) => `
            <div class="feature reveal">
              <div class="fi">${i}</div>
              <h3>${t(a)}</h3>
              <p>${t(b)}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>
  `;

  bindHome();
  observeReveal();
}

function bindHome() {
  const si = $("#searchInput");
  if (si) {
    si.addEventListener("input", (e) => {
      state.search = e.target.value;
      clearTimeout(state._searchT);
      state._searchT = setTimeout(() => {
        // re-render grid only to keep focus
        const val = state.search;
        const pos = e.target.selectionStart;
        renderHome();
        const again = $("#searchInput");
        if (again) { again.focus(); again.value = val; again.setSelectionRange(pos, pos); }
      }, 250);
    });
  }
  $$("[data-level]").forEach(b => b.addEventListener("click", () => {
    state.filterLevel = b.dataset.level;
    renderHome();
  }));
}

/* ---------------- «من نحن» / About us ---------------- */
function renderAboutUs() {
  const levels = [...new Set(LESSONS.map(l => l.level))];

  $("#app").innerHTML = `
    <!-- ABOUT HERO -->
    <section class="hero about-hero">
      <div class="wrap about-hero-inner">
        <span class="eyebrow">✨ ${t("auBadge")}</span>
        <h1>${t("auTitle1")} <span class="grad">${t("auTitle2")}</span></h1>
        <p class="lead">${t("auLead")}</p>
        <div class="hero-cta about-cta">
          <a class="btn btn-primary" href="#lessons" data-go="lesson/${LESSONS[0].id}">📚 ${t("auCtaStart")}</a>
          <a class="btn btn-ghost" href="#au-features">⭐ ${t("auCtaFeatures")}</a>
        </div>
        <div class="hero-stats about-stats">
          <div><div class="num">${LESSONS.length}+</div><div class="lbl">${t("auStatLessons")}</div></div>
          <div><div class="num">${levels.length}</div><div class="lbl">${t("auStatLevels")}</div></div>
          <div><div class="num">${t("auStatFree")}</div><div class="lbl">${t("navLessons")}</div></div>
        </div>
      </div>
    </section>

    <!-- WHO WE ARE + INSTRUCTOR -->
    <section class="section" id="au-who">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="kicker">${t("auWhoKicker")}</div>
          <h2>${t("auWhoTitle")}</h2>
        </div>
        <div class="about-grid">
          <div class="about-card reveal">
            <p>${t("auWhoP")}</p>
            <p>${t("auWhoP2")}</p>
          </div>
          <aside class="teacher-card reveal">
            <div class="teacher-avatar">أ</div>
            <h3>${t("auTeamTitle")}</h3>
            <div class="role">${t("teacherRole")}</div>
            <p class="bio">${t("aboutP")}</p>
            <div class="teacher-tags">
              <span class="tag">${t("tagFusha")}</span>
              <span class="tag">${t("tagConv")}</span>
              <span class="tag">${t("tagTrans")}</span>
            </div>
          </aside>
        </div>
        <ul class="bio-facts about-facts reveal">
          <li><b>${t("fCountry")}:</b> <span>${t("vCountry")}</span></li>
          <li><b>${t("fVillage")}:</b> <span>${t("vVillage")}</span></li>
          <li><b>${t("fStudy")}:</b> <span>${t("vStudy")}</span></li>
          <li><b>${t("fWork")}:</b> <span>${t("vWork")}</span></li>
          <li><b>${t("fAdmit")}:</b> <span>${t("vAdmit")}</span></li>
        </ul>
      </div>
    </section>

    <!-- KEY FEATURES -->
    <section class="section" id="au-features">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="kicker">${t("auFeatKicker")}</div>
          <h2>${t("auFeatTitle")}</h2>
        </div>
        <div class="features">
          ${[
            ["🔊", "feat1t", "feat1d"], ["🌐", "feat2t", "feat2d"], ["🔤", "feat3t", "feat3d"],
            ["✅", "feat4t", "feat4d"], ["📈", "feat5t", "feat5d"], ["📴", "feat6t", "feat6d"]
          ].map(([i, a, b]) => `
            <div class="feature reveal">
              <div class="fi">${i}</div>
              <h3>${t(a)}</h3>
              <p>${t(b)}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- METHOD -->
    <section class="section" id="au-how">
      <div class="wrap">
        <div class="section-head reveal">
          <div class="kicker">${t("auHowKicker")}</div>
          <h2>${t("auHowTitle")}</h2>
        </div>
        <div class="features">
          ${[
            ["1️⃣", "step1t", "step1d"], ["2️⃣", "step2t", "step2d"],
            ["3️⃣", "step3t", "step3d"], ["4️⃣", "step4t", "step4d"]
          ].map(([i, a, b]) => `
            <div class="feature reveal">
              <div class="fi">${i}</div>
              <h3>${t(a)}</h3>
              <p>${t(b)}</p>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section" id="au-contact">
      <div class="wrap">
        <div class="contact-card reveal">
          <div class="kicker">${t("auContactKicker")}</div>
          <h2>${t("auContactTitle")}</h2>
          <p>${t("auContactP")}</p>
          <div class="contact-actions">
            <a class="btn btn-primary" href="${issueUrl()}" target="_blank" rel="noopener">${t("auContactBtn")}</a>
            <a class="btn btn-ghost" href="${REPO_URL}/blob/main/STATUS.md" target="_blank" rel="noopener">${t("auContactStatus")}</a>
            <a class="btn btn-ghost" href="${REPO_URL}/issues" target="_blank" rel="noopener">${t("auContactIssues")}</a>
          </div>
          <p class="contact-hint">${t("auNoteHint")}</p>
          <a class="btn btn-ghost about-back" href="#/" data-go="/">${t("auBackHome")}</a>
        </div>
      </div>
    </section>
  `;

  observeReveal();
}

function renderLesson(id) {
  const l = getLesson(id);
  if (!l) { navigate("/"); return; }
  const prog = state.completed[id];

  $("#app").innerHTML = `
    <div class="wrap" style="padding-top:1.6rem">
      <a class="back-btn" href="#lessons" data-go="/">← ${t("back")}</a>

      <header class="lesson-hero" data-emoji="${l.icon}" style="--accent:${l.accent}">
        <span class="badge">${l.level}</span>
        <h1>${l.icon} ${esc(l.title[state.lang])}</h1>
        <div class="sub">${esc(state.lang === "ar" ? l.title.en : l.title.ar)}</div>
        <p style="margin:.6rem 0 0;opacity:.95">${esc(l.summary[state.lang])}</p>
      </header>

      <div class="lesson-tools">
        <button class="tool-toggle ${state.showTrans ? "on" : ""}" id="ttTrans">🔤 ${t("toggleTrans")}</button>
        <button class="tool-toggle ${state.showTr ? "on" : ""}" id="ttTr">🅰️ ${t("toggleTr")}</button>
        <button class="tool-toggle" id="playAll">🔊 ${t("speakAll")}</button>
        <button class="tool-toggle" id="speakMode" title="${t("speakModeLabel")}">🗣️ ${speakModeLabel()}</button>
        ${prog ? `<span class="score-pill">${t("quizScore")}: ${prog.best}%</span>` : ""}
      </div>

      <div class="tabs">
        <button class="tab active" data-tab="dialogue">💬 ${t("tabDialogue")}</button>
        <button class="tab" data-tab="vocab">📖 ${t("tabVocab")}</button>
        <button class="tab" data-tab="quiz">📝 ${t("tabQuiz")}</button>
      </div>

      <div class="panel active" id="panel-dialogue">
        <div class="dialogue">
          ${l.dialogue.map((d, i) => `
            <div class="line ${i % 2 ? "right" : ""}">
              <button class="speak-btn" data-speak="${esc(d.ar)}" data-speak-en="${esc(d.en)}" title="🔊">🔊</button>
              <div class="bubble">
                <div class="who">${esc(d.sp[state.lang])}</div>
                <div class="ar">${esc(d.ar)}</div>
                <div class="tr translation">${esc(d.tr)}</div>
                <div class="en translation">${esc(d.en)}</div>
              </div>
            </div>`).join("")}
        </div>
      </div>

      <div class="panel" id="panel-vocab">
        <div class="vocab-grid">
          ${l.vocab.map(v => `
            <div class="vocab-card">
              <button class="speak-btn" data-speak="${esc(v.ar)}" data-speak-en="${esc(v.en)}">🔊</button>
              <div class="vc-txt">
                <div class="vc-ar">${esc(v.ar)}</div>
                <div class="vc-tr">${esc(v.tr)}</div>
                <div class="vc-en">${esc(v.en)}</div>
              </div>
            </div>`).join("")}
        </div>
      </div>

      <div class="panel" id="panel-quiz"></div>
    </div>
  `;

  bindLesson(l);
}

function bindLesson(l) {
  // tabs
  $$(".tab").forEach(tb => tb.addEventListener("click", () => {
    $$(".tab").forEach(x => x.classList.remove("active"));
    $$(".panel").forEach(p => p.classList.remove("active"));
    tb.classList.add("active");
    $("#panel-" + tb.dataset.tab).classList.add("active");
    if (tb.dataset.tab === "quiz") initQuiz(l);
  }));

  // toggles
  $("#ttTrans").addEventListener("click", (e) => {
    state.showTrans = !state.showTrans;
    document.body.classList.toggle("show-trans", state.showTrans);
    e.currentTarget.classList.toggle("on", state.showTrans);
    saveState();
    toast(state.showTrans ? t("toastTransOn") : t("toastTransOff"));
  });
  $("#ttTr").addEventListener("click", (e) => {
    state.showTr = !state.showTr;
    document.body.classList.toggle("show-tr", state.showTr);
    e.currentTarget.classList.toggle("on", state.showTr);
    saveState();
    toast(state.showTr ? t("toastTrOn") : t("toastTrOff"));
  });

  // play all
  $("#playAll").addEventListener("click", (e) => speakDialogue(l, e.currentTarget));

  // pronunciation language: both → Arabic → English
  const sm = $("#speakMode");
  if (sm) sm.addEventListener("click", (e) => {
    const order = ["both", "ar", "en"];
    state.speakMode = order[(order.indexOf(state.speakMode) + 1) % order.length];
    saveState();
    e.currentTarget.innerHTML = `🗣️ ${speakModeLabel()}`;
    toast(t("speakModeLabel") + ": " + speakModeLabel());
  });
}

/* ---------------- Quiz ---------------- */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function makeQuizState(l) {
  return {
    id: l.id,
    index: 0,
    answers: new Array(l.quiz.length).fill(null),
    score: 0,
    finished: false,
    // ترتيب عشوائي لخيارات كل سؤال (يمنع أن يكون الجواب دائماً الأول)
    order: l.quiz.map(q => shuffle([...q.options.keys()]))
  };
}
function initQuiz(l) {
  if (!state.quiz || state.quiz.id !== l.id || !state.quiz.order) {
    state.quiz = makeQuizState(l);
  }
  renderQuiz(l);
}

function renderQuiz(l) {
  const qz = state.quiz;
  const box = $("#panel-quiz");
  if (!box) return;

  if (qz.finished) {
    const pct = Math.round((qz.score / l.quiz.length) * 100);
    let msg = t("resultFail");
    if (pct >= 90) msg = t("resultGreat");
    else if (pct >= 70) msg = t("resultGood");
    else if (pct >= 60) msg = t("resultOk");
    box.innerHTML = `
      <div class="quiz-result">
        <div class="ring" style="--pct:${pct}%"><span>${pct}%</span></div>
        <h3>${t("resultTitle")}: ${qz.score}/${l.quiz.length}</h3>
        <p style="color:var(--text-soft)">${msg}</p>
        <div class="quiz-nav" style="justify-content:center">
          <button class="btn btn-primary" id="retake">🔄 ${t("retake")}</button>
          <a class="btn btn-ghost" href="#lessons" data-go="/">← ${t("back")}</a>
        </div>
      </div>`;
    const r = $("#retake");
    if (r) r.addEventListener("click", () => {
      state.quiz = makeQuizState(l);
      renderQuiz(l);
    });
    return;
  }

  const q = l.quiz[qz.index];
  const chosen = qz.answers[qz.index];
  const answered = chosen !== null;
  const order = qz.order[qz.index] || q.options.map((_, i) => i);
  const opts = order.map((orig, disp) => {
    let cls = "";
    if (answered) {
      if (orig === q.answer) cls = "correct";
      else if (orig === chosen) cls = "wrong";
    }
    return `<button class="option ${cls}" data-opt="${orig}" ${answered ? "disabled" : ""}>
      <span class="key">${String.fromCharCode(65 + disp)}</span>
      <span>${esc(q.options[orig][state.lang])}</span>
    </button>`;
  }).join("");

  box.innerHTML = `
    <div class="quiz-head">
      <div class="quiz-progress"><i style="width:${(qz.index / l.quiz.length) * 100}%"></i></div>
      <span class="score-pill">${t("quizQ")} ${qz.index + 1} ${t("quizOf")} ${l.quiz.length}</span>
    </div>
    <div class="question-card">
      <div class="q-text">${esc(q.q[state.lang])}</div>
      <div class="options">${opts}</div>
      <div class="quiz-feedback" id="qFeedback" style="color:${answered ? (chosen === q.answer ? "#16a34a" : "#dc2626") : "transparent"}">
        ${answered ? (chosen === q.answer ? t("correct") : t("wrong") + esc(q.options[q.answer][state.lang])) : "."}
      </div>
      <div class="quiz-nav">
        <button class="btn btn-ghost" id="qPrev" ${qz.index === 0 ? 'disabled style="opacity:.5"' : ""}>← ${t("prev")}</button>
        ${qz.index < l.quiz.length - 1
          ? `<button class="btn btn-primary" id="qNext">${t("next")} →</button>`
          : `<button class="btn btn-gold" id="qFinish">${t("finish")} ✔</button>`}
      </div>
    </div>`;

  $$("[data-opt]", box).forEach(b => b.addEventListener("click", () => {
    if (qz.answers[qz.index] !== null) return;
    const choice = +b.dataset.opt;
    qz.answers[qz.index] = choice;
    if (choice === q.answer) qz.score++;
    renderQuiz(l);
    // live progress save
    const pct = Math.round((qz.score / l.quiz.length) * 100);
    markProgress(l.id, pct);
  }));

  const prev = $("#qPrev", box); if (prev) prev.addEventListener("click", () => { qz.index--; renderQuiz(l); });
  const next = $("#qNext", box); if (next) next.addEventListener("click", () => { qz.index++; renderQuiz(l); });
  const fin = $("#qFinish", box); if (fin) fin.addEventListener("click", () => {
    qz.finished = true;
    const pct = Math.round((qz.score / l.quiz.length) * 100);
    markProgress(l.id, pct);
    renderQuiz(l);
    if (pct >= 60) toast(t("toastDone"));
  });
}

/* ---------------- Reveal on scroll ---------------- */
let observer;
function observeReveal() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); observer.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));
}

/* ---------------- Install (PWA) — تثبيت التطبيق ---------------- */
/* The event is captured here too, in case index.html did not get it first. */
window.addEventListener("beforeinstallprompt", (e) => {
  try { e.preventDefault(); } catch (_) {}
  window.__deferredInstallPrompt = e;
});
window.addEventListener("appinstalled", () => {
  window.__deferredInstallPrompt = null;
  try { toast(t("installDone")); } catch (_) {}
});

function isStandalone() {
  try {
    return window.matchMedia("(display-mode: standalone)").matches ||
           window.matchMedia("(display-mode: fullscreen)").matches ||
           window.navigator.standalone === true;
  } catch (e) { return false; }
}
function isIOS() {
  const ua = navigator.userAgent || "";
  return /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}
function isMobile() {
  return /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(navigator.userAgent || "");
}

function installPWA() {
  const deferred = window.__deferredInstallPrompt;
  if (deferred && typeof deferred.prompt === "function") {
    try {
      deferred.prompt();
      if (deferred.userChoice && deferred.userChoice.then) {
        deferred.userChoice.then(() => { window.__deferredInstallPrompt = null; }).catch(() => {});
      }
      return;
    } catch (e) { /* fall through to instructions */ }
  }
  if (isStandalone()) { toast(t("installAlready")); return; }
  const guide = isIOS() ? t("installIos") : (isMobile() ? t("installAndroid") : t("installDesktop"));
  toast(guide, 7000);
}

/* ---------------- Global click routing ---------------- */
document.addEventListener("click", (e) => {
  // speak buttons (single global delegation) — Arabic then English
  const speaker = e.target.closest("[data-speak]");
  if (speaker) { speak(speaker.dataset.speak, speaker, speaker.dataset.speakEn || ""); return; }

  // install app (PWA) — header button and home-page card
  const installer = e.target.closest("[data-install]");
  if (installer) { e.preventDefault(); installPWA(); return; }

  const go = e.target.closest("[data-go]");
  if (go) {
    e.preventDefault();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    state.quiz = null;
    navigate(go.dataset.go);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const anchor = e.target.closest('a[href^="#"]:not([data-go])');
  if (anchor) {
    const href = anchor.getAttribute("href");
    if (href === "#lessons" || href === "#how" || href === "#about") {
      e.preventDefault();
      if (parseHash().view !== "home") { navigate("/"); setTimeout(() => scrollToId(href.slice(1)), 60); }
      else scrollToId(href.slice(1));
    } else if (/^#[A-Za-z][\w-]*$/.test(href)) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); scrollToId(id); }
    }
  }
});
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
}

/* ---------------- Header buttons ---------------- */
function bindChrome() {
  $("#themeBtn").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme(); saveState();
  });
  const accentBtn = $("#accentBtn");
  const accentMenu = $("#accentMenu");
  if (accentBtn && accentMenu) {
    accentBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      accentMenu.hidden = !accentMenu.hidden;
    });
    $$("#accentMenu .swatch").forEach(s => s.addEventListener("click", () => {
      state.accent = s.dataset.accent;
      applyAccent(); saveState();
      accentMenu.hidden = true;
      toast(t("accentChanged"));
    }));
    document.addEventListener("click", (e) => {
      if (!accentMenu.hidden && !e.target.closest(".accent-wrap")) accentMenu.hidden = true;
    });
  }
  $("#langBtn").addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    applyLang(); saveState();
    render();
    toast(t("toastLang"));
  });
  const menu = $("#navMenu");
  if (menu) menu.addEventListener("click", () => scrollToId("lessons"));

  const navToggle = $("#navToggle");
  const navEl = $("#siteNav");
  if (navToggle && navEl) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = navEl.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navEl.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        navEl.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".site-header")) {
        navEl.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

/* ---------------- Render dispatcher ---------------- */
function render() {
  const r = parseHash();
  if (r.view === "lesson") renderLesson(r.id);
  else if (r.view === "about-us") renderAboutUs();
  else renderHome();
  syncNav();
}

/* Highlight the current menu item and close the mobile menu. */
function syncNav() {
  const r = parseHash();
  $$(".nav a").forEach(a => {
    const href = a.getAttribute("href") || "";
    const isActive = r.view === "about-us" ? href === "#about-us" : (href === "#/" || href === "#");
    a.classList.toggle("active", isActive);
  });
  const navEl = $("#siteNav");
  const navToggle = $("#navToggle");
  if (navEl) navEl.classList.remove("open");
  if (navToggle) navToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("hashchange", () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); state.quiz = null; render(); window.scrollTo({ top: 0 }); });

/* ---------------- Boot ---------------- */
function boot() {
  try {
    loadState();
    applyTheme();
    applyAccent();
    applyLang();
    bindChrome();
    render();
  } catch (err) {
    /* احفظ التطبيق من الأخطاء: لا نتوقف عن العمل بسبب خطأ واحد */
    try { console.error(err); } catch (_) {}
    try { toast(t("errorGeneric"), 5000); } catch (_) {}
  }
}

/* Friendly guard instead of a silent crash. */
window.addEventListener("error", (e) => {
  if (e && (e.message || e.error)) { try { toast(t("errorGeneric")); } catch (_) {} }
});
window.addEventListener("unhandledrejection", () => {
  try { toast(t("errorGeneric")); } catch (_) {}
});

document.addEventListener("DOMContentLoaded", boot);
