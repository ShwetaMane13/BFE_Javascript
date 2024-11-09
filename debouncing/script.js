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

const updateDebounce = debounce((text) => {
  console.log(text);
}, 3000);

input.addEventListener("input", (e) => {
  updateDebounce(e.target.value);
});
