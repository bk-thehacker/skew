const $ = s => document.querySelector(s); const $$ = s => document.querySelectorAll(s);

// Star generator background
for (let i = 0; i < 85; i++) {
  let x = document.createElement("i");
  x.className = "star";
  x.style.left = Math.random() * 100 + "%";
  x.style.top = Math.random() * 100 + "%";
  x.style.animationDelay = Math.random() * 3 + "s";
  $("#stars").append(x); }  // Smooth scrolling CTA buttons $$("[data-go]").forEach(b => b.onclick = () => $(b.dataset.go)?.scrollIntoView({ behavior: "smooth" }));

// Modal handlers
const modal = $("#modal"), msg = $("#msg"); $$(".secret").forEach(b => b.onclick = () => {
  msg.textContent = b.dataset.msg;
  modal.classList.add("show");
});
$("#close").onclick = () => modal.classList.remove("show");
modal.onclick = e => { if (e.target === modal) modal.classList.remove("show"); };
document.onkeydown = e => { if (e.key === "Escape") modal.classList.remove("show"); };

// Interactive Name Buttons
$$(".names button").forEach(b => b.onclick = () => {   $$
(".names button").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
});

// Audio Web Synthesizer (with iOS wake fix)
let ctx, osc, gain, on = false;
$("#music").onclick = () => {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    osc = ctx.createOscillator();
    gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 196;
    gain.gain.value = 0;
    osc.connect(gain).connect(ctx.destination);
    osc.start();
  }
  if (ctx.state === 'suspended') ctx.resume();

  on = !on;
  gain.gain.value = on ? 0.018 : 0;
  $("#music").textContent = on ? "♫" : "♪";
};

// LIVE TIME COUNTER (Started 23 June 2025 - adjust year if needed)
const loveStart = new Date("2025-06-23T01:39:00");
function updateCounter() {
  const diff = new Date() - loveStart;
  if (diff < 0) return;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  if ($("#cDays")) $("#cDays").textContent = days;
  if ($("#cHours")) $("#cHours").textContent = hours;
  if ($("#cMins")) $("#cMins").textContent = mins;
  if ($("#cSecs")) $("#cSecs").textContent = secs;
}
setInterval(updateCounter, 1000);
updateCounter();

// LOVE REASONS GENERATOR
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
  }, 200);
});

// CURSOR HEART TRAIL EFFECT
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.82) {
    const heart = document.createElement("span");
    heart.className = "cursor-heart";
    heart.textContent = ["🖤", "💖", "✨", "🌸"][Math.floor(Math.random() * 4)];
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
});

// CUTE MINI GAME LOGIC
const gameArea = document.querySelector("#gameArea");
let gameScore = 0, gameTime = 25, gameActive = false, gameTimer = null, gameSpawner = null;

function spawnCuteStar() {
  if (!gameActive) return;
  const el = document.createElement("button");
  el.className = "game-star";
  el.textContent = Math.random() < .18 ? "💗" : "⭐";
  el.style.left = (Math.random() * 82 + 5) + "%";
  el.style.top = (Math.random() * 72 + 8) + "%";
  el.onclick = () => {
    gameScore += el.textContent === "💗" ? 3 : 1;
    document.querySelector("#gameScore").textContent = gameScore;
    el.remove();
  };
  gameArea.appendChild(el);
  setTimeout(() => el.remove(), 1700);
}

function startCuteGame() {
  document.querySelectorAll(".game-star").forEach(star => star.remove());
  gameScore = 0;
  gameTime = 25;
  gameActive = true;
  document.querySelector("#gameScore").textContent = 0;
  document.querySelector("#gameTime").textContent = 25;

  const startBtn = document.querySelector("#gameStart");
  startBtn.style.display = "none";

  clearInterval(gameTimer);
  clearInterval(gameSpawner);

  gameTimer = setInterval(() => {
    gameTime--;
    document.querySelector("#gameTime").textContent = gameTime;
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

  gameSpawner = setInterval(spawnCuteStar, 650);
}