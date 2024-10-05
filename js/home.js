const hamborger = document.querySelector(".hamborger");
const linksContener = document.querySelector(".nav-links");
const allLink = document.querySelectorAll(".nav-links li");
hamborger.addEventListener("click", () => {
  linksContener.classList.toggle("active");
  hamborger.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width:930px)").matches) {
    closeMinue();
  }
});
if (window.matchMedia("(max-width:930px)").matches) {
  closeMinue();
}
function closeMinue() {
  allLink.forEach((item) => {
    item.addEventListener("click", () => {
      linksContener.classList.remove("active");
      hamborger.classList.remove("active");
    });
  });
}
const textMove = "  Free shipping on U.S.orders $25 or more. 🌟";
const count = 4;
const titleMove = document.querySelector("#titleMove");
const textArray = Array.from({ length: count }, () => textMove);
titleMove.innerHTML = textArray.map((items) => `<p>${items}</p>`).join();

// Get all inner-div elements
const cards = document.querySelectorAll(".card");
function fiveStar() {
  const starsContainer = document.querySelectorAll(".stars-container");

  const numberOfStars = 5; // عدد النجوم الذي تريده
  starsContainer.forEach((item) => {
    for (let i = 0; i < numberOfStars; i++) {
      const img = document.createElement("img");
      if (img) {
        img.src = "./images/rating-star.png";
      }

      img.alt = "";
      item.appendChild(img);
    }
  });
}
fiveStar();
// Loop through each inner-div
function changImg() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    // Get all span-items within this inner-div
    const spanItems = card.querySelectorAll(".changimg");

    // Add click event listener to each span-item
    spanItems.forEach(function (spanItem) {
      spanItem.addEventListener("click", function () {
        // Find the main-image within this inner-div
        const mainImage = card.querySelector(".img-product");
        // Get the value of data-image-src attribute
        const imageSrc = spanItem.getAttribute("data-image-src");
        // Change the main image source based on data-image-src
        if (imageSrc) {
          mainImage.style.opacity = "0";
          setTimeout(function () {
            mainImage.src = imageSrc;
            mainImage.style.opacity = "1";
          }, 300);
        }
      });
    });
  });
}
changImg();

function displayText() {
  const text = document.querySelectorAll(".aria-hidden");
  const data = document.querySelectorAll(".text");
  text.forEach(function (item) {
    const arrow = item.querySelector(".arrow");
    const content = item.querySelector(".text");
    arrow.addEventListener("click", function () {
      content.style.display =
        content.style.display === "none" ? "block" : "none";
      data.forEach(function (otherItem) {
        if (otherItem !== content) {
          otherItem.style.display = "none";
        }
      });
    });
  });
}
displayText();

const slider = document.querySelectorAll(".slidimg");
const gotoslide = function (slide) {
  slider.forEach((v, i) => {
    v.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
const dots = document.querySelectorAll(".dot button");
dots.forEach((e) =>
  e.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
      const { slid } = e.target.dataset;
      gotoslide(slid);
      activatdot(slid);
    }
  })
);
const all = document.querySelectorAll(".btn");
const activatdot = function (slid) {
  all.forEach((dot) => dot.classList.remove("btn-active"));
  document
    .querySelector(`.btn[data-slid="${slid}"]`)
    .classList.add("btn-active");
};
//  activatdot()
// const likedetalies=cards.forEach(e=> )
// console.log(likedetalies);
