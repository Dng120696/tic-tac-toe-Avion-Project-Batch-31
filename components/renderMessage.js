import { message, game } from "../app.js";

export function renderMessage(playerSymbol, conditionsBoard) {
  message.innerHTML = "";
  const html =
    !conditionsBoard || game.isDone
      ? `The Game is Done. Restart the Game.`
      : `Players <span class = 'player__wins ${
          playerSymbol === "X" ? "X" : ""
        } ${playerSymbol === "O" ? "O" : ""}'>${playerSymbol}</span> Wins!`;
  message.insertAdjacentHTML("afterbegin", html);
}
