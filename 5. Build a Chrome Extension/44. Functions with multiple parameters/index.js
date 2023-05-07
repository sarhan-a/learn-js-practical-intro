const welcomeEl = document.getElementById("welcome-el")

// Rewrite the expression using template literals
function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

greetUser("Good Morning", "John", "😁")
