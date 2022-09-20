import { saludar } from './js/componentes';
import './styles.css';

/*    
    2C = Two of Clubs
    2D = Three of Diaminds
    2H = Two of Heats
    2S = Two of Spades 
   */

/* Creating an array of cards. */
let arrDeck = [];
const typesOfCards = ['C', 'D', 'H', 'S'],
    specialCards = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;


// HTML references
const btnNewGame = document.querySelector('#btnNewGame'),
    btnGetCard = document.querySelector('#btnGetCard'),
    btnStop = document.querySelector('#btnStop');

const scorePlayer = document.querySelector('#scorePlayer'),
    scoreComputer = document.querySelector('#scoreComputer');

const divPlayerCards = document.querySelector('#player-cards'),
    divComputerCards = document.querySelector('#computer-cards');


/**
 * StartGame() is a function that creates a new deck, 
 * resets the player and computer points to 0,
 * and resets the player and computer cards to empty.
 */
const startGame = () => {
    arrDeck = createDeck();

    playerPoints = 0;
    computerPoints = 0;

    scorePlayer.innerText = 0;
    scoreComputer.innerText = 0;

    divPlayerCards.innerHTML = '';
    divComputerCards.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        createCardHTML('red_back', divComputerCards);
    }
}


/**
 * This function creates an array of cards, shuffles them.
 * @returns The array of cards.
 */
const createDeck = () => {
    arrDeck = [];
    for (let i = 2; i <= 10; i++) {
        for (const type of typesOfCards) {
            arrDeck.push(i + type);
        }
    }

    for (let type of typesOfCards) {
        for (let special of specialCards) {
            arrDeck.push(special + type);
        }
    }

    /* Shuffle the deck of cards. Using underscore library. */
    return _.shuffle(arrDeck);
}


/**
 * If there are no cards in the deck, throw an error. 
 * Otherwise remove and return the last card in the deck.
 * @returns The last element of the array.
 */
const getCard = () => {
    if (arrDeck.length === 0) {
        throw 'No cards in the deck.'
    }
    return arrDeck.pop();
}


/**
 * If the card value is not a number, 
 * then return 10 if the card is a face card, or 11 if the card is an Ace.
 * Otherwise, return the card value.
 * @param card - The card that is being evaluated.
 * @returns The value of the card.
 */
const getCardValue = (card) => {
    const value = card.substring(0, card.length - 1); // 10C = 10
    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10
        : value * 1;
}


/**
 * Create an image element, 
 * set its source to the card image, 
 * add a class to it, and append it to the divCards element.
 * @param card - the card that will be created
 * @param divCards - the div where the cards will be displayed
 */
const createCardHTML = (card, divCards) => {
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('img-card');
    divCards.append(imgCard);
}


/**
 * Evaluates the player's score to determine the winner of the game.
 * Wait a second while the cards are drawn on the screen.
 */
const evaluateGameWinner = () => {
    setTimeout(() => {
        if (playerPoints === 21) {
            alert('21, Congratulations! Player wins!');
        } else if (playerPoints === computerPoints) {
            alert('Game tied, nobody wins!');
        } else if (playerPoints > 21) {
            alert('Computer wins!');
        } else if (computerPoints > 21) {
            alert('Congratulations! Player wins!');
        } else if (computerPoints > playerPoints) {
            alert('Computer wins!');
        }
    }, 1000);
}


/**
 * The computerTurn function takes a minPoints parameter, and then makes comparisons.
 * The computer takes cards trying to beat the player's score, without going over 21 points.
 *
 * @param minPoints  (playerPoints): The minimum points the computer needs to reach to win.
 */
const computerTurn = (minPoints) => {
    do {
        const card = getCard();
        createCardHTML(card, divComputerCards);

        computerPoints += getCardValue(card);
        scoreComputer.innerHTML = computerPoints;

        /**
         * Checking if the player has more than 21 points,
         *  if so, the computer will stop drawingcards.
        */
        if (minPoints > 21) break;

    } while ((computerPoints < minPoints) && (computerPoints <= 21));

}



//  Events for buttons

/**
 * This is the event listener for the button "Pedir Carta" (btnGetCard): 
 * When the button is clicked, it will get a card from the deck, create the HTML for the card.
 * If the player's score is greater than or equal to 21, 
 * the buttons will be disabled and the computer will take its turn.
*/
btnGetCard.addEventListener('click', () => {

    const card = getCard();
    createCardHTML(card, divPlayerCards);

    playerPoints += getCardValue(card);
    scorePlayer.innerHTML = playerPoints;

    if (playerPoints >= 21) {
        btnGetCard.disabled = true;
        btnStop.disabled = true;
        divComputerCards.innerHTML = '';
        computerTurn(playerPoints);
        evaluateGameWinner();
    }
});


/** 
 * This is the event listener for the button "Detener" (btnStop) 
 * When the button is clicked, the buttons will be deactivated and the computer will take its turn.
*/
btnStop.addEventListener('click', () => {
    if (playerPoints > 0) {
        btnGetCard.disabled = true;
        btnStop.disabled = true;
        divComputerCards.innerHTML = '';
        computerTurn(playerPoints);
        evaluateGameWinner();
    } else {
        alert('0 points, get at least one card!');
    }
});




/**
 * This is the event listener for the button "Nuevo Juego" (btnNewGame). 
 * When the button is clicked, it will start a new game. 
*/
btnNewGame.addEventListener('click', () => {
    startGame();

    btnGetCard.disabled = false;
    btnStop.disabled = false;
});

/* Calling the function `startGame()` to start the game. */
startGame();
