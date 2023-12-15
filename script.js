'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');
const btnRollEl = document.querySelector('.btn--roll');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0NameEl = document.getElementById('name--0');
const player1NameEl = document.getElementById('name--1');

//resetting the scores
score0El.textContent = 0;
score1El.textContent = 0;

//hide the dice
diceEl.classList.add('hidden');

// Holds the current player
let currentPlayer = 0;
// Sum the current and total scores 
let currentScore = 0;
let totalScore = [0, 0];

const winningScore = 20;

const switchPlayer = function() {
  // Reset and display the current score
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
  currentScore;
  // Switch to the next player
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRollEl.addEventListener('click', function () {
  //Generate a random number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check if not a '1' add dice to the current score
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    //Else switch the next player
    switchPlayer();
  }
});

btnHoldEl.addEventListener('click', function() {
  
  // Add the current score to the grand score
  let totals = totalScore[`${currentPlayer}`] +=  currentScore;
  document.querySelector(`#score--${currentPlayer}`).textContent = 
  totalScore[`${currentPlayer}`];
  // Check if the game is won
  if(totalScore[`${currentPlayer}`] >= winningScore) {
    document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
    document.getElementById(`name--${currentPlayer}`).style.fontSize =
    '30px';

    document.getElementById(`name--${currentPlayer}`).textContent =
     `Player ${currentPlayer + 1} WINS`
  } else {
    //Else switch the next player
    switchPlayer();
  }

});

