let firstCard = 12;
let secondCard = 10;
let sum = 0;
let messageEl = document.querySelector(".message-el");
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");

function renderGame() {
  sum = firstCard + secondCard;
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
}

let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", renderGame);
