let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
cardsEl = document.getElementById("cards-el");

function startGame() {
  // 3. Render the cars on the page using this format -> "Cards: 10 4"
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
