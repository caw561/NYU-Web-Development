let yarns = [];

fetch("Yarn.csv")
  .then((response) => response.text())
  .then((csvText) => {
    yarns = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    }).data; // Assign parsed data to the global `yarns` variable

    console.log(yarns); // Check parsed data
    renderBooks(yarns); // Render items
  })
  .catch((error) => console.error("Error loading CSV:", error));

let wrapper = document.querySelector(".wrapper");

let renderBooks = (data) => {
  wrapper.innerHTML = ""; // Clear previous content
  data.forEach((yarn) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("yarn-item"); // Add a class for filtering
    newDiv.dataset.color = yarn["simplified-color"];
    newDiv.dataset.brand = yarn.brand;
    newDiv.dataset.weight = yarn.weight;
    newDiv.dataset.material = yarn.material;

    newDiv.innerHTML = `
      <div class="meta-data show">
        <h3>${yarn.color}</h3>
        <img src=${yarn.image} alt="YARN" width="100%">
      </div>
      <div class="meta-data hide">
        <img src=${yarn.image} alt="YARN">
        <div>
          <p>Brand: ${yarn.brand}</p>
          <p>Color: ${yarn.color}</p>
          <p>Weight: ${yarn.weight}</p>
          <p>Material: ${yarn.material}</p>
          <p>Skein Stock: ${yarn.skeins}</p>
          <a href=${yarn.link} target="_blank">Buy More</a>
        </div>
      </div>`;
    newDiv.style.backgroundColor = yarn["hex-color"];
    newDiv.addEventListener("click", () => {
      newDiv.classList.toggle("expanded");
    });
    wrapper.append(newDiv);
  });
};

// Filter dropdown elements
const colorFilter = document.getElementById("colorFilter");
const brandFilter = document.getElementById("brandFilter");
const weightFilter = document.getElementById("weightFilter");
const materialFilter = document.getElementById("materialFilter");

function filterItems() {
  let selectedColor = colorFilter.value;
  let selectedBrand = brandFilter.value;
  let selectedWeight = weightFilter.value;
  let selectedMaterial = materialFilter.value;

  document.querySelectorAll(".yarn-item").forEach(item => {
    let matchesColor = selectedColor === "all" || item.dataset.color === selectedColor;
    let matchesBrand = selectedBrand === "all" || item.dataset.brand === selectedBrand;
    let matchesWeight = selectedWeight === "all" || item.dataset.weight === selectedWeight;
    let matchesMaterial = selectedMaterial === "all" || item.dataset.material === selectedMaterial;

    if (matchesColor && matchesBrand && matchesWeight && matchesMaterial) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

// Attach event listeners
colorFilter.addEventListener("change", filterItems);
brandFilter.addEventListener("change", filterItems);
weightFilter.addEventListener("change", filterItems);
materialFilter.addEventListener("change", filterItems);

        

// newDiv.addEventListener("click", () => {
//   newDiv.style.backgroundColor;
//   newDiv.style.backgroundColor = currentColor === "white" ? yarn["hex-color"] : "white";
//   img.style.display = img.style.display === "none" ? "block" : "none";
// });
