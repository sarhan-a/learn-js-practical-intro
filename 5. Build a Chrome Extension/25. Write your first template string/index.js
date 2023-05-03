// template strings/literals

const recipient = "James"

// Refactor the email string to use template string
//const email = "Hey " + recipient + "! How is it going? See ya later"

const email = `Hey ${recipient}! How is it going? See ya later`

console.log(email)
