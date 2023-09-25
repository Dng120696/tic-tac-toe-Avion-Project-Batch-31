import { fireworksContainer } from "../app.js";

function getRandomColor() {
  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createFirework(x, y) {
  const firework = document.createElement("div");
  firework.className = "fireworks";
  firework.style.left = x + "px";
  firework.style.top = y + "px";
  firework.style.backgroundColor = getRandomColor();
  fireworksContainer.appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 1000);
}

export function celebrateWinner() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * 300;
    setTimeout(() => {
      createFirework(x, y);
    }, i * 30); // Spread out the creation of fireworks
  }
}
