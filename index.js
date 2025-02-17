let firstCard = getRandomCard();
let secondCard = getRandomCard();
let newCard = 0;
let cardsArr = [firstCard, secondCard];
console.log(cardsArr);
let sum = 0;
let messageEl = document.querySelector(".message-el");
messageEl.textContent = "Want to play a round?";
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");
let isAlive = true;
let hasBlackjack = false;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

function renderGame() {
  sum = firstCard + secondCard + newCard;

  cardsEl.textContent += ` ${cardsArr}`;

  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a New Card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
  } else {
    messageEl.textContent = "You're out of the game!";
  }
}

function getNewCard() {
  if (isAlive && hasBlackjack === false) {
    newCard = getRandomCard();
    cardsArr.push(newCard);
    renderGame();
  }
}

let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", renderGame);

let newCardBtn = document.querySelector(".new-card-btn");
newCardBtn.addEventListener("click", getNewCard);
