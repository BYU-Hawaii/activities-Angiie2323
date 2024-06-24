// Get the game board element
const gameBoard = document.getElementById('game-board');

// Create the game board array
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to render the game board
function renderBoard() {
  let html = '';
  for (let i = 0; i < 3; i++) {
    html += '<div class="row">';
    for (let j = 0; j < 3; j++) {
      html += `<div class="cell" id="cell-${i}-${j}" onclick="makeMove(${i}, ${j})">${board[i][j]}</div>`;
    }
    html += '</div>';
  }
  gameBoard.innerHTML = html;
}

// Function to make a move
function makeMove(i, j) {
  if (board[i][j] === '') {
    board[i][j] = currentPlayer;
    renderBoard();
    checkWin();
    switchPlayer();
  }
}

// Function to switch the current player
function switchPlayer() {
  currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

// Function to check for a win
function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
      alert(`Player ${board[i][0]} wins!`);
      return;
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
      alert(`Player ${board[0][i]} wins!`);
      return;
    }
  }
  // Check diagonals
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
    alert(`Player ${board[0][0]} wins!`);
    return;
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
    alert(`Player ${board[0][2]} wins!`);
    return;
  }
}

// Initialize the game
let currentPlayer = 'X';
renderBoard();