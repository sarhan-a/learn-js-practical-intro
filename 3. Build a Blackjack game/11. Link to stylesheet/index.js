let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";


if (sum <= 20){
  message = "Do you want to draw another card? 😁";
} else if (sum === 21) {
  message = "Amazing! You got BlackJack! 🤑";
  hasBlackJack = true;
} else {
  message = "Busted! Sorry, you're out 😥";
  isAlive = false;
}

console.log(message);
