$(document).ready(function() {
	console.log("We're Ready, Let's Play");
	var players = 1
	var gameBoard = $('#gameboard');
	var gameInfo = $('.gameInfo');
	var turn = $('.turn');
	var button = $('.button');

	console.log(players);
	console.log(gameInfo);
	console.log(button);
	console.log(turn);
	console.log(gameBoard);

	$('button').click(fucntion) 
		player = 1;
		gameInfo.html('');
		reset(table);
		displayPlayer(turn, player);
	


});