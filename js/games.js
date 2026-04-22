/**
 * games.js — Барлық ойын логикасы
 * Quiz, True/False, Drag&Drop, Memory, Puzzle
 */

// ============================================================
// TOPIC DEFINITIONS (6 тақырып)
// ============================================================

const TOPICS = {
  ergonomics: {
    id: 'ergonomics',
    title: 'Эргономика',
    icon: '🖥️',
    colorClass: 'color-purple',
    iconClass: 'icon-color-purple',
    progressClass: 'progress-color-purple',
    theory: {
      title: 'Эргономика дегеніміз не?',
      body: `
        <p>Эргономика — адам мен машина арасындағы өзара байланысты зерттейтін ғылым. Ол жұмыс орнын адамның денсаулығы мен тиімділігі үшін оңтайлы ету жолдарын ізденеді.</p>
        <h3>Негізгі принциптер</h3>
        <ul>
          <li>Монитор — көздің деңгейінде, 50-70 см қашықтықта</li>
          <li>Отырыс — тізе 90° бұрышта, табан еденде</li>
          <li>Жарықтандыру — сол жақтан немесе үстен</li>
          <li>Үзіліс — 45 минут сайын 10 минут</li>
        </ul>
        <h3>Неге маңызды?</h3>
        <p>Дұрыс эргономика сырқат тудырмайды, жұмыс тиімділігін 40%-ға арттырады, ал шаршауды азайтады.</p>
        <div class="theory-example">
          <div class="example-label">💡 Мысал</div>
          <p>Томас күн бойы компьютерде отырады. Монитор тым жоғары орнатылған. Кешке мойны ауырады. Эргономика ережесін сақтаса, бұл мәселе болмас еді.</p>
        </div>
      `
    },
    quiz: [
      { q: 'Монитор қандай қашықтықта орналасуы керек?', opts: ['30 см', '50-70 см', '1 метр', '20 см'], answer: 1 },
      { q: 'Эргономика нені зерттейді?', opts: ['Компьютер бағасын', 'Адам мен машина байланысын', 'Ойын алгоритмдерін', 'Интернет жылдамдығын'], answer: 1 },
      { q: 'Компьютерде жұмыс кезінде қанша минут сайын үзіліс жасау керек?', opts: ['5 минут', '30 минут', '45 минут', '2 сағат'], answer: 2 },
      { q: 'Отырыс кезінде тізе қандай бұрышта болуы керек?', opts: ['45°', '60°', '90°', '120°'], answer: 2 },
    ],
    truefalse: [
      { statement: 'Монитор — 20 сантиметр қашықтықта орналасуы керек.', answer: false },
      { statement: 'Жарықтандыру сол жақтан немесе үстен болуы эргономика ережесі.', answer: true },
      { statement: 'Компьютерде 8 сағат үзіліссіз отыру денсаулыққа зиянсыз.', answer: false },
    ],
    dragdrop: {
      instruction: 'Эргономика ережелерін сәйкес санатқа тіркеңіз',
      items: ['50-70 см', '90° бұрыш', 'Сол жақтан жарық', '45 мин жұмыс'],
      zones: ['Монитор қашықтығы', 'Тізе бұрышы', 'Жарық бағыты', 'Үзіліс уақыты'],
      matches: [0, 1, 2, 3]
    }
  },

  history: {
    id: 'history',
    title: 'ЕТ Тарихы',
    icon: '📜',
    colorClass: 'color-blue',
    iconClass: 'icon-color-blue',
    progressClass: 'progress-color-blue',
    theory: {
      title: 'Есептеуіш техниканың даму тарихы',
      body: `
        <p>Компьютерлер бірнеше ұрпақтан (поколение) тұрады. Әр ұрпақ жаңа технологиялармен белгіленеді.</p>
        <h3>Ұрпақтар</h3>
        <ul>
          <li><strong>1-ші ұрпақ (1940-54):</strong> Вакуум шамдары — ENIAC</li>
          <li><strong>2-ші ұрпақ (1955-64):</strong> Транзисторлар</li>
          <li><strong>3-ші ұрпақ (1965-74):</strong> Интегралды схемалар</li>
          <li><strong>4-ші ұрпақ (1975-н.у.):</strong> Микропроцессорлар</li>
          <li><strong>5-ші ұрпақ:</strong> Жасанды интеллект, нейрондық желілер</li>
        </ul>
        <div class="theory-example">
          <div class="example-label">💡 Мысал</div>
          <p>ENIAC — алғашқы электрондық компьютер. Ол 167 м² алаңды алып, 30 тоннадан асты. Бүгін сенің телефоның одан миллион есе қуатты!</p>
        </div>
      `
    },
    quiz: [
      { q: 'Бірінші ұрпақ компьютерлер қандай элемент негізінде жасалған?', opts: ['Транзистор', 'Вакуум шамы', 'Микрочип', 'Реле'], answer: 1 },
      { q: 'ENIAC дегеніміз не?', opts: ['Бағдарлама тілі', 'Алғашқы электрондық компьютер', 'Операциялық жүйе', 'Желі протоколы'], answer: 1 },
      { q: '4-ші ұрпақ компьютерлердің негізгі элементі:', opts: ['Вакуум шамы', 'Транзистор', 'Микропроцессор', 'Реле'], answer: 2 },
      { q: '5-ші ұрпақ компьютерлер нені қолданады?', opts: ['Тек шамдарды', 'Жасанды интеллект', 'Тесперфораторды', 'Вакуум шамдарды'], answer: 1 },
    ],
    truefalse: [
      { statement: 'ENIAC алғашқы электрондық компьютер болып табылады.', answer: true },
      { statement: '2-ші ұрпақ компьютерлер вакуум шамдарын қолданды.', answer: false },
      { statement: 'Микропроцессор 4-ші ұрпақ компьютерлердің негізі.', answer: true },
    ],
    dragdrop: {
      instruction: 'Ұрпақты сәйкес технологиямен сәйкестендіріңіз',
      items: ['Вакуум шамы', 'Транзистор', 'Микропроцессор', 'Жасанды ИИ'],
      zones: ['1-ші ұрпақ', '2-ші ұрпақ', '4-ші ұрпақ', '5-ші ұрпақ'],
      matches: [0, 1, 2, 3]
    }
  },

  computer: {
    id: 'computer',
    title: 'Компьютер жұмысы',
    icon: '⚙️',
    colorClass: 'color-green',
    iconClass: 'icon-color-green',
    progressClass: 'progress-color-green',
    theory: {
      title: 'Компьютер қалай жұмыс істейді?',
      body: `
        <p>Компьютер — ақпаратты өңдейтін электрондық машина. Ол кіріс → өңдеу → шығыс принципімен жұмыс жасайды.</p>
        <h3>Негізгі компоненттер</h3>
        <ul>
          <li><strong>CPU (Процессор):</strong> «Мида» — барлық есептеулер жасалады</li>
          <li><strong>RAM (Жедел жады):</strong> Уақытша деректерді сақтайды</li>
          <li><strong>HDD/SSD (Диск):</strong> Тұрақты деректерді сақтайды</li>
          <li><strong>GPU:</strong> Графиканы өңдейді</li>
          <li><strong>Motherboard:</strong> Барлық бөлшектерді байланыстырады</li>
        </ul>
        <div class="theory-example">
          <div class="example-label">💡 Мысал</div>
          <p>RAM — компьютердің «жұмыс үстелі». Неғұрлым үлкен болса, соғұрлым бейненің ашылған программалар саны артады. Компьютер өшкенде бәрі жойылады.</p>
        </div>
      `
    },
    quiz: [
      { q: 'CPU не үшін қолданылады?', opts: ['Деректерді сақтайды', 'Барлық есептеулер жасайды', 'Интернетке шығады', 'Дыбыс шығарады'], answer: 1 },
      { q: 'RAM деректерді қалай сақтайды?', opts: ['Тұрақты', 'Уақытша', 'Шексіз', 'Сымсыз'], answer: 1 },
      { q: 'GPU не үшін жауап береді?', opts: ['Математикалық есептеулер', 'Интернет', 'Графика өңдеу', 'Дыбыс'], answer: 2 },
      { q: 'Motherboard нені байланыстырады?', opts: ['Тек CPU мен RAM', 'Барлық компоненттерді', 'Тек мониторды', 'Тек дискіні'], answer: 1 },
    ],
    truefalse: [
      { statement: 'CPU — компьютердің «миы» болып саналады.', answer: true },
      { statement: 'RAM деректерді тұрақты сақтайды.', answer: false },
      { statement: 'GPU графиканы өңдеу үшін арналған.', answer: true },
    ],
    dragdrop: {
      instruction: 'Компоненттерді оның қызметімен сәйкестендіріңіз',
      items: ['CPU', 'RAM', 'SSD', 'GPU'],
      zones: ['Есептеу', 'Уақытша жады', 'Тұрақты жады', 'Графика'],
      matches: [0, 1, 2, 3]
    }
  },

  wireless: {
    id: 'wireless',
    title: 'Сымсыз желілер',
    icon: '📡',
    colorClass: 'color-orange',
    iconClass: 'icon-color-orange',
    progressClass: 'progress-color-orange',
    theory: {
      title: 'Сымсыз желілер (Wi-Fi, Bluetooth)',
      body: `
        <p>Сымсыз желілер — сым қолданбай ақпарат алмасуға мүмкіндік беретін технологиялар. Радиотолқындарды пайдаланады.</p>
        <h3>Wi-Fi</h3>
        <ul>
          <li>IEEE 802.11 стандарты</li>
          <li>2.4 ГГц және 5 ГГц жиіліктер</li>
          <li>Ауқымы — 50-100 метр</li>
        </ul>
        <h3>Bluetooth</h3>
        <ul>
          <li>Қысқа қашықтыққа (10 метр)</li>
          <li>Аз қуат тұтыну</li>
          <li>Гарнитура, тышқан, пернетақта</li>
        </ul>
        <div class="theory-example">
          <div class="example-label">💡 Мысал</div>
          <p>Wi-Fi маршрутизатор (роутер) сигналды радиотолқын арқылы жібереді. Телефонмен ұсталады. Bluetooth — тек жанындағы құрылғылар арасында жұмыс жасайды.</p>
        </div>
      `
    },
    quiz: [
      { q: 'Wi-Fi қандай стандартты қолданады?', opts: ['IEEE 802.3', 'IEEE 802.11', 'TCP/IP', 'HTTP'], answer: 1 },
      { q: 'Bluetooth шамамен қанша метр ауқымда жұмыс жасайды?', opts: ['1 метр', '10 метр', '100 метр', '1 км'], answer: 1 },
      { q: 'Wi-Fi қандай жиіліктерді қолданады?', opts: ['1 және 3 ГГц', '2.4 және 5 ГГц', '10 ГГц', '0.1 ГГц'], answer: 1 },
      { q: 'Сымсыз желілер ақпаратты қалай жібереді?', opts: ['Сым арқылы', 'Радиотолқын арқылы', 'Жарық арқылы', 'Дыбыс арқылы'], answer: 1 },
    ],
    truefalse: [
      { statement: 'Bluetooth 100 метр қашықтыққа дейін жұмыс жасайды.', answer: false },
      { statement: 'Wi-Fi 2.4 ГГц және 5 ГГц жиіліктерде жұмыс жасайды.', answer: true },
      { statement: 'Сымсыз желілер радиотолқындарды пайдаланады.', answer: true },
    ],
    dragdrop: {
      instruction: 'Технологияны оның сипатымен сәйкестендіріңіз',
      items: ['Wi-Fi', 'Bluetooth', '5G', 'Ethernet'],
      zones: ['Ауылдық желі (100м)', 'Жанында (10м)', 'Ұялы байланыс', 'Сымды байланыс'],
      matches: [0, 1, 2, 3]
    }
  },

  encryption: {
    id: 'encryption',
    title: 'Шифрлау',
    icon: '🔐',
    colorClass: 'color-pink',
    iconClass: 'icon-color-pink',
    progressClass: 'progress-color-pink',
    theory: {
      title: 'Ақпаратты шифрлау',
      body: `
        <p>Шифрлау — деректерді рұқсат етілмеген кіруден қорғау мақсатында белгілі бір алгоритм бойынша өзгерту процесі.</p>
        <h3>Шифрлау түрлері</h3>
        <ul>
          <li><strong>Симметриялы:</strong> Бір кілтпен шифрлап, бір кілтпен ашады (AES)</li>
          <li><strong>Асимметриялы:</strong> Ашық және жеке кілт (RSA)</li>
          <li><strong>Цезарь шифры:</strong> Хаттарды алфавит бойынша ығыстыру</li>
        </ul>
        <div class="theory-example">
          <div class="example-label">💡 Мысал: Цезарь шифры</div>
          <p><strong>Кілт = 3:</strong> A → D, B → E, C → F ...<br>
          «КАТ» → «НДХ» болады. Тек кілтті білген адам оқи алады!</p>
        </div>
      `
    },
    quiz: [
      { q: 'Шифрлау нені қорғайды?', opts: ['Компьютер экранын', 'Деректерді рұқсатсыз кіруден', 'Интернет жылдамдығын', 'Батарея зарядын'], answer: 1 },
      { q: 'Цезарь шифрында кілт=3 болса, А → ?', opts: ['В', 'Г', 'Д', 'Б'], answer: 2 },
      { q: 'AES қандай шифрлау түріне жатады?', opts: ['Асимметриялы', 'Симметриялы', 'Цезарь', 'Ешқайсысы'], answer: 1 },
      { q: 'RSA шифрында неше кілт қолданылады?', opts: ['1', '2', '3', '4'], answer: 1 },
    ],
    truefalse: [
      { statement: 'Цезарь шифрында хаттар алфавит бойынша ығыстырылады.', answer: true },
      { statement: 'Симметриялы шифрда ашық және жабық кілт қолданылады.', answer: false },
      { statement: 'Шифрлау — деректерді рұқсатсыз кіруден қорғайды.', answer: true },
    ],
    dragdrop: {
      instruction: 'Шифрлау типін сәйкес сипаттамасымен жұптаңыз',
      items: ['AES', 'RSA', 'Цезарь', 'Хэш'],
      zones: ['Симметриялы', 'Асимметриялы', 'Ығыстыру', 'Бір бағытты'],
      matches: [0, 1, 2, 3]
    }
  },

  binary: {
    id: 'binary',
    title: 'Екілік код',
    icon: '💻',
    colorClass: 'color-cyan',
    iconClass: 'icon-color-cyan',
    progressClass: 'progress-color-cyan',
    theory: {
      title: 'Екілік кодтау (Binary)',
      body: `
        <p>Компьютерлер тек 2 санды — 0 мен 1-ді ғана түсінеді. Бұл — екілік санау жүйесі (бинар).</p>
        <h3>Негізгі тұжырымдамалар</h3>
        <ul>
          <li><strong>Бит:</strong> 0 немесе 1 — ең кіші ақпарат бірлігі</li>
          <li><strong>Байт:</strong> 8 бит = 1 байт</li>
          <li><strong>Кб:</strong> 1024 байт</li>
        </ul>
        <h3>Аудару мысалы</h3>
        <ul>
          <li>Ондық: 5 = Екілік: 101</li>
          <li>Ондық: 10 = Екілік: 1010</li>
          <li>Ондық: 255 = Екілік: 11111111</li>
        </ul>
        <div class="theory-example">
          <div class="example-label">💡 Мысал</div>
          <p>«A» әрпі компьютерде 01000001 болып жазылады. Бұл 65 санына сәйкес келеді (ASCII кодтау).</p>
        </div>
      `
    },
    quiz: [
      { q: 'Бит дегеніміз не?', opts: ['8 байт', '0 немесе 1', '1024 байт', 'Деректер базасы'], answer: 1 },
      { q: '1 байт неше битке тең?', opts: ['4', '6', '8', '16'], answer: 2 },
      { q: 'Ондық 5 саны екілікте қалай жазылады?', opts: ['100', '101', '110', '011'], answer: 1 },
      { q: 'Компьютер қандай санау жүйесін пайдаланады?', opts: ['Ондық', 'Сегіздік', 'Екілік', '16-дық'], answer: 2 },
    ],
    truefalse: [
      { statement: '1 байт = 8 бит.', answer: true },
      { statement: 'Ондық 10 саны екілікте 1100 болады.', answer: false },
      { statement: 'Компьютерлер тек 0 мен 1 арқылы жұмыс жасайды.', answer: true },
    ],
    dragdrop: {
      instruction: 'Ондық санды оның екілік баламасымен жұптаңыз',
      items: ['2', '5', '8', '15'],
      zones: ['10', '101', '1000', '1111'],
      matches: [0, 1, 2, 3]
    }
  }
};

