const containerEl = document.getElementById("container");

containerEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
function buy() {
  containerEl.innerHTML += "<p>Thanks for buying!</p>";
}
