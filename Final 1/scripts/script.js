const gameBoard = document.getElementById('game-board');
const resetButton = document.getElementById('reset-button');
let cardsFlipped = [];
let matchCounter = 0;
let cardIds = [];
let cardsChosen = [];

// Create an array of icon classes
const iconClasses = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];

// Shuffle the icon classes
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(iconClasses);

// Create cards and add event listeners
function createCards() {
  for (let i = 0; i < iconClasses.length; i++) {
    const card = document.createElement('div');
    card.dataset.iconClass = iconClasses[i];
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
    cardIds.push(card.id);
  }
}

// Flip the card and check for matches
function flipCard() {
  if (cardsFlipped.length < 2) {
    cardsFlipped.push(this);
    this.classList.add('flip');
    cardsChosen.push(this.dataset.iconClass);
  }

  if (cardsFlipped.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

// Check for a match and update the game state
function checkForMatch() {
  const cards = cardsFlipped;
  const optionOneId = cards[0].id;
  const optionTwoId = cards[1].id;

  if (cardsChosen[0] === cardsChosen[1]) {
    alert('Match!');
    cards[0].removeEventListener('click', flipCard);
    cards[1].removeEventListener('click', flipCard);
    matchCounter++;
  } else {
    cards[0].classList.remove('flip');
    cards[1].classList.remove('flip');
  }

  cardsFlipped = [];
  cardsChosen = [];

  if (matchCounter === iconClasses.length / 2) {
    alert('Congratulations! You found all the matches!');
    resetButton.style.display = 'block';
  }
}

// Reset the game
function resetGame() {
  matchCounter = 0;
  cardsFlipped = [];
  cardsChosen = [];
  cardIds = [];
  gameBoard.innerHTML = '';
  resetButton.style.display = 'none';
  createCards();
}

createCards();
resetButton.style.display = 'none';