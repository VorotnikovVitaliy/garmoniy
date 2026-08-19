document.querySelectorAll('.nav-menu-button').forEach(elem => { 
    elem.addEventListener('click', _=> { 
      document.querySelectorAll('.site-header').forEach(elem2 => { 
        elem2.classList.toggle('open');
      })
    })
  })



var defaultSliderConfig = {
    slidesToScroll: 1,
    arrows: true,
    cssEase: 'linear',
    speed: 500,
    fade: false,
    infinite: true,
    autoplay: false,
    swipeToSlide: true
};

var sliderConfigs = {
    'hero-slider': {
        slidesToShow: 1,
        fade: true,
        dots: true,
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            arrows: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: false
          }
        }
        ]
    },
    'stocks-slider': {
        slidesToShow: 3,
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            arrows: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '80px',
            arrows: false
          }
        }
        ]
    },
    'specialists-slider': {
        slidesToShow: 4,
        responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            arrows: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        }
        ]
    },
    'awards-slider': {
        slidesToShow: 3,
        responsive: [
        {
          breakpoint: 1399,
          settings: {
            slidesToShow: 2,
            arrows: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '60px',
            arrows: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '120px',
            arrows: false
          }
        }
        ]
    }
};

$('.garmoniy-main-slaider').each(function () {
    var $carousel = $(this);
    var carouselId = $carousel.data('carousel-id');

    var customConfig = sliderConfigs[carouselId] || {};

    var config = $.extend(true, {}, defaultSliderConfig, customConfig);

    // 

    var $arrowsContainer = $('.arrows_inner[data-arrows-for="' + carouselId + '"]');

    if ($arrowsContainer.length === 0) {
      $arrowsContainer = $('<div class="arrows_inner" data-arrows-for="' + carouselId + '"></div>');
      $carousel.closest('.block-top').find('.block-top__right').append($arrowsContainer);
    }
    config.appendArrows = $arrowsContainer;

    // 

    var $dotsContainer = $('.dots_inner[data-dots-for="' + carouselId + '"]');

    if ($dotsContainer.length === 0) {
        $dotsContainer = $('<div class="dots_inner" data-dots-for="' + carouselId + '"></div>');
        $carousel.closest('.block-top').find('.block-top__right').append($dotsContainer);
    }
    config.appendDots = $dotsContainer;

    // 

    $carousel.slick(config);

  });

  // При открытии аккордеона
  $('.accordion-collapse').on('show.bs.collapse', function () {
    $(this).closest('.accordion-item').addClass('active');
  });

  // При закрытии аккордеона
  $('.accordion-collapse').on('hide.bs.collapse', function () {
    $(this).closest('.accordion-item').removeClass('active');
  });


// function fixSlickHeight() {
//     $('.garmoniy-main-slaider').each(function() {
//         var $slider = $(this);
//         var $slides = $slider.find('.slick-slide');
//         var maxHeight = 0;
        
//         $slides.each(function() {
//             var $slide = $(this);
//             var height = $slide.outerHeight();
//             if (height > maxHeight) {
//                 maxHeight = height;
//             }
//         });
        
//         if (maxHeight > 0) {
//             $slides.css('height', maxHeight + 'px');
//         }
//     });
// }

// $(document).on('init reInit afterChange', '.garmoniy-main-slaider', function() {
//     setTimeout(fixSlickHeight, 100);
// });

// $(window).on('load resize', function() {
//     setTimeout(fixSlickHeight, 200);
// });



























