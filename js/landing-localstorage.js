/*
                BackGround Random 
            1) Changing Background
            2) Add Option Stop Changing Background
            3) Save Option in localStorage
*/

// Switch BackGround Opt
let random = document.querySelectorAll(".random-back span");

// Random Background Option
let backgroundOption = true;

// Control To Interval
let backgroundInterval;

// Check If  There is Local Storage Random Background Item
let backgroundLocalItem = window.localStorage.getItem("background-option");

// Check In backgroundLocalItem Empty or Not
if (backgroundLocalItem !== null) {
  // console.log(typeof backgroundLocalItem);
  // console.log(backgroundLocalItem);
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }
  random.forEach((span) => {
    span.classList.remove("active");
  });
  if (backgroundLocalItem === "true") {
    document.querySelector(".random-back .yes").classList.add("active");
  } else {
    document.querySelector(".random-back .no").classList.add("active");
  }
}

// Loop On All Spans
random.forEach((e) => {
  e.addEventListener("click", (ac) => {
    random.forEach((span) => {
      span.classList.remove("active");
    });
    ac.target.classList.add("active");
    if (ac.target.getAttribute("data-background") === "yes") {
      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
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

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Change Background Image Url
      landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
    }, 5000);
  }
}
randomizeImgs();
