const words = [
  "javascript",
  "python",
  "java",
  "react",
  "vue",
  "angular",
  "html",
  "mongodb",
];
let guessedLetters = [];
let wrongGuesses = [];
let attempts = 6;
let randomWord;

const display = document.querySelector(".display");
const countGuess = document.querySelector(".count-guess");
const btnAgain = document.querySelector(".again");
countGuess.textContent = attempts;
display.vlaue = guessedLetters;

function reset() {}

function startGame() {
  // Väljer ett slumpmässigt ord från listan
  randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord.split(""));

  // Fyller guessedLetters med understrykningar för att representera varje bokstav
  guessedLetters = Array(randomWord.length).fill("_");
  console.log(guessedLetters);

  displayWord();
}

function displayWord() {
  // Uppdaterar displayfältet med understrykningar med antal bokstäver i ett ord
  display.value = guessedLetters.join(" ");
}

// Event till en lyssnare för tangenttryckningar
document.addEventListener("keydown", (event) => {
  const letter = event.key.toLowerCase();

  // Här kan man kontrollera att inmatningen är en boksatv

  console.log(letter);
});

function handleGuess() {}

function updateWrongGusses(letter) {}

function updateCorrectGusses() {}

function checkGameStatus() {}

function endGame() {}

startGame();
