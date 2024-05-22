window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	let buttomWoho = document.querySelector("#theGreen");
	buttomWoho.addEventListener("click", alertWoho);

	
};

// The listener function here
function alertWoho(){
	alert("Woohoo!")
}

/*Otra solución
	let buttomWoho = document.querySelector("#theGreen");
	buttomWoho.addEventListener("click", function(){
		alert("Woohoo!")
	});
*/