// ============================================================
// MEMORY GAME DATA
// ============================================================
const MEMORY_PAIRS = [
  { emoji: '💻', label: 'Компьютер' },
  { emoji: '📡', label: 'Wi-Fi' },
  { emoji: '🔐', label: 'Шифр' },
  { emoji: '🧮', label: 'CPU' },
  { emoji: '💾', label: 'RAM' },
  { emoji: '📜', label: 'Тарих' },
  { emoji: '🔢', label: 'Бинар' },
  { emoji: '🖥️', label: 'Эргономика' },
];

// ============================================================
// GAME STATE
// ============================================================
let currentGame = {
  type: null,
  topicId: null,
  questionIndex: 0,
  score: 0,
  total: 0,
  answered: false,
  streak: 0,
};

// ============================================================
// QUIZ GAME
// ============================================================
function startQuiz(topicId) {
  const topic = TOPICS[topicId];
  currentGame = { type: 'quiz', topicId, questionIndex: 0, score: 0, total: topic.quiz.length, answered: false };
  renderQuizQuestion(topic, 0);
  openModal('game-modal');
}

function renderQuizQuestion(topic, idx) {
  const q = topic.quiz[idx];
  const modal = document.getElementById('game-modal-body');
  if (!modal) return;

  const letters = ['A', 'B', 'C', 'D'];
  modal.innerHTML = `
    <div class="game-container">
      <div class="game-header">
        <h2>🎯 ${topic.title} — Quiz</h2>
        <div class="game-score-display">
          <span class="score-badge">📝 ${idx + 1} / ${topic.quiz.length}</span>
          <span class="score-badge">⭐ ${currentGame.score}</span>
        </div>
      </div>
      <div class="game-body">
        <div class="quiz-question">
          <span class="q-number">${idx + 1}</span>
          ${q.q}
        </div>
        <div class="quiz-options">
          ${q.opts.map((opt, i) => `
            <button class="quiz-option" onclick="answerQuiz(${i})" id="opt-${i}">
              <span class="option-letter">${letters[i]}</span>
              ${opt}
            </button>
          `).join('')}
        </div>
        <div id="quiz-feedback"></div>
        <div class="mt-6 flex" style="justify-content:flex-end; gap:12px">
          <button class="btn btn-secondary" onclick="closeModal('game-modal')">❌ Шығу</button>
          <button class="btn btn-primary hidden" id="next-btn" onclick="nextQuestion()">➡️ Келесі</button>
        </div>
      </div>
    </div>
  `;
  currentGame.answered = false;
}

