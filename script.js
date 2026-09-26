const $ = s => document.querySelector(s); const $$ = s => document.querySelectorAll(s);

// 1. STARFIELD GENERATOR
for (let i = 0; i < 90; i++) {
  const star = document.createElement("i");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  $("#stars").append(star);
}

// 2. TYPEWRITER EFFECT IN HERO
const phrases = [
  "some memories, little things, and a whole lot of us.",
  "a little dark aesthetic universe created for you.",
  "every moment, captured and kept forever."
];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
  const current = phrases[phraseIdx];
  const target = $("#typewriter");   if (!target) return;    if (isDeleting) {     target.textContent = current.substring(0, charIdx--);   } else {     target.textContent = current.substring(0, charIdx++);   }    let speed = isDeleting ? 30 : 60;   if (!isDeleting && charIdx === current.length + 1) {     speed = 2200;     isDeleting = true;   } else if (isDeleting && charIdx === 0) {     isDeleting = false;     phraseIdx = (phraseIdx + 1) \% phrases.length;     speed = 500;   }   setTimeout(typeEffect, speed); } typeEffect();  // 3. SMOOTH NAVIGATION $$("[data-go]").forEach(b => {   b.onclick = () => $(b.dataset.go)?.scrollIntoView({ behavior: "smooth" });
});

// 4. MODAL LOGIC
const modal = $("#modal"), msg = $("#msg"); $$(".secret").forEach(b => {
  b.onclick = () => {
    msg.textContent = b.dataset.msg;
    modal.classList.add("show");
  };
});
$("#close").onclick = () => modal.classList.remove("show");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("show"); };
document.onkeydown = e => { if (e.key === "Escape") modal.classList.remove("show"); };

// 5. INTERACTIVE NICKNAMES
$$(".nameBtn").forEach(b => {   b.onclick = () => {     $$
(".nameBtn").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    $("#nameDetail").textContent = b.dataset.desc;
  };
});

// 6. AUDIO SYNTHESIZER (iOS Wake Compatible)
let ctx, osc, gain, audioOn = false;
$("#music").onclick = () => {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    osc = ctx.createOscillator();
    gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 196; // G3 soft ambient tone
    gain.gain.value = 0;
    osc.connect(gain).connect(ctx.destination);
    osc.start();
  }
  if (ctx.state === "suspended") ctx.resume();

  audioOn = !audioOn;
  gain.gain.value = audioOn ? 0.018 : 0;
  $("#music").textContent = audioOn ? "♫" : "♪";
};

// 7. LIVE TIME COUNTER
const loveStart = new Date("2025-06-23T01:39:00");
function updateCounter() {
  const diff = new Date() - loveStart;
  if (diff < 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  if ($("#cDays")) $("#cDays").textContent = String(days).padStart(2, '0');
  if ($("#cHours")) $("#cHours").textContent = String(hours).padStart(2, '0');
  if ($("#cMins")) $("#cMins").textContent = String(mins).padStart(2, '0');
  if ($("#cSecs")) $("#cSecs").textContent = String(secs).padStart(2, '0');
}
setInterval(updateCounter, 1000);
updateCounter();

// 8. RANDOM LOVE REASONS
const reasons = [
  "The way your voice sounds when we talk on the phone.",
  "How effortless it feels to spend hours talking with you.",
  "Your smile—even when I can only picture it in my head.",
  "How sweet and unforgettable our story started on that AOT live.",
  "Because you're my favorite part of every single day.",
  "The way you make 'Mommy' sound like the sweetest title ever."
];
let reasonIdx = 0;
$("#nextReason")?.addEventListener("click", () => {
  const p = $("#loveReason");
  p.style.opacity = 0;
  setTimeout(() => {
    p.textContent = reasons[reasonIdx % reasons.length];
    p.style.opacity = 1;
    reasonIdx++;
  }, 220);
});

// 9. CURSOR HEART TRAIL
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.83) {
    const heart = document.createElement("span");
    heart.className = "cursor-heart";
    heart.textContent = ["🖤", "💖", "✨", "🌸"][Math.floor(Math.random() * 4)];
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
});

// 10. CUTE MINI GAME LOGIC
const gameArea = $("#gameArea");
let gameScore = 0, gameTime = 25, gameActive = false, gameTimer = null, gameSpawner = null;

function spawnCuteStar() {
  if (!gameActive) return;
  const el = document.createElement("button");
  el.className = "game-star";
  el.textContent = Math.random() < 0.2 ? "💗" : "⭐";
  el.style.left = (Math.random() * 82 + 5) + "%";
  el.style.top = (Math.random() * 70 + 8) + "%";
  
  el.onclick = () => {
    gameScore += el.textContent === "💗" ? 3 : 1;
    $("#gameScore").textContent = gameScore;     el.remove();   };   gameArea.appendChild(el);   setTimeout(() => el.remove(), 1600); }  function startCuteGame() {   $$(".game-star").forEach(star => star.remove());
  gameScore = 0;
  gameTime = 25;
  gameActive = true;
  $("#gameScore").textContent = 0;
  $("#gameTime").textContent = 25;

  const startBtn = $("#gameStart");
  startBtn.style.display = "none";

  clearInterval(gameTimer);
  clearInterval(gameSpawner);

  gameTimer = setInterval(() => {
    gameTime--;
    $("#gameTime").textContent = gameTime;
    if (gameTime <= 0) {
      gameActive = false;
      clearInterval(gameTimer);
      clearInterval(gameSpawner);

      msg.textContent = `You scored ${gameScore} points! 💗 Reward unlocked: One lifetime voucher for unlimited calls & endless momo dates. 🍜✨`;
      modal.classList.add("show");

      startBtn.textContent = "Play again ✨";
      startBtn.style.display = "block";
    }
  }, 1000);

  gameSpawner = setInterval(spawnCuteStar, 620);
}
