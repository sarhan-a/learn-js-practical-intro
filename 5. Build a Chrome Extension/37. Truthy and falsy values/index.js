const credits = 0

if (credits) {
  console.log("Let's Play")
} else {
  console.log("Sorry, no credits")
}

// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let currentViewers = null

currentViewers = ["john", "julia"]

currentViewers = null

if (currentViewers) {
  // notify all subscibers that the stream is popular
  console.log("Going viral now!")
}
