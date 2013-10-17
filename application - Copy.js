
	var comNum = Math.floor(Math.random()*101);
	function difference(a,b) {return Math.abs(a - b)};
	function askNumber(){
		var userNum = $('#guess').val();
		var diff = difference(userNum,comNum);
		var lastNum = Number($("#lastpick li").first().text());
		var diffLast = difference(lastNum,comNum);
		function lastpick(number){
			$("#lastpick").prepend("<li>" + number + "</li>");

		};
		if(userNum == comNum){
			alert("You got it! You Win!");
			lastpick(userNum);
		}
		else if(diff < 5){
			if (diffLast > diff) {
				alert("Getting Warmer!")
				lastpick(userNum);
			}
			else if(diffLast < diff){
				alert("Getting Colder!")
				lastpick(userNum);
			}
			else{
			alert("Very Hot!");	
			lastpick(userNum);}
		}
		else if(diff < 10){
			if (diffLast > diff) {
				alert("Getting Warmer!")
				lastpick(userNum);
			}
			else if(diffLast < diff){
				alert("Getting Colder!")
				lastpick(userNum);
			}
			else{
			alert("Hot!");
			lastpick(userNum);}
		}
		else if(diff < 20){
			if (diffLast > diff) {
				alert("Getting Warmer!")
				lastpick(userNum);
			}
			else if(diffLast < diff){
				alert("Getting Colder!")
				lastpick(userNum);
			}
			else{
			alert("Warm!");
			lastpick(userNum);}
		}
		else if(diff > 20){
			if (diffLast > diff) {
				alert("Getting Warmer!")
				lastpick(userNum);
			}
			else if(diffLast < diff){
				alert("Getting Colder!")
				lastpick(userNum);
			}
			else{
			alert("Very Cold!")
			lastpick(userNum);}	
		}
		else {
			alert("Sorry, you need to choose a number.")	
		}

	};
$(document).ready(function(){

	$('#pick').click(function(){
	$.playSound('fire.mp3')
	askNumber();
	});

});