function answerQuiz(selectedIdx) {
  if (currentGame.answered) return;
  currentGame.answered = true;

  const topic = TOPICS[currentGame.topicId];
  const q = topic.quiz[currentGame.questionIndex];
  const correct = q.answer === selectedIdx;
  const s = APP.state;

  s.totalAnswered++;
  if (correct) {
    s.correctAnswers++;
    currentGame.score += 25;
    currentGame.streak = (currentGame.streak || 0) + 1;
    s.streak = Math.max(s.streak, currentGame.streak);
    awardPoints(25, 15, `${topic.title} — дұрыс жауап!`);
  } else {
    currentGame.streak = 0;
  }
  APP.save();

  // Color options
  for (let i = 0; i < q.opts.length; i++) {
    const btn = document.getElementById(`opt-${i}`);
    if (!btn) continue;
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === selectedIdx && !correct) btn.classList.add('wrong');
  }

  // Feedback
  const fb = document.getElementById('quiz-feedback');
  if (fb) {
    fb.innerHTML = `
      <div class="feedback-banner ${correct ? 'correct' : 'wrong'}">
        ${correct ? '✅ Дұрыс! Тамаша!' : `❌ Қате. Дұрыс жауап: "${q.opts[q.answer]}"`}
      </div>
    `;
  }

  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.classList.remove('hidden');
}

