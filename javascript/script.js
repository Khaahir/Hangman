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
let gussedLetters = [];
let wrongGusses = [];
let attempts = 6;
let randomWord;

const display = document.querySelector(".display");
const countGuess = document.querySelector(".count-guess");
const btnAgain = document.querySelector(".again");

function reset() {
  gussedLetters = [];
  wrongGusses = [];
  attempts = 6;
}

function startGame() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord.split(""));

  let gussedword = Array(randomWord.length).fill("_");
  console.log(gussedword);
}

function displayWord() {}

document.addEventListener("keydown", (event) => {
  const letter = event.key.toLowerCase();
  display.value += gussedword;
  // console.log(letter);
});

function handleGuess() {}

function updateWrongGusses(letter) {}

function updateCorrectGusses() {}

function checkGameStatus() {}

function endGame() {}
