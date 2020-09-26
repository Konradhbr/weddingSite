"use strict";

// logo slider -------------------------------------------
// eslint-disable-next-line no-undef
$(document).ready(function () {
  // eslint-disable-next-line no-undef
  $('.wedding-logo ').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 700,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 2160,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
}); // hamburger and dropdown click-------------------------------------------------

var hamburger = document.querySelector('.hamburger');
var mobileMenu = document.querySelector('.mobile-menu');
var navbar = document.querySelector('#services');

var hamburgerHandleClick = function hamburgerHandleClick() {
  hamburger.classList.toggle('hamburger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
};

var navbarHandleClick = function navbarHandleClick() {
  document.querySelector('.dropdown').style.display = 'block';
};

hamburger.addEventListener('click', hamburgerHandleClick);
navbar.addEventListener('click', navbarHandleClick); // contact form -------------------------------------------------------------

var scriptURL = 'https://script.google.com/macros/s/AKfycbzGHRdv5kI7hdSaqhIRvKxYym-9aIhdObuugDlceWCkx4B8hRYz/exec';
var form = document.forms['google-sheet'];
form.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  }).then(function (response) {
    return alert('Wiadomość została wysłana! Skontaktujemy się z Państwem najszybciej jak to możliwe :)');
  })["catch"](function (error) {
    return console.error('Error!', error.message);
  });
});