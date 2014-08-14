$(document).ready(function(){

var totalEbolaPoints = 0;

var option1a = 5; var option1b = 10; var option1c= 15; var option1d = 0;
	$(this).click(function(){
		totalEbolaPoints += parseInt($(this).value)
		alert(totalEbolaPoints)
	})


























if (totalEbolaPoints <= 30) {
	console.log("You most definately do not have the Ebola virus but we recommend abstinence from sexual intercourse for 6 months")
}
else if (30 < totalEbolaPoints <= 70) {
	console.log("You do not have the Ebola virus but take a brake from coding or your head will implode")
}
else if (70 < totalEbolaPoints <= 120) {
	console.log("you do not have the Ebola virus but check for STDs")
}
else () {
	console.log("Please head for the nearest exit in the building and don't touch anybody on your way out!!!")
}


});