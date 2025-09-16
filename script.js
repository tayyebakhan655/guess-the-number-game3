let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  attempts++;
  let message = "";

  if (guess === secretNumber) {
    message = `🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} tries.`;
  } else if (guess < secretNumber) {
    message = "📉 Too low! Try again.";
  } else if (guess > secretNumber) {
    message = "📈 Too high! Try again.";
  } else {
    message = "⚠️ Please enter a valid number.";
  }

  document.getElementById("message").innerText = message;
}