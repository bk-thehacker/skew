:root {
  --bg: #07070c;
  --text: #f7f4f7;
  --muted: #a8a3ad;
  --pink: #ff789d;
  --pink-glow: #ff789d44;
  --line: rgba(255, 255, 255, 0.11);
  --glass-bg: rgba(255, 255, 255, 0.05);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font: 14px Inter, system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
  position: relative;
}

/* BACKGROUND GLOWS & CANVASES */
#ambientCanvas {
  position: fixed;
  inset: 0;
  z-index: -3;
  pointer-events: none;
}
#stars {
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
}
.star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: white;
  opacity: 0.4;
  animation: t 3s infinite alternate;
}
@keyframes t { to { opacity: 0.05; transform: scale(0.8); } }

header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;
  background: linear-gradient(to bottom, #07070ce6, transparent);
  backdrop-filter: blur(8px);
}
header button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.08);
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}
header button:hover {
  background: var(--pink-glow);
  border-color: var(--pink);
}

/* HERO SECTION */
.hero {
  min-height: 100svh;
  display: grid;
  place-items: center;
  align-content: center;
  text-align: center;
  padding: 70px 20px;
  position: relative;
}
.glow {
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, #ff4f7d28 0%, transparent 70%);
  filter: blur(80px);
  animation: pulseGlow 6s infinite alternate ease-in-out;
}
@keyframes pulseGlow { to { transform: scale(1.25); opacity: 0.8; } }

.eyebrow, label {
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #a8a2ad;
  font-size: 10px;
  font-weight: 500;
}
.hero h1 {
  font: 700 clamp(60px, 16vw, 120px) / 0.85 "Cormorant Garamond", serif;
  margin: 22px 0 16px;
}
.hero h1 i, .title i, .final h2 i {
  color: var(--pink);
  font-style: italic;
  text-shadow: 0 0 20px var(--pink-glow);
}
.subtitle {
  color: var(--muted);
  line-height: 1.8;
  font-size: 15px;
  min-height: 27px;
}
.cta {
  margin-top: 28px;
  border: 1px solid rgba(255, 120, 157, 0.4);
  background: rgba(255, 120, 157, 0.1);
  color: white;
  padding: 14px 24px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.cta:hover {
  background: var(--pink);
  color: #000;
  box-shadow: 0 0 25px var(--pink-glow);
  transform: translateY(-2px);
}
.scrollHint {
  position: absolute;
  bottom: 25px;
  color: #666;
  letter-spacing: 0.15em;
  font-size: 9px;
}

section {
  max-width: 920px;
  margin: auto;
  padding: 90px 22px;
}
label { display: block; margin-bottom: 24px; }
.glass {
  background: var(--glass-bg);
  border: 1px solid var(--line);
  border-radius: 24px;
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

/* COUNTER */
.counterGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-top: 15px;
}
.countBox {
  padding: 28px 15px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.08);
}
.countBox span {
  display: block;
  font: 700 48px/1 "Cormorant Garamond", serif;
  color: var(--pink);
  text-shadow: 0 0 15px var(--pink-glow);
}
.countBox small {
  display: block;
  margin-top: 10px;
  font-size: 9px;
  letter-spacing: 0.2em;
  color: #888;
}

