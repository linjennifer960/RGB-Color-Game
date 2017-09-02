var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i =0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numSquares = 3: numSquares = 6
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function (){
			//if correct answer
			if(this.style.backgroundColor === pickedColor){
				message.textContent = "Correct!";
				resetBtn.textContent = "Play Again?";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
	//loop through all squares to display
	for(var i = 0; i<squares.length; i++){
		//add initial colors to squares
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i]; 
		}
		else{
			squares[i].style.display = "none";	
		}
	}
	h1.style.backgroundColor = "#8FBC8F";
}

resetBtn.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares and change each to match given color
	for(var i = 0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i<num; i++){
		arr.push (randomColor());
	}
	return arr;
}

function randomColor(){
	var randomRed = Math.floor(Math.random()*256);
	var randomGreen = Math.floor(Math.random()*256);
	var randomBlue = Math.floor(Math.random()*256);
	return "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
}






