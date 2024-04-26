$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  /* mobile nav */
  $(".mobile-menu").click(function () {
    $("#header-menu").toggleClass("show-mobile-menu");
    $(".mobile-menu").toggle();
  });

  $(".mobile-menu-close").click(function () {
    $("#header-menu").toggleClass("show-mobile-menu");
    $(".mobile-menu").toggle();
  });
});
