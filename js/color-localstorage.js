/*
                Color
Add All Color On :Root & Add To localStorage
*/
// Check Local Storage Color
let allLi = document.querySelectorAll(".color-list li");

let mainColor = localStorage.getItem("color-opt");
if (mainColor !== null) {
  document.documentElement.style.setProperty(`--mainColor`, mainColor);

  allLi.forEach(function (li) {
    // Remove Active Class From All Elements
    li.classList.remove("active");
    // Add Active Class To This Element With  data-color ===  Local Storage Color
    if (li.getAttribute("data-color") === mainColor) {
      li.classList.add("active");
    }
  });
}
// Loop
allLi.forEach(function (li) {
  li.addEventListener("click", (e) => {
    // Remove Active Class From All Elements
    allLi.forEach(function (li) {
      li.classList.remove("active");
    });
    // Add Active Class To This Element
    e.target.classList.add("active");
    // Set Color On :Root
    document.documentElement.style.setProperty(
      `--mainColor`,
      e.target.getAttribute("data-color")
    );
    // Set Color in Local Storage
    localStorage.setItem("color-opt", e.target.dataset.color);
  });
});
