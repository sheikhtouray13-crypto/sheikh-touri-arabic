/* =========================================================
   دروس العربية لغير الناطقين — محتوى الدروس
   Arabic Lessons for Non-Native Speakers — Lesson Data
   الإمام أحمد شيخ توري | Imam Ahmad Sheikh Touri
   ========================================================= */

const LESSONS = [
  {
    id: "greetings",
    icon: "👋",
    level: "A1",
    accent: "#2563eb",
    title: { ar: "التحيّات والتعريف بالنفس", en: "Greetings & Introducing Yourself" },
    summary: {
      ar: "أوّل خطوة: كيف تبدأ حديثاً وتعرّف بنفسك بأدب.",
      en: "Your first step: how to start a conversation and introduce yourself politely."
    },
    dialogue: [
      { sp: { ar: "سامي", en: "Sami" }, ar: "السَّلامُ عَلَيْكُمْ وَرَحْمَةُ الله.", en: "Peace and mercy of God be upon you.", tr: "as-salāmu ʿalaykum wa raḥmatu llāh" },
      { sp: { ar: "مريم", en: "Maryam" }, ar: "وَعَلَيْكُمُ السَّلامُ وَرَحْمَةُ اللهِ وَبَرَكاتُهُ.", en: "And peace, mercy and blessings of God be upon you too.", tr: "wa-ʿalaykumu s-salāmu wa raḥmatu llāhi wa barakātuh" },
      { sp: { ar: "سامي", en: "Sami" }, ar: "أَهْلاً وَسَهْلاً. اسْمي سامي. وَأَنْتِ؟", en: "Welcome! My name is Sami. And you?", tr: "ahlan wa sahlan. ismī Sāmī. wa anti?" },
      { sp: { ar: "مريم", en: "Maryam" }, ar: "أَهْلاً بِكَ. اسْمي مَرْيَم. أَنا من كَنَدا.", en: "Welcome. My name is Maryam. I am from Canada.", tr: "ahlan bika. ismī Maryam. anā min Kanadā" },
      { sp: { ar: "سامي", en: "Sami" }, ar: "تَشَرَّفْتُ بِمَعْرِفَتِك. كَيْفَ حالُكِ؟", en: "Pleased to meet you. How are you?", tr: "tasharraftu bi-maʿrifatik. kayfa ḥāluki?" },
      { sp: { ar: "مريم", en: "Maryam" }, ar: "بِخَيْر، الْحَمْدُ لله. وَأَنْتَ؟", en: "Fine, thank God. And you?", tr: "bi-khayr, al-ḥamdu li-llāh. wa anta?" },
      { sp: { ar: "سامي", en: "Sami" }, ar: "بِخَيْر. أَهْلاً وَسَهْلاً بِكِ في مِصْر.", en: "Fine. Welcome to Egypt!", tr: "bi-khayr. ahlan wa sahlan biki fī Miṣr" }
    ],
    vocab: [
      { ar: "السَّلامُ عَلَيْكُمْ", en: "Peace be upon you (hello)", tr: "as-salāmu ʿalaykum" },
      { ar: "أَهْلاً وَسَهْلاً", en: "Welcome", tr: "ahlan wa sahlan" },
      { ar: "اسْمي...", en: "My name is...", tr: "ismī..." },
      { ar: "تَشَرَّفْتُ بِمَعْرِفَتِك", en: "Pleased to meet you", tr: "tasharraftu bi-maʿrifatik" },
      { ar: "كَيْفَ حالُك؟", en: "How are you? (to a man)", tr: "kayfa ḥāluk?" },
      { ar: "بِخَيْر، الْحَمْدُ لله", en: "Fine, praise be to God", tr: "bi-khayr, al-ḥamdu li-llāh" },
      { ar: "مِنْ أَيْنَ أَنْتَ؟", en: "Where are you from? (to a man)", tr: "min ayna anta?" },
      { ar: "أَنا مِن...", en: "I am from...", tr: "anā min..." }
    ],
    quiz: [
      { q: { ar: "ماذا تَقول عندما تُقابِل شخصاً؟", en: "What do you say when you meet someone?" }, options: [{ ar: "السَّلامُ عَلَيْكُمْ", en: "Hello (as-salāmu ʿalaykum)" }, { ar: "وداعاً", en: "Goodbye (wadāʿan)" }, { ar: "شُكْراً", en: "Thanks (shukran)" }], answer: 0 },
      { q: { ar: "ما معنى «تَشَرَّفْتُ بِمَعْرِفَتِك»؟", en: "What does «tasharraftu bi-maʿrifatik» mean?" }, options: [{ ar: "How are you?", en: "How are you?" }, { ar: "Pleased to meet you", en: "Pleased to meet you" }, { ar: "Good night", en: "Good night" }], answer: 1 },
      { q: { ar: "أكمل: أَنا ____ كَنَدا.", en: "Complete: anā ____ Kanadā." }, options: [{ ar: "مِنْ", en: "min (from)" }, { ar: "إلى", en: "ilā (to)" }, { ar: "في", en: "fī (in)" }], answer: 0 },
      { q: { ar: "كيف تَسأل امرأة «من أين أنتِ؟»", en: "How do you ask a woman \"Where are you from?\"" }, options: [{ ar: "مِنْ أَيْنَ أَنْتَ؟", en: "min ayna anta?" }, { ar: "مِنْ أَيْنَ أَنْتِ؟", en: "min ayna anti?" }, { ar: "كَيْفَ حالُك؟", en: "kayfa ḥāluk?" }], answer: 1 },
      { q: { ar: "ما معنى «أَهْلاً وَسَهْلاً»؟", en: "What does «ahlan wa sahlan» mean?" }, options: [{ ar: "Goodbye", en: "Goodbye" }, { ar: "Welcome", en: "Welcome" }, { ar: "Sorry", en: "Sorry" }], answer: 1 }
    ]
  },

  {
    id: "airport",
    icon: "✈️",
    level: "A1",
    accent: "#0ea5e9",
    title: { ar: "في المطار", en: "At the Airport" },
    summary: {
      ar: "كلمات وجُمل تحتاجها من الوصول إلى صالة السفر.",
      en: "Words and phrases you need from arrival to the departure gate."
    },
    dialogue: [
      { sp: { ar: "المُوَظَّف", en: "Officer" }, ar: "جَواز السَّفَر، لَوْ سَمَحْت.", en: "Your passport, please.", tr: "jawāz as-safar, law samaḥt" },
      { sp: { ar: "المُسافِر", en: "Traveler" }, ar: "تَفَضَّل، هذا جَوازي.", en: "Here you are, this is my passport.", tr: "tafaḍḍal, hādhā jawāzī" },
      { sp: { ar: "المُوَظَّف", en: "Officer" }, ar: "ما هِيَ مُدَّةُ زِيارَتِك؟", en: "How long is your visit?", tr: "mā hiya muddatu ziyāratik?" },
      { sp: { ar: "المُسافِر", en: "Traveler" }, ar: "أُسْبوعان. أَنا سائِح.", en: "Two weeks. I am a tourist.", tr: "usbūʿān. anā sāʾiḥ" },
      { sp: { ar: "المُوَظَّف", en: "Officer" }, ar: "أَيْنَ حَقائِبُك؟", en: "Where are your bags?", tr: "ayna ḥaqāʾibuk?" },
      { sp: { ar: "المُسافِر", en: "Traveler" }, ar: "هُناك، عَلى الحِزام. أَيْنَ مَخْرَجُ الطَّائِرَة؟", en: "There, on the belt. Where is the gate?", tr: "hunāk, ʿalā l-ḥizām. ayna makhraju ṭ-ṭāʾira?" },
      { sp: { ar: "المُوَظَّف", en: "Officer" }, ar: "رِحْلَةٌ سَعيدَة!", en: "Have a nice trip!", tr: "riḥla saʿīda!" }
    ],
    vocab: [
      { ar: "المَطار", en: "The airport", tr: "al-maṭār" },
      { ar: "جَواز السَّفَر", en: "Passport", tr: "jawāz as-safar" },
      { ar: "تَذْكِرَة الطَّائِرَة", en: "Airplane ticket", tr: "tadhkirat aṭ-ṭāʾira" },
      { ar: "الحَقائِب", en: "Luggage / bags", tr: "al-ḥaqāʾib" },
      { ar: "مَخْرَج / بَوّابَة", en: "Gate", tr: "makhraj / bawwāba" },
      { ar: "رِحْلَة", en: "Flight / trip", tr: "riḥla" },
      { ar: "سائِح", en: "Tourist", tr: "sāʾiḥ" },
      { ar: "مُدَّة الزِّيارة", en: "Duration of the visit", tr: "muddat az-ziyāra" }
    ],
    quiz: [
      { q: { ar: "ما معنى «جَواز السَّفَر»؟", en: "What does «jawāz as-safar» mean?" }, options: [{ ar: "Passport", en: "Passport" }, { ar: "Ticket", en: "Ticket" }, { ar: "Luggage", en: "Luggage" }], answer: 0 },
      { q: { ar: "أكمل: أَيْنَ ____ الطَّائِرَة؟", en: "Complete: ayna ____ aṭ-ṭāʾira?" }, options: [{ ar: "مَخْرَجُ", en: "makhraju" }, { ar: "حَقائِبُ", en: "ḥaqāʾibu" }, { ar: "مُدَّةُ", en: "muddatu" }], answer: 0 },
      { q: { ar: "كيف تقول «أنا سائح»؟", en: "How do you say \"I am a tourist\"?" }, options: [{ ar: "أَنا سائِح", en: "anā sāʾiḥ" }, { ar: "أَنا مُوَظَّف", en: "anā muwaẓẓaf" }, { ar: "أَنا طالِب", en: "anā ṭālib" }], answer: 0 },
      { q: { ar: "ما معنى «رِحْلَةٌ سَعيدَة»؟", en: "What does «riḥla saʿīda» mean?" }, options: [{ ar: "Have a nice trip", en: "Have a nice trip" }, { ar: "Where are you?", en: "Where are you?" }, { ar: "Welcome", en: "Welcome" }], answer: 0 },
      { q: { ar: "«الحَقائِب» تَعْني:", en: "«al-ḥaqāʾib» means:" }, options: [{ ar: "Bags", en: "Bags" }, { ar: "Seats", en: "Seats" }, { ar: "Tickets", en: "Tickets" }], answer: 0 }
    ]
  },

  {
    id: "market",
    icon: "🛒",
    level: "A1",
    accent: "#d97706",
    title: { ar: "في السوق", en: "At the Market" },
    summary: {
      ar: "تسوّق، اسأل عن السعر، وفاوض بلطف.",
      en: "Shop, ask for prices, and bargain politely."
    },
    dialogue: [
      { sp: { ar: "البائِع", en: "Seller" }, ar: "أَهْلاً، تَفَضَّلْ. ماذا تُريد؟", en: "Welcome, come in. What would you like?", tr: "ahlan, tafaḍḍal. mādhā turīd?" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "بِكَمْ هٰذِهِ التُّفّاحَة؟", en: "How much is this apple?", tr: "bikam hādhihi t-tuffāḥa?" },
      { sp: { ar: "البائِع", en: "Seller" }, ar: "الكيلو بِعَشَرَةِ جُنَيْهات.", en: "The kilo is ten pounds.", tr: "al-kīlū bi-ʿasharati junayhāt" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "غالي قَليلاً. هَلْ يُوجَدُ خَصْم؟", en: "A bit expensive. Is there a discount?", tr: "ghālī qalīlan. hal yūjadu khashm?" },
      { sp: { ar: "البائِع", en: "Seller" }, ar: "حَسَناً، بِثمانِيَة جُنَيْهات.", en: "Alright, for eight pounds.", tr: "ḥasanan, bi-thamāniya junayhāt" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "اتَّفَقْنا. أُريدُ كيلوَيْن، لَوْ سَمَحْت.", en: "Deal. I want two kilos, please.", tr: "ittafaqnā. urīdu kīluwayn, law samaḥt" },
      { sp: { ar: "البائِع", en: "Seller" }, ar: "شُكْراً، مَعَ السَّلامَة!", en: "Thank you, goodbye!", tr: "shukran, maʿa s-salāma!" }
    ],
    vocab: [
      { ar: "السُّوق", en: "The market", tr: "as-sūq" },
      { ar: "بِكَمْ؟", en: "How much?", tr: "bikam?" },
      { ar: "غالي", en: "Expensive", tr: "ghālī" },
      { ar: "رَخيص", en: "Cheap", tr: "rakhīṣ" },
      { ar: "خَصْم", en: "Discount", tr: "khashm" },
      { ar: "الكيلو", en: "The kilo", tr: "al-kīlū" },
      { ar: "أُريدُ...", en: "I want...", tr: "urīdu..." },
      { ar: "اتَّفَقْنا", en: "Deal / agreed", tr: "ittafaqnā" }
    ],
    quiz: [
      { q: { ar: "كَيْفَ تَسْأَل عَنِ السِّعْر؟", en: "How do you ask about the price?" }, options: [{ ar: "بِكَمْ؟", en: "bikam?" }, { ar: "أَيْنَ؟", en: "ayna?" }, { ar: "مَتى؟", en: "matā?" }], answer: 0 },
      { q: { ar: "ما معنى «خَصْم»؟", en: "What does «khashm» mean?" }, options: [{ ar: "Discount", en: "Discount" }, { ar: "Receipt", en: "Receipt" }, { ar: "Change", en: "Change" }], answer: 0 },
      { q: { ar: "عَكْس «غالي» هُوَ:", en: "The opposite of «ghālī» is:" }, options: [{ ar: "رَخيص", en: "rakhīṣ" }, { ar: "كَبير", en: "kabīr" }, { ar: "جَديد", en: "jadīd" }], answer: 0 },
      { q: { ar: "«أُريدُ كيلوَيْن» تَعْني:", en: "«urīdu kīluwayn» means:" }, options: [{ ar: "I want two kilos", en: "I want two kilos" }, { ar: "I want one kilo", en: "I want one kilo" }, { ar: "I want three kilos", en: "I want three kilos" }], answer: 0 },
      { q: { ar: "أكمل: هَلْ يُوجَدُ ____؟", en: "Complete: hal yūjadu ____?" }, options: [{ ar: "خَصْم", en: "khashm" }, { ar: "كيلو", en: "kīlū" }, { ar: "سوق", en: "sūq" }], answer: 0 }
    ]
  },

  {
    id: "restaurant",
    icon: "🍽️",
    level: "A1",
    accent: "#dc2626",
    title: { ar: "في المطعم", en: "At the Restaurant" },
    summary: {
      ar: "اطلب طعامك، اسأل عن المكوّنات، واطلب الحساب.",
      en: "Order your food, ask about ingredients, and request the bill."
    },
    dialogue: [
      { sp: { ar: "النَّادِل", en: "Waiter" }, ar: "مَرْحَباً! طاوِلَة لِشَخْصَيْن؟", en: "Hello! A table for two?", tr: "marḥaban! ṭāwila li-shakhṣayn?" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "نَعَمْ، لَوْ سَمَحْت.", en: "Yes, please.", tr: "naʿam, law samaḥt" },
      { sp: { ar: "النَّادِل", en: "Waiter" }, ar: "تَفَضَّلْ، هٰذا هُوَ المِنْيو. ماذا تَطْلُب؟", en: "Here is the menu. What would you order?", tr: "tafaḍḍal, hādhā huwa l-minyū. mādhā taṭlub?" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "أُريدُ دَجاجاً مَشْوِيّاً وَأَرُزّاً.", en: "I would like grilled chicken and rice.", tr: "urīdu dajājan mashwiyyan wa aruzzan" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "هَلْ فيهِ فُلْفُل حارّ؟", en: "Does it have hot pepper?", tr: "hal fīhi fulful ḥārr?" },
      { sp: { ar: "النَّادِل", en: "Waiter" }, ar: "لا، لا يوجَدُ فُلْفُل. وَماذا تَشْرَب؟", en: "No, there is no pepper. And what will you drink?", tr: "lā, lā yūjadu fulful. wa mādhā tashrab?" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "عَصير بُرْتُقال. وَالحِساب بَعْدَ ذٰلِك، لَوْ سَمَحْت.", en: "Orange juice. And the bill afterwards, please.", tr: "ʿaṣīr burtuqāl. wa l-ḥisāb baʿda dhālik, law samaḥt" }
    ],
    vocab: [
      { ar: "المَطْعَم", en: "The restaurant", tr: "al-maṭʿam" },
      { ar: "المِنْيو / قائِمَة الطَّعام", en: "The menu", tr: "al-minyū / qāʾimat aṭ-ṭaʿām" },
      { ar: "النَّادِل", en: "Waiter", tr: "an-nādil" },
      { ar: "أَطْلُب / أُريدُ", en: "I order / I want", tr: "aṭlub / urīd" },
      { ar: "الحِساب", en: "The bill", tr: "al-ḥisāb" },
      { ar: "ماء", en: "Water", tr: "māʾ" },
      { ar: "لَذيذ", en: "Delicious", tr: "ladhīdh" },
      { ar: "فُلْفُل حارّ", en: "Hot pepper", tr: "fulful ḥārr" }
    ],
    quiz: [
      { q: { ar: "ما مَعْنى «قائِمَة الطَّعام»؟", en: "What does «qāʾimat aṭ-ṭaʿām» mean?" }, options: [{ ar: "The menu", en: "The menu" }, { ar: "The bill", en: "The bill" }, { ar: "The table", en: "The table" }], answer: 0 },
      { q: { ar: "كيف تَطْلُب الحِساب؟", en: "How do you ask for the bill?" }, options: [{ ar: "الحِساب، لَوْ سَمَحْت", en: "al-ḥisāb, law samaḥt" }, { ar: "المِنْيو، لَوْ سَمَحْت", en: "al-minyū, law samaḥt" }, { ar: "الماء، لَوْ سَمَحْت", en: "al-māʾ, law samaḥt" }], answer: 0 },
      { q: { ar: "أكمل: أُريدُ دَجاجاً ____.", en: "Complete: urīdu dajājan ____." }, options: [{ ar: "مَشْوِيّاً", en: "mashwiyyan" }, { ar: "بارِداً", en: "bāridan" }, { ar: "حُلْواً", en: "ḥulwan" }], answer: 0 },
      { q: { ar: "مَعْنى «لَذيذ» هُوَ:", en: "«ladhīdh» means:" }, options: [{ ar: "Delicious", en: "Delicious" }, { ar: "Expensive", en: "Expensive" }, { ar: "Cold", en: "Cold" }], answer: 0 },
      { q: { ar: "«النَّادِل» هُوَ:", en: "«an-nādil» is:" }, options: [{ ar: "The waiter", en: "The waiter" }, { ar: "The cook", en: "The cook" }, { ar: "The customer", en: "The customer" }], answer: 0 }
    ]
  },

  {
    id: "doctor",
    icon: "🏥",
    level: "A2",
    accent: "#7c3aed",
    title: { ar: "عند الطبيب", en: "At the Doctor's" },
    summary: {
      ar: "صِف الأعراض، واسأل عن الدواء والوصفة.",
      en: "Describe symptoms and ask about medicine and a prescription."
    },
    dialogue: [
      { sp: { ar: "الطَّبيب", en: "Doctor" }, ar: "أَهْلاً، اجْلِسْ لَوْ سَمَحْت. بِمَ تَشْعُر؟", en: "Hello, sit down please. How do you feel?", tr: "ahlan, ijlis law samaḥt. bima tashʿur?" },
      { sp: { ar: "المَريض", en: "Patient" }, ar: "عِنْدي صُداع وَحَرارَة مُنْذُ يَوْمَيْن.", en: "I have a headache and a fever for two days.", tr: "ʿindī ṣudāʿ wa ḥarāra mundhu yawmayn" },
      { sp: { ar: "الطَّبيب", en: "Doctor" }, ar: "هَلْ عِنْدَكَ كَحَّة؟", en: "Do you have a cough?", tr: "hal ʿindaka kaḥḥa?" },
      { sp: { ar: "المَريض", en: "Patient" }, ar: "نَعَمْ، قَليلاً. وَحَلْقي يُوجِعُني.", en: "Yes, a little. And my throat hurts.", tr: "naʿam, qalīlan. wa ḥalqī yūjiʿunī" },
      { sp: { ar: "الطَّبيب", en: "Doctor" }, ar: "يَجِبُ أَنْ تَسْتَريحَ وَتَشْرَبَ ماءً كَثيراً.", en: "You must rest and drink plenty of water.", tr: "yajibu an tastarīḥa wa tashraba māʾan kathīran" },
      { sp: { ar: "الطَّبيب", en: "Doctor" }, ar: "هٰذا دواءٌ، تَناوَلْهُ مَرَّتَيْنِ في اليَوْم.", en: "This is medicine, take it twice a day.", tr: "hādhā dawāʾun, tanāwalhu marratayni fī l-yawm" },
      { sp: { ar: "المَريض", en: "Patient" }, ar: "شُكْراً يا دُكْتور. كَمْ ثَمَنُ الوَصْفَة؟", en: "Thank you, doctor. How much is the prescription?", tr: "shukran yā duktūr. kam thamanu l-waṣfa?" }
    ],
    vocab: [
      { ar: "الطَّبيب / الدُّكْتور", en: "Doctor", tr: "aṭ-ṭabīb / ad-duktūr" },
      { ar: "المَريض", en: "Patient / sick", tr: "al-marīḍ" },
      { ar: "صُداع", en: "Headache", tr: "ṣudāʿ" },
      { ar: "حَرارَة", en: "Fever", tr: "ḥarāra" },
      { ar: "كَحَّة", en: "Cough", tr: "kaḥḥa" },
      { ar: "يُوجِعُني", en: "It hurts me", tr: "yūjiʿunī" },
      { ar: "دَواء", en: "Medicine", tr: "dawāʾ" },
      { ar: "وَصْفَة طِبِّيَّة", en: "Prescription", tr: "waṣfa ṭibbiyya" }
    ],
    quiz: [
      { q: { ar: "«صُداع» تَعْني:", en: "«ṣudāʿ» means:" }, options: [{ ar: "Headache", en: "Headache" }, { ar: "Fever", en: "Fever" }, { ar: "Cough", en: "Cough" }], answer: 0 },
      { q: { ar: "أكمل: عِنْدي ____ وَحَرارَة.", en: "Complete: ʿindī ____ wa ḥarāra." }, options: [{ ar: "صُداع", en: "ṣudāʿ" }, { ar: "دَواء", en: "dawāʾ" }, { ar: "وَصْفَة", en: "waṣfa" }], answer: 0 },
      { q: { ar: "كَيْفَ تَقول «حَلْقي يُوجِعُني»؟", en: "How do you say \"my throat hurts\"?" }, options: [{ ar: "حَلْقي يُوجِعُني", en: "ḥalqī yūjiʿunī" }, { ar: "رَأْسي يُوجِعُني", en: "raʾsī yūjiʿunī" }, { ar: "بَطْني يُوجِعُني", en: "baṭnī yūjiʿunī" }], answer: 0 },
      { q: { ar: "«دَواء» مَعْناها:", en: "«dawāʾ» means:" }, options: [{ ar: "Medicine", en: "Medicine" }, { ar: "Water", en: "Water" }, { ar: "Food", en: "Food" }], answer: 0 },
      { q: { ar: "نَصيحَة الطَّبيب: يَجِبُ أَنْ ____.", en: "The doctor's advice: yajibu an ____." }, options: [{ ar: "تَسْتَريح", en: "tastarīḥ" }, { ar: "تَعْمَل", en: "taʿmal" }, { ar: "تَسافِر", en: "tusāfir" }], answer: 0 }
    ]
  },

  {
    id: "bank",
    icon: "🏦",
    level: "A2",
    accent: "#0d9488",
    title: { ar: "في البنك", en: "At the Bank" },
    summary: {
      ar: "افتح حساباً، صرّف نقوداً، واسأل عن الرصيد.",
      en: "Open an account, exchange money, and ask about your balance."
    },
    dialogue: [
      { sp: { ar: "المُوَظَّف", en: "Clerk" }, ar: "كَيْفَ أُساعِدُك؟", en: "How can I help you?", tr: "kayfa usāʿiduk?" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "أُريدُ فَتْحَ حِسابٍ جَديد.", en: "I want to open a new account.", tr: "urīdu fatḥa ḥisābin jadīd" },
      { sp: { ar: "المُوَظَّف", en: "Clerk" }, ar: "هَلْ عِنْدَكَ بِطاقَةُ هُوِيَّة؟", en: "Do you have an ID card?", tr: "hal ʿindaka biṭāqatu huwiyya?" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "نَعَمْ، تَفَضَّلْ. وَأُريدُ تَبْديلَ دولارات أَيْضاً.", en: "Yes, here you are. And I want to exchange dollars too.", tr: "naʿam, tafaḍḍal. wa urīdu tabdīla dūlārāt aydan" },
      { sp: { ar: "المُوَظَّف", en: "Clerk" }, ar: "كَمْ تُريدُ أَنْ تُبَدِّل؟", en: "How much do you want to exchange?", tr: "kam turīdu an tubaddil?" },
      { sp: { ar: "الزَّبون", en: "Customer" }, ar: "مِائَتَيْ دولار. ما هُوَ سِعْرُ الصَّرْف اليَوْم؟", en: "Two hundred dollars. What is today's exchange rate?", tr: "miʾatay dūlār. mā huwa siʿru ṣ-ṣarf al-yawm?" },
      { sp: { ar: "المُوَظَّف", en: "Clerk" }, ar: "اللُّطْفُ مِنْك، هٰذا هُوَ الرَّصيد. أَيْ خِدْمَة أُخْرى؟", en: "Here you are, this is the balance. Any other service?", tr: "al-luṭfu mink, hādhā huwa r-raṣīd. ayy khidma ukhrā?" }
    ],
    vocab: [
      { ar: "البنك", en: "The bank", tr: "al-bank" },
      { ar: "حِساب", en: "Account", tr: "ḥisāb" },
      { ar: "نُقود", en: "Money", tr: "nuqūd" },
      { ar: "الرَّصيد", en: "Balance", tr: "ar-raṣīd" },
      { ar: "سِعْر الصَّرْف", en: "Exchange rate", tr: "siʿr aṣ-ṣarf" },
      { ar: "بِطاقَة هُوِيَّة", en: "ID card", tr: "biṭāqat huwiyya" },
      { ar: "تَبْديل", en: "Exchange", tr: "tabdīl" },
      { ar: "دولار / جُنَيْه", en: "Dollar / pound", tr: "dūlār / junayh" }
    ],
    quiz: [
      { q: { ar: "«الرَّصيد» تَعْني:", en: "«ar-raṣīd» means:" }, options: [{ ar: "Balance", en: "Balance" }, { ar: "Account", en: "Account" }, { ar: "Loan", en: "Loan" }], answer: 0 },
      { q: { ar: "أكمل: أُريدُ فَتْحَ ____ جَديد.", en: "Complete: urīdu fatḥa ____ jadīd." }, options: [{ ar: "حِسابٍ", en: "ḥisābin" }, { ar: "بابٍ", en: "bābin" }, { ar: "كِتابٍ", en: "kitābin" }], answer: 0 },
      { q: { ar: "«سِعْر الصَّرْف» تَعْني:", en: "«siʿr aṣ-ṣarf» means:" }, options: [{ ar: "Exchange rate", en: "Exchange rate" }, { ar: "Interest rate", en: "Interest rate" }, { ar: "Bank fee", en: "Bank fee" }], answer: 0 },
      { q: { ar: "ماذا يُطْلَب لِفَتْحِ حِساب؟", en: "What is required to open an account?" }, options: [{ ar: "بِطاقَة هُوِيَّة", en: "biṭāqat huwiyya" }, { ar: "تَذْكِرَة", en: "tadhkira" }, { ar: "مِنْيو", en: "minyū" }], answer: 0 },
      { q: { ar: "«تَبْديل» مَعْناها:", en: "«tabdīl» means:" }, options: [{ ar: "Exchange", en: "Exchange" }, { ar: "Deposit", en: "Deposit" }, { ar: "Withdrawal", en: "Withdrawal" }], answer: 0 }
    ]
  },

  {
    id: "directions",
    icon: "🧭",
    level: "A2",
    accent: "#4338ca",
    title: { ar: "السؤال عن الطريق", en: "Asking for Directions" },
    summary: {
      ar: "اسأل عن الاتجاهات وافهم الردود بسهولة.",
      en: "Ask for directions and understand the answers easily."
    },
    dialogue: [
      { sp: { ar: "السَّائِل", en: "Asker" }, ar: "لَوْ سَمَحْت، أَيْنَ مَحَطَّةُ المِتْرو؟", en: "Excuse me, where is the metro station?", tr: "law samaḥt, ayna maḥaṭṭatu l-mitrū?" },
      { sp: { ar: "المارّ", en: "Passerby" }, ar: "اِمْشِ مُسْتَقيماً ثُمَّ اتَّجِهْ يَساراً.", en: "Walk straight, then turn left.", tr: "imshi mustaqīman thumma ittajih yasāran" },
      { sp: { ar: "السَّائِل", en: "Asker" }, ar: "هَلْ هِيَ بَعيدَة مِنْ هُنا؟", en: "Is it far from here?", tr: "hal hiya baʿīda min hunā?" },
      { sp: { ar: "المارّ", en: "Passerby" }, ar: "لا، قَريبَة. حَوالَيْ خَمْسِ دَقائِق سَيْراً.", en: "No, it is close. About five minutes on foot.", tr: "lā, qarība. ḥawālay khamsi daqāʾiq sayran" },
      { sp: { ar: "السَّائِل", en: "Asker" }, ar: "وَهَلْ هُناكَ صَيْدَلِيَّة قَريبَة؟", en: "And is there a pharmacy nearby?", tr: "wa hal hunāka ṣaydaliyya qarība?" },
      { sp: { ar: "المارّ", en: "Passerby" }, ar: "نَعَمْ، عَلى اليَمين، بِجانِبِ المَخْبَز.", en: "Yes, on the right, next to the bakery.", tr: "naʿam, ʿalā l-yamīn, bijānibi l-makhbaz" },
      { sp: { ar: "السَّائِل", en: "Asker" }, ar: "شُكْراً جَزيلاً!", en: "Thank you very much!", tr: "shukran jazīlan!" }
    ],
    vocab: [
      { ar: "يَمين", en: "Right", tr: "yamīn" },
      { ar: "يَسار", en: "Left", tr: "yasār" },
      { ar: "مُسْتَقيم", en: "Straight", tr: "mustaqīm" },
      { ar: "قَريب", en: "Near", tr: "qarīb" },
      { ar: "بَعيد", en: "Far", tr: "baʿīd" },
      { ar: "أَمام / وَراء", en: "In front of / behind", tr: "amām / warāʾ" },
      { ar: "بِجانِب", en: "Next to", tr: "bijānib" },
      { ar: "صَيْدَلِيَّة", en: "Pharmacy", tr: "ṣaydaliyya" }
    ],
    quiz: [
      { q: { ar: "عَكْس «يَمين» هُوَ:", en: "The opposite of «yamīn» is:" }, options: [{ ar: "يَسار", en: "yasār" }, { ar: "فَوْق", en: "fawq" }, { ar: "تَحْت", en: "taḥt" }], answer: 0 },
      { q: { ar: "«قَريب» تَعْني:", en: "«qarīb» means:" }, options: [{ ar: "Near", en: "Near" }, { ar: "Far", en: "Far" }, { ar: "Big", en: "Big" }], answer: 0 },
      { q: { ar: "أكمل: اِمْشِ ____ ثُمَّ اتَّجِهْ يَساراً.", en: "Complete: imshi ____ thumma ittajih yasāran." }, options: [{ ar: "مُسْتَقيماً", en: "mustaqīman" }, { ar: "سَريعاً", en: "sarīʿan" }, { ar: "قَليلاً", en: "qalīlan" }], answer: 0 },
      { q: { ar: "«بِجانِب» مَعْناها:", en: "«bijānib» means:" }, options: [{ ar: "Next to", en: "Next to" }, { ar: "Inside", en: "Inside" }, { ar: "Above", en: "Above" }], answer: 0 },
      { q: { ar: "كَيْفَ تَسْأَل عَنِ المَكان؟", en: "How do you ask about a place?" }, options: [{ ar: "أَيْنَ...؟", en: "ayna...?" }, { ar: "مَتى...؟", en: "matā...?" }, { ar: "لِماذا...؟", en: "limādhā...?" }], answer: 0 }
    ]
  },

  {
    id: "hotel",
    icon: "🏨",
    level: "A2",
    accent: "#db2777",
    title: { ar: "في الفندق", en: "At the Hotel" },
    summary: {
      ar: "احجز غرفة، اسأل عن الخدمات، وسجّل المغادرة.",
      en: "Book a room, ask about services, and check out."
    },
    dialogue: [
      { sp: { ar: "المُوَظَّف", en: "Receptionist" }, ar: "مَساءَ الخَيْر، أَهْلاً بِك في فُنْدُقِنا.", en: "Good evening, welcome to our hotel.", tr: "masāʾa l-khayr, ahlan bika fī funduqinā" },
      { sp: { ar: "النَّزيل", en: "Guest" }, ar: "مَساءَ النُّور. عِنْدي حَجْز بِاسْمِ سامي.", en: "Good evening. I have a reservation in the name of Sami.", tr: "masāʾa n-nūr. ʿindī ḥajz bi-smi Sāmī" },
      { sp: { ar: "المُوَظَّف", en: "Receptionist" }, ar: "نَعَمْ، غُرْفَةٌ فَردِيَّةٌ لِثَلاثِ لَيالٍ. تَفَضَّلْ.", en: "Yes, a single room for three nights. Here you are.", tr: "naʿam, ghurfatun fardiyyatun li-thalāthi layālī. tafaḍḍal" },
      { sp: { ar: "النَّزيل", en: "Guest" }, ar: "كَمْ سِعْرُ اللَّيْلَة؟ وَهَلْ يُوجَدُ إِفْطار؟", en: "How much per night? And is breakfast available?", tr: "kam siʿru l-layla? wa hal yūjadu ifṭār?" },
      { sp: { ar: "المُوَظَّف", en: "Receptionist" }, ar: "اللَّيْلَةُ بِمِائَةِ دولار، والإفْطارُ مَجّانِيّ.", en: "The night is one hundred dollars, and breakfast is free.", tr: "al-layla bi-miʾati dūlār, wa l-ifṭāru majjānī" },
      { sp: { ar: "النَّزيل", en: "Guest" }, ar: "وَيَشْتَغِلُ الوايْ فاي؟", en: "And does the Wi-Fi work?", tr: "wa yashtaghilu l-wāy fāy?" },
      { sp: { ar: "المُوَظَّف", en: "Receptionist" }, ar: "نَعَمْ، وَالكَلِمَةُ السِّرِّيَّة عَلى بِطاقَةِ الغُرْفَة.", en: "Yes, and the password is on the room card.", tr: "naʿam, wa l-kalimatu s-sirriyya ʿalā biṭāqati l-ghurfa" }
    ],
    vocab: [
      { ar: "الفُنْدُق", en: "The hotel", tr: "al-funduq" },
      { ar: "غُرْفَة", en: "Room", tr: "ghurfa" },
      { ar: "حَجْز", en: "Reservation / booking", tr: "ḥajz" },
      { ar: "لَيْلَة", en: "Night", tr: "layla" },
      { ar: "إِفْطار", en: "Breakfast", tr: "ifṭār" },
      { ar: "مَجّانِيّ", en: "Free (of charge)", tr: "majjānī" },
      { ar: "مِفْتاح / بِطاقَة الغُرْفَة", en: "Key / room card", tr: "miftāḥ / biṭāqat al-ghurfa" },
      { ar: "تَسْجيل المُغادَرَة", en: "Check-out", tr: "tasjīl al-mughādara" }
    ],
    quiz: [
      { q: { ar: "«حَجْز» تَعْني:", en: "«ḥajz» means:" }, options: [{ ar: "Reservation", en: "Reservation" }, { ar: "Bill", en: "Bill" }, { ar: "Key", en: "Key" }], answer: 0 },
      { q: { ar: "أكمل: غُرْفَةٌ ____ لِثَلاثِ لَيالٍ.", en: "Complete: ghurfatun ____ li-thalāthi layālī." }, options: [{ ar: "فَردِيَّةٌ", en: "fardiyya" }, { ar: "مَجّانِيَّةٌ", en: "majjāniyya" }, { ar: "جَديدَةٌ", en: "jadīda" }], answer: 0 },
      { q: { ar: "«مَجّانِيّ» مَعْناها:", en: "«majjānī» means:" }, options: [{ ar: "Free of charge", en: "Free of charge" }, { ar: "Expensive", en: "Expensive" }, { ar: "Closed", en: "Closed" }], answer: 0 },
      { q: { ar: "كَيْفَ تَسْأَل عَنْ سِعْرِ اللَّيْلَة؟", en: "How do you ask about the price per night?" }, options: [{ ar: "كَمْ سِعْرُ اللَّيْلَة؟", en: "kam siʿru l-layla?" }, { ar: "أَيْنَ الغُرْفَة؟", en: "ayna l-ghurfa?" }, { ar: "مَتى الإفْطار؟", en: "matā l-ifṭār?" }], answer: 0 },
      { q: { ar: "أَيْنَ الكَلِمَةُ السِّرِّيَّة؟", en: "Where is the password (Wi-Fi)?" }, options: [{ ar: "عَلى بِطاقَةِ الغُرْفَة", en: "ʿalā biṭāqati l-ghurfa" }, { ar: "في المَطْعَم", en: "fī l-maṭʿam" }, { ar: "عَلى الباب", en: "ʿalā l-bāb" }], answer: 0 }
    ]
  }
];
