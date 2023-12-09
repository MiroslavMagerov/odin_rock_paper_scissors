const playableButtons = document.querySelectorAll('.playable_button');
const playerScoreElement = document.querySelector('#user_score');
const computerScoreElement = document.querySelector('#computer_score');
const playerPlayedOptionArticle = document.querySelector('#player_played_option');
const computerPlayedOptionArticle = document.querySelector('#computer_played_option');

let computerChoice, playerChoice, playerWonRound, computerScore = 0, playerScore = 0;

playableButtons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button);
    })
});

function playRound(button) {
    playerChoice = getPlayerChoice(button);
    computerChoice = getComputerChoice();

    if (playerChoice != computerChoice) {
        playerWonRound = getWinner(playerChoice, computerChoice);
        updateWinner(playerWonRound);
    }

    updatePlayedImages(playerChoice, computerChoice);
}

function getPlayerChoice(button) {
    switch (button.value) {
        case "rock":
            return "rock";
            break;

        case "paper":
            return "paper";
            break;

        case "scissor":
            return "scissors";
            break;
    }
}

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

    return choice;
}

function getWinner(userChoice, computerChoice) {
    switch (userChoice) {
        case "rock":
            if (computerChoice === "paper") {
                return false;
            }
            else {
                return true;
            }

        case "paper":
            if (computerChoice === "scissors") {
                return false;
            }
            else {
                return true;
            }

        case "scissors":
            if (computerChoice === "paper") {
                return false;
            }
            else {
                return true;
            }
    }
}

function updateWinner(playerWon) {
    if (playerWon) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    }
    else {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function updatePlayedImages(playerChoice, computerChoice) {   
    let playerImage = document.createElement("img");
    playerImage.setAttribute("src", "images/" + playerChoice + ".png");
    playerImage.style.width = "75px";
    playerImage.style.border = "1px solid black";
    playerImage.style.borderRadius = "12px";
    playerPlayedOptionArticle.appendChild(playerImage);

    let computerImage = document.createElement("img");
    computerImage.setAttribute("src", "images/" + computerChoice + ".png");
    computerImage.style.width = "75px";
    computerImage.style.border = "1px solid black";
    computerImage.style.borderRadius = "12px";
    playerPlayedOptionArticle.appendChild(computerImage);
}