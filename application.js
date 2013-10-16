$(document).ready(function(){
	/*function num(){
		this.Num = Math.floor(Math.random()*101);
		this.more20 = this.Num + 20;
		this.less20 = this.Num - 20;
		this.less10 = this.Num - 10;
		this.more10 = this.Num + 10;
		this.more5 = this.Num + 10;
		this.less5 = this.Num - 5;
		
	};*/

	
	var userNum = prompt("Choose a number between 1 - 100")
	var comNum = Math.floor(Math.random()*101);
	var difference = function (a,b) {return Math.abs(a - b)}
	var askNumber = function(){
		if(userNum == comNum){
			alert("You got it! You Win!")
		}
		else if(difference(userNum,comNum) < 5){
			alert("very hot");
			userNum = prompt("Try again!")
			askNumber();
		}
		else if(difference(userNum,comNum) < 10){
			alert("hot");
			userNum = prompt("Try again!")
			askNumber();
		}
		else if(difference(userNum,comNum) < 20){
			alert("Getting Warmer");
			userNum = prompt("Try again!")
			askNumber();
		}
		else if(difference(userNum,comNum) > 20){
			alert("Very cold!")
			userNum = prompt("Try again")
			askNumber();
		}
	
		else {
			alert("Sorry, you need to choose a number.")
			userNum = prompt("Try again")
			askNumber();
		}

	}

	
	askNumber();

})