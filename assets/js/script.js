//slider
$('#already-working__slider').slick({
            dots: false,
            prevArrow: false,
            nextArrow: false,
            slidesToShow: 11,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        speed: 1000,
                    }
                }
            ]
        });


let sliderHeight = 0;
document.querySelectorAll(".posted-vacancies__slider-item").forEach(elem => {
    if (sliderHeight < elem.clientHeight) {
        sliderHeight = elem.clientHeight
    }
});
document.querySelectorAll(".posted-vacancies__slider-item").forEach(elem => {
    elem.style.height = `${sliderHeight - 60}px`
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    dots: true,
});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    prevArrow: $(this).parent().find(".arrow_prev"),
    nextArrow: $(this).parent().find(".arrow_next"),
    dots: false,
    fade: true,
});

$('.arrow_prev').click(function () {
    $('.slider-nav').slick('slickPrev');
});

$('.arrow_next').click(function () {
    $('.slider-nav').slick('slickNext');
});

const sliderItemsNum = $('.slider-nav').find('.slick-slide').not('.slick-cloned').length;
$('.slider-nav').parent().find('.slider-block__navigation .slider-block__total').html(String(sliderItemsNum).length < 2 ? '0' + sliderItemsNum : sliderItemsNum);

$('.slider-nav').on('afterChange', function (event, slick, currentSlide) {
    const current = String(currentSlide).length < 2 ? '0' + (currentSlide + 1) : currentSlide + 1;
    $('.slider-nav').parent().find('.slider-block__numbers .slider-block__active').html(current);
});

//

// menu mobile
const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        headerMenu.classList.add("header-menu__open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        headerMenu.classList.remove("header-menu__open");
        menuOpen = false;
    }
});

function goToSpecialist() {
    window.open('https://www.specialist.hrhunt.ru/')
}

function goToCompany() {
    window.open('https://www.company.hrhunt.ru/')
}

// Mobile Slider
function mobileSlider($slidername, $dots, $breakpoint) {
  let slider = $($slidername);
  let settings = {
    mobileFirst: true,
    variableWidth: true,
    slidesToShow: 2,
    centerMode: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    dots: $dots,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };
  
  slider.slick(settings);
  
  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}

mobileSlider(".card-content", true, 1033);

let item = document.querySelectorAll(".card-item > div")
  for (let i = 0; i < item.length; i++){
    item[i].addEventListener("mouseover", function () {
      if(window.innerWidth >= 1033){
        document.querySelector('.card-item.active').classList.remove("active")
      item[i].parentElement.classList.add("active")
      }
      
    }, false)
    item[i].addEventListener("mouseout", function () {
      if(window.innerWidth >= 1033) {
        item[i].parentElement.classList.remove("active")
        document.querySelector('.card-item.classic').classList.add("active")
      }
    }, false)
  }

