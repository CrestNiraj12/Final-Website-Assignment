$(window).on("load", function() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;

    $(document).mousemove(function(e){
        mouseX = e.pageX - 25;
        mouseY = e.pageY - 25; 
    });

    setInterval(function(){
        xp += ((mouseX - xp)/6);
        yp += ((mouseY - yp)/6);
        $(".mover").css("left", xp +'px').css("top", yp +'px');
    }, 20);
    if ($(window).width() < 450) $(".desc-head-main").css({transform: "translateY(0)", opacity: "1", height: "25vh"});
    else if ($(window).width() < 800) $(".desc-head-main").css({transform: "translateY(0)", opacity: "1", height: "45vh"});
    else if ($(window).width() < 1000) $(".desc-head-main").css({transform: "translateY(0)", opacity: "1", height: "60vh"});
    else $(".desc-head-main").css({transform: "translateY(0)", opacity: "1", height: "65vh"});
    $(".desc-head-left").css({transform: "translateX(0)", opacity: "1"});
    
})


if ($(window).width() > 1000) {
    
    $("li > a, .projects > p > a").on({
        mouseenter: function() {
            $(".mover").css({width: $(this).width()+10, height: $(this).height()+10});
        },
        mouseleave: () => $(".mover").css({width: "10px", height: "10px"})
    });
    
    function hoverText(text) {
        $(".mover").css({width: "100px", height: "100px"}).append(`<p class='mover-text'>${text}</p>`);
    }

    function resetMover() {
        $(".mover").css({width: "10px", height: "10px", borderRadius: "50%"}).text("")
    }

    $(".skill h1").on({
        mouseenter: function (){ $(".mover").css({width: $(this).width(), height: $(this).height(), borderRadius: "0"}) }, 
        mouseleave: () => resetMover()
    })

    $(".main-1, .main-2, .web-1, .web-2, .web-3, .frame-1, .back, .db").on({
        mouseenter: function () {hoverText($(this).children()[1].textContent)},
        mouseleave: () => resetMover()
    })
    
    $("header > .stickNav, header > #overlay, header > #overlay2, header > .nav2").css("display", "none");
} else {
    $("body > .stickNav, body > #overlay, header > #overlay2, body > .nav2").css("display", "none");
}


var preScroll = 0;
var move = 0;
$(window).scroll(() => {
    var topScroll = $(window).scrollTop();
    if ($(window).width() > 1000)  {
        if (topScroll > $("#content").offset().top-300) {
            $(".mover").css({borderColor: "#000"});
            if (topScroll > preScroll) {
                $(".stickNav").css({height: "0", transform: "scale(1)", opacity: "0", zIndex: "-1"}); 
            } else{
                $(".stickNav").css({height: "90px", transform: "scale(1)", opacity: "1", zIndex: "999"}); 
            }
        } else if (topScroll < $("#content").offset().top) {
            $(".mover").css({borderColor: "#fff"});
        }
    
        $(".skill").each(function (n,e) {
            if (topScroll >= $(e).offset().top-400 && topScroll < $(e).offset().top+350) {
                $(e.children[0].children[0]).css("filter", "saturate(0.5) brightness(1)");
                if ($(window).width() > 800) {
                    $(e.children[1]).css({transform: "translateX(0)", filter: "blur(0)", opacity: "1"});
                    if ($(window).width() <= 1000 && e.classList.contains("skill-right")) $(e.children[1]).css({transform: "translateX(18vw)", filter: "blur(0)", opacity: "1"});
                } else {
                    $(e.children[1]).css({transform: "translateX(10vh)", filter: "blur(0)", opacity: "1"});
                    if (e.classList.contains("skill-right")) $(e.children[1]).css({transform: "translateX(15vw)", filter: "blur(0)", opacity: "1"});
                }
            } else {
                $(e.children[0].children[0]).css("filter", "saturate(0) brightness(2)");
                if ($(window).width() > 800) {
                    if (e.classList.contains("skill-left")) 
                        $(e.children[1]).css({transform: "translateX(15vw)", filter: "blur(0)", opacity: "1"});
                    else {
                        if ($(window).width() > 1000) $(e.children[1]).css({transform: "translateX(-15vw)", filter: "blur(0)", opacity: "1"});
                        else $(e.children[1]).css({transform: "translateX(0px)", filter: "blur(0)", opacity: "1"});
                    }
                }
                else {
                    if (e.classList.contains("skill-left")) 
                        $(e.children[1]).css({transform: "translateX(25vw)", filter: "blur(0)", opacity: "1"});
                    else {
                        $(e.children[1]).css({transform: "translateX(0)", filter: "blur(0)", opacity: "1"});
                    }
                }
            }
        });
        
        $("#left").css("transform", "translateX("+ (topScroll - $("#left").offset().top + 200) + "px)");
        $("#right").css("transform", "translateX("+ (-topScroll + $("#right").offset().top - 250) + "px)");
        
    }
    
    $(".card").each(function(n,e) {
        if (topScroll >= $(e).offset().top-700) {
            $(e).css({transform: "translateY(0)", opacity: "1"});
        } else {
            $(e).css({transform: "translateY(100px)", opacity: "0"});
        }
    });
    
    preScroll = topScroll;
});


var texts = ["Programming", "Travelling", "FPS Games", "Animals", "Food", "Testing new features", "Learning new things", "Challenges", "Binge Anime", "Marvel"];
var designs = ["design", "experience", "branding", "identity", "website"];
var i = 0, j = 0;

function changeText() {
    $("#hobbies").css("width", "0");
    setTimeout(() => {
        if ($(window).width() > 450) $("#hobbies").text(texts[i]).css("width", "40%");
        else $("#hobbies").text(texts[i]).css("width", "100%");
        i++;
    }, 2000);
    if (i == 10) i = 0;
    if (i < texts.length){
        setTimeout(changeText, 4000);
    }
}

function changeCollabText() {
    $("#design").css("width", "0");
    setTimeout(() => {
        if ($(window).width() > 450) $("#design").text(designs[j]).css("width", "20%");
        else $("#design").text(designs[j]).css("width", "100%");
        j++;
    }, 2000);
    if (j == 5) j = 0;
    if (j < designs.length){
        setTimeout(changeCollabText, 4000);
    }
}

changeText();
changeCollabText();