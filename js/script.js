function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight * 1.4;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

/*const imgHeader = document.querySelector(".img-header");
const tituloHeader = document.querySelector(".titulo-header");
const subtituloHeader = document.querySelector(".subtitulo-header");
const textoHeader = document.querySelector(".texto-header");
const mapas = document.querySelectorAll(".mapa");

const tl = new TimelineMax();

tl.fromTo(
  imgHeader,
  1,
  { right: "-100%", opacity: "0" },
  { right: "0", opacity: "1", ease: Power2.EaseInOut }
);

tl.fromTo(
  subtituloHeader,
  1,
  { left: "-100%", opacity: "0" },
  { left: "0", opacity: "1", ease: Power2.EaseInOut }
);

tl.fromTo(
  tituloHeader,
  1,
  { left: "-100%", opacity: "0" },
  { left: "0", opacity: "1", ease: Power2.EaseInOut }
);

tl.fromTo(
  textoHeader,
  1,
  { left: "-100%", opacity: "0" },
  { left: "0", opacity: "1", ease: Power2.EaseInOut }
);

let tlMapas = gsap.timeline({
  scrollTrigger: {
    trigger: mapas.center,
    start: "top+=1 top",
    end: "bottom top+=30%",
    pin: mapas.top,
    markers: true,
    toggleActions: "play reset restart reset",
  },
});

tlMapas.fromTo(
  mapas, 1,
  { y: "100", opacity: "0" },
  { y: "0", opacity: "1", ease: Power2.EaseInOut }
);
*/
