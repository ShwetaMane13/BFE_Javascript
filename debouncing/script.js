const input = document.querySelector("input");


const debounce = (cb, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

//here the debounce is immediately called when the code runs and the returned function is stored in updateDebounce so the args passed
// to updateDebounce are actually passed to the cb in debounce
const updateDebounce = debounce((text) => {
  console.log(text);
}, 3000);

input.addEventListener("input", (e) => {
  updateDebounce(e.target.value);
});
