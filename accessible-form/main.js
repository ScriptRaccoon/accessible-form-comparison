const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");
const passwordError = document.getElementById("passwordError");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let error = false;

	if (emailInput.value.length == 0) {
		emailError.innerText = "You have to provide an email";
		error = true;
	} else {
		emailError.innerText = "";
	}

	if (passwordInput.value.length == 0) {
		passwordError.innerText = "You have to provide a password";
		error = true;
	} else {
		passwordError.innerText = "";
	}

	if (error) return;

	window.location = window.location.origin + "/dashboard";
});
