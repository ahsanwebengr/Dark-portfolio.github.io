// Mobile Responsive Menu bar 
let navToggle = document.querySelector('.NavToggle');
let menuBar = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function () {
  menuBar.classList.toggle('show');
})
// Hide nav after clicking on nav links

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  navToggle.classList.remove("show");
  menuBar.classList.remove("show");
}));

// On Scroll Color change 

let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

// owl carousel 
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dot: true,
  items: 1,
})