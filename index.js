let firstCard = 11;
let secondCard = 25;
let sum = 0;
let messageEl = document.querySelector(".message-el");
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  console.log(randomNumber);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

console.log(getRandomCard());

function renderGame() {
  sum = firstCard + secondCard;
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a New Card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
  } else {
    messageEl.textContent = "You're out of the game!";
  }
}

let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", renderGame);
