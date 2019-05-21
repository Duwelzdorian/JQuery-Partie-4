// Tableau contenant les 3 objets
var tab = ['rock', 'paper', 'scissors'];
var playerWin = 0;
var computerWin = 0;



// L'ordinateur choisit un nombre entre 0 et 2 aléatoirement.
// function nbAleatoire(min, max) {
//   return Math.floor(Math.random() * ();
// }


// Clic sur le bouton 'ShiFuMi', affiche le résultat du joueur
$('#compare').click(function(){
// On incremente de +1 si le joueur gagne.
  playerWin = playerWin+1;
  document.getElementById('showScore').innerHTML = playerWin;

  // On definit le choix du player
  var playerChoice = $('#player').val();
  // L'ordinateur choisit un nombre compris entre 0 et 2 aléatoirement.
  var rand = Math.floor(Math.random() * Math.floor(3)); // var rand = Math.floor(Math.random() * 3);
  // On definiti le choix de l'ordinateur via le tableau tab
  var computerChoice = tab[rand];

// les conditions avec Rock
if (playerChoice == 'rock' && computerChoice == 'rock'){
alert('Egalité');
}
if (playerChoice == 'rock' && computerChoice =='paper'){
alert('you LOSE');
}
if (playerChoice == 'rock' && computerChoice == 'scissors'){
alert('you WIN');
}

// les conditions avec paper
if (playerChoice == 'paper' && computerChoice == 'rock'){
alert('you WIN');
}
if (playerChoice == 'paper' && computerChoice == 'paper'){
alert('Egalité');
}
if (playerChoice == 'paper' && computerChoice == 'scissors'){
alert('you lose');
}

// les conditions avec scissors
if (playerChoice == 'scissors' && computerChoice == 'rock'){
alert('you LOSE');
}
if (playerChoice == 'scissors' && computerChoice == 'paper'){
alert('you WIN');
}
if (playerChoice == 'scissors' && computerChoice == 'scissors'){
alert('Egalité');
}

console.log(playerChoice + '/' + computerChoice);
console.log('player : ' + playerWin);
console.log('computer : ' + computerWin);
});








// if ($('#player').val() == rand) {
//   alert('Egalité !');
// }
//
// if ($('#test').val() < nb) {
//   alert('le nombre est trop petit');
// }
//
// if ($('#test').val() > nb) {
//   alert('le nombre est trop grand');
// }
