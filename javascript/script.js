let theWord;



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

theWord = words[Math.floor(Math.random() * words.length)]
console.log(theWord)

// funtionen som lägger in bokstvöer i form rutan

let display = document.querySelector(".display");

