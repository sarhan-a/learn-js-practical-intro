let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  console.log(countStr);
  // Google: innerText alternative mdn to add the space without css
  saveEl.textContent += countStr;
  console.log(count);
}
