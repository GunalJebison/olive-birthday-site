:root {
  --olive-900: #2a331f;
  --olive-800: #3a4c30;
  --olive-700: #5e6f4b;
  --olive-600: #7b8e65;
  --olive-500: #9aa87d;
  --olive-300: #dfe7cf;
  --cream: #f5f0e7;
  --sand: #efe5d7;
  --gold: #d7b46a;
  --leaf: rgba(121, 140, 96, 0.26);
  --shadow: rgba(42, 51, 31, 0.15);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background: linear-gradient(135deg, #f7f1e6 0%, #edf3e3 50%, #e6ecd8 100%);
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
  width: min(1180px, 90vw);
  min-height: 760px;
  display: grid;
  place-items: center;
  isolation: isolate;
}

.ambient {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.8;
  animation: floatGlow 11s ease-in-out infinite alternate;
}

.ambient-one {
  width: 420px;
  height: 420px;
  background: rgba(138, 156, 104, 0.2);
  left: 5%;
  top: 5%;
}

.ambient-two {
  width: 420px;
  height: 420px;
  background: rgba(215, 180, 106, 0.18);
  right: 5%;
  bottom: 4%;
  animation-delay: 1.3s;
}

.card {
  position: relative;
  width: min(980px, 88vw);
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(83, 97, 62, 0.12);
  box-shadow: 0 28px 80px rgba(34, 44, 24, 0.12);
  backdrop-filter: blur(8px);
  overflow: hidden;
  z-index: 2;
  animation: cardIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(26px) scale(0.98);
}

.card-inner {
  display: grid;
  grid-template-columns: 0.95fr 1.25fr;
  min-height: 680px;
}

.photo-panel {
  position: relative;
  padding: 42px 38px;
  background: linear-gradient(180deg, rgba(102, 119, 82, 0.10), rgba(205, 218, 178, 0.58));
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-card {
  position: relative;
  width: min(100%, 350px);
  aspect-ratio: 4 / 5;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255,255,255,0.54), rgba(183, 204, 155, 0.72));
  border: 1px solid rgba(90, 110, 68, 0.12);
  box-shadow: 0 14px 32px rgba(31, 40, 19, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: photoFloat 4.2s ease-in-out infinite;
}

.photo-glow {
  position: absolute;
  inset: 12% 18% 12% 18%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.9), rgba(177, 198, 139, 0.8) 38%, rgba(128, 145, 100, 0.18));
  filter: blur(16px);
}

.star {
  position: absolute;
  font-size: clamp(2rem, 3vw, 3rem);
  color: rgba(214, 141, 49, 0.86);
  filter: drop-shadow(0 8px 20px rgba(191, 115, 47, 0.25));
  animation: twinkle 2.6s ease-in-out infinite;
}

.star-one { top: 24%; left: 50%; }
.star-two { top: 50%; left: 32%; animation-delay: .4s; }
.star-three { top: 54%; right: 34%; animation-delay: .8s; }

.photo-placeholder {
  position: relative;
  width: 72%;
  height: 72%;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255,255,255,0.42), rgba(171, 194, 135, 0.8));
  border: 1px solid rgba(59, 73, 36, 0.10);
  box-shadow: inset 0 0 18px rgba(255,255,255,0.22);
  display: grid;
  place-items: center;
  z-index: 1;
}

.placeholder-icon {
  font-size: clamp(3rem, 6vw, 5rem);
  color: rgba(60, 74, 46, 0.55);
  transform: rotate(10deg);
  animation: pulse 2.4s ease-in-out infinite;
}

.photo-badge {
  position: absolute;
  top: 28px;
  left: 52px;
  z-index: 2;
  background: rgba(34, 45, 27, 0.72);
  color: rgba(250, 245, 239, 0.96);
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  box-shadow: 0 10px 18px rgba(34, 45, 27, 0.15);
}

.content-panel {
  position: relative;
  padding: clamp(40px, 5vw, 72px) clamp(28px, 4vw, 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(248, 245, 240, 0.26);
}

.eyebrow {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-700);
  font-weight: 700;
}

h1 {
  margin: 18px 0 12px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3.6rem, 5vw, 6rem);
  line-height: 0.82;
  font-weight: 600;
  letter-spacing: -0.05em;
  color: var(--olive-900);
  opacity: 0;
  animation: textRise 1.4s ease forwards;
  animation-delay: 0.35s;
}

h1 span {
  position: relative;
  display: inline-block;
  color: var(--olive-800);
  text-shadow: 0 10px 30px rgba(79, 97, 61, 0.12);
}

.ornament {
  width: 98px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--olive-600), var(--gold));
  margin: 10px 0 24px;
  transform: scaleX(0);
  transform-origin: left center;
  animation: lineGrow 0.8s ease forwards;
  animation-delay: 0.8s;
}

