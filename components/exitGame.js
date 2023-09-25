import {
  winningMessage,
  overlay,
  game,
  boardContainer,
  boardOption,
  buttonMove,
  player0El,
  player1El,
  frontPage,
} from "../app.js";

export function exitGame() {
  winningMessage.classList.remove("show");
  overlay.classList.add("hidden");
  boardContainer.classList.remove("show__board");
  frontPage.classList.remove("hide__choosing");
  boardOption.classList.add("hidden");
  buttonMove.classList.add("hidden");
  player0El.classList.remove("active__player");
  player1El.classList.remove("active__player");
  game.currentPlayer = null;
  game.gameOver = false;
  game.isDone = false;
  game.scoreDraw = 0;
  game.currentMoveIndex = 0;
  game.activePlayer = 0;
  game.scoreBoard = [0, 0];
  game.movesHistory = [];
  game.boardArr = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => null)
  );
  game.movesHistory.push(game.boardArr.map((board) => [...board]));
  document.querySelector(".score__draw").textContent = game.scoreDraw;
  document
    .querySelectorAll(`.score`)
    .forEach((score) => (score.textContent = 0));
  document.querySelectorAll(".board").forEach((board) => {
    (board.textContent = ""), (board.style.backgroundColor = "#fff");
  });
}
