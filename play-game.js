var draw = require('jsi-gamelib').map;

var map = require('./map.json')

draw(map);

var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});


//start in A; move north to D; north to G; north to H; east to I; east to J. Treasure in J.

rl.question("You are standing in a room. There are two doors. One is to the north, and one is to the east. Which direction do you want to go? ", function(answer) {
	if (answer.toLowerCase() === "north") {
	  console.log("Welcome to Room D!");
	  rl.question("Room D has two doors. One is to the north, and one is to the south. Which direction do you want to go? ", function(answer) {
	    if (answer.toLowerCase() === "north") {
	      console.log("Welcome to Room G!");
	      rl.question("Room G has two doors. One is to the north, and one is two the south. Which direction do you want to go? ", function(answer) {
	      	if (answer.toLowerCase() === "north") {
	      		console.log("Welcome to Room H!");
	      		rl.question("Room H has two doors. One is to the south, and one is to the east. Which direction do you want to go? ", function(answer) {
	      			if (answer.toLowerCase() === "east") {
	      				console.log("Welcome to Room I!");
	      				rl.question("Room I has two doors. One is to the east, and one is to the west. Which direction do you want to go? ", function(answer) {
	      					if (answer.toLowerCase() === "east") {
	      						console.log("Welcome to Room J - you've found the treasure!")
	      					}
	      				})
	      			}
	      		})
	      	}
	      })
	    }
	  })

	} 

});


