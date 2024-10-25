alphbet();

// Generera alfabet som kanappar
function alphbet() {
  const alphabetDiv = document.querySelector("#alphabetDiv");
  const letters = "abcdefghijklmnopqrstuvwxyz";

  console.log(letters.split(""));

  letters.split("").forEach((letter) => {
    const button = document.createElement("button");
    button.textContent = letter;
    button.classList.add("letter-button");

    button.addEventListener("click", () => {
      console.log(`Klickade på: ${letter}`);
      //   en funktion som hämtar upp värdetoch läggs till sin egen funktion för jämförelse
    });

    alphabetDiv.appendChild(button);
  });
}
