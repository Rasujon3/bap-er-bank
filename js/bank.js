document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const passwordField = document.getElementById("user-password");

  const userEmail = emailField.value;
  const userPassword = passwordField.value;

  if (userEmail == "sontan@baap.com" && userPassword == "secret") {
    window.location.href = "banking.html";
  }
});
