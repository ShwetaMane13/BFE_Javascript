let inputString = document.getElementById("textInput");
let charLength = document.getElementById("charCount");

const countChar = () => {
  const value = inputString.value;
  const length = value.length;
  charLength.textContent = `${length}/100`;

  if (length > 100) {
    charLength.style.color = "red";
    inputString.value = value.substring(0, 100);
    charLength.textContent = "100/100";
  } else {
    charLength.style.color = "black";
  }
};
