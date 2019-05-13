$(document).ready(function(){

	
	// phone-mask

	$(".phone-mask").mask("+7 (999) 999-99-99");

	

	//Проверка form-login.tpl
	
	$('#personal-info-form').on('submit', function(event){
		event.preventDefault();

		var	nameValid = true,
			emailValid = true;

		var nameValue = $('#nameValue').val();
		console.log(nameValue);

		var emailValue = $('#emailValue').val();
		console.log(emailValue);

		

		if (nameValue == '') {
			$('#nameError').fadeIn();
			nameValid = false;
		} else {
			nameValid = true;
		}

		if (emailValue == '') {
			$('#emailError').fadeIn();
			emailValid = false;
		} else {
			emailValid = true;
		}

		

		if (nameValid == true && emailValid == true) {
			console.log("ok");
			$('#personal-info-form').unbind('submit').submit();
		} else {
			console.log("fail");
		}
	});
	
});