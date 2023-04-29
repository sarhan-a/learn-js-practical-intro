let firstCard = 9;
let secondCard = 6;
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  // we have render out firstCard and secondCard
  // but we need render out ALL the cards we have
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "Busted! Sorry, you're out";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  let card = 6;
  sum += card;
  renderGame();
}
