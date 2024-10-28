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
let wrongGuesses = []; // Lista för felaktiga gissningar
let attempts = 6; // antaö max gissningar
let randomWord;
let attemptsLeft;

const display = document.querySelector(".display");
const countGuess = document.querySelector(".count-guess");
const btnAgain = document.querySelector(".again");
const bodycolor = document.querySelector("body");

countGuess.textContent = attempts;
display.value = guessedLetters;
const usedLetters = document.querySelector(".used-letters"); // visa använda bokstäver


// Återställer spelet
function reset() {
  guessedLetters = [];
  wrongGuesses = [];
  attempts = 6;
  countGuess.textContent = attempts;
  // randomWord = null;
}



// Initerar spelet
function startGame() {
  // Väljer ett slumpmässigt ord från listan
  randomWord = words[Math.floor(Math.random() * words.length)];
  console.log(randomWord.split(""));

  // Fyller guessedLetters med understrykningar för att representera varje bokstav
  guessedLetters = Array(randomWord.length).fill("_");
  console.log(guessedLetters);

  displayWord();
  checkGameStatus();
}



// Uppdaterar displayfältet med nytt ord
function displayWord() {
  display.value = guessedLetters.join(" ");
  usedLetters.textContent = `Felaktiga gissningar: ${wrongGuesses.join(", ")}`; // visa använda bokstäver
}



// Event till en lyssnare för tangenttryckningar
document.addEventListener("keydown", (event) => {
  const letter = event.key.toLowerCase();

  // Om bokstaven finns i ordet, uppdatera de rätta gissningarna
  if (randomWord.includes(letter)) {
    updateCorrectGuesses(letter);
  } else {
    updateWrongGuesses(letter); // annars hanterar felaktig gissningar
  }

  console.log(letter);
});



function handleGuess() {}



// Kontrollerar  Uppdaterar poängen vid felgissning
function updateWrongGuesses(letter) {
  if (!wrongGuesses.includes(letter) && attempts > 0) {
    wrongGuesses.push(letter);
    attempts--;
    countGuess.textContent = attempts;
    displayWord();
  }
}



// Kontrollerar ordet mot rätt inmatat boksatv
function updateCorrectGuesses(letter) {
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      guessedLetters[i] = letter;
    }
  }
  // uppdaterar ord i displayen
  displayWord();
}



function checkGameStatus() {
  // Om det inte finns några streck kvar betyder det att spelaren har vunnit
  if (!guessedLetters.includes("_")) {
    display.value.textContent = "Grattis du vann🎉";
    bodycolor.style.backgroundColor = "green";
  } else if (attemptsLeft === 0) {
    // Om försöken är slut har spelaren förlorat
    display.value.textContent = `💀Du förlorade ordet var:${randomWord}`;
    bodycolor.style.backgroundColor = "red";
  }
}



function endGame() {} 



// Återställknappen
btnAgain.addEventListener("click", ()=> {
  reset();
  startGame();
});



startGame();
