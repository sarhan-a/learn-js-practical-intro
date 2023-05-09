// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
  "/Media/images/hip1.jpg",
  "/Media/images/hip2.jpg",
  "/Media/images/hip3.jpg"
]

const containerEl = document.getElementById("container");

function render(images) {
  let imgsDOM = ""
  for (let i = 0; i < images.length; i++) {
    imgsDOM += `<img alt="team member" class="team-img" src=${imgs[i]}>`
  }
  containerEl.innerHTML = imgsDOM;
}

render(imgs);
