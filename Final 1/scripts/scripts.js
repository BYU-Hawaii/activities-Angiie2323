document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running'); // Check if this message appears in the console

    const cards = [
        '🍎', '🍌', '🍒', '🍇',
        '🍎', '🍌', '🍒', '🍇'
    ];

    let shuffledCards = shuffle(cards);
    const gameContainer = document.querySelector('.game-container');

    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.symbol = card;
        cardElement.addEventListener('click', handleCardClick);
        gameContainer.appendChild(cardElement);
    });

    let firstCard = null;
    let secondCard = null;
    let lockBoard = false;

    function handleCardClick(e) {
        if (lockBoard) return;
        const clickedCard = e.target;

        if (clickedCard === firstCard) return;

        clickedCard.textContent = clickedCard.dataset.symbol;
        clickedCard.classList.add('flipped');

        if (!firstCard) {
            firstCard = clickedCard;
            return;
        }

        secondCard = clickedCard;
        lockBoard = true;

        if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        firstCard.removeEventListener('click', handleCardClick);
        secondCard.removeEventListener('click', handleCardClick);
        resetBoard();
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        [firstCard, secondCard, lockBoard] = [null, null, false];
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    document.getElementById('restart').addEventListener('click', () => {
        gameContainer.innerHTML = '';
        shuffledCards = shuffle(cards);
        shuffledCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.symbol = card;
            cardElement.addEventListener('click', handleCardClick);
            gameContainer.appendChild(cardElement);
        });
        resetBoard();
    });
});
