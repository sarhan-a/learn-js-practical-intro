let firstCard = 7;
let secondCard = 10;
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

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
  console.log("Drawing a new card from the deck");
}
