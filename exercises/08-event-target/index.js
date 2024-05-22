window.onload = function loadFn() {
	let containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		// Your code here
		alert(event.target.id)
		let firtsButton = document.querySelector("#btn1")
		

		if(event.target == firtsButton){
			alert("Hiciste click en el botón")
		}
		else{
			alert("Hiciste click en el hipervinculo")
		}
		
		
	});
};
