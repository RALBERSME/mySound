const dogContainer = document.querySelector(".dog");

const dogImg = document.getElementById("dog");
const point = document.getElementById("point");
const paw = document.getElementById("paw");
const cta = document.getElementById("cta");
let bark = new Audio("sounds/dog-barking-accordion-02-090717-35543.mp3");
let crash = new Audio("sounds/crash.mp3");
function startPlay() {
  dogImg.setAttribute("src", "images/dog-40122_640.png");
  cta.style.display = "none";
  bark.play();
  bark.playbackRate = 1.5;
  point.style.display = "block";
  setTimeout(() => {
    const accordeon = document.getElementById("accordeon");
    accordeon.style.animation = "moveAccordeon 2s ease-in-out forwards";
    setTimeout(() => {
      bark.pause();
      crash.play();
    }, 2000);
  }, 17000);
}

setTimeout(() => {
  document.location.href = "piano.html";
}, 23300);
dogContainer.addEventListener("click", startPlay);
