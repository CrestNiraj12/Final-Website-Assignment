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
    mouseleave: () => {
        $(".mover").css({width: "10px", height: "10px"});
    }
});

var preScroll = 0;
$(window).scroll(() => {
    var topScroll = $(window).scrollTop();
    
    if (topScroll > $("#content").offset().top-300) {
        $(".mover").css({borderColor: "#000"});
    } else if (topScroll < $("#content").offset().top) {
        $(".mover").css({borderColor: "#fff"});
    }
});


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