const loginButton = document.getElementById("loginButton");
const errorMessage = document.getElementById("errorMessage");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");

loginButton.addEventListener("click", () => {
	errorMessage.innerText = "";

	if (emailInput.value.length == 0) {
		errorMessage.innerText = "You have to provide an email";
		return;
	}

	if (passwordInput.value.length == 0) {
		errorMessage.innerText = "You have to provide a password";
		return;
	}

	window.location =
		window.location.origin + "/inaccessible-form/dashboard";
});
