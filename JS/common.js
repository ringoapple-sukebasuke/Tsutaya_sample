$(function () {
  $(".slider").slick({
    autoplay: true,
    dots: true,
    adaptiveHeight: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "15%"
  });
});

$(function () {
  $(".slider_recommend").slick({
    autoplay: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 6,
    slidesToScroll: 1
  });
});