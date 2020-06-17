/*jslint browser: true*/
/*global $, jQuery, alert*/

$(window).on('load', () => {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    if ($(window).width() < 1000) {
        $(".nav1").css("display", "none");
        $(".stickNav").css({transform: "scale(1)", position: "static", opacity: "1", zIndex: "1", backgroundColor: "transparent", boxShadow: "none"});
        $(".explore").css({top: "0"});
        $(".explore p").css({fontSize: "0.8em", marginTop: "19px"});
    } else {
        $("#nav").addClass("nav1");
    }
    $('body').delay(350).css({overflowY: 'visible'});
    $('body').scrollLeft(0);
    $(".container > h1").addClass('code');
    $(".container > p").css({padding: 0});
    
    if ($(window).width() < 450)
        $(".wrapper > img").attr("src", "./images/niraj2-LOW.jpg");
});

$(window).scroll(() => {
    var top = $(this).scrollTop();
     if (top >= $(".container").offset().top+50) {
        $(".content-wrapper").css({transform: "scaleY(1)", opacity: "1"});
        setTimeout(() => $("#content-wrapper-main").css({opacity: "1"}), 500);
    }
});

if ($(window).width() >= 1000) {
    var previousScroll = 0;

    $(window).scroll(() => {
        var top = $(this).scrollTop();
        if (top >= 100 && top < $("#section-1").offset().top && $(".nav2").css("display") == "none") {
            $(".stickNav").css({transform: "scale(1)", opacity: "1", zIndex: "999"});
        } else if (top > $("#section-1").offset().top && top < previousScroll && $(".nav2").css("display") == "none") {
            $(".stickNav").css({height: "90px", transform: "scale(1)", opacity: "1", zIndex: "999"}); 
        } else {
            if (top < 100) {
                $(".stickNav").css({transform: "scaleY(1.5)", opacity: "0", zIndex: "-1"});
            } else {
                $(".stickNav").css({height: "0", transform: "scale(1)", opacity: "0", zIndex: "-1"}); 
            }
        }
        previousScroll = top;
    });
}

if ($(window).width() >= 700) {
    $(window).scroll(() => {
        if ($(this).scrollTop() > $(".content-wrapper").offset().top) {
            $(".post-large").css({transform: "translateY(0)", opacity: "1"});
        }
        if ($(this).scrollTop() > $(".post-large").offset().top+400) {
            $(".post-container").css({transform: "translateY(0)", opacity: "1"});
        }
    });
} else {
    $("#section-2 > div:first-child").addClass("post-small small0").removeClass("post-large");
    $(".post-container").css({transform: "translateY(0)", opacity: "1", display: "block"});
    $(".small0").css("margin-top", "-10vh");
    $(window).scroll(() => {
        if ($(this).scrollTop() > $("#section-1").offset().top) {
            $(".small0").animate({opacity: "1"}, 1000, () => {
                $(".small1").animate({opacity: "1"}, 1000, () => {
                    $(".small2").animate({transform: "scale(1)", opacity: "1"}, 1000);
                });
            });
        }
    });
}

$(".nav1 ul li:nth-child(3)").on({
    mouseenter: () => {
        $(".nav1 ul li:nth-child(3)").css({cursor: "pointer", backgroundColor: "#fff"});
        $(".nav1 ul li:nth-child(3) a").css("color", "#000");
    },
    mouseleave: () => {
        $(".nav1 ul li:nth-child(3)").css("background-color", "transparent");
        $(".nav1 ul li:nth-child(3) a").css("color", "#fff");
    }
});

const onBtnHover = (e) => {
    $(e).css({cursor: "pointer", backgroundColor: "#96cdef"});
    $(".btn-wrapper > a > " + e).css("color", "#000");
};

const onBtnLeave = (e) => {
    $(e).css("background-color", "transparent");
    $(".btn-wrapper > a > " + e).css("color", "#96cdef");
};

$(".btn").on({
    mouseenter: () => {onBtnHover(".btn")},
    mouseleave: () => {onBtnLeave(".btn")}
});

$(".btn2").on({
    mouseenter: () => {onBtnHover(".btn2")},
    mouseleave: () => {onBtnLeave(".btn2")}
});

$("footer > p ").on ({
    mouseenter: () => {
        $("footer > p ").css({cursor: "pointer", backgroundColor: "#96cdef", color: "#1a1a1a"});
        $("footer > img").css({display: "none"});
        $("footer > p > span > img").css("visibility", "visible").animate({top: "0.6vh"}, 100);
    },
    mouseleave: () => {
        $("footer > p ").css({backgroundColor: "transparent", color: "#96cdef"});
        $("footer > img").css({display: "block"});
        $("footer > p > span > img").css({visibility: "hidden", top: "3vh"});
    },
    click: () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
});

const onPostHover = (e, mt) => {
    $(e).css("cursor", "pointer");
    $(e + " .img-wrapper img").css({filter: "brightness(0.5)"});
    $(e + " .text-wrapper p").css({opacity: "1"});
    $(e + " .text-wrapper").css({marginTop: "-"+mt+"%"});
    $(e + " .text-wrapper hr").css({width: "0"});
    $(e + " .arrow-wrapper").css({width: "40px"});
};

const onPostLeave = (e) => {
    $(e + " .img-wrapper img").css({filter: "none"});
    $(e + " .text-wrapper p").css({opacity: "0"});
    $(e + " .text-wrapper").css({marginTop: "0"});
    $(e + " .text-wrapper hr").css({width: "2%"});
    $(e + " .arrow-wrapper").css({width: "0"});
};

$(".post-large").on({
    mouseenter: () => {onPostHover(".post-large", "8");},
    mouseleave: () => {onPostLeave(".post-large");}
});

$(".small0").on({
    mouseenter: () => {onPostHover(".small0", "15")},
    mouseleave: () => {onPostLeave(".small0")}
});


$(".small1").on({
    mouseenter: () => {onPostHover(".small1", "15")},
    mouseleave: () => {onPostLeave(".small1")}
});

$(".small2").on({
    mouseenter: () => {onPostHover(".small2", "15")},
    mouseleave: () => {onPostLeave(".small2")}
});
