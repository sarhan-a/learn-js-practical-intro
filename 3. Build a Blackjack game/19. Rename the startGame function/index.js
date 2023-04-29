let firstCard = 9;
let secondCard = 6;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");

// create a new function called startGame() that calls renderGame()
function startGame() {
  renderGame();
}

function renderGame() {

  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

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
