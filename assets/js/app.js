/* =========================================================
   Arabic Lessons — App Logic
   الإمام أحمد شيخ توري | Imam Ahmad Sheikh Touri
   ========================================================= */

/* ---------------- i18n (interface strings) ---------------- */
const UI = {
  ar: {
    brand: "دروس العربية",
    brandSub: "لغير الناطقين بها",
    navHome: "الرئيسية",
    navLessons: "الدروس",
    navAbout: "عن المدرّب",
    navHow: "كيف تدرس؟",
    heroBadge: "تطبيق تفاعلي مع ترجمة إنجليزية",
    heroTitle1: "تعلّم العربية بالمحادثات",
    heroTitle2: "الحقيقية",
    heroLead: "دروسٌ ممتعة للمواقف اليومية، مع ترجمة إنجليزية، ونُطق صوتي، واختبارات تفاعلية. من إعداد الإمام أحمد شيخ توري.",
    heroCtaLessons: "ابدأ الدروس",
    heroCtaHow: "كيف يعمل؟",
    statLessons: "درس تفاعلي",
    statLevels: "مستويات",
    statFree: "مجاني %100",
    teacherRole: "إمام ومعلّم اللغة العربية",
    teacherBio: "نتعلّم مع الإمام أحمد شيخ توري العربية بالفصحى المبسّطة مع تركيز على المحادثة والمواقف الحقيقية لغير الناطقين بها.",
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
    aboutTitle: "الإمام أحمد شيخ توري",
    aboutP: "الإمام أحمد شيخ توري، معلّم متخصّص في تعليم اللغة العربية لغير الناطقين بها، يقدّم دروساً مبسّطة تعتمد على المواقف الحقيقية والترجمة الإنجليزية لتسهيل الفهم.",
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
    footerAbout: "موقع تعليمي لتعليم العربية لغير الناطقين بها.",
    footerLinks: "روابط",
    footerContact: "تواصل",
    rights: "جميع الحقوق محفوظة",
    madeBy: "من إعداد",
    author: "الإمام أحمد شيخ توري",
    toastTransOn: "الترجمة ظاهرة الآن",
    toastTransOff: "تم إخفاء الترجمة",
    toastTrOn: "النقل الصوتي ظاهر",
    toastTrOff: "تم إخفاء النقل الصوتي",
    toastNoSpeech: "المتصفح لا يدعم النُطق الصوتي",
    toastSpeakAr: "جاري النُطق بالعربية…",
    toastLang: "تم تغيير اللغة",
    toastDone: "أحسنت! أكملت الدرس 🎉",
    savedHint: "يُحفظ تقدّمك تلقائياً",
    dialogues: "جُمل",
    words: "كلمات"
  },
  en: {
    brand: "Arabic Lessons",
    brandSub: "for non-native speakers",
    navHome: "Home",
    navLessons: "Lessons",
    navAbout: "Instructor",
    navHow: "How to study",
    heroBadge: "Interactive app with English translation",
    heroTitle1: "Learn Arabic through real",
    heroTitle2: "conversations",
    heroLead: "Fun lessons for everyday situations, with English translation, audio pronunciation and interactive quizzes. By Imam Ahmad Sheikh Touri.",
    heroCtaLessons: "Start lessons",
    heroCtaHow: "How it works",
    statLessons: "interactive lessons",
    statLevels: "levels",
    statFree: "100% free",
    teacherRole: "Imam and Arabic language teacher",
    teacherBio: "With Imam Ahmad Sheikh Touri, we learn simplified Modern Standard Arabic with a focus on conversation and real situations for non-native speakers.",
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
    aboutTitle: "Imam Ahmad Sheikh Touri",
    aboutP: "Imam Ahmad Sheikh Touri is a specialist in teaching Arabic to non-native speakers, offering simple lessons based on real situations with English translation to make understanding easy.",
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
    footerAbout: "An educational site for teaching Arabic to non-native speakers.",
    footerLinks: "Links",
    footerContact: "Contact",
    rights: "All rights reserved",
    madeBy: "Created by",
    author: "Imam Ahmad Sheikh Touri",
    toastTransOn: "Translation shown",
    toastTransOff: "Translation hidden",
    toastTrOn: "Transliteration shown",
    toastTrOff: "Transliteration hidden",
    toastNoSpeech: "Your browser doesn't support speech",
    toastSpeakAr: "Speaking in Arabic…",
    toastLang: "Language changed",
    toastDone: "Well done! You completed the lesson 🎉",
    savedHint: "Your progress is saved automatically",
    dialogues: "lines",
    words: "words"
  }
};

