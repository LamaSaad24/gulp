$(".vpop").on("click", function e(o) {
  o.preventDefault(),
    $(
      "#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close"
    ).show();
  var i = "",
    p = "";
  if (($(this).data("id"), "vimeo" == $(this).data("type")))
    var i = "//player.vimeo.com/video/";
  else if ("youtube" == $(this).data("type"))
    var i = "assets/licence/about.MP4";
  !0 == $(this).data("autoplay") && (p = "?autoplay=1"),
    $("#video-popup-iframe").attr("src", i + p),
    $("#video-popup-iframe").on("load", function () {
      $("#video-popup-container").show();
    });
}),
  $("#video-popup-close, #video-popup-overlay").on("click", function (e) {
    $(
      "#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay"
    ).hide(),
      $("#video-popup-iframe").attr("src", "");
  }),
  $(".clients").slick({
    centerMode: !0,
    centerPadding: "60px",
    slidesToShow: 5,
    arrows: !1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: !1,
          centerMode: !0,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: !1,
          centerMode: !0,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  }),
  $(".clients").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: !0 },
  }),
  $(document).scroll(function () {
    $(document).scrollTop() > 400
      ? $(".back-to-top").addClass("show")
      : $(".back-to-top").removeClass("show");
  }),
  $(".nav-link").click(function (e) {
    $(".nav-link").removeClass("active"), $(this).addClass("active");
  });
