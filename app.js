import { pickChoose } from "./components/pickChoose.js";
import { renderBoard } from "./components/renderBoard.js";
import { exitGame } from "./components/exitGame.js";
import { makeMove } from "./components/makeMove.js";
import {
  nextMove,
  previousMove,
  updateButtons,
} from "./components/buttonMoves.js";
import { playAgain } from "./components/reset.js";
import { startGame } from "./components/startGame.js";

export const boardContainer = document.querySelector(".board__container");
export const mainBoard = document.querySelector(".main__board");
export const winningMessage = document.querySelector(".winning__message");

export const message = document.querySelector(".message");
export const overlay = document.querySelector(".overlay");
export const btnExit = document.querySelector(".btn__exit");
export const btnReset = document.querySelector(".btn__reset");
export const boardOption = document.querySelector(".board__option");
export const choosingPlayer = document.querySelector(".choosing__player");
export const buttonMove = document.querySelector(".button__move");
export const btnPrevious = document.querySelector(".btn__previous");
export const btnNext = document.querySelector(".btn__next");
export const player0El = document.querySelector(".player__0");
export const player1El = document.querySelector(".player__1");
export const btnStartGame = document.querySelector(".btn__start-game");
export const frontPage = document.querySelector(".front__page");
export const fireworksContainer = document.querySelector(
  ".fireworks__container"
);
export const game = {
  currentPlayer: null,
  gameOver: false,
  activePlayer: 0,
  scoreBoard: [0, 0],
  scoreDraw: 0,
  currentMoveIndex: 0,
  isDone: false,
  movesHistory: [],
  boardArr: Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => null)
  ),
};

game.movesHistory.push(game.boardArr.map((board) => [...board]));
updateButtons();
renderBoard(game.boardArr);
btnNext.addEventListener("click", nextMove);
btnPrevious.addEventListener("click", previousMove);
choosingPlayer.addEventListener("click", pickChoose);
btnExit.addEventListener("click", exitGame);
boardContainer.addEventListener("click", makeMove);
btnReset.addEventListener("click", playAgain);
btnStartGame.addEventListener("click", startGame);
