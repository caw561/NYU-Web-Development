fetch("Yarn.csv")
  .then((response) => response.text())
  .then((csvText) => {
    let yarns = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
    }).data; // assign csv text to the variable books.
    console.log(yarns); // Check parsed data
    renderBooks(yarns); // Run the function
  })
  .catch((error) => console.error("Error loading CSV:", error));

let wrapper = document.querySelector(".wrapper");

let renderBooks = (data) => {
  data.forEach((yarn) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<h3>${yarn.color}</h3>
    <img src=${yarn.image} alt="YARN" width = 100%>`;
    newDiv.addEventListener("click", () => {
      let currentColor = newDiv.style.backgroundColor;
      newDiv.style.backgroundColor = currentColor === "white" ? yarn["hex-color"] : "white";
      img.style.display = img.style.display === "none" ? "block" : "none";
    });
    wrapper.append(newDiv);
  });
};
