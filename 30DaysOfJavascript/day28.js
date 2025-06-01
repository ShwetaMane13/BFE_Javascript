const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Grapes",
  "Pineapple",
  "Strawberry",
  "Orange",
  "Watermelon",
  "Cherry",
];

const renderList = (items) => {
  resultsList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    resultsList.appendChild(li);
  });
};

renderList(fruits);

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(query)
  );
  renderList(filtered);
});