function nextQuestion() {
  const topic = TOPICS[currentGame.topicId];
  currentGame.questionIndex++;

  if (currentGame.questionIndex >= topic.quiz.length) {
    finishGame();
  } else {
    renderQuizQuestion(topic, currentGame.questionIndex);
  }
}

// ============================================================
// TRUE / FALSE GAME
// ============================================================
function startTrueFalse(topicId) {
  const topic = TOPICS[topicId];
  currentGame = { type: 'tf', topicId, questionIndex: 0, score: 0, total: topic.truefalse.length, answered: false };
  renderTFQuestion(topic, 0);
  openModal('game-modal');
}

function renderTFQuestion(topic, idx) {
  const q = topic.truefalse[idx];
  const modal = document.getElementById('game-modal-body');
  if (!modal) return;

  modal.innerHTML = `
    <div class="game-container">
      <div class="game-header">
        <h2>✅ ${topic.title} — Рас/Жалған</h2>
        <div class="game-score-display">
          <span class="score-badge">📝 ${idx + 1} / ${topic.truefalse.length}</span>
          <span class="score-badge">⭐ ${currentGame.score}</span>
        </div>
      </div>
      <div class="game-body">
        <div class="tf-question">${q.statement}</div>
        <div class="tf-buttons">
          <button class="tf-btn tf-btn-true" onclick="answerTF(true)">
            <span class="tf-icon">✅</span>
            РАС
          </button>
          <button class="tf-btn tf-btn-false" onclick="answerTF(false)">
            <span class="tf-icon">❌</span>
            ЖАЛҒАН
          </button>
        </div>
        <div id="tf-feedback"></div>
        <div class="mt-6 flex" style="justify-content:flex-end">
          <button class="btn btn-secondary" onclick="closeModal('game-modal')">Шығу</button>
        </div>
      </div>
    </div>
  `;
}

