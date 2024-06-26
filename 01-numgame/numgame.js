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
    

if (myGuess == secret) {
    report.innerHTML = `<br>${myGuess} is correct!`;
    HINTS.innerHTML = `<br>${myGuess} is correct!`;
} else if (myGuess < secret) {
report.innerHTML = `<br>${myGuess} is too small`;
} else {
    report.innerHTML = `<br>${myGuess} us too big`;
}

if (myGuess == secret) {
    HINTS.innerHTML = `<br>${myGuess} is correct!`;
} else if ((secret-myGuess)<0)
    HINTS.innerHTML = `<br>${myGuess} is incorrect! try again!`;
else if (Math.abs(secret-myGuess<=1000)) {
    HINTS.innerHTML = `<br>${myGuess} within 1k numbers of the secret!`;
} else if (Math.abs(secret-myGuess<=10000)) {
    HINTS.innerHTML = `<br>${myGuess} within 10k numbers of the secret!`;
} else if (Math.abs(secret-myGuess<=100000)) {
    HINTS.innerHTML = `<br>${myGuess} within 100k numbers of the secret!`;
}

if (Guesscount == 10) {
    report.innerHTML = `<br>${myGuess} is wrong, you have failed the challenge. Refresh the page and try again!`;
    button.style.visibility = "hidden"
}
}