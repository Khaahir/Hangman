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
const usedLetters = document.querySelector('.used-letters')

function reset() {

}

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
  
  // Om bokstaven finns i ordet, uppdatera de rätta gissningarna
  if (randomWord.includes(letter)) {
    updateCorrectGuesses(letter);
  }

  console.log(letter);
});

function handleGuess() {}

function updateWrongGusses(letter) {}

function updateCorrectGuesses(letter) {
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      guessedLetters[i] = letter;
    }
  }
  // uppdaterar ord i displayen
  displayWord();
}

function checkGameStatus() {}

function endGame() {}


startGame();