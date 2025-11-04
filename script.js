document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("message").value.trim();

  // Error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const messageError = document.getElementById("messageError");

  // Clear old errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  messageError.textContent = "";

  let valid = true;

  // Name check
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Email check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  // Password check
  if (password === "") {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Confirm password check
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
    valid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    valid = false;
  }

  // Message check
  if (message === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  // Final validation
  if (valid) {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  }
});
