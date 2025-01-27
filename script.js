const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const celebration = document.getElementById("celebration");

let randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

function generateCelebration() {
  celebration.innerHTML = "";
  for (let i = 0; i < 50; i++) {
    const element = document.createElement("div");
    element.className = Math.random() > 0.5 ? "balloon" : "confetti";
    element.style.left = Math.random() * 100 + "vw";
    element.style.animationDelay = Math.random() * 2 + "s";
    celebration.appendChild(element);
  }
  celebration.style.display = "block";
}

guessButton.addEventListener("click", () => {
  const playerGuess = parseInt(guessInput.value);

  if (isNaN(playerGuess) || playerGuess < 0 || playerGuess > 100) {
    message.textContent = "Please enter a valid number between 0 and 100.";
    return;
  }

  if (playerGuess === randomNumber) {
    message.textContent = "Congratulations! You guessed the correct number!";
    generateCelebration();
  } else if (playerGuess < randomNumber) {
    message.textContent = "Your guess is too low!";
  } else {
    message.textContent = "Your guess is too high!";
  }
});
