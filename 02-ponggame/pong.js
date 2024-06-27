const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

function resetGame() {
    clearInterval (intervalID);
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;
    scoreL = 0
    scoreR = 0
    resetPaddles();
    resetBall();
    nextTick();
    updateScore()
}

function resetPaddles() {
    paddleL = new Paddle(0, 0, paddleLength, paddleWidth, "red");
    paddleR = new Paddle(boardWidth-paddleWidth, 0, paddleLength, paddleWidth, "seagreen");
}

if (scoreL < scoreR) {
    PaddleL = (0, 0, 130, paddleWidth, "red");
}

function resetBall() {
    ball = new Ball(boardWidth/2, boardHeight/2, -2, -2, ballRadius, "yellow");
    
}

function clearBoard() {
    // CODE
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    ball.draw(ctx);
    paddleL.draw(ctx);
    paddleR.draw(ctx);
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            paddleL.move();
            if (cpucheck.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }
            ball.bounceWall();
            if (ball.bouncePaddleR(paddleR)) score("left")
                if (ball.bouncePaddleL(paddleL)) score("right")
                    ball.move();
                if (scoreL>8 || scoreR>8) return
            draw();
            nextTick();
            
            
        }, 7
    );
}

function score(player) {
    if (player == "left") scoreL++;
    if (player == "right") scoreR ++;
    updateScore()
    resetBall()
    if (scoreL > 8 || scoreR > 8) {
        clearInterval (intervalID);
        clearBoard()
        scoreboard.innerHTML = "GAME OVER!"  
    }
    else {
        updateScore()
        resetBall()
    }
}


function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}` ;
}
