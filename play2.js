var draw = require('jsi-gamelib').map;

var map = require('./map.json');

draw(map);

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var dictionary = {A:0, B:1, C:2, D:3, E:4, F:5, G:6, H:7, I:8, J:9, K:10}


var currentRoom = "A";

// var describeRoom = function() {
// 	console.log(map.rooms[dictionary[currentRoom]].description)
// }

var describeRoom = function() {
	for (var i = 0; i < map.rooms.length; i++) {
		if (map.rooms[i].name === currentRoom) {
			console.log(map.rooms[dictionary[currentRoom]].description);
		}
	}
};

describeRoom();


// for (var i = 0; i < map.rooms.length; i++) {
// 	if(map.rooms[i].name === currentRoom) {
// 		rl.question(map.rooms[i].description, function(answer){
// 		});
// 	};
// };

// if (currentRoom === "A") {
// 	rl.question(map.rooms[dictionary.currentRoom].description, function(answer) {
// 		if (answer.toLowerCase() === "north") {
// 			currentRoom === "D";
// 			console.log("Room D");
// 		} else if (answer.toLowerCase === "east", function(answer) {
// 			currentRoom === "B";
// 			console.log("Room B")
// 		});
// 	});
// }