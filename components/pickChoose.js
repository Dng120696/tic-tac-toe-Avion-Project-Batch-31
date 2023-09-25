import { game, choosingPlayer, boardContainer } from "../app.js";

export function pickChoose(e) {
  const { player } = e.target.dataset;
  if (player !== "X" && player !== "O") return;
  game.currentPlayer = player;

  choosingPlayer.classList.add("hide__choosing");
  game.activePlayer = game.currentPlayer === "X" ? 0 : 1;

  document
    .querySelector(`.player__${game.activePlayer}`)
    .classList.add("active__player");

  setTimeout(() => {
    boardContainer.classList.add("show__board");
  }, 500);
}
