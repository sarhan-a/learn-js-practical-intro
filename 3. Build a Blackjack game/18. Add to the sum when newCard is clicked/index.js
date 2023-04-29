let firstCard = 9;
let secondCard = 6;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
cardsEl = document.getElementById("cards-el");

function startGame() {

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
  console.log("Drawing a new card from the deck");

  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = 6;
  // 2. Add the new card to the sum variable
  sum += card;
  // 3. Call startGame()
  startGame();
}
