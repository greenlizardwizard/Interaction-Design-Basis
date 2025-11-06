const button = document.getElementById("runaway-btn");
const surpriseText = document.getElementById("surprise-text");
const confettiContainer = document.getElementById("confetti-container");
const audio = document.getElementById("surprise-audio");

document.addEventListener("mousemove", (e) => {
  if (button.classList.contains("caught")) return;

  const rect = button.getBoundingClientRect();
  const btnX = rect.left + rect.width / 2;
  const btnY = rect.top + rect.height / 2;

  const distX = e.clientX - btnX;
  const distY = e.clientY - btnY;
  const distance = Math.sqrt(distX ** 2 + distY ** 2);

  const threshold = window.innerWidth * 0.1;

  if (distance < threshold) {
    const angle = Math.atan2(distY, distX);
    const moveX = -Math.cos(angle) * threshold;
    const moveY = -Math.sin(angle) * threshold;

    let newX = btnX + moveX;
    let newY = btnY + moveY;

    const btnWidth = rect.width;
    const btnHeight = rect.height;

    newX = Math.min(window.innerWidth - btnWidth / 2, Math.max(btnWidth / 2, newX));
    newY = Math.min(window.innerHeight - btnHeight / 2, Math.max(btnHeight / 2, newY));

    button.style.left = `${newX - btnWidth / 2}px`;
    button.style.top = `${newY - btnHeight / 2}px`;
  }
});

button.addEventListener("click", () => {
  button.classList.add("caught");
  surpriseText.style.display = "block";
  audio.play();
  startConfetti();
});

function startConfetti() {
  const confettiCount = 100; // mehr Teilchen für besseren Effekt
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffa500"];

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // zufällige Position, Farbe, Größe und Dauer
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.width = 5 + Math.random() * 10 + "px";
    confetti.style.height = confetti.offsetWidth + "px";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 6000);
  }
}

// Initiale Button-Position
button.style.left = `calc(50% - ${button.offsetWidth / 2}px)`;
button.style.top = `calc(50% - ${button.offsetHeight / 2}px)`;
