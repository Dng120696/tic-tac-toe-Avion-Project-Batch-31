import { game, player0El, player1El } from "../app.js";

export function checkActivePlayer() {
  if (player0El.classList.contains("active__player")) {
    player0El.classList.remove("active__player");
    player1El.classList.add("active__player");
    game.activePlayer = 1;
  } else {
    player1El.classList.remove("active__player");
    player0El.classList.add("active__player");
    game.activePlayer = 0;
  }
}
