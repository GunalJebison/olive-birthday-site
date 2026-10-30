:root {
  --olive-900: #1d2d1e;
  --olive-800: #2f4731;
  --olive-700: #4d6344;
  --olive-600: #6f8560;
  --olive-500: #98ab7d;
  --olive-300: #dfead0;
  --cream: #f7f2e9;
  --sand: #efe3d2;
  --gold: #d7b56a;
  --shadow: rgba(22, 34, 19, 0.18);
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(198, 214, 168, 0.9), transparent 26%),
    linear-gradient(135deg, #f4efe8 0%, #ecf0e6 42%, #e5ead5 100%);
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
  width: min(1180px, 92vw);
  min-height: 760px;
  display: grid;
  place-items: center;
  isolation: isolate;
}

.sparkle-layer {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle, rgba(103, 129, 87, 0.4) 0 1.5px, transparent 2px),
    radial-gradient(circle, rgba(215, 181, 106, 0.5) 0 1.7px, transparent 2.4px),
    radial-gradient(circle, rgba(255,255,255,0.7) 0 1.5px, transparent 2px);
  background-size: 180px 180px;
  background-position: 0 0, 80px 70px, 140px 120px;
  animation: sparkleDrift 30s linear infinite;
  opacity: 0.75;
}

.birthday-card {
  position: relative;
  width: min(1040px, 89vw);
  min-height: 650px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(95, 111, 75, 0.12);
  box-shadow: 0 30px 80px rgba(34, 48, 27, 0.12);
  backdrop-filter: blur(10px);
  overflow: hidden;
  z-index: 2;
  animation: cardIn 1.2s cubic-bezier(.2, .8, .2, 1) both;
}

.card-header {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 18px 0 0 30px;
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(50, 62, 40, 0.72);
  color: #f8f5f0;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  font-weight: 700;
  box-shadow: 0 12px 24px rgba(25, 37, 22, 0.18);
}

.card-body {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
  padding: 24px 36px 40px;
  min-height: 560px;
}

.text-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 8px 8px 14px;
  animation: fadeUp 1.1s ease both;
  animation-delay: 0.2s;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--olive-700);
  font-weight: 700;
}

h1 {
  margin: 18px 0 0;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(4.0rem, 5.5vw, 7rem);
  line-height: 0.86;
  letter-spacing: -0.06em;
  font-weight: 600;
  color: var(--olive-900);
}

h1 span {
  display: inline-block;
  color: var(--olive-800);
}

.divider {
  width: 112px;
  height: 4px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(114, 138, 90, 0.9), rgba(215, 181, 106, 0.9));
  margin: 20px 0 26px;
  transform-origin: left center;
  animation: lineGrow 1s ease both;
  animation-delay: 0.5s;
}

.message {
  margin: 0;
  max-width: 680px;
  color: rgba(28, 40, 24, 0.83);
  font-size: clamp(1.02rem, 1.3vw, 1.18rem);
  line-height: 1.9;
}

.message.secondary {
  margin-top: 18px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 22px 0 8px;
}

.tags span {
  padding: 9px 14px;
  border-radius: 999px;
  background: rgba(168, 186, 140, 0.2);
  border: 1px solid rgba(92, 117, 70, 0.12);
  color: var(--olive-800);
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 700;
}

.signature-wrap {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.signature-wrap span {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--olive-700);
}

.signature-wrap strong {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 2.8vw, 3rem);
  font-weight: 600;
  color: var(--olive-900);
}

.portrait-panel {
  display: grid;
  place-items: center;
  padding: 8px 12px 8px 4px;
}

.portrait-frame {
  position: relative;
  width: min(100%, 360px);
  aspect-ratio: 4 / 5;
  border-radius: 26px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(193, 211, 169, 0.72));
  box-shadow: 0 18px 36px rgba(22, 30, 18, 0.1);
  border: 1px solid rgba(95, 108, 76, 0.12);
  overflow: hidden;
  animation: floatFrame 5s ease-in-out infinite;
}

.portrait-ring {
  position: absolute;
  inset: 12% 18% 12% 18%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.88), rgba(184, 206, 150, 0.72) 34%, rgba(120, 141, 92, 0.12));
  filter: blur(18px);
}

.portrait-inner {
  position: relative;
  z-index: 1;
  width: 72%;
  height: 72%;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(184, 205, 164, 0.8));
  border: 1px solid rgba(63, 84, 46, 0.12);
  box-shadow: inset 0 0 28px rgba(255,255,255,0.14);
}

.portrait-inner span {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(5rem, 7vw, 8rem);
  font-weight: 700;
  color: rgba(40, 60, 38, 0.7);
  animation: pulseLetter 2.7s ease-in-out infinite;
}

@keyframes cardIn {
  0% {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes lineGrow {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes floatFrame {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulseLetter {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.08); opacity: 1; }
}

@keyframes sparkleDrift {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(18px, 25px, 0); }
}

@media (max-width: 860px) {
  body {
    overflow-y: auto;
    padding: 26px 0;
  }

  .page-shell {
    min-height: auto;
  }

  .card-header {
    margin-left: 18px;
  }

  .card-body {
    grid-template-columns: 1fr;
    padding: 18px 18px 28px;
  }

  .text-panel {
    padding: 8px 4px 0;
  }

  .portrait-panel {
    padding-top: 0;
  }

  .portrait-frame {
    width: min(100%, 300px);
  }
}
