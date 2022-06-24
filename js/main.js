/*
                Setting Box
*/
// Select Setting  Element
document.querySelector(".toggle-setting").addEventListener("click", () => {
  document.querySelector(".setting-box i").classList.toggle("fa-spin");
  // Toggle Class options On Main Setting Box
  document.querySelector(".setting-box").classList.toggle("options");
});

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

/*
                Landing
*/
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = [
  "landing-1.jpg",
  "landing-2.jpg",
  "landing-3.jpg",
  "landing-4.jpg",
  "landing-5.jpg",
];

setInterval(() => {
  // Get Random Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change Background Image Url
  landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
}, 5000);

// Select Bar  Element
let bar = document.querySelector(".select-js");
let links = document.querySelector(".links");

bar.addEventListener("click", () => {
  links.classList.toggle("show");
  document.querySelectorAll(".links li").forEach(function (ele) {
    ele.onclick = function () {
      links.classList.toggle("show");
    };
  });
});
