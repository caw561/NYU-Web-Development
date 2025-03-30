
/*fetch("books.csv")
  .then((response) => response.text())
  .then((csvText) => {
    let books = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    }).data; // assign csv text to the variable books.
    console.log(books); // Check parsed data
    renderBooks(books); // Run the function
  })
  .catch((error) => console.error("Error loading CSV:", error));

let wrapper = document.querySelector(".wrapper");

let renderBooks = (data) => {
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    // Data Attributes
    newDiv.setAttribute("data-genre", book.genre);
    newDiv.innerHTML = `<h3>${book.title}</h3><p>${book.author}</p>`;
    wrapper.append(newDiv);
  });
};*/

const filterContainer = document.getElementById("filter-container");
const colorSelection = document.getElementById("color-selection");
const itemsContainer = document.getElementById("items-container");
const items = document.querySelectorAll(".item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-button")) {
    const filterType = event.target.dataset.filter;

    if (filterType === "colors") {
      colorSelection.classList.toggle("hidden");
    }
  }

  if (event.target.classList.contains("color-button")) {
    const color = event.target.dataset.color;

    items.forEach((item) => {
      if (color === "all" || item.classList.contains(color)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});

