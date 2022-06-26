/*
                Bullets
*/
let bull = document.querySelectorAll(".bull span");
let nav = document.querySelector(".nav-bullets");

let localBull = localStorage.getItem("localBull");

if (localBull !== null) {
  if (localBull === "no") {
    nav.classList.add("hidden");
    document.querySelector(".bull span.false").classList.add("active");
    document.querySelector(".bull span.true").classList.remove("active");
  } else {
    nav.classList.remove("hidden");
    document.querySelector(".bull span.true").classList.add("active");
    document.querySelector(".bull span.false").classList.remove("active");
  }
}

bull.forEach((span) => {
  span.addEventListener("click", (e) => {
    bull.forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.bull === "no") {
      nav.classList.add("hidden");
      localStorage.setItem("localBull", e.target.dataset.bull);
    } else {
      nav.classList.remove("hidden");
      localStorage.setItem("localBull", e.target.dataset.bull);
    }
  });
});