/* STORY SECTION */
.story {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 30px;
  padding: 36px;
}
.date {
  font: 700 72px/0.8 "Cormorant Garamond", serif;
  color: var(--pink);
}
.date small {
  display: block;
  font: 700 12px Inter, sans-serif;
  letter-spacing: 0.18em;
  color: #aaa;
  margin-top: 10px;
}
.story h2, .timeline h2 {
  font: 600 38px/1.1 "Cormorant Garamond", serif;
  margin: 0 0 10px;
}
.story p, .timeline p { line-height: 1.8; color: #ccc; margin: 0 0 12px; }
.story em { font-size: 12px; color: #777; font-style: italic; }

.title { font: 600 46px/1.05 "Cormorant Garamond", serif; margin: 0 0 30px; }

/* NAMES SECTION */
.names {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.nameBtn {
  flex: 1;
  max-width: 180px;
  padding: 18px 10px;
  border: 1px solid var(--line);
  background: var(--glass-bg);
  color: white;
  border-radius: 18px;
  font: 600 20px "Cormorant Garamond", serif;
  cursor: pointer;
  transition: all 0.3s ease;
}
.nameBtn.active {
  border-color: var(--pink);
  background: rgba(255, 120, 157, 0.12);
  box-shadow: 0 0 25px var(--pink-glow);
}
.arrow { color: #555; }
.nameDetail {
  text-align: center;
  color: var(--pink);
  font-size: 13px;
  margin-top: 18px;
  min-height: 20px;
}
.extras {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 18px;
  margin-top: 20px;
  color: #777;
  font-size: 12px;
}
.extras strong { color: #eee; }

/* TIMELINE */
.timeline { display: grid; gap: 16px; }
.timeline article { padding: 28px; }
.timeline .tag { font-size: 10px; letter-spacing: 0.18em; color: var(--pink); font-weight: 600; }
.timeline small { color: #888; line-height: 1.6; display: block; margin-top: 6px; }

/* TRAITS GRID */
.traits { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.traits article {
  min-height: 130px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  font-size: 26px;
}
.traits strong { font: 600 24px "Cormorant Garamond", serif; margin-top: auto; }
.traits small { font-size: 10px; color: #777; margin-top: 4px; }
.traits .wide { grid-column: span 2; }

/* SECRETS */
.secrets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.secret {
  min-height: 140px;
  padding: 25px;
  color: white;
  font-size: 28px;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
}
.secret:hover { border-color: var(--pink); transform: translateY(-3px); }
.secret small { display: block; color: #aaa; font-size: 11px; margin-top: 16px; font-family: Inter; }

/* LOVE REASONS CARD */
.loveCard { padding: 45px 30px; text-align: center; }
.loveCard p {
  font: 600 26px/1.4 "Cormorant Garamond", serif;
  color: #fff;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease;
}

/* GALLERY */
.photos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
.photos div {
  min-height: 220px;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: grid;
  place-content: center;
  text-align: center;
  color: #666;
  font-size: 32px;
}
.photos small { display: block; font-size: 10px; margin-top: 10px; font-family: Inter; color: #888; }

/* GAME */
.gameIntro { color: #888; line-height: 1.8; margin-top: -18px; margin-bottom: 25px; }
.gameCard { padding: 20px; }
.gameTop {
  display: flex;
  justify-content: space-between;
  color: #aaa;
  font-size: 11px;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}
.gameTop b { color: var(--pink); font-size: 18px; }
#gameArea {
  height: 380px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background: radial-gradient(circle at 50% 50%, #ff789d10, transparent 60%), rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}
.gameStart {
  position: absolute;
  inset: 0;
  margin: auto;
  width: max-content;
  height: max-content;
  padding: 14px 26px;
  border: 1px solid var(--pink);
  border-radius: 999px;
  background: rgba(255, 120, 157, 0.15);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
}
.game-star {
  position: absolute;
  border: 0;
  background: none;
  font-size: 32px;
  cursor: pointer;
  animation: gamePop 0.2s ease-out, gameFloat 1.7s linear forwards;
  filter: drop-shadow(0 0 10px var(--pink-glow));
}
@keyframes gamePop { from { transform: scale(0); } to { transform: scale(1); } }
@keyframes gameFloat { to { transform: translateY(-40px) rotate(15deg); opacity: 0; } }
.gameHint { text-align: center; color: #666; font-size: 10px; margin: 12px 0 2px; }

/* FINAL SECTION */
.final {
  text-align: center;
  min-height: 100svh;
  display: grid;
  place-items: center;
  align-content: center;
}
.heart {
  color: var(--pink);
  font-size: 48px;
  animation: beat 1.4s infinite ease-in-out;
}
@keyframes beat { 50% { transform: scale(1.25); text-shadow: 0 0 30px var(--pink); } }
.final h2 {
  font: 700 clamp(50px, 12vw, 95px) / 0.85 "Cormorant Garamond", serif;
  margin: 22px 0;
}
.final > p:not(.eyebrow) { color: #aaa; line-height: 1.8; }
.final > small { margin-top: 40px; color: #777; font: italic 18px "Cormorant Garamond", serif; }

/* MODAL */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(10px);
}
.modal.show { opacity: 1; pointer-events: auto; }
.box { max-width: 420px; width: 100%; padding: 36px 28px; text-align: center; position: relative; }
.box > button {
  position: absolute;
  right: 18px;
  top: 14px;
  background: none;
  border: 0;
  color: #aaa;
  font-size: 28px;
  cursor: pointer;
}
.modalIcon { font-size: 38px; margin-bottom: 10px; }
.box p { color: #ddd; line-height: 1.8; font-size: 15px; }

/* CURSOR TRAIL */
.cursor-heart {
  position: fixed;
  pointer-events: none;
  font-size: 15px;
  z-index: 9999;
  animation: floatUp 1s ease-out forwards;
}
@keyframes floatUp {
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-35px) scale(0.4); }
}

/* RESPONSIVE DESIGN */
@media (max-width: 680px) {
  section { padding: 70px 18px; }
  .counterGrid { grid-template-columns: repeat(2, 1fr); }
  .story { grid-template-columns: 1fr; padding: 26px; }
  .date { font-size: 58px; }
  .title { font-size: 38px; }
  .names { gap: 6px; }
  .nameBtn { font-size: 17px; padding: 14px 6px; }
  .arrow { font-size: 10px; }
  .secrets { grid-template-columns: 1fr; }
  .photos { grid-template-columns: 1fr 1fr; }
  .photos div:last-child { grid-column: span 2; }
  #gameArea { height: 320px; }
}
