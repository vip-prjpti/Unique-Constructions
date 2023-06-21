let navbar = document.querySelector(".header .navbar");

let contactInfo = document.querySelector(".contact-info");
let closebtn = document.getElementById("close-contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};

closebtn.onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove(".active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  grabCursor:true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
 
