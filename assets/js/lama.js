$(".vpop").on("click", function (o) {
    o.preventDefault(),
        $(
            "#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close"
        ).show();
    var o = "",
        e = "";
    $(this).data("id"),
        "vimeo" == $(this).data("type")
            ? (o = "//player.vimeo.com/video/")
            : "youtube" == $(this).data("type") && (o = "assets/licence/about.MP4"),
        1 == $(this).data("autoplay") && (e = "?autoplay=1"),
        $("#video-popup-iframe").attr("src", o + e),
        $("#video-popup-iframe").on("load", function () {
            $("#video-popup-container").show();
        });
}),
    $("#video-popup-close, #video-popup-overlay").on("click", function (o) {
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
        400 < $(document).scrollTop()
            ? $(".back-to-top").addClass("show")
            : $(".back-to-top").removeClass("show");
    }),
    $(".nav-link").click(function (o) {
        $(".nav-link").removeClass("active"), $(this).addClass("active");
    });
