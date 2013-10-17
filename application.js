
	var comNum = Math.floor(Math.random()*101);
	function difference(a,b) {return Math.abs(a - b)};
	function askNumber(){
		var userNum = $('#guess').val();
		//captures value of last picked number
		var lastNum = Number($("#lastpick li").first().text());

		//calculates difference between users number/com number and last picked number/com number
		var diff = difference(userNum,comNum);
		var diffLast = difference(lastNum,comNum);
		
		//changes the thermometer temp
		function tempChange(a, b){
			$('.thermometer').css("background","-webkit-linear-gradient(top, #fff 0%, #fff " + a + "%, #db3f02 " + b + "%, #db3f02 100%)");
		}
		//Displays last picked number to user
		function lastpick(number){
			$("#lastpick").prepend("<li>" + number + "</li>");

		};
		if(userNum == comNum){
			alert("You got it! You Win!");
			lastpick(userNum);
			tempChange(100,100);
		}
		else if (diffLast > diff) {
			alert("Getting Warmer!")
			lastpick(userNum);
		}
		else if (diffLast < diff){
			alert("Getting Colder!")
			lastpick(userNum);
		}
		else{
			alert("Very Hot!");	
			lastpick(userNum);
		};
		
		if (diff < 5) {
			tempChange(10,20);
		}
		else if (diff < 10){
			tempChange(30,40)
		}
		else{
			tempChange(70,80)
		}

	};
$(document).ready(function(){

	$('#pick').click(function(){
	askNumber();
	});

	//reload page
	//$('#something').click(function() {
    //location.reload();
//});
});

