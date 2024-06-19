document.addEventListener('DOMContentLoaded', () => {
  const cardsArray = [
      { name: 'cat', img: '/images/cat.png' },
      { name: 'cat', img: 'images/cat.png' },
      { name: 'dog', img: 'images/dog.png' },
      { name: 'dog', img: 'images/dog.png' },
      { name: 'horse', img: 'images/horse.png' },
      { name: 'horse', img: 'images/horse.png' },
      { name: 'rabbit', img: 'images/rabbit.png' },
      { name: 'rabbit', img: 'images/rabbit.png' }
  ];

  cardsArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('#memory-game');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
      for (let i = 0; i < cardsArray.length; i++) {
          const card = document.createElement('img');
          card.setAttribute('src', 'images/blank.png');
          card.setAttribute('data-id', i);
          card.addEventListener('click', flipCard);
          grid.appendChild(card);
      }
  }

  function flipCard() {
      const cardId = this.getAttribute('data-id');
      cardsChosen.push(cardsArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardsArray[cardId].img);
      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500);
      }
  }

  function checkForMatch() {
      const cards = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];

      if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
          alert('You found a match');
          cards[optionOneId].setAttribute('src', 'images/white.png');
          cards[optionTwoId].setAttribute('src', 'images/white.png');
          cardsWon.push(cardsChosen);
      } else {
          cards[optionOneId].setAttribute('src', 'images/blank.png');
          cards[optionTwoId].setAttribute('src', 'images/blank.png');
          alert('Sorry, try again');
      }

      cardsChosen = [];
      cardsChosenId = [];

      if (cardsWon.length === cardsArray.length/2) {
          alert('Congratulations! You found them all!');
      }
  }

  createBoard();
});
