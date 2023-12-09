let computerChoice, playerChoice, computerScore = 0, playerScore = 0;

game();

function game() {
    let winner = false;

    do {
        playRound(computerChoice, playerChoice);

        if (getWinner(playerChoice, computerChoice) == 1) {
            console.log("User won.");
            playerScore++;
        }
        else if (getWinner(playerChoice, computerChoice) == 2) {
            console.log("Computer won.");
            computerScore++;
        }
        else {
            console.log("Tie.");
        }

    } while (!winner);

    console.log (playerScore > computerScore ? "¡Player won!" : "¡Computer won!")
}

function playRound() {

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();

    return getWinner(playerChoice, computerChoice);
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

function getPlayerChoice() {

    let choice;
    let secondExecution = false;

    do {

        if (secondExecution) {
            console.log("Your input does not match any correct option. Try again.");
        }

        choice = prompt("Type 'scissors', 'rock' or 'paper' to make your play: ").toLowerCase();
        
        secondExecution = true;

    } while (choice != "rock" && choice != "paper" && choice != "scissors");

    return choice;
}

function getWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return;
    }

    else {

        switch (userChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    return 2;
                }
                else {
                    return 1;
                }
                break;

            case "paper":
                if (computerChoice === "scissors") {
                    return 2;
                }
                else {
                    return 1;
                }
                break;

            case "scissors":
                if (computerChoice === "paper") {
                    return 2;
                }
                else {
                    return 1;
                }
                break;
        }
    }
}