
function temp (form) {
  form.fahrenheit.value = form.celsius.value*1.8+32; // form is get from function line (perimeter)/and name as fahrenheit .value is getting the value from userinput
if(form.fahrenheit.value < 32){
	document.getElementById("pic").src="img/jacket.jpg"; //get from your picture name 
}

	form.celsius.value = (form.fahrenheit.value-32)*1.8;
	if(form.celsius.value > 0){
		document.getElementById("pic").src="img/warm.png";
	
}

}
