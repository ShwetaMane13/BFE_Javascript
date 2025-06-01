const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // remove active class from all buttons and panes
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // add active class to clicked button
    button.classList.add("active");

    // get tab name and activate the corresponding pane
    const tab = button.getAttribute("data-tab");
    const activePane = document.getElementById(tab);
    if (activePane) activePane.classList.add("active");
  });
});
