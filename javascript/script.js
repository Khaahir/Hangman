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

let letterbuttons = document.querySelectorAll(button);

letterbuttons.addEventListener("click", () => {
  console.log(letterbuttons);
});

// alphbet();

// // Generera alfabet som kanappar
// function alphbet() {
//   const alphabetDiv = document.querySelector("#alphabetDiv");
//   const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase(); //ändrade så det blec stora bokstäver

//   console.log(letters.split(""));

//   letters.split("").forEach((letter) => {
//     const button = document.createElement("button");
//     button.textContent = letter;
//     button.classList.add("letter-button");

//     button.addEventListener("click", () => {
//       console.log(`Klickade på: ${letter}`);
//       //   en funktion som hämtar upp värdetoch läggs till sin egen funktion för jämförelse
//       handleGuess(letter, button);
//     });

//     alphabetDiv.appendChild(button);
//   });
// }

// // Hantera en gissning - Funktion som jämför gissade bokstäver mot ordet
// function handleGuess(letter, button) {
//   console.log("handleguess funktionen syns");
// }
