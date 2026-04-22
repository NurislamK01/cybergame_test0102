/**
 * app.js — Негізгі JavaScript логикасы
 * Геймификация: балдар, деңгей, badge, прогресс, LocalStorage
 */

// ============================================================
// 1. GLOBAL STATE (LocalStorage арқылы сақталады)
// ============================================================

const DEFAULT_STATE = {
  name: '',
  points: 0,
  xp: 0,
  level: 1,
  streak: 0,
  badges: [],
  topics: {
    ergonomics:   { theory: false, game: false, score: 0, maxScore: 100 },
    history:      { theory: false, game: false, score: 0, maxScore: 100 },
    computer:     { theory: false, game: false, score: 0, maxScore: 100 },
    wireless:     { theory: false, game: false, score: 0, maxScore: 100 },
    encryption:   { theory: false, game: false, score: 0, maxScore: 100 },
    binary:       { theory: false, game: false, score: 0, maxScore: 100 },
  },
  lastActivity: null,
  totalAnswered: 0,
  correctAnswers: 0,
};

function loadState() {
  try {
    const s = localStorage.getItem('cybergame_state');
    return s ? { ...DEFAULT_STATE, ...JSON.parse(s) } : { ...DEFAULT_STATE };
  } catch { return { ...DEFAULT_STATE }; }
}

function saveState(state) {
  try { localStorage.setItem('cybergame_state', JSON.stringify(state)); } catch {}
}

// Жаһандық күй
window.APP = {
  state: loadState(),
  save() { saveState(this.state); },
  reset() { this.state = { ...DEFAULT_STATE }; saveState(this.state); location.reload(); },
};

// ============================================================
// 2. LEVEL SYSTEM
// ============================================================

const LEVELS = [
  { level: 1,  xpNeeded: 0,    title: '🌱 Жаңадан бастаушы' },
  { level: 2,  xpNeeded: 100,  title: '⚡ Үйренуші' },
  { level: 3,  xpNeeded: 250,  title: '🔥 Белсенді' },
  { level: 4,  xpNeeded: 450,  title: '🚀 Зерттеуші' },
  { level: 5,  xpNeeded: 700,  title: '🧠 Білгір' },
  { level: 6,  xpNeeded: 1000, title: '💎 Шебер' },
  { level: 7,  xpNeeded: 1400, title: '🏆 Ұстаз' },
  { level: 8,  xpNeeded: 1900, title: '👑 Сарапшы' },
  { level: 9,  xpNeeded: 2500, title: '🌟 Киберқаһарман' },
  { level: 10, xpNeeded: 3200, title: '🎖️ Аңыз' },
];

function getLevel(xp) {
  let current = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.xpNeeded) current = lvl;
    else break;
  }
  return current;
}

function getNextLevel(xp) {
  const idx = LEVELS.findIndex(l => l.xpNeeded > xp);
  return idx === -1 ? null : LEVELS[idx];
}

