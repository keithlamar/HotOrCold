
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
		function tempChange(a, b, words){
			$('.thermometer').css("background","-webkit-linear-gradient(top, #fff 0%, #fff " + a + "%, #db3f02 " + b + "%, #db3f02 100%)");
			$('.thermometer').text("" + words + "")
		}
		//Displays last picked number to user
		function lastpick(number){
			$("#lastpick").prepend("<li>" + number + "</li>");

		};
		if(userNum == comNum){
			alert("You got it! You Win!");
			lastpick(userNum);
			tempChange(100,100, "Great Job!" );
			$('.thermometer').fadeOut("slow")
		}
		else if (userNum > comNum) {
			alert("I'm lower than that number!")
			lastpick(userNum);
		}
		else{
			alert("I'm higher than that number!")
			lastpick(userNum);
		};
		
		if (diff < 5) {
			tempChange(10,20, "Hot!");
		}
		else if (diff < 10){
			tempChange(30,40, "Warm!")
		}
		else{
			tempChange(70,80, "Cold!")
		}

	};
$(document).ready(function(){

	$('#guess').keydown(function(event){    
    if(event.keyCode==13){
       $('#pick').trigger('click');
    }
});

	$('#pick').click(function(){
	askNumber();
	$('#guess').val("")
	});

	//reload page
	//$('#something').click(function() {
    //location.reload();
//});
});

