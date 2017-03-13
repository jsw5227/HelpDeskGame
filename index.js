"using strict";

//function that creates a new body node and replaces the old body element. 
//I.E. it loads the game without using another html page. 
let start = function() {
	let newNode = document.createElement("body"), 
		oldNode = document.getElementById("body"); 
	newNode.id = "body";
	canvasNode = document.createElement("canvas");
	canvasNode.id = "gameCanvas"; 
	scriptNode = document.createElement("script"); 
	scriptNode.src = "game.js"; 
	newNode.appendChild(canvasNode);
	newNode.appendChild(scriptNode); 
	oldNode.parentNode.replaceChild(newNode,oldNode);
}


document.getElementById("startGame").addEventListener("click", start); 