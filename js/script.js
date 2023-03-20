const imgHeader = document.querySelector(".img-header");
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
    /*end: ".mapa"[2].bottom,*/
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

/*

const tl = new TimelineMax();*/

/* const mapas = document.querySelectorAll(".mapa");

window.addEventListener("scroll", showContentY);

showContentY();

function showContentY() {
  const triggerBottom = (window.innerHeight)*1.25;

  mapas.forEach((mapa) => {
    const mapaTop = mapa.getBoundingClientRect().top;
    
    if (mapaTop < triggerBottom ) {
      mapa.classList.add("show");
    } else {
      mapa.classList.remove("show");
    }
  });

}*/