/* ---------------- State ---------------- */
const STORAGE_KEY = "arabic_lessons_v1";
const state = {
  lang: "ar",
  theme: "light",
  showTrans: true,
  showTr: true,
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
      if (typeof s.showTrans === "boolean") state.showTrans = s.showTrans;
      if (typeof s.showTr === "boolean") state.showTr = s.showTr;
      if (s.completed) state.completed = s.completed;
    }
  } catch (e) { /* ignore */ }
}
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      lang: state.lang, theme: state.theme,
      showTrans: state.showTrans, showTr: state.showTr,
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

function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ---------------- Theme & Direction ---------------- */
function applyTheme() {
  document.documentElement.setAttribute("data-theme", state.theme);
  const btn = $("#themeBtn");
  if (btn) btn.innerHTML = state.theme === "dark" ? "☀️" : "🌙";
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

/* ---------------- Speech ---------------- */
let voices = [];
function initVoices() {
  if (!("speechSynthesis" in window)) return;
  voices = speechSynthesis.getVoices();
}
if ("speechSynthesis" in window) {
  initVoices();
  speechSynthesis.onvoiceschanged = initVoices;
}
function arabicVoice() {
  return voices.find(v => /^ar/i.test(v.lang)) || voices.find(v => /arabic/i.test(v.name));
}
function speak(text, btn) {
  if (!("speechSynthesis" in window)) { toast(t("toastNoSpeech")); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ar-SA";
  u.rate = 0.82;
  const v = arabicVoice();
  if (v) u.voice = v;
  if (btn) {
    btn.classList.add("playing");
    u.onend = u.onerror = () => btn.classList.remove("playing");
  }
  speechSynthesis.speak(u);
}
function speakDialogue(lesson, btn) {
  if (!("speechSynthesis" in window)) { toast(t("toastNoSpeech")); return; }
  if (btn.classList.contains("playing")) { speechSynthesis.cancel(); btn.classList.remove("playing"); return; }
  speechSynthesis.cancel();
  btn.classList.add("playing");
  btn.dataset.orig = btn.innerHTML;
  btn.innerHTML = `⏹ ${t("stop")}`;
  let i = 0;
  const next = () => {
    if (i >= lesson.dialogue.length) {
      btn.classList.remove("playing");
      btn.innerHTML = btn.dataset.orig;
      return;
    }
    const line = lesson.dialogue[i++];
    const u = new SpeechSynthesisUtterance(line.ar);
    u.lang = "ar-SA"; u.rate = 0.8;
    const v = arabicVoice(); if (v) u.voice = v;
    u.onend = next;
    u.onerror = next;
    speechSynthesis.speak(u);
  };
  next();
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

/* ---------------- Router ---------------- */
function parseHash() {
  const h = location.hash.replace(/^#\/?/, "");
  if (h.startsWith("lesson/")) return { view: "lesson", id: h.split("/")[1] };
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
              <button class="speak-btn" data-speak="${esc(d.ar)}" title="🔊">🔊</button>
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
              <button class="speak-btn" data-speak="${esc(v.ar)}">🔊</button>
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

/* ---------------- Global click routing ---------------- */
document.addEventListener("click", (e) => {
  // speak buttons (single global delegation)
  const speaker = e.target.closest("[data-speak]");
  if (speaker) { speak(speaker.dataset.speak, speaker); return; }

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
  $("#langBtn").addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    applyLang(); saveState();
    render();
    toast(t("toastLang"));
  });
  const menu = $("#navMenu");
  if (menu) menu.addEventListener("click", () => scrollToId("lessons"));
}

/* ---------------- Render dispatcher ---------------- */
function render() {
  const r = parseHash();
  if (r.view === "lesson") renderLesson(r.id);
  else renderHome();
}

window.addEventListener("hashchange", () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); state.quiz = null; render(); window.scrollTo({ top: 0 }); });

/* ---------------- Boot ---------------- */
function boot() {
  loadState();
  applyTheme();
  applyLang();
  bindChrome();
  render();
}
document.addEventListener("DOMContentLoaded", boot);
