let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");

function startGame() {

  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "Busted! Sorry, you're out";
    isAlive = false;
  }

  // 2. Display the message in the messageEl using messageEl.textContent

  messageEl.textContent = message;
}