function getXpPercent(xp) {
  const cur = getLevel(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const range = next.xpNeeded - cur.xpNeeded;
  const prog  = xp - cur.xpNeeded;
  return Math.round((prog / range) * 100);
}

// ============================================================
// 3. BADGE SYSTEM
// ============================================================

const ALL_BADGES = [
  { id: 'first_answer', icon: '🎯', name: 'Алғашқы жауап', desc: 'Бірінші сұрақты жауаптадың!', condition: s => s.totalAnswered >= 1 },
  { id: 'perfect_score', icon: '💯', name: '100 балл', desc: 'Бірде-бір қате жасамадың!', condition: s => s.correctAnswers >= 10 && s.totalAnswered === s.correctAnswers && s.totalAnswered >= 10 },
  { id: 'first_topic', icon: '📖', name: 'Оқымысты', desc: 'Алғашқы тақырыпты бітірдің!', condition: s => Object.values(s.topics).some(t => t.theory && t.game) },
  { id: 'level_5', icon: '🚀', name: 'Зерттеуші', desc: '5-деңгейге жеттің!', condition: s => getLevel(s.xp).level >= 5 },
  { id: 'all_theory', icon: '📚', name: 'Теоретик', desc: 'Барлық теорияны оқыдың!', condition: s => Object.values(s.topics).every(t => t.theory) },
  { id: 'all_games', icon: '🎮', name: 'Геймер', desc: 'Барлық ойынды ойнадың!', condition: s => Object.values(s.topics).every(t => t.game) },
  { id: 'speed_reader', icon: '⚡', name: 'Жылдам оқушы', desc: '3 теорияны 5 минутта оқыдың!', condition: s => Object.values(s.topics).filter(t => t.theory).length >= 3 },
  { id: 'points_500', icon: '💰', name: 'Байлар клубы', desc: '500 ұпай жинадың!', condition: s => s.points >= 500 },
  { id: 'all_complete', icon: '🏆', name: 'Жеңімпаз', desc: 'Барлық тапсырмаларды аяқтадың!', condition: s => Object.values(s.topics).every(t => t.theory && t.game) },
  { id: 'streak_3', icon: '🔥', name: 'Стрейк!', desc: '3 дұрыс жауап қатарынан!', condition: s => s.streak >= 3 },
];

function checkBadges(state) {
  const newBadges = [];
  for (const badge of ALL_BADGES) {
    if (!state.badges.includes(badge.id) && badge.condition(state)) {
      state.badges.push(badge.id);
      newBadges.push(badge);
    }
  }
  return newBadges;
}

// ============================================================
// 4. AWARD POINTS / XP
// ============================================================

function awardPoints(points, xp, reason = '') {
  const s = APP.state;
  s.points += points;
  s.xp     += xp;

  const oldLevel = getLevel(s.xp - xp).level;
  const newLevel = getLevel(s.xp).level;

  const newBadges = checkBadges(s);
  APP.save();

  // Notifications
  showToast('⭐', `+${points} ұпай, +${xp} XP`, reason || 'Жақсы жасадың!');

  if (newLevel > oldLevel) {
    setTimeout(() => {
      showToast('🎉', `Деңгей: ${newLevel}!`, getLevel(s.xp).title);
      launchConfetti();
    }, 800);
  }

  newBadges.forEach((b, i) => {
    setTimeout(() => showToast(b.icon, b.name, b.desc), 1200 + i * 700);
  });

  updateNavBar();
}

// ============================================================
// 5. TOAST NOTIFICATIONS
// ============================================================

let toastContainer;

function ensureToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-wrap';
    document.body.appendChild(toastContainer);
  }
}

