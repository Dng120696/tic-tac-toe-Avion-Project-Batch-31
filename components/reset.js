import {
  winningMessage,
  overlay,
  buttonMove,
  game,
  boardOption,
} from "../app.js";

export function playAgain() {
  winningMessage.classList.remove("show");
  overlay.classList.add("hidden");
  buttonMove.classList.add("hidden");
  boardOption.classList.add("hidden");
  game.gameOver = false;
  game.isDone = false;
  game.currentPlayer = game.activePlayer === 0 ? "X" : "O";

  game.currentMoveIndex = 0;
  game.movesHistory = [];
  game.boardArr = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => null)
  );
  game.movesHistory.push(game.boardArr.map((board) => [...board]));
  document
    .querySelector(`.player__${game.activePlayer}`)
    .classList.add("active__player");
  document.querySelectorAll(".board").forEach((board) => {
    (board.textContent = ""), (board.style.backgroundColor = "#fff");
  });
}
