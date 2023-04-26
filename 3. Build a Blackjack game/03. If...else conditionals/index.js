let firstCard = 4;
let secondCard = 7;
let sum = firstCard + secondCard;

if (sum < 21) {
  console.log("Do you want to draw another card? 😀");
} else if (sum === 21) {
  console.log("Amazing! You got BlackJack! 🤑");
} else {
  console.log("Busted! Sorry! 😥");
}
