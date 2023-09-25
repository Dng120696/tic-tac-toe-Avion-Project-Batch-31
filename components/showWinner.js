import {
  winningMessage,
  overlay,
  buttonMove,
  boardOption,
  fireworksContainer,
} from "../app.js";

export function showWinner() {
  winningMessage.classList.add("show");
  fireworksContainer.classList.add("show");
  overlay.classList.remove("hidden");
  buttonMove.classList.remove("hidden");
  boardOption.classList.remove("hidden");
  setTimeout(() => {
    winningMessage.classList.remove("show");
    overlay.classList.add("hidden");
    fireworksContainer.classList.remove("show");
  }, 5000);
}
