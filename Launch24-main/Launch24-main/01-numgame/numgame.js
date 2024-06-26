const guess = document.getElementById("guess");
const report = document.getElementById("report");
const button = document.getElementById("button");
const HINTS = document.getElementById("HINTS");

let Guesscount = 0
let MAXNUM = 1000000
let MINNUM = 0

let secret;

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    guess.max = MAXNUM;
    guess.min = MINNUM;

   secret=Math.random()
   let range = MAXNUM - MINNUM + 1;
   secret = secret * range;
   secret = secret + MINNUM;
   secret = Math.floor(secret);
}

function makeGuess() {
    let myGuess = parseInt(guess.value);
    Guesscount = Guesscount+1
    
 if (Math.abs(myGuess-secret)<=100000) {
    HINTS.innerHTML = `<br>${myGuess} is within 100k numbers of the secret!`;
}
else
HINTS.innerHTML = `<br>${myGuess} is not even within 100k numbers of the secret!`;


if (Guesscount == 10) {
    report.innerHTML = `<br>${myGuess} is wrong, you have failed the challenge. Refresh the page and try again!`;
    button.style.visibility = "hidden"
}
}