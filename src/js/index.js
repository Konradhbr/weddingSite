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

