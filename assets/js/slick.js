$(document).ready(function() {
  $('.slick__container').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1099, // Если экран меньше 1099px
        settings: {
          arrows: false, // Скрыть стрелки
          dots: true // Показать точки
        }
      },
      {
        breakpoint: 1100, // Если экран больше 1100px
        settings: {
          arrows: true, // Показать стрелки
          dots: false // Скрыть точки
        }
      }
    ]
  });

  $('.our-team-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1099, // Если экран меньше 1099px
        settings: {
          arrows: false, // Скрыть стрелки
          dots: true // Показать точки
        }
      },
      {
        breakpoint: 1100, // Если экран больше 1100px
        settings: {
          arrows: true, // Показать стрелки
          dots: false // Скрыть точки
        }
      }
    ]
  });
  
  $('.stock-slick').slick({
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1099, // Если экран меньше 1099px
        settings: {
          arrows: false, // Скрыть стрелки
          dots: true // Показать точки
        }
      },
      {
        breakpoint: 1100, // Если экран больше 1100px
        settings: {
          arrows: true, // Показать стрелки
          dots: false // Скрыть точки
        }
      }
    ]
  });
  
  
  $('.personas-slick').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1099, // Если экран меньше 1099px
        settings: {
          arrows: false, // Скрыть стрелки
          dots: true // Показать точки
        }
      },
      {
        breakpoint: 1100, // Если экран больше 1100px
        settings: {
          arrows: true, // Показать стрелки
          dots: false // Скрыть точки
        }
      }
    ]
  });

  $('.diplomas-slick').slick({
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1099, // Если экран меньше 1099px
        settings: {
          arrows: false, // Скрыть стрелки
          dots: true // Показать точки
        }
      },
      {
        breakpoint: 1100, // Если экран больше 1100px
        settings: {
          arrows: true, // Показать стрелки
          dots: false // Скрыть точки
        }
      }
    ]
  });

});

