document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
});

let userScore = 0;
let compScore = 0;
let movesLeft = 10;

function play(userChoice) {
    if (movesLeft > 0) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';

        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win!';
            userScore++;
        } else {
            result = 'You lose!';
            compScore++;
        }

        movesLeft--;
        updateGameDisplay(userChoice, computerChoice, result);

        if (movesLeft === 0) {
            // Display final winner directly
            displayFinalWinner();
        }

    }
}

function updateGameDisplay(userChoice, computerChoice, result) {
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `<strong style="font-size: 2rem; color: black;">You chose ${userChoice}, computer chose ${computerChoice}. ${result}</strong>`;

    document.getElementById('user-score').textContent = userScore;
    document.getElementById('ai-score').textContent = compScore;
    document.getElementById('moves-left').textContent = movesLeft;
}

function displayFinalWinner() {
    let finalResult = '';
    if (userScore > compScore) {
        finalResult = 'Congratulations! You win the game!';
    } else if (compScore > userScore) {
        finalResult = 'Sorry, you lose the game.';
    } else {
        finalResult = 'It\'s a tie game!';
    }

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `<strong style="font-size: 2rem; color: black;">${finalResult}</strong>`;
}
