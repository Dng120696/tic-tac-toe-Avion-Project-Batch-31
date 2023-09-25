import { message, game } from "../app.js";
import { updateButtons } from "./buttonMoves.js";
import { renderMessage } from "./renderMessage.js";
import { showWinner } from "./showWinner.js";
import { celebrateWinner } from "./fireWorks.js";

export function checkWinner() {
  const winnerConditions = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ], // Top row
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ], // Middle row
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ], // Bottom row
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ], // Left column
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ], // Middle column
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ], // Right column
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ], // Diagonal from top-left to bottom-right
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ], // Diagonal from top-right to bottom-left
  ];

  for (const condition of winnerConditions) {
    const [a, b, c] = condition;
    const [rowA, colA] = a;
    const [rowB, colB] = b;
    const [rowC, colC] = c;
    const playerSymbol = game.boardArr[rowA][colA];
    const conditionsBoard =
      playerSymbol &&
      playerSymbol === game.boardArr[rowB][colB] &&
      playerSymbol === game.boardArr[rowC][colC];

    if (conditionsBoard) {
      const cellsToMark = [
        [rowA, colA],
        [rowB, colB],
        [rowC, colC],
      ];
      markWinningCells(cellsToMark);
      renderMessage(playerSymbol, conditionsBoard);
      updateScore(playerSymbol);
      showWinner();
      updateButtons();
      if (!game.gameOver) celebrateWinner();
      gameStatus();
    }
  }

  const isDraw = !game.boardArr.flat().includes(null) && !game.isDone;
  if (isDraw) {
    handleDraw();
  }
}

function updateScore(playerSymbol) {
  if (!game.isDone) {
    const activeScoredPlayer = playerSymbol === "X" ? 0 : 1;
    game.scoreBoard[activeScoredPlayer]++;
    document.querySelector(`.score__player-${activeScoredPlayer}`).textContent =
      game.scoreBoard[activeScoredPlayer];
  }
}

function gameStatus() {
  game.gameOver = true;
  game.isDone = true;
}

function markWinningCells(cellsToMark) {
  cellsToMark.forEach(
    ([row, col]) =>
      (document.querySelector(
        `.board[data-row='${row}'][data-col='${col}']`
      ).style.backgroundColor = "lightgray")
  );
}

export function handleDraw() {
  showWinner();
  updateButtons();
  message.innerHTML = "It's a Draw!";
  gameStatus();
  if (game.gameOver) {
    game.scoreDraw++;
  }
  document.querySelector(".score__draw").textContent = game.scoreDraw;
  game.gameOver = false;
}
