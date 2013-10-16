	var userNum = $('#guess').val();
	var comNum = Math.floor(Math.random()*101);
	var difference = function (a,b) {return Math.abs(a - b)};
	var askNumber = function(){
		if(userNum == comNum){
			alert("You got it! You Win!")
		}
		else if(difference(userNum,comNum) < 5){
			alert("Very Hot!");
			
		}
		else if(difference(userNum,comNum) < 10){
			alert("Hot!");
			
		}
		else if(difference(userNum,comNum) < 20){
			alert("Warm!");
			
		}
		else if(difference(userNum,comNum) > 20){
			alert("Very Cold!")
					
		}
		else {
			alert("Sorry, you need to choose a number.")
			
		}

	};

$(document).ready(function(){

	$('#pick').click(function(){
	askNumber();
	});

});

