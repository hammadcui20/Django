// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("search_form");

//   form.addEventListener("submit", function (event) {
//     // event.preventDefault(); // Prevent the default form submission behavior

//     const formData = new FormData(form);

//     fetch(form.action, {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the JSON response (e.g., update the UI with the data)
//         console.log(data);
//         // Example: render the data in the UI
//         renderData(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   });

//   function renderData(data) {
//     // Example: Render the data in the UI (e.g., create HTML elements dynamically)
//     const resultsContainer = document.getElementById("results_container");
//     resultsContainer.innerHTML = ""; // Clear previous results

//     data.forEach((item) => {
//       const paperTitle = document.createElement("h3");
//       paperTitle.textContent = item["Paper Title"];

//       // Create other elements (e.g., for other fields like Year, Author, Publication, Url of paper) and append them to the resultsContainer
//       // Example:
//       const year = document.createElement("p");
//       year.textContent = "Year: " + item["Year"];

//       const author = document.createElement("p");
//       author.textContent = "Author: " + item["Author"];

//       const publication = document.createElement("p");
//       publication.textContent = "Publication: " + item["Publication"];

//       const url = document.createElement("a");
//       url.href = item["Url of paper"];
//       url.textContent = "Url of paper";

//       const listItem = document.createElement("div");
//       listItem.classList.add("paper-item");
//       listItem.appendChild(paperTitle);
//       listItem.appendChild(year);
//       listItem.appendChild(author);
//       listItem.appendChild(publication);
//       listItem.appendChild(url);

//       resultsContainer.appendChild(listItem);
//     });
//   }
// });
