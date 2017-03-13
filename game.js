"using strict";

 //!!!!!!!!!!!!!!!!!! this is just test js it will be where the game JS will go !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





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