function answerTF(userAnswer) {
  if (currentGame.answered) return;
  currentGame.answered = true;

  const topic = TOPICS[currentGame.topicId];
  const q = topic.truefalse[currentGame.questionIndex];
  const correct = userAnswer === q.answer;

  APP.state.totalAnswered++;
  if (correct) {
    APP.state.correctAnswers++;
    currentGame.score += 20;
    awardPoints(20, 10, `${topic.title} — дұрыс!`);
  }
  APP.save();

  const fb = document.getElementById('tf-feedback');
  if (fb) {
    fb.innerHTML = `
      <div class="feedback-banner ${correct ? 'correct' : 'wrong'}" style="margin-top:20px">
        ${correct ? '✅ Дұрыс! Жарайсың!' : `❌ Қате. Жауап: ${q.answer ? 'РАС' : 'ЖАЛҒАН'}`}
      </div>
    `;
  }

  // Disable buttons
  document.querySelectorAll('.tf-btn').forEach(b => b.disabled = true);

  setTimeout(() => {
    currentGame.questionIndex++;
    if (currentGame.questionIndex >= topic.truefalse.length) {
      finishGame();
    } else {
      currentGame.answered = false;
      renderTFQuestion(topic, currentGame.questionIndex);
    }
  }, 1800);
}

