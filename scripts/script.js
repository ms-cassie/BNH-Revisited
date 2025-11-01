// Set initial game state
let playing = true;
let playerWins = 0;
let computerWins = 0;
let playerChoice = '';

// Game choices
const choices = ['bear', 'ninja', 'hunter'];

// Get references to game html elements
const buttonBearElement = document.getElementById('player-choice-bear');
const buttonNinjaElement = document.getElementById('player-choice-ninja');
const buttonHunterElement = document.getElementById('player-choice-hunter');

const roundOverElement = document.getElementById('round-over');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const gameResultElement = document.getElementById('game-result');

const playerWinCountElement = document.getElementById('player-win-count');
const computerWinCountElement = document.getElementById('computer-win-count');
const playAgainButtonElement = document.getElementById('play-again');

// Game functions
const playGame = (playerChoice) => {
	// Retun if not playing
	if (!playing) return;

	// Initialize winner
	let winner = '';

	// Generate computer choice
	const randomNum = Math.floor(Math.random() * 3);
	computerChoice = choices[randomNum];

	// Determine winner
	switch (playerChoice) {
		case 'bear':
			if (computerChoice === 'bear') {
				winner = 'tie';
			} else if (computerChoice === 'ninja') {
				winner = 'player';
				playerWins++;
			} else if (computerChoice === 'hunter') {
				winner = 'computer';
				computerWins++;
			}
			break;

		case 'ninja':
			if (computerChoice === 'ninja') {
				winner = 'tie';
			} else if (computerChoice === 'hunter') {
				winner = 'player';
				playerWins++;
			} else if (computerChoice === 'bear') {
				winner = 'computer';
				computerWins++;
			}
			break;

		case 'hunter':
			if (computerChoice === 'hunter') {
				winner = 'tie';
			} else if (computerChoice === 'bear') {
				winner = 'player';
				playerWins++;
			} else if (computerChoice === 'ninja') {
				winner = 'computer';
				computerWins++;
			}
			break;
	}

	// Update UI with results
	playerChoiceElement.innerText = playerChoice;
	computerChoiceElement.innerText = computerChoice;
	playerWinCountElement.innerText = playerWins;
	computerWinCountElement.innerText = computerWins;
	roundOverElement.classList.remove('hidden');
	if (winner === 'player') {
		gameResultElement.innerText = 'You win!';
	} else if (winner === 'computer') {
		gameResultElement.innerText = 'The computer wins!';
	} else if (winner === 'tie') {
		gameResultElement.innerText = "It's a tie!";
	}

	// Game over - set playing to false
	playing = false;
};

const resetGame = () => {
	playing = true;
	roundOverElement.classList.add('hidden');
};

// Add event listeners to buttons
buttonBearElement.addEventListener('click', () => playGame('bear'));;
buttonNinjaElement.addEventListener('click', () => playGame('ninja'));
buttonHunterElement.addEventListener('click', () => playGame('hunter'));
playAgainButtonElement.addEventListener('click', resetGame);