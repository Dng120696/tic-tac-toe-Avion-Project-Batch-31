import { choosingPlayer, frontPage } from "../app.js";

export function startGame() {
  choosingPlayer.classList.remove("hide__choosing");
  frontPage.classList.add("hide__choosing");
}
