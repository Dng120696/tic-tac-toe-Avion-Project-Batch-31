import { game } from "../app.js";
import { checkActivePlayer } from "./checkActivePlayer.js";
import { checkWinner } from "./checkWinner.js";
import { renderBoard } from "./renderBoard.js";

export function makeMove(e) {
  const el = e.target;
  if (el.classList.contains("board")) {
    const { row } = el.dataset;
    const { col } = el.dataset;

    if (game.boardArr[row][col]) return;
    if (game.boardArr[row][col] === null && !game.gameOver) {
      game.boardArr[row][col] = game.currentPlayer;

      game.movesHistory.push(game.boardArr.map((board) => [...board])); // Deep copy of board
      console.log(game.movesHistory);

      game.currentMoveIndex++;
    }

    const targetBoard = document.querySelector(
      `.board[data-row='${row}'][data-col='${col}']`
    );
    targetBoard.textContent = game.currentPlayer;

    if (!game.isDone) checkActivePlayer();

    // Add class based on current player
    targetBoard.classList.add(game.currentPlayer);

    game.currentPlayer = game.currentPlayer === "X" ? "O" : "X";
    renderBoard(game.boardArr);
    checkWinner();
  }
}
