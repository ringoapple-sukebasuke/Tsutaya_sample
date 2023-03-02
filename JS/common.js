
$(function () {
  let width = $(window).width();
  if(width >= 750) {
    $(".slider").slick({
      autoplay: true,
      dots: true,
      arrows: true,
      adaptiveHeight: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: "15%"
    });
  } else {
    $(".slider").slick({
      autoplay: true,
      arrows: false,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});

$(function () {
  let width = $(window).width();
  if(width >= 750) {
    $(".slider_recommend").slick({
      autoplay: true,
      arrows: true,
      adaptiveHeight: true,
      slidesToShow: 6,
      slidesToScroll: 1
    });
  } else {
    $(".slider_recommend").slick({
      autoplay: true,
      arrows: false,
      adaptiveHeight: true,
      slidesToShow: 2,
      slidesToScroll: 1
    });
  }
});


window.addEventListener("scroll", function() {
  var header = document.querySelector(".scroll_header");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > header.clientHeight) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
});
