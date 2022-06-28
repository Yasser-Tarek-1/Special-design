/*
                Setting Box
          Show & Hidden Setting Box
*/
// Select Setting  Element
document.querySelector(".toggle-setting").addEventListener("click", () => {
  document.querySelector(".setting-box i").classList.toggle("fa-spin");
  // Toggle Class options On Main Setting Box
  document.querySelector(".setting-box").classList.toggle("options");
});

// Rest Option
document
  .querySelector(".setting-box .rest-opt")
  .addEventListener("click", () => {
    localStorage.clear();
    // localStorage.removeItem("color-opt");
    // localStorage.removeItem("background-option");
    // localStorage.removeItem("localBull");
    window.location.reload();
  });

/*
                Header
              Show Links  
*/
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

document.addEventListener("click", (e) => {
  if (e.target !== bar) {
    if (links.classList.contains("show")) {
      links.classList.toggle("show");
    }
  }
});

// Stop Propagation On Links
links.onclick = (e) => {
  e.stopPropagation();
};

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

/*
            Contact
*/

document.querySelector(".contact form").onsubmit = function (e) {
  let mail = document.querySelector("form .info .mail").value;
  let regEx = /\w+@\w+\.\w+/gi;
  if (regEx.test(mail) === false) {
    return false;
    // e.preventDefault();
  }
};