// ============================================================
// DRAG & DROP GAME
// ============================================================
function startDragDrop(topicId) {
  const topic = TOPICS[topicId];
  currentGame = { type: 'dd', topicId, score: 0, matched: 0, total: topic.dragdrop.items.length };
  renderDragDrop(topic);
  openModal('game-modal');
}

function renderDragDrop(topic) {
  const dd = topic.dragdrop;
  const modal = document.getElementById('game-modal-body');
  if (!modal) return;

  // Shuffle items for display
  const shuffled = [...dd.items].sort(() => Math.random() - 0.5);

  modal.innerHTML = `
    <div class="game-container">
      <div class="game-header">
        <h2>🔗 ${topic.title} — Сәйкестендіру</h2>
        <div class="game-score-display">
          <span class="score-badge" id="dd-matched">✅ 0 / ${dd.items.length}</span>
        </div>
      </div>
      <div class="game-body">
        <p style="color:var(--text-muted);margin-bottom:20px;font-weight:600">${dd.instruction}</p>
        <div class="drag-container">
          <div class="drag-list">
            <h4>📦 Ұғымдар</h4>
            ${shuffled.map(item => `
              <div class="drag-item" draggable="true"
                   ondragstart="dragStart(event,'${item}')"
                   id="drag-${item.replace(/\s/g,'_')}">${item}</div>
            `).join('')}
          </div>
          <div class="drop-list">
            <h4>🎯 Мәндер</h4>
            ${dd.zones.map((zone, i) => `
              <div class="drop-zone" id="zone-${i}"
                   ondragover="dragOver(event)"
                   ondrop="dropItem(event,${i},'${dd.items[i]}')">
                <strong>${zone}:</strong>
                <span class="drop-placeholder">осыған апарыңыз...</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="mt-6 flex" style="justify-content:flex-end;gap:12px">
          <button class="btn btn-secondary" onclick="closeModal('game-modal')">Шығу</button>
          <button class="btn btn-primary" onclick="checkDragDrop()">✅ Тексеру</button>
        </div>
      </div>
    </div>
  `;
}

let draggedItem = null;
const droppedAnswers = {};

function dragStart(e, item) {
  draggedItem = item;
  e.target.classList.add('dragging');
  setTimeout(() => e.target.classList.remove('dragging'), 100);
}

function dragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function dropItem(e, zoneIdx, correctAnswer) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if (!draggedItem) return;

  droppedAnswers[zoneIdx] = draggedItem;

  const zone = document.getElementById(`zone-${zoneIdx}`);
  if (zone) {
    const topic = TOPICS[currentGame.topicId];
    zone.innerHTML = `<strong>${topic.dragdrop.zones[zoneIdx]}:</strong> <span>${draggedItem}</span>`;
    zone.classList.add('filled');
  }
  draggedItem = null;
}

function checkDragDrop() {
  const topic = TOPICS[currentGame.topicId];
  const dd = topic.dragdrop;
  let correct = 0;

  for (let i = 0; i < dd.zones.length; i++) {
    if (droppedAnswers[i] === dd.items[dd.matches[i]]) correct++;
  }

  const total = dd.zones.length;
  const pts = correct * 15;
  awardPoints(pts, correct * 8, `Сәйкестендіру: ${correct}/${total}`);
  APP.state.totalAnswered += total;
  APP.state.correctAnswers += correct;
  APP.save();

  const modal = document.getElementById('game-modal-body');
  if (modal) {
    const result = document.createElement('div');
    result.className = `feedback-banner ${correct === total ? 'correct' : 'wrong'}`;
    result.innerHTML = correct === total
      ? `✅ Тамаша! Барлығы дұрыс! +${pts} ұпай!`
      : `📊 ${correct}/${total} дұрыс. Қайтадан көрейік!`;
    modal.querySelector('.game-body').appendChild(result);
  }
}

// ============================================================
// MEMORY GAME
// ============================================================
let memoryFlipped = [];
let memoryMatched = 0;
let memoryLocked = false;
let memoryMoves = 0;

function startMemoryGame() {
  const pairs = MEMORY_PAIRS;
  const cards = [...pairs, ...pairs]
    .sort(() => Math.random() - 0.5)
    .map((p, i) => ({ ...p, id: i }));

  memoryFlipped = [];
  memoryMatched = 0;
  memoryLocked = false;
  memoryMoves = 0;

  const modal = document.getElementById('game-modal-body');
  if (!modal) return;

  modal.innerHTML = `
    <div class="game-container">
      <div class="game-header">
        <h2>🧠 Жад ойыны</h2>
        <div class="game-score-display">
          <span class="score-badge" id="mem-moves">🔄 0 қадам</span>
          <span class="score-badge" id="mem-matched">✅ 0/${pairs.length}</span>
        </div>
      </div>
      <div class="game-body">
        <div class="memory-grid" id="memory-grid"></div>
        <div class="mt-6 flex" style="justify-content:space-between">
          <button class="btn btn-secondary" onclick="startMemoryGame()">🔄 Қайта бастау</button>
          <button class="btn btn-secondary" onclick="closeModal('game-modal')">Шығу</button>
        </div>
      </div>
    </div>
  `;

  const grid = document.getElementById('memory-grid');
  cards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'memory-card';
    el.dataset.id = card.id;
    el.dataset.emoji = card.emoji;
    el.innerHTML = `
      <div class="memory-card-front">🎴</div>
      <div class="memory-card-back">${card.emoji}<br><small style="font-size:0.6rem">${card.label}</small></div>
    `;
    el.addEventListener('click', () => flipMemoryCard(el));
    grid.appendChild(el);
  });
}

function flipMemoryCard(el) {
  if (memoryLocked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

  el.classList.add('flipped');
  memoryFlipped.push(el);

  if (memoryFlipped.length === 2) {
    memoryLocked = true;
    memoryMoves++;
    document.getElementById('mem-moves').textContent = `🔄 ${memoryMoves} қадам`;

    if (memoryFlipped[0].dataset.emoji === memoryFlipped[1].dataset.emoji) {
      // Match!
      memoryFlipped.forEach(c => c.classList.add('matched'));
      memoryFlipped = [];
      memoryLocked = false;
      memoryMatched++;
      document.getElementById('mem-matched').textContent = `✅ ${memoryMatched}/${MEMORY_PAIRS.length}`;

      if (memoryMatched === MEMORY_PAIRS.length) {
        const bonus = Math.max(50, 200 - memoryMoves * 5);
        awardPoints(bonus, bonus / 2, `Жад ойыны аяқталды! 🎉`);
        launchConfetti();
        setTimeout(() => showToast('🏆', 'Жад ойыны!', `${memoryMoves} қадамда аяқтадың!`), 500);
      }
    } else {
      setTimeout(() => {
        memoryFlipped.forEach(c => c.classList.remove('flipped'));
        memoryFlipped = [];
        memoryLocked = false;
      }, 1000);
    }
  }
}

// ============================================================
// PUZZLE (Slider) GAME
// ============================================================
const PUZZLE_SYMBOLS = ['🧠', '💻', '📡', '🔐', '💾', '⚙️', '📜', '🌐'];
let puzzleGrid = [];
let emptyIdx = 8;
const PUZZLE_SIZE = 3;

function startPuzzle() {
  const symbols = PUZZLE_SYMBOLS.slice(0, 8);
  puzzleGrid = [...symbols, ''];
  // Shuffle
  for (let i = puzzleGrid.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [puzzleGrid[i], puzzleGrid[j]] = [puzzleGrid[j], puzzleGrid[i]];
  }
  emptyIdx = puzzleGrid.indexOf('');

  const modal = document.getElementById('game-modal-body');
  if (!modal) return;

  modal.innerHTML = `
    <div class="game-container">
      <div class="game-header">
        <h2>🧩 Пазл ойыны</h2>
        <div class="game-score-display">
          <span class="score-badge" id="puzzle-moves">🔄 0</span>
        </div>
      </div>
      <div class="game-body text-center">
        <p style="color:var(--text-muted);margin-bottom:16px;font-weight:600">Бос ұяшыққа жақын тайлдарды басыңыз!</p>
        <div class="puzzle-grid" id="puzzle-grid" style="grid-template-columns:repeat(3,1fr);max-width:300px;margin:0 auto"></div>
        <div id="puzzle-result"></div>
        <div class="mt-6 flex" style="justify-content:space-between">
          <button class="btn btn-secondary" onclick="startPuzzle()">🔄 Аралас</button>
          <button class="btn btn-secondary" onclick="closeModal('game-modal')">Шығу</button>
        </div>
      </div>
    </div>
  `;

  renderPuzzle();
}

let puzzleMoves = 0;
function renderPuzzle() {
  const grid = document.getElementById('puzzle-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const colors = ['#7C3AED','#06B6D4','#10B981','#F59E0B','#EF4444','#F97316','#8B5CF6','#0EA5E9'];

  puzzleGrid.forEach((item, idx) => {
    const tile = document.createElement('div');
    tile.className = 'puzzle-tile ' + (item === '' ? 'empty' : '');
    tile.style.background = item ? colors[PUZZLE_SYMBOLS.indexOf(item)] : 'transparent';
    tile.style.color = 'white';
    tile.style.fontSize = '2rem';
    tile.textContent = item;
    tile.addEventListener('click', () => movePuzzleTile(idx));
    grid.appendChild(tile);
  });
}

function movePuzzleTile(idx) {
  const row = Math.floor(idx / PUZZLE_SIZE);
  const col = idx % PUZZLE_SIZE;
  const eRow = Math.floor(emptyIdx / PUZZLE_SIZE);
  const eCol = emptyIdx % PUZZLE_SIZE;

  const adjacent =
    (Math.abs(row - eRow) === 1 && col === eCol) ||
    (Math.abs(col - eCol) === 1 && row === eRow);

  if (!adjacent) return;

  [puzzleGrid[idx], puzzleGrid[emptyIdx]] = [puzzleGrid[emptyIdx], puzzleGrid[idx]];
  emptyIdx = idx;
  puzzleMoves++;
  const pm = document.getElementById('puzzle-moves');
  if (pm) pm.textContent = `🔄 ${puzzleMoves}`;
  renderPuzzle();

  // Check win
  const solved = puzzleGrid.slice(0, 8).every((v, i) => v === PUZZLE_SYMBOLS[i]) && puzzleGrid[8] === '';
  if (solved) {
    const bonus = Math.max(30, 150 - puzzleMoves * 2);
    awardPoints(bonus, bonus / 2, `Пазл шешілді! 🧩`);
    launchConfetti();
    const res = document.getElementById('puzzle-result');
    if (res) res.innerHTML = `<div class="feedback-banner correct mt-4">🎉 Тамаша! ${puzzleMoves} қадамда шештің! +${bonus} ұпай!</div>`;
  }
}

// ============================================================
// FINISH GAME (Score screen)
// ============================================================
function finishGame() {
  const topic = TOPICS[currentGame.topicId];
  const s = APP.state;

  // Mark topic game as done
  if (s.topics[currentGame.topicId]) {
    s.topics[currentGame.topicId].game = true;
    s.topics[currentGame.topicId].score = Math.max(
      s.topics[currentGame.topicId].score,
      currentGame.score
    );
  }
  APP.save();

  const modal = document.getElementById('game-modal-body');
  if (!modal) return;

  const pct = Math.round((currentGame.score / (currentGame.total * 25)) * 100);
  const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';

  modal.innerHTML = `
    <div style="text-align:center;padding:40px 24px">
      <div style="font-size:5rem;margin-bottom:16px">${pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪'}</div>
      <h2 style="font-family:var(--font-display);font-size:2rem;color:var(--primary);margin-bottom:8px">
        Ойын аяқталды!
      </h2>
      <div style="font-size:2rem;margin:12px 0">${stars}</div>
      <p style="color:var(--text-muted);margin-bottom:24px">${topic.title}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:300px;margin:0 auto 28px">
        <div style="background:var(--bg-alt);border-radius:12px;padding:16px">
          <div style="font-size:2rem;font-weight:900;color:var(--primary)">${currentGame.score}</div>
          <div style="font-size:0.85rem;color:var(--text-muted)">Ұпай</div>
        </div>
        <div style="background:var(--bg-alt);border-radius:12px;padding:16px">
          <div style="font-size:2rem;font-weight:900;color:var(--primary)">${pct}%</div>
          <div style="font-size:0.85rem;color:var(--text-muted)">Нәтиже</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-secondary" onclick="closeModal('game-modal')">🏠 Шығу</button>
        <button class="btn btn-primary" onclick="startQuiz('${currentGame.topicId}')">🔄 Қайталау</button>
      </div>
    </div>
  `;

  if (pct >= 80) launchConfetti();
}

// ============================================================
// THEORY MODAL
// ============================================================
function openTheory(topicId) {
  const topic = TOPICS[topicId];
  if (!topic) return;

  const modalTitle = document.getElementById('theory-modal-title');
  const modalBody  = document.getElementById('theory-modal-body');

  if (modalTitle) modalTitle.textContent = topic.theory.title;
  if (modalBody)  modalBody.innerHTML = `<div class="theory-content">${topic.theory.body}</div>`;

  // Mark theory as read
  const s = APP.state;
  const wasRead = s.topics[topicId]?.theory;
  if (s.topics[topicId]) {
    s.topics[topicId].theory = true;
    s.topics[topicId].score = Math.max(s.topics[topicId].score, 30);
  }
  APP.save();

  if (!wasRead) {
    awardPoints(30, 20, `${topic.title} теориясын оқыдың!`);
  }

  openModal('theory-modal');
}

// Expose
window.TOPICS = TOPICS;
window.startQuiz = startQuiz;
window.startTrueFalse = startTrueFalse;
window.startDragDrop = startDragDrop;
window.startMemoryGame = startMemoryGame;
window.startPuzzle = startPuzzle;
window.openTheory = openTheory;
window.answerQuiz = answerQuiz;
window.nextQuestion = nextQuestion;
window.answerTF = answerTF;
window.dragStart = dragStart;
window.dragOver = dragOver;
window.dropItem = dropItem;
window.checkDragDrop = checkDragDrop;
window.finishGame = finishGame;
