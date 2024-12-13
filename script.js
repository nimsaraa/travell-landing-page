const menubar = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-close");
const navbar = document.querySelector("#navbar");

menubar.addEventListener("click", () => {
    navbar.classList.add("active");
});


close.addEventListener("click", () => {
    navbar.classList.remove("active");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };


  ScrollReveal().reveal(" .text-box ", {
    ...scrollRevealOption,
    delay: 1500,
  });


