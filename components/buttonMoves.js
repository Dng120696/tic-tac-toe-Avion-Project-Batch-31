import { game, btnPrevious, btnNext } from "../app.js";
import { checkActivePlayer } from "./checkActivePlayer.js";
import { checkWinner } from "./checkWinner.js";
import { renderBoard } from "./renderBoard.js";
import { showWinner } from "./showWinner.js";

export function previousMove() {
  if (game.currentMoveIndex > 0) {
    game.currentMoveIndex--;
  }
  showCurrentMove();
}
export function nextMove() {
  if (game.currentMoveIndex < game.movesHistory.length - 1) {
    game.currentMoveIndex++;
  }
  showCurrentMove();
  if (game.currentMoveIndex === game.movesHistory.length - 1) {
    if (game.gameOver) {
      checkWinner();
    }
    if (!game.gameOver) {
      showWinner();
    }
  }
}

function showCurrentMove() {
  const newBoardArr = game.movesHistory[game.currentMoveIndex].slice();
  checkActivePlayer();
  renderBoard(newBoardArr);
  updateButtons();
}

export function updateButtons() {
  btnPrevious.disabled = game.currentMoveIndex === 0;
  btnNext.disabled = game.currentMoveIndex === game.movesHistory.length - 1;
}
