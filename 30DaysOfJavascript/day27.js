const countElement = document.getElementById("count");
const stepElement = document.getElementById("step");

const controlCount = (action) => {
  let count = parseInt(countElement.innerText);
  let step = parseInt(stepElement.value) || 1;

  if (action === "decrement") {
    countElement.innerText = count - step;
  }

  if (action === "increment") {
    countElement.innerText = count + step;
  }
};
