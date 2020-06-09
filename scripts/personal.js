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
        $(":root").css("--mouse-x", xp +'px').css("--mouse-y", yp +'px');
    }, 20);
    
    $("#nav2-3").addClass("active-nav");
    
    $(".desc-head-main").css({transform: "translateY(0)", opacity: "1", height: "65vh"});
    $(".desc-head-left").css({transform: "translateX(0)", opacity: "1"});
})

$("li > a").on({
    mouseenter: function() {
        $(".mover").css({width: $(this).width()+10, height: $(this).height()+10});
    },
    mouseleave: () => $(".mover").css({width: "10px", height: "10px"})
});

var preScroll = 0;
var move = 0;
$(window).scroll(() => {
    var topScroll = $(window).scrollTop();
    
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
            $(e.children[1]).css({transform: "translateX(0)", filter: "blur(0)", opacity: "1"});
        } else {
            $(e.children[0].children[0]).css("filter", "saturate(0) brightness(2)");
            if (e.classList.contains("skill-left")) $(e.children[1]).css({transform: "translateX(15vw)", filter: "blur(0)", opacity: "1"});
            else $(e.children[1]).css({transform: "translateX(-15vw)", filter: "blur(0)", opacity: "1"});
        }
    });
    
  
    $("#left").css("transform", "translateX("+ (topScroll - $("#left").offset().top + 150) + "px)");
    $("#right").css("transform", "translateX("+ (-topScroll + $("#right").offset().top - 300) + "px)");
    
    preScroll = topScroll;
});

$(".skill").on({
    mouseenter: () => {
        $(".mover").css({width: "100px", height: "100px"}).append("<p class='mover-text'>Skill</p>");
    }, 
    mouseleave: () => $(".mover").css({width: "10px", height: "10px"}).text("")
})

$("nav2 > ul > li > a").on("click", function() {
    $("#nav2-3").removeClass("active-nav");
});

var texts = ["Programming", "Travelling", "FPS Games", "Animals", "Food", "Testing new features", "Learning new things", "Challenges", "Binge Anime", "Marvel"];
var i = 0;

function changeText() {
    $("#hobbies").css("width", "0");
    setTimeout(() => {
        $("#hobbies").text(texts[i]).css("width", "40%");
    }, 2000);
    if (i == 7) i = 0;
    if (++i < texts.length){
        setTimeout(changeText, 4000);
    }
}

changeText();
