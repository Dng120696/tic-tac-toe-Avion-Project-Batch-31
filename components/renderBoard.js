import { mainBoard } from "../app.js";

export function renderBoard(board) {
  mainBoard.innerHTML = "";
  const html = board
    .map((row, rowIndex) => {
      return row
        .map((cell, colIndex) => {
          return `<button class="board ${cell === "X" ? "X" : ""}${
            cell === "O" ? "O" : ""
          }" data-row="${rowIndex}" data-col="${colIndex}">${
            cell || ""
          }</button>`;
        })
        .join("");
    })
    .join("");

  mainBoard.insertAdjacentHTML("beforeend", html);
}
