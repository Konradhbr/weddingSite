// logo slider -------------------------------------------
// eslint-disable-next-line no-undef
$(document).ready(() => {
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
    responsive: [
      {
        breakpoint: 2160,
        settings: {
          slidesToShow: 3,
        },
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      }],
  });
});

// hamburger and dropdown click-------------------------------------------------
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navbar = document.querySelector('#services');

const hamburgerHandleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
};

const navbarHandleClick = () => {
  document.querySelector('.dropdown').style.display = 'block';
};

hamburger.addEventListener('click', hamburgerHandleClick);
navbar.addEventListener('click', navbarHandleClick);

// contact form -------------------------------------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbzGHRdv5kI7hdSaqhIRvKxYym-9aIhdObuugDlceWCkx4B8hRYz/exec';
const form = document.forms['google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => alert('Wiadomość została wysłana! Skontaktujemy się z Państwem najszybciej jak to możliwe :)'))
    .catch((error) => console.error('Error!', error.message));
});
