var draw = require('jsi-gamelib').map;

var map = require('./map.json')

draw(map);

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


var currentRoom = "A";

if (currentRoom === "A") {
	console.log(map.rooms[0].name)
}