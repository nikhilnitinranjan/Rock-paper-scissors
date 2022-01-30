const rpsArray = [0, 1, 2];
let CPUChoice = rpsArray[~~(Math.random() * rpsArray.length)];
let playerChoice;
let results = document.querySelector(".results");
let score = document.querySelector(".score");

let computerScore = 0;
let playerScore = 0;
let gameOver = false;

results.textContent = `Who will win?`;

score.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;



function playRound() {
    if (playerChoice == CPUChoice) {
        results.textContent = `Computer chose ${CPUChoice}! You tied!`;

    } else {
        switch(playerChoice) {
            case "0":
                if (CPUChoice == 1) {
                    results.textContent = `Computer chose PAPER! You lost!`;
                    computerScore++;
                }
                if (CPUChoice == 2) {
                    results.textContent = `Computer chose SCISSORS! You won!`;
                    playerScore++;
                }
                break;
            case "1":
                if (CPUChoice == 2) {
                    results.textContent = `Computer chose SCISSORS! You lost!`;
                    computerScore++;
                }
                if (CPUChoice == 0) {
                    results.textContent = `Computer chose ROCK! You won!`;
                    playerScore++;
                }
                break;
            case "2":
                if (CPUChoice == 0) {
                    results.textContent = `Computer chose ROCK! You lost!`;
                    computerScore++;
                }
                if (CPUChoice == 1) {
                    results.textContent = `Computer chose PAPER! You won!`;
                    playerScore++;
                }
                break;
        }
    }

    score.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;
    if (playerScore >= 5) {
        gameOver = true;
        score.textContent = "YOU WIN! Refresh to play again!"
    } else if (computerScore >= 5){
        gameOver = true;
        score.textContent = "COMPUTER WINS! YOU LOSE! Refresh to play again!"
    }
    CPUChoice = rpsArray[~~(Math.random() * rpsArray.length)];
    console.log(CPUChoice);
}

const weapons = document.querySelectorAll(".rps-icon");



weapons.forEach(rpsicon => {
    rpsicon.addEventListener('click', () => {
        playerChoice = rpsicon.getAttribute('data-weapon');

        if (!gameOver) playRound();
    });
});

//const choice = prompt("Rock, Paper, or Scissors?").toUpperCase();
