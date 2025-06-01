const passwordInput = document.getElementById("passwordInput");
const strengthText = document.getElementById("strengthText");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let strength = "weak";
  let color = "red";

  if (
    password.length > 7 &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*]/.test(password)
  ) {
    strength = "Strong";
    color = "green";
  } else if (password.length > 5 && /[A-Z0-9]/.test(password)) {
    strength = "Medium";
    color = "orange";
  }

  strengthText.innerText = `Strength: ${strength}`;
  strengthText.style.color = color;
});
