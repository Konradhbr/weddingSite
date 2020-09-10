// logo slider -------------------------------------------
$(document).ready(() => {
  $('.wedding-logo ').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
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

// hamburger click-------------------------------------------------
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  mobileMenu.classList.toggle('mobile-menu--active');
};

hamburger.addEventListener('click', handleClick);