.lead,
.blessing-text {
  margin: 0;
  color: rgba(42, 51, 31, 0.8);
  font-size: clamp(1.05rem, 1.4vw, 1.2rem);
  line-height: 1.9;
  opacity: 0;
  animation: textRise 1.2s ease forwards;
  animation-delay: 1.1s;
}

.blessing-text {
  margin-top: 18px;
}

.blessing-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0 8px;
  opacity: 0;
  animation: textRise 1.1s ease forwards;
  animation-delay: 1.15s;
}

.blessing-row span {
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(167, 184, 136, 0.25);
  border: 1px solid rgba(100, 117, 77, 0.12);
  color: var(--olive-800);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 12px;
  margin-top: 26px;
  opacity: 0;
  animation: textRise 1.2s ease forwards;
  animation-delay: 1.35s;
}

.memory-card {
  position: relative;
  min-height: 105px;
  border-radius: 18px;
  border: 1px solid rgba(82, 95, 67, 0.12);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 12px 28px rgba(37, 49, 29, 0.08);
}

.memory-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.18), rgba(0,0,0,0.2)),
    linear-gradient(135deg, #dfe7cf, #c6d3a2, #e9d9b7);
  opacity: 0.9;
}

.memory-card-1::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.2)),
    linear-gradient(135deg, #d6d8bf, #c7d8b5, #d9c6a1);
}

.memory-card-2::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.2)),
    linear-gradient(135deg, #f0d3ad, #d8d8b9, #c7d7b9);
}

.memory-card-3::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.2)),
    linear-gradient(135deg, #f4d9d3, #dfe7cf, #d8c9a4);
}

.memory-card-4::before {
  background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(0,0,0,0.2)),
    linear-gradient(135deg, #dfe7cf, #d2bfd5, #e8cfb0);
}

.memory-label {
  position: relative;
  z-index: 1;
  margin-bottom: 12px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(27, 35, 22, 0.48);
  color: #f7f0ea;
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  max-width: calc(100% - 20px);
}

.memory-label.big {
  font-size: 0.52rem;
  line-height: 1.5;
  letter-spacing: 0.04em;
}

.signature-wrap {
  margin-top: 28px;
  opacity: 0;
  animation: textRise 1.2s ease forwards;
  animation-delay: 1.4s;
}

.signature-label {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--olive-700);
}

.signature-name {
  margin: 10px 0 0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1;
  color: var(--olive-900);
}

.sparkles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  opacity: 0.9;
}

.sparkles::before,
.sparkles::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.9) 0 2px, transparent 3px),
    radial-gradient(circle, rgba(213,180,106,0.7) 0 2px, transparent 3px),
    radial-gradient(circle, rgba(123,142,101,0.7) 0 2px, transparent 3px);
  background-size: 170px 150px;
  background-position: 0 0, 80px 65px, 140px 110px;
  animation: sparkleDrift 18s linear infinite;
}

.sparkles::after {
  transform: scale(1.18);
  animation-duration: 25s;
  opacity: 0.7;
}

.loading-overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(246, 242, 236, 0.9);
  z-index: 20;
  animation: fadeOut 1.7s ease forwards;
  animation-delay: 0.4s;
}

.loading-text {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 4vw, 4rem);
  letter-spacing: 0.06em;
  color: var(--olive-900);
  opacity: 0;
  animation: textReveal 1.2s ease forwards;
}

@keyframes cardIn {
  0% {
    opacity: 0;
    transform: translateY(28px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes floatGlow {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(18px, 18px) scale(1.1); }
}

@keyframes textRise {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes lineGrow {
  0% { transform: scaleX(0); opacity: 0; }
  100% { transform: scaleX(1); opacity: 1; }
}

@keyframes twinkle {
  0%, 100% { transform: scale(0.9) rotate(0deg); opacity: 0.4; }
  50% { transform: scale(1.1) rotate(8deg); opacity: 1; }
}

@keyframes photoFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1) rotate(10deg); }
  50% { transform: scale(1.08) rotate(14deg); }
}

@keyframes sparkleDrift {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(18px, 20px, 0); }
}

@keyframes fadeOut {
  0% { opacity: 1; visibility: visible; }
  80% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
}

@keyframes textReveal {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (max-width: 860px) {
  body {
    overflow-y: auto;
    padding: 30px 0;
  }

  .page-shell {
    min-height: auto;
  }

  .card-inner {
    grid-template-columns: 1fr;
  }

  .photo-panel {
    padding: 36px 28px 20px;
  }

  .photo-card {
    width: min(100%, 290px);
  }
}
