// 'use strict';

// document.querySelector('#current--' + activePlayer).innerHTML = "<em>" + dice + "</em>";
// document.querySelector('#current--' + activePlayer).textContent = dice;
// var x = document.querySelector('#score--0').textContent;

var scores, roundScore, activePlayer, gamePlayer;

init();

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (gamePlayer) {
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png ';
  }

  if (dice !== 1) {
    roundScore += dice;
    document.querySelector(
      '#current--' + activePlayer
    ).textContent = roundScore;
  } else {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById('current--0').textContent = '0 ';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player player--0 ').classList.toogle('active');
    document.querySelector('.player player--1 ').classList.toogle('active');
    document.querySelector('.dice').style.display = 'none';
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlayer) {
    scores[activePlayer] += roundScore;

    document.querySelector('#score--' + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector(
        '.player--' + activePlayer + 'player--'
      ).classList.add = 'winner';
      document.querySelector(
        '.player--' + activePlayer + 'player--'
      ).classList.remove = 'active';
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current--0').textContent = '0 ';
  document.getElementById('current--1').textContent = '0';

  document.querySelector('.player player--0 ').classList.toogle('active');
  document.querySelector('.player player--1 ').classList.toogle('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlayer = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';
  document.getElementById('name--0').textContent = 'Player 1';
  document.getElementById('name--1').textContent = 'Player 2';
  document.querySelector('.player--0').classList.remove = 'winner';
  document.querySelector('.player--1').classList.add = 'winner';
  document.querySelector('.player--0').classList.remove = 'active';
  document.querySelector('.player--1').classList.add = 'active';
  document.querySelector('.player--0').classList.remove = 'active';
}
