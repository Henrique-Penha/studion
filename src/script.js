$(document).ready(() => {
  // MENU 
  $('.navbar__menu-btn').on('click', function (){
    $('.navbar__links').toggleClass('active');
    $(this).find('i').toggleClass('fa-bars');
    $(this).find('i').toggleClass('fa-times');
  })

  // CAROUSEL
  const slickOptions = {
      autoplay: true,
      dots: false,
      prevArrow:
        '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
      nextArrow:
        '<button type="button" class="slick-next slider__next-arrow">Next</button>;'
  };

  const counterOptions = {
      delay: 20,
      time: 2000
  };
  $('.slider').slick(slickOptions);
  $('.counter__number').counterUp(counterOptions);
})

$(document).ready(() => {
  const slickOptions = {
    autoplay: true,
    dots: false,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Next</button>;'
  };
  $('.slider__dep').slick(slickOptions);
})