let firstCard = 11;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame() {

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
}
