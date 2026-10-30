const nameText = document.getElementById("nameText");

const birthdayName = "[Name]";
nameText.textContent = birthdayName;

const sparkleCount = 22;
const sparklesContainer = document.querySelector(".sparkles");

for (let i = 0; i < sparkleCount; i += 1) {
  const sparkle = document.createElement("span");
  sparkle.className = "floating-sparkle";

  const size = 6 + Math.random() * 12;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = sparkle.style.width;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.opacity = (Math.random() * 0.6 + 0.4).toString();
  sparkle.style.animationDelay = `${Math.random() * 4}s`;
  sparkle.style.animationDuration = `${4 + Math.random() * 6}s`;
  sparkle.style.background = i % 2 === 0 ? "rgba(255,255,255,0.9)" : "rgba(212,177,90,0.8)";

  sparklesContainer.appendChild(sparkle);
}

const sparkleStyle = document.createElement("style");
sparkleStyle.textContent = `
  .floating-sparkle {
    position: absolute;
    border-radius: 999px;
    box-shadow: 0 0 14px rgba(255,255,255,0.9);
    animation: sparkleFloat ease-in-out infinite;
  }

  @keyframes sparkleFloat {
    0%, 100% {
      transform: translateY(0) scale(0.9);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-18px) scale(1.2);
      opacity: 1;
    }
  }
`;
document.head.appendChild(sparkleStyle);
