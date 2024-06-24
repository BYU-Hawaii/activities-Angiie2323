let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
let gameOver = false;

// Add event listeners to cells
for (let i = 1; i <= 9; i++) {
    document.getElementById(`cell-${i}`).addEventListener('click', handleCellClick);
}

// Handle cell click
function handleCellClick(event) {
    if (gameOver) return;
    const cellId = event.target.id;
    const cellIndex = parseInt(cellId.replace('cell-', '')) - 1;
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkForWin();
        currentPlayer = currentPlayer === 'X'? 'O' : 'X';
    }
}

// Check for win
function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i <winConditions.length; i++) {
        const condition = winConditions[i];
        if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]] !== '') {
            gameOver = true;
            alert(`Player ${gameBoard[condition[0]]} wins!`);
            return;
        }
    }
    if (!gameBoard.includes('')) {
        gameOver = true;
        alert('It\'s a draw!');
    }
}

// Reset game
document.getElementById('reset-button').addEventListener('click', resetGame);

function resetGame() {
    gameBoard = Array(9).fill('');
    currentPlayer = 'X';
    gameOver = false;
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`cell-${i}`).textContent = '';
    }
}