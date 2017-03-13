"using strict";

 //!!!!!!!!!!!!!!!!!! this is just test js it will be where the game JS will go !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

<<<<<<< HEAD
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d"); 
let x = 0;
let y = 0; 
let isWalking = false; 

let check = false; 

let mainDraw = function () { // where the main drawing will take place. --game loop--
	ctx.clearRect(0,0,canvas.width, canvas.height); // clears the drawing before redrawing it. 
	createImage('standing.png',x,y,200,200);
	//draws the image differently if walking 
	if(isWalking === true){
		createImage('walking.png',x,y,200,200);	
	}
	else{
		createImage('standing.png',x,y,200,200);
	}
		
}
//draws an image from a source at x pos y pos with a given height and width
let createImage = function(src, x, y, height, width) {
  base_image = new Image();
  base_image.src = src;
  ctx.drawImage(base_image,x,y,height,width);
}
//a  key is pressed 
let keyPressed = function(evt) {
	console.log(evt.code);
	if(evt.code === "KeyD"){
		x += 4; 
		isWalking = true; 
	}
	else if(evt.code === "KeyA"){
		x -= 4 
		isWalking = true; 
	}
}
//a key is released
let keyReleased = function(evt) {
	isWalking = false; 
}

document.querySelector("html").addEventListener("keydown", keyPressed); 
document.querySelector("html").addEventListener("keyup", keyReleased); 
setInterval(mainDraw, 10); //calls the draw function every 10 miliseconds 
=======




let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d"); 
let x = canvas.width/2;
let y = canvas.height-30; 
let dx = 2; 
let dy = 2;

function mainDraw() { // where the main drawing will take place. --game loop--
	ctx.clearRect(0,0,canvas.width, canvas.height); // clears the drawing before redrawing it. 
	drawCirc(true,"blue",x,y,10,0,Math.PI*2);
	x += dx;
	y -= dy;

}
setInterval(mainDraw, 10); //calls the draw function every 10 miliseconds 


function drawRect(fill, fillColor, topX, topY, bottomX, bottomY){
	ctx.beginPath();
	ctx.rect(topX, topY, bottomX, bottomY);
	ctx.fillStyle = fillColor;
	if(fill === true){
		ctx.fill();
	}
    ctx.closePath();
}
function drawCirc(fill, fillColor, topX, topY, radius, startAngle, endAngle){
	ctx.beginPath();
	ctx.arc(topX, topY, radius, startAngle, endAngle);
	ctx.fillStyle = fillColor;
	if(fill === true){
		ctx.fill();
	}
    ctx.closePath();
} 
>>>>>>> f891f7fb577183d1fa385a094cc62485b8f2675f
