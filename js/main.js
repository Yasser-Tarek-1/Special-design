/*
                Setting Box
*/
// Setting
// Select Setting  Element
document.querySelector(".toggle-setting").addEventListener("click", () => {
  document.querySelector(".setting-box i").classList.toggle("fa-spin");
  // Toggle Class options On Main Setting Box
  document.querySelector(".setting-box").classList.toggle("options");
});

/*
                Color
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

/*
                BackGround Random              
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

// // Random Background Option
// let backgroundOption = true;

// // Control To Interval
// let backgroundInterval;

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

/*
                Our Skills
*/
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop; //   يعني موقعه فين  .ourskills بتجيب ارتفاع العناصر الي فوق ال
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight; // .ourskills بتجيب ارتفاع العنصر الي هو
  // Window Hight
  let windowHight = this.innerHeight; // ارتفاع الصفحه الي انا فيها
  // Window ScrollTop
  let windowScrollTop = scrollY;
  if (windowScrollTop >= skillsOffsetTop + skillsOuterHeight - windowHight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
      skill.classList.add("ratio");
    });
  }
};

/*
                Our Gallrey
*/
// Creat Popup With The Imgs
let ourGallery = document.querySelectorAll(".gallrey .imgs-box img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (img) => {
    // Creat Overlay Element
    let overLay = document.createElement("div");
    overLay.classList.add("popup-overlay");
    // Append
    document.body.appendChild(overLay);

    // Creat Popup Box
    let popupBox = document.createElement("div");
    popupBox.classList.add("popup-box");

    // Creat Heading
    if (img.alt !== null) {
      // Creat Heading
      let headImg = document.createElement("h3");
      let textHeadImg = document.createTextNode(img.target.alt);
      headImg.appendChild(textHeadImg);
      // Append Heading To The Popup Box
      popupBox.appendChild(headImg);
    }

    // Creat Img
    let popupImg = document.createElement("img");
    // Set Img Source
    popupImg.src = img.target.src;
    // Add Img To Popup Box
    popupBox.appendChild(popupImg);

    // Append Popup Box To Body
    document.body.appendChild(popupBox);

    // Creat Close Span
    let closeSpan = document.createElement("span");
    closeSpan.classList.add("close-span");
    closeSpan.innerHTML = "X";
    // Add Close Span To The Popup Box
    popupBox.appendChild(closeSpan);
  });
});

// Close Popup
document.addEventListener("click", (e) => {
  if (e.target.className === "close-span") {
    // Remove Popup Box
    e.target.parentNode.remove();
    // Remove PopupOovrlay
    document.querySelector(".popup-overlay").remove();
  }
});
