function play(){
	'use strict';
	
	var userMove = document.getElementById('outcome').value;
	var computerMove = Math.ceil(Math.random()*3);

	var outcome = 'you lose :0';
	if (userMove === 'rock' && computerMove === 3) {
		outcome = 'you win ;)';
	} else if (userMove === 'paper' && computerMove === 1) {
		outcome = 'you win ;)';
	} else if (userMove === 'scissor' && computerMove === 2) {
		outcome = 'you win ;)';
	}
	
	document.getElementById('outcome').value = outcome;

}