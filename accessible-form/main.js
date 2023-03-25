const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const passwordInput = document.getElementById("passwordInput");
const emailInput = document.getElementById("emailInput");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMessage.innerText = "";

  if (emailInput.value.length == 0) {
    errorMessage.innerText = "You have to provide an email";
    return;
  }

  if (passwordInput.value.length == 0) {
    errorMessage.innerText = "You have to provide a password";
    return;
  }
  window.location = window.location.pathname + "dashboard";
});