function showToast(icon, title, desc) {
  ensureToastContainer();
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-text">
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${desc}</div>
    </div>
  `;
  toastContainer.appendChild(el);
  setTimeout(() => {
    el.classList.add('hiding');
    setTimeout(() => el.remove(), 300);
  }, 3500);
}

// ============================================================
// 6. CONFETTI
// ============================================================

function launchConfetti() {
  const wrap = document.createElement('div');
  wrap.className = 'confetti-wrap';
  document.body.appendChild(wrap);

  const colors = ['#7C3AED','#06B6D4','#F59E0B','#10B981','#EF4444','#F97316'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    wrap.appendChild(p);
  }

  setTimeout(() => wrap.remove(), 3500);
}

// ============================================================
// 7. NAVBAR UPDATE
// ============================================================

function updateNavBar() {
  const s = APP.state;
  const lvlInfo = getLevel(s.xp);

  const scoreEl = document.getElementById('nav-score');
  const levelEl = document.getElementById('nav-level');
  const nameEl  = document.getElementById('nav-name');

  if (scoreEl) scoreEl.textContent = `⭐ ${s.points}`;
  if (levelEl) levelEl.textContent = `🏅 Деңгей ${lvlInfo.level}`;
  if (nameEl && s.name)  nameEl.textContent = s.name;
}

// ============================================================
// 8. THEME TOGGLE
// ============================================================

function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon();
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  }
}

// ============================================================
// 9. MOBILE MENU
// ============================================================

function toggleMobileMenu() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}

// ============================================================
// 10. MODAL SYSTEM
// ============================================================

function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ============================================================
// 11. WELCOME MODAL (name input)
// ============================================================

function initWelcome() {
  if (!APP.state.name) {
    setTimeout(() => openModal('welcome-modal'), 500);
  }
}

function submitName() {
  const input = document.getElementById('player-name-input');
  if (!input) return;
  const name = input.value.trim();
  if (!name) { input.style.borderColor = 'var(--danger)'; return; }
  APP.state.name = name;
  APP.save();
  closeModal('welcome-modal');
  updateNavBar();
  updatePlayerCard();
  showToast('👋', `Сәлем, ${name}!`, 'Оқуды бастай алмыз!');
}

// ============================================================
// 12. PLAYER CARD UPDATE (Home page)
// ============================================================

function updatePlayerCard() {
  const s = APP.state;
  const lvl = getLevel(s.xp);
  const pct = getXpPercent(s.xp);
  const next = getNextLevel(s.xp);

  const el = id => document.getElementById(id);

  if (el('player-name-display'))  el('player-name-display').textContent  = s.name || 'Оқушы';
  if (el('player-level-title'))   el('player-level-title').textContent   = lvl.title;
  if (el('player-points-val'))    el('player-points-val').textContent    = s.points;
  if (el('player-level-val'))     el('player-level-val').textContent     = lvl.level;
  if (el('player-streak-val'))    el('player-streak-val').textContent    = s.streak;
  if (el('xp-fill'))              el('xp-fill').style.width              = pct + '%';
  if (el('xp-text'))              el('xp-text').textContent               = next
    ? `${s.xp} / ${next.xpNeeded} XP` : `${s.xp} XP (MAX)`;
}

// ============================================================
// 13. TOPIC PROGRESS UPDATE
// ============================================================

function updateTopicProgress() {
  const s = APP.state;
  for (const [key, data] of Object.entries(s.topics)) {
    const pct = Math.round((data.score / data.maxScore) * 100);
    const bar = document.getElementById(`progress-${key}`);
    if (bar) bar.style.width = pct + '%';
    const txt = document.getElementById(`progress-text-${key}`);
    if (txt) txt.textContent = pct + '%';
  }
}

// ============================================================
// 14. STATS UPDATE (Home)
// ============================================================

function updateStats() {
  const s = APP.state;
  const topicsDone = Object.values(s.topics).filter(t => t.theory && t.game).length;
  const accuracy = s.totalAnswered > 0
    ? Math.round((s.correctAnswers / s.totalAnswered) * 100) : 0;

  const el = id => document.getElementById(id);
  if (el('stat-topics-done'))  el('stat-topics-done').textContent  = topicsDone;
  if (el('stat-badges'))       el('stat-badges').textContent       = s.badges.length;
  if (el('stat-accuracy'))     el('stat-accuracy').textContent     = accuracy + '%';
  if (el('stat-total-score'))  el('stat-total-score').textContent  = s.points;
}

// ============================================================
// 15. INIT (called on each page)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateNavBar();
  updatePlayerCard();
  updateTopicProgress();
  updateStats();
  initWelcome();
});

// Expose globally
window.openModal   = openModal;
window.closeModal  = closeModal;
window.toggleTheme = toggleTheme;
window.toggleMobileMenu = toggleMobileMenu;
window.submitName  = submitName;
window.awardPoints = awardPoints;
window.getLevel    = getLevel;
window.getXpPercent = getXpPercent;
window.getNextLevel = getNextLevel;
window.ALL_BADGES  = ALL_BADGES;
window.launchConfetti = launchConfetti;
window.showToast   = showToast;
window.LEVELS      = LEVELS;
