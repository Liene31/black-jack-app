let cardsArr = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let messageEl = document.querySelector(".message-el");
messageEl.textContent = "Want to play a round?";
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else return randomNumber;
}

function startGame() {
  isAlive = true;
  hasBlackjack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cardsArr = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: `;
  for (let i = 0; i < cardsArr.length; i++) {
    cardsEl.textContent += `${cardsArr[i]} `;
  }

  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a New Card?";
  } else if (sum === 21) {
    messageEl.textContent = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    messageEl.textContent = "You're out of the game!";
    isAlive = false;
  }
}

function getNewCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cardsArr.push(card);
    renderGame();
  }
}

let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", startGame);

let newCardBtn = document.querySelector(".new-card-btn");
newCardBtn.addEventListener("click", getNewCard);
