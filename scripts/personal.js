$(window).on("load", function() {
    var mouseX = 0, mouseY = 0;
    var xp = 0, yp = 0;

    $(document).mousemove(function(e){
        mouseX = e.pageX - 10;
        mouseY = e.pageY - 10; 
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

$("nav2 > ul > li > a").on("click", function() {
    $("#nav2-3").removeClass("active-nav");
});

var texts = ["Programming", "Travelling", "FPS Games", "Animals", "Food", "Testing new features", "Learning new things", "Challenges"];
var i = 0;

function changeText() {
    $("#hobbies").text(texts[i]);
    if (i == 7) i = 0;
    if (++i < texts.length){
        setTimeout(changeText, 2000);
    }
}

changeText();