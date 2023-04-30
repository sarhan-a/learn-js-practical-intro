// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
let listing = {
  title: "Vlad Dracula's Holiday Castle",
  location: "Transilvania",
  rate: 250,
  isHumanFriendly: true,
  tags: ["daredevil", "thrillseeker", "dragon", "historic", "legendary"]
}

// Log out at least two of the keys using the dot notation
console.log(listing.title)
console.log(listing.location)
console.log(listing.rate)
console.log ("#" + listing.tags.join(' #'))
