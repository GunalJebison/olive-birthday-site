:root {
  --olive-900: #20311f;
  --olive-800: #314a36;
  --olive-700: #5a7051;
  --olive-600: #7b8f68;
  --olive-500: #9fb289;
  --olive-300: #dfe8d2;
  --cream: #f6f0e8;
  --sand: #ede0d0;
  --gold: #d9b76d;
  --shadow: rgba(28, 38, 25, 0.14);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background: linear-gradient(135deg, #f2efe8 0%, #ecf1e5 45%, #e6ebd3 100%);
  color: var(--olive-900);
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.page-shell {
  position: relative;
  width: min(1200px, 92vw);
  min-height: 760px;
  display: grid;
  place-items: center;
  isolation: isolate;
}

.ambient {
  position: absolute;
  border-radius: 50%;
  filter: blur(42px);
  opacity: 0.9;
  animation: driftGlow 11s ease-in-out infinite alternate;
}

.ambient-one {
  width: 420px;
  height: 420px;
  background: rgba(135, 157, 106, 0.2);
  left: 8%;
  top: 6%;
}

.ambient-two {
  width: 460px;
  height: 460px;
  background: rgba(221, 184, 102, 0.16);
  right: 7%;
  bottom: 4%;
  animation-delay: 1.5s;
}

.birthday-card {
  position: relative;
  width: min(1020px, 89vw);
  min-height: 660px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.28);
  border: 1px solid rgba(86, 101, 67, 0.12);
  box-shadow: 0 26px 80px rgba(31, 42, 23, 0.12);
  overflow: hidden;
  backdrop-filter: blur(8px);
  z-index: 2;
  animation: slideIn 1.3s ease forwards;
  opacity: 0;
}

.image-panel {
  position: relative;
  padding: 40px 30px;
  background: linear-gradient(180deg, rgba(120, 148, 99, 0.12), rgba(220, 231, 208, 0.6));
  display: grid;
  place-items: center;
}

.photo-badge {
  position: absolute;
  top: 28px;
  left: 34px;
  z-index: 3;
  background: rgba(34, 49, 31, 0.72);
  color: #f6f3ef;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.main-photo {
  position: relative;
  width: min(100%, 420px);
  aspect-ratio: 4 / 5;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255,255,255,0.52), rgba(188, 209, 158, 0.7));
  border: 1px solid rgba(84, 100, 70, 0.14);
  box-shadow: 0 24px 40px rgba(42, 51, 27, 0.12);
  overflow: hidden;
  animation: floatPhoto 4.2s ease-in-out infinite;
}

.main-photo::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
  filter: saturate(0.88) contrast(1.04);
  transform: scale(1.05);
}

.main-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(44,52,31,0.08));
}

.photo-glow {
  position: absolute;
  inset: 12% 18% 12% 18%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.9), rgba(169, 195, 135, 0.6) 36%, rgba(95,110,55,0.12));
  filter: blur(18px);
  z-index: 1;
}

.photo-ornament {
  position: absolute;
  z-index: 2;
  color: rgba(216, 183, 109, 0.9);
  font-size: clamp(1.8rem, 3vw, 3rem);
  filter: drop-shadow(0 12px 20px rgba(120, 92, 36, 0.18));
  animation: twinkle 2.7s ease-in-out infinite;
}

.ornament-one { top: 16%; left: 18%; }
.ornament-two { top: 32%; right: 18%; animation-delay: 0.5s; }
.ornament-three { bottom: 18%; left: 42%; animation-delay: 1s; }

.content-panel {
  position: relative;
  padding: clamp(34px, 5vw, 68px) clamp(28px, 4vw, 58px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(247, 243, 238, 0.18);
}

.eyebrow {
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.75rem;
  color: var(--olive-700);
  font-weight: 700;
}

h1 {
  margin: 16px 0 12px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3.8rem, 5vw, 6rem);
  line-height: 0.84;
  letter-spacing: -0.05em;
  font-weight: 600;
  color: var(--olive-900);
}

h1 span {
  display: inline-block;
  color: var(--olive-800);
}

.divider {
  width: 95px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--olive-600), var(--gold));
  margin: 8px 0 22px;
}

.message {
  margin: 0;
  color: rgba(31, 42, 25, 0.83);
  font-size: clamp(1.08rem, 1.4vw, 1.24rem);
  line-height: 1.85;
}

.message.extra {
  margin-top: 16px;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.tag-row span {
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(168, 186, 140, 0.22);
  border: 1px solid rgba(102, 120, 80, 0.12);
  color: var(--olive-800);
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.signature-block {
  margin-top: 30px;
}

.signature-label {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--olive-700);
}

.signature-name {
  margin: 10px 0 0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 2.5vw, 2.8rem);
  color: var(--olive-900);
}

.sparkles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.sparkles::before,
.sparkles::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.95) 0 2px, transparent 3px),
    radial-gradient(circle, rgba(216,183,109,0.9) 0 2px, transparent 3px),
    radial-gradient(circle, rgba(123,143,104,0.8) 0 2px, transparent 3px);
  background-size: 180px 160px;
  background-position: 0 0, 90px 70px, 150px 120px;
  animation: sparkleDrift 20s linear infinite;
}

.sparkles::after {
  transform: scale(1.2);
  animation-duration: 26s;
  opacity: 0.7;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(26px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes driftGlow {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(16px, 18px) scale(1.08); }
}

@keyframes floatPhoto {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes twinkle {
  0%, 100% { transform: scale(0.9) rotate(0deg); opacity: 0.45; }
  50% { transform: scale(1.12) rotate(8deg); opacity: 1; }
}

@keyframes sparkleDrift {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(18px, 18px, 0); }
}

@media (max-width: 860px) {
  body {
    overflow-y: auto;
    padding: 24px 0;
  }

  .birthday-card {
    grid-template-columns: 1fr;
  }

  .image-panel {
    padding-bottom: 18px;
  }

  .main-photo {
    width: min(100%, 330px);
  }
}
