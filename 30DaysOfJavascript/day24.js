// Elite frontend week: Build a simple light toggle button
// Goal: when the user clicks the button, the background color of the page should toggle between white and black,
// and the button text should update to say "Turn Light Off" or "Turn Light On" accordingly

let btn = document.getElementById("toggleBtn");
let body = document.body;

let currentTheme = localStorage.getItem("theme") || "light";

const applyTheme = (theme) => {
  if (theme === "dark") {
    btn.textContent = "Turn Light On";
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    btn.textContent = "Turn Light Off";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
};

applyTheme(currentTheme);

btn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
});